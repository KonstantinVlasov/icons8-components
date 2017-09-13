'use strict'

const ensureLoginPlugin = {
  install (Vue) {
    Vue.prototype.$ensureLogin = function (user) {
      return new Promise(function (resolve) {
        if (!user.isGuest) {
          resolve()
        } else {
          Vue.$modal.show('login-modal', {
            callback: resolve
          })
        }
      })
    }
    return null
  }
}

export default ensureLoginPlugin
