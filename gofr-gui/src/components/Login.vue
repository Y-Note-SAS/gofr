<template>
  <v-container>
    <center>
      <v-layout
        row
        wrap
      >
        <v-flex xs3></v-flex>
        <v-flex xs6>
          <v-alert
            type="error"
            :value="authStatus"
          >
          {{ $t(`App.hardcoded-texts.Authentication Failed`) }}
          </v-alert>
        </v-flex>
      </v-layout>
      <v-card
        width="430px"
        hover
      >
        <v-card-title primary-title>
          <v-toolbar
            color="primary"
            style="color: white"
          >
            <v-layout
              row
              wrap
            >
              <v-flex
                xs2
                text-xs-left
              >
                <v-icon
                  x-large
                  color="white"
                >mdi-lock</v-icon>
              </v-flex>
              <v-flex
                xs9
                text-xs-right
              >
                <b>{{ $t(`App.hardcoded-texts.Login`) }}</b>
              </v-flex>
            </v-layout>
          </v-toolbar>
        </v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            class="pa-3 pt-4"
          >
            <v-text-field
              required
              v-on:keyup.enter="authenticate()"
              @blur="$v.username.$touch()"
              @change="$v.username.$touch()"
              :error-messages="usernameErrors"
              v-model="username"
              filled
              color="deep-purple"
              :label="$t(`App.hardcoded-texts.User Name`)"
            />
            <v-text-field
              required
              v-on:keyup.enter="authenticate()"
              @blur="$v.password.$touch()"
              @change="$v.password.$touch()"
              :error-messages="passwordErrors"
              v-model="password"
              filled
              type="password"
              color="deep-purple"
              :label="$t(`App.hardcoded-texts.Password`)"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-toolbar>
            <v-btn
              v-if="$store.state.config.generalConfig.selfRegistration.enabled"
              color="primary"
              @click="displaySignup"
            >{{ $t(`App.hardcoded-texts.Signup`) }}</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              @click="authenticate()"
              :disabled="$v.$invalid"
              class="white--text"
              color="primary"
              depressed
            >{{ $t(`App.hardcoded-texts.Login`) }}</v-btn>
          </v-toolbar>
        </v-card-actions>
      </v-card>
    </center>
  </v-container>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
import axios from 'axios'
import { uuid } from 'vue-uuid'
import { eventBus } from '../main'

export default {
  validations: {
    username: { required },
    password: { required }
  },
  data () {
    return {
      username: '',
      password: '',
      authStatus: false,
      signupEnabled: false
    }
  },
  methods: {
    authenticate () {
      axios
        .post('/auth/login', {username: this.username, password: this.password})
        .then(authResp => {
          this.$store.state.auth.username = this.username
          this.$store.state.auth.userObj = authResp.data.userObj
          this.$store.state.auth.userID = authResp.data.userObj.resource.id
          if (authResp.data.userObj) {
            this.$store.state.public_access = false
            this.$store.state.clientId = uuid.v4()
            this.$store.state.initializingApp = true
            this.$store.state.denyAccess = false
            eventBus.$emit('getUserConfig')
            this.$router.push({ name: 'Home' })
          } else {
            this.authStatus = true
          }
        })
        .catch(err => {
          if (err.hasOwnProperty('response')) {
            console.log(err.response.data.error)
          }
          this.authStatus = true
        })
    },
    displaySignup () {
      this.$router.push({ name: 'Signup' })
    }
  },
  computed: {
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.required && errors.push('Username is required')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      return errors
    }
  },
  created () {
    if (this.$store.state.idp === 'dhis2') {
      this.$store.state.clientId = uuid.v4()
      this.$store.state.initializingApp = true
      this.$store.state.denyAccess = false
      this.$router.push({ name: 'DHIS2Auth' })
    }
  }
}
</script>

