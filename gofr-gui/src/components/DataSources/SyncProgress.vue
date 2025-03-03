<template>
  <v-container>
    <v-dialog
      v-model="syncProgrIndeter"
      persistent
      width="300"
    >
      <v-card
      style="background-color: #1b4d3e;" 
        dark
      >
        <v-card-text>
          {{syncStatus}}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="syncProgrPercent"
      persistent
      width="270"
    >
      <v-card
        color="white"
        dark
      >
        <v-card-text>
          <center>
            <font style="color:#1b4d3e">{{syncStatus}}</font><br>
            <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value="syncPercent"
              color="#1b4d3e"
            >
              <v-avatar
                color="indigo"
                size="50px"
              >
                <span class="white--text">
                  <b>{{ syncPercent }}%</b>
                </span>
              </v-avatar>
            </v-progress-circular>
          </center>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  props: ['syncProgrIndeter', 'syncStatus', 'syncProgrPercent', 'syncPercent']
}
</script>
