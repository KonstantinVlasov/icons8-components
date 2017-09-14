import Vue from 'vue'

import icons8Components from '../../icons8-components'

export default ({store}) => {
  Vue.use(icons8Components, {
    store: store,
    config: {
      apiUrl: '',
      backendUrl: ''
    }
  })
}
