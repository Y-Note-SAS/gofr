<template>
  <center>
    <v-alert
      border="left"
      colored-border
      color="#1b4d3e"
      elevation="2"
      max-width="700"
    >
      {{ $t(`App.fhir-resources-texts.${title}`) }}
    </v-alert>
  </center>
</template>

<script>
export default {
  name: "gofr-page-title",
  props: ["title"]
}
</script>
