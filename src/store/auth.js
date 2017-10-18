'use strict'

import axios from 'axios'

const USER_LOGGED_IN = 'USER_LOGGED_IN'
const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

const state = () => ({
  user: {
    isGuest: true,
    activeLicense: false,
    authToken: false
  }
})

const mutations = {
  [USER_LOGGED_IN] (state, user) {
    state.user = user
  },
  [USER_LOGGED_OUT] (state) {
    state.user = {
      isGuest: true
    }
  }
}

const actions = (config) => {
  return {
    fillUserInfo ({commit}) {
      return new Promise(function (resolve, reject) {
        if (state.user) {
          resolve()
          return
        }
        axios
          .request({
            url: '/api/service/user-info',
            baseURL: config.apiUrl,
            method: 'get',
            withCredentials: true
          })
          .then(response => {
            commit(USER_LOGGED_IN, response.data.result)
            resolve()
          })
          .catch(reject)
      })
    },
    loginUser ({commit}, user) {
      return authUser('login', commit, user)
    },
    registerUser ({commit}, user) {
      return authUser('register', commit, user)
    },
    logoutUser ({commit}) {
      commit(USER_LOGGED_OUT)
      return new Promise(function (resolve, reject) {
        axios
          .request({
            url: '/authAjax/logout',
            baseURL: config.backendUrl,
            method: 'get',
            withCredentials: true
          })
          .then(resolve)
          .catch(reject)
      })
    }
  }

  function authUser (action, commit, user) {
    return new Promise(function (resolve, reject) {
      const data = {
        'RegisterForm[email]': user.email,
        'RegisterForm[password]': user.password
      }
      axios
        .request({
          url: `/authAjax/${action}`,
          baseURL: config.backendUrl,
          method: 'post',
          withCredentials: true,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Requested-With': 'XMLHttpRequest'
          },
          transformRequest: function (obj) {
            let str = []
            Object.keys(obj).forEach(key => {
              str.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
            })
            return str.join('&')
          },
          data
        })
        .then(response => {
          if (response.data.success && response.data.auth) {
            commit(USER_LOGGED_IN, response.data.auth)
            resolve()
          } else {
            reject({message: response.data || 'Something went wrong', response: response.data})
          }
        })
        .catch(reject)
    })
  }
}

export default function (config) {
  return {
    state,
    mutations,
    actions: actions(config)
  }
}
