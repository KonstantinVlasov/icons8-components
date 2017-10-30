'use strict'

const createI18nPlugin = () => ({
  install (Vue, {store}) {
    const $t = function (key, props, defaultString) {
      key = '' + key
      let keys = key.split('.')
      let value = store.state.lang.translation
      keys.some((k) => {
        if (value) {
          value = value[k]
        } else {
          return true
        }
      })
      if (typeof props === 'object' && typeof value === 'string') {
        Object.keys(props).forEach(prop => {
          value = value.replace(`{{${prop}}}`, props[prop])
        })
      }
      if (typeof props === 'string' && value === undefined) {
        value = props
      }
      if (typeof defaultString === 'string' && value === undefined) {
        value = defaultString
      }
      return value !== undefined ? value : key.toLocaleLowerCase()
    }
    Vue.prototype.$t = $t
    Vue.$t = $t
  }
})

export default createI18nPlugin
