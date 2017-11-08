'use strict'

const createEnsureLoginPlugin = () => ({
  install (Vue, {store}) {
    Vue.prototype.$ensureLogin = function (options) {
      return new Promise(function (resolve) {
        if (options.user && !options.user.isGuest) {
          resolve()
          return
        }
        if (!store.state.auth.user.isGuest) {
          resolve()
          return
        }
        Vue.$modal.show('login-modal', {
          callback: resolve,
          ...options
        })
      })
    }
    return null
  }
})

export default createEnsureLoginPlugin
