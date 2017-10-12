'use strict'

import objectAssignDeep from '../plugins/object-assign-deep'

const state = {
  locales: [ // available languages
    'ar-SA',
    'de-DE',
    'en-US',
    'es-AR',
    'es-ES',
    'fr-FR',
    'hi-IN',
    'it-IT',
    'ja-JP',
    'ko-KR',
    'pl-PL',
    'pt-BR',
    'ru-RU',
    'zh-CN'
  ],
  locale: undefined,
  lang: undefined, // current lang
  translation: undefined // store for translations
}

const mutations = {
  SET_LOCALE (state, locale) {
    state.locale = locale
    state.lang = ('' + locale).substring(0, 2)
  },
  SET_LANG (state, lang) {
    state.lang = lang
  },
  SET_TRANSLATION (state, translation) {
    state.translation = translation
  },
  MERGE_TRANSLATION (state, translation) {
    state.translation = objectAssignDeep({}, translation, state.translation)
  }
}

const store = {
  state,
  mutations
}

export default store
