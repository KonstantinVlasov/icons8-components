'use strict'

import authStore from './src/store/auth'

import appModal from './src/components/appModal'
import appNotify from './src/components/appNotify'

import appMenu from './src/components/appMenu.vue'
import appPopup from './src/components/appPopup.vue'
import colorPicker from './src/components/colorPicker.vue'
import loginModal from './src/components/loginModal.vue'
import menuList from './src/components/menuList.vue'
import rangeInput from './src/components/rangeInput.vue'
import rangeSlider from './src/components/rangeSlider.vue'
import shareIcon from './src/components/shareIcon.vue'
import shareLink from './src/components/shareLink.vue'

/**
 * @param store.registerModule
 * @param config.apiUrl
 * @param config.backendUrl
 */
export default {
  install: function (Vue, {store, config}) {
    store.registerModule('auth', authStore(config))

    Vue.use('app-modal', appModal)
    Vue.use('app-notify', appNotify)

    Vue.component('app-menu', appMenu)
    Vue.component('app-popup', appPopup)
    Vue.component('color-picker', colorPicker)
    Vue.component('login-modal', loginModal)
    Vue.component('menu-list', menuList)
    Vue.component('range-input', rangeInput)
    Vue.component('range-slider', rangeSlider)
    Vue.component('share-icon', shareIcon)
    Vue.component('share-link', shareLink)
  }
}
