<template>
  <v-container grid-list-xs>

  </v-container>
</template>
<script>
import axios from 'axios'
export default {
 mounted () {
    this.$store.state.auth.userID = ''
    if(this.$store.state.idp === 'keycloak') {
      this.$cookies.remove('userObj')
      this.$store.state.auth.username = ''
      this.$store.state.auth.userObj = {}
      let redirect = window.location.href.split('#')[0]
      let url = `${this.$store.state.config.generalConfig.keycloakConfig.url}/realms/${this.$store.state.config.generalConfig.keycloakConfig.realm}/protocol/openid-connect/logout?post_redirect_uri=${redirect}&client_id=${this.$store.state.config.generalConfig.keycloakConfig.clientId}`
      window.location.href = url 
    } else {
      axios({
        method: 'GET',
        url: '/auth/logout'
      }).catch((err) => {
        console.error(err);
      })
      this.$store.state.auth.username = ''
      this.$store.state.auth.userObj = {}
      if(this.$store.state.config.generalConfig.public_access.enabled) {
        this.$router.push('HomePublic')
        window.location.reload();
      } else {
        this.$router.push('login')
      }
    }
  }
}
</script>

