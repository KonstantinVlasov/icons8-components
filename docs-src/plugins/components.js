import Vue from 'vue'

import icons8Components from '../../icons8-components'

import buttonDocs from '../components/buttonDocs.vue'

export default ({store}) => {
  Vue.use(icons8Components, {
    store: store,
    config: {
      apiUrl: '',
      backendUrl: ''
    }
  })

  Vue.component('button-docs', buttonDocs)
}
