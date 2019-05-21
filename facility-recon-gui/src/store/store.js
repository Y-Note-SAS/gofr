import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import VueCookies from 'vue-cookies'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    auth: {
      username: '',
      userID: '',
      role: '',
      token: ''
    },
    levelMapping: {
      source1: {},
      source2: {}
    },
    config: {
      userConfig: {
        reconciliation: {
          useCSVHeader: true
        }
      },
      generalConfig: {
        reconciliation: {
          parentConstraint: {
            enabled: true,
            idAutoMatch: true,
            nameAutoMatch: false
          },
          singlePair: false
        },
        recoProgressNotification: {
          enabled: false
        },
        selfRegistration: false,
        authDisabled: false,
        authMethod: '',
        externalAuth: {
          pullOrgUnits: true,
          shareOrgUnits: false,
          shareByOrgId: false,
          datasetName: '',
          adminRole: ''
        }
      }
    },
    signupFields: {},
    customSignupFields: {},
    recoStatus: {
      'status': 'on-progress'
    },
    dialogError: false,
    errorTitle: '',
    errorDescription: '',
    clientId: null,
    denyAccess: true,
    source2Hierarchy: '',
    source1Hierarchy: '',
    uploadRunning: false,
    dhis: {
      user: {
        orgId: '',
        orgName: ''
      },
      host: '',
      dev: {
        auth: {
          username: 'bo',
          password: 'Mw@n@m1gu'
        }
      }
    },
    dataSourcePairs: [],
    activePair: {
      source1: {},
      source2: {}
    },
    source1TotalAllRecords: 0,
    source2TotalAllRecords: 0,
    totalAllMapped: 0,
    totalAllFlagged: 0,
    totalAllNoMatch: 0,
    totalAllIgnore: 0,
    source1TotalAllNotMapped: 0,
    source2TotalRecords: 0,
    recoLevel: 2,
    totalSource1Levels: '',
    totalSource2Levels: '',
    matchedContent: [],
    noMatchContent: [],
    ignoreContent: [],
    flagged: [],
    source1Parents: [],
    source2UnMatched: [],
    source1UnMatched: [],
    scoreResults: [],
    levelArray: [],
    scoresProgressData: {},
    uploadProgressData: {},
    dataSources: [],
    remoteDataSources: ['DHIS2', 'FHIR'],
    loadingServers: false,
    dynamicProgress: false,
    initializingApp: false
  }
})

axios.interceptors.request.use((config) => {
  let token = store.state.auth.token
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  return response
}, function (error) {
  let status = error.response.status
  if (status === 401) {
    store.state.auth.token = ''
    VueCookies.remove('token')
    router.push('login')
  }
  return Promise.reject(error)
})
