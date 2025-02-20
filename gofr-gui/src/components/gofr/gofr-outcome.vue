<template>
  <v-container>
    <v-row>
      <v-col v-for="(issue,idx) in issues" :key="idx" sm="4">
        <v-card>
          <v-card-subtitle class="error white--text text-uppercase font-weight-bold">Error</v-card-subtitle>
          <v-spacer />
          <v-card-text class="font-weight-bold" style="background-color: #1b4d3e !important;">{{issue.diagnostics}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "gofr-outcome",
  props: ["issues"],
  data: function() {
    return {
    }
  }
}
</script>
