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
      let postLogoutRedirectUri = encodeURIComponent('https://fosa.minsante.cm/#/logout');
      let clientId = 'gofr-gui';
      let logoutUrl = `https://kc-fosa.minsante.cm/realms/GOFR/protocol/openid-connect/logout?post_logout_redirect_uri=${postLogoutRedirectUri}&client_id=${clientId}`;

    window.location.href = logoutUrl;
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

