<template>
  <v-container fluid>
    <v-layout column v-if="!$store.state.initializingApp">
      <v-flex>
        <v-card>
          <v-card-text>
            <v-layout row wrap>
              <v-spacer></v-spacer>
              <v-flex xs3>
                <v-card height="209">
                  <v-card-title >
                    <v-toolbar color="#2D7A5E" dark height="40"  style="font-size: 14px">
                      {{ $t(`App.hardcoded-texts.Active Partition`) }}
                    </v-toolbar>
                  </v-card-title>
                  <v-card-text class="partition-select-container">
                    <v-select
                      :items="$store.state.dataSources"
                      item-text="display"
                      item-value="name"
                      v-model="$store.state.config.userConfig.FRDatasource"
                      :label="$t(`App.hardcoded-texts.Facility Registry Datasource`)"
                      @change="partitionChanged()"
                      color="#2d7a5e"
                      class="custom-text-color"
                    ></v-select>
                  </v-card-text>
                  
                </v-card>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs6>
                <ActivePartitionStats 
                  :partition="$store.state.config.userConfig.FRDatasource" 
                  :title="$t(`App.hardcoded-texts.Active Partition Stats`)"
                  :key="reload"
                />
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs3>
                <v-card height="209">
                  <v-card-title primary-title>
                    <v-toolbar color="#2D7A5E" dark height="40" style="font-size: 14px">
                      {{ $t(`App.hardcoded-texts.Active Reconciliation Pair`) }}
                    </v-toolbar>
                  </v-card-title>
                  <v-card-text>
                    <label v-if="Object.keys($store.state.activePair.source1).length > 0">
                      {{ $t(`App.hardcoded-texts.Name`) }}: <b>{{$store.state.activePair.display}}</b> <br>
                      {{ $t(`App.hardcoded-texts.Source 1`) }}: <b>{{$store.state.activePair.source1.display}}</b> <br>
                      {{ $t(`App.hardcoded-texts.Source 2`) }}: <b>{{$store.state.activePair.source2.display}}</b> <br>
                      {{ $t(`App.hardcoded-texts.Status`) }}: <b>{{$store.state.recoStatus}}</b> <v-icon
                                small
                                v-if="$store.state.recoStatus === 'in-progress'"
                              >mdi-lock-open-variant-outline</v-icon>
                              <v-icon
                                small
                                v-else
                              >mdi-lock-outline</v-icon>
                    </label>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-spacer></v-spacer>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
      <br>
      <v-flex>
        <v-layout row wrap>
          <v-spacer></v-spacer>
          <v-flex xs6>
            <viewMap
              :key="reload"
            />
          </v-flex>
          <v-flex xs6>
            <v-layout column wrap>
                <v-spacer></v-spacer>
                <v-flex xs5>
                  <fhirPageSearch
                    page="facility"
                    :key="reload"
                    v-if="$store.state.dataSources.length > 0"
                  />
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs5>
                  <fhirPageSearch
                    page="jurisdiction"
                    :key="reload"
                    v-if="$store.state.dataSources.length > 0"
                  />
                </v-flex>
                <v-spacer></v-spacer>
              </v-layout>
          </v-flex>
          <!-- <v-flex xs12>
            <v-tabs
              background-color="deep-purple accent-4"
              centered
              dark
              icons-and-text
              fixed-tabs
              height="57px"
            >
              <v-tabs-slider></v-tabs-slider>
              <v-tab key="map">
                Map Visualization
                <v-icon>mdi-map-marker</v-icon>
              </v-tab>

              <v-tab key="tables">
                Tabular Visualization
                <v-icon>mdi-table-search</v-icon>
              </v-tab>
              <v-tab-item key="map">
                
              </v-tab-item>
              <v-tab-item key="tables">
                
              </v-tab-item>
            </v-tabs>
          </v-flex>
          <v-spacer></v-spacer> -->
        </v-layout>
      </v-flex>
    </v-layout>
    <v-progress-linear v-else :indeterminate="true"></v-progress-linear>
  </v-container>
</template>

<script>
import { generalMixin } from '@/mixins/generalMixin'
export default {
  mixins: [generalMixin],
  data () {
    return {
      locale: 'en',
      locales: [
        { text: 'English', value: 'en' },
        { text: 'Français', value: 'fr' }
      ],
      reload: 0
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    },
    FRDatasource() {
      this.reload++
    }
  },
  computed: {
    FRDatasource() {
      return this.$store.state.config.userConfig.FRDatasource
    },
    datasources() {
      return this.$store.state.dataSources
    }
  },
  methods: {
    partitionChanged() {
      this.saveConfiguration('userConfig', 'activePartition')
      this.reload++
    }
  },
  components: {
    'fhirPageSearch': () => import(/* webpackChunkName: "fhirPageSearch" */ "@/components/FacilityRegistry/fhir-page-search.vue"),
    'viewMap': () => import(/* webpackChunkName: "viewMap" */ "@/components/ViewMap"),
    'ActivePartitionStats': () => import(/* webpackChunkName: "ActivePartitionStats" */ "@/components/DataSources/ActivePartitionStats.vue")
  }
}
</script>

<style>
/* Applique les styles uniquement au v-select contenu dans .partition-select-container */
.partition-select-container .v-select__selection,
.partition-select-container .v-select__selection--comma {
  color: #2d7a5e !important;
}

.partition-select-container .v-label {
  color: #2d7a5e !important;
}

.partition-select-container .v-input__control {
  border-color: #2d7a5e !important;
}

.partition-select-container .v-input__control {
  border-color: #1b5e3c !important;
}

/* ✅ Liste déroulante uniquement pour ce select */
.partition-select-container .v-menu__content {
  background-color: #e8f5e9 !important;
}

.partition-select-container .v-list-item, 
.partition-select-container .v-list-item__title {
  color: #2d7a5e !important;
}

.theme--light.v-list-item {
  background-color: #c8e6c9 !important;
  color: white
}
</style>
