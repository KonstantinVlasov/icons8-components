<template lang="pug">
  .app-menu
    a.app-menu-logo(href="https://icons8.com" v-html="icons.logo")
    a.app-menu-item.is-logo(href="https://icons8.com") Icons8

    .app-menu-center
      nuxt-link.app-menu-item.is-active(to="/icon/pack/free-icons/all") Icons
      a.app-menu-item(href="https://icons8.com") Download
      a.app-menu-item(href="https://icons8.com/request-icon") Request
      a.app-menu-item(href="https://icons8.com/paid-license-99") Buy
      a.app-menu-item(href="https://icons8.com") Labs
      a.app-menu-item(href="https://icons8.com/blog") Blog


    .app-menu-profile(v-if="!user.isGuest")
      a.app-menu-item(href="https://icons8.com/profile/summary") My Account
      .app-menu-item(
        v-html="icons.notifications"
      )
      .app-menu-item(
        v-on:click="logoutUser"
        v-html="icons.logout"
      )

    .app-menu-profile(v-if="user.isGuest")
      .app-menu-item(v-on:click="login") Login
      .app-menu-item(v-on:click="register") Register

    .app-menu-language
      .app-menu-item(
        v-on:click=""
        v-html="icons.locale.en"
      )

    login-modal
</template>

<script>
  import logo from '../assets/svg/logo.svg'
  import logout from '../assets/svg/logout.svg'
  import notifications from '../assets/svg/notifications.svg'

  import en from '../assets/svg/locale/en/us.svg'

  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'appMenu',
    props: {
      svg: {
        type: String
      }
    },
    data () {
      return {
        icons: {
          logo,
          logout,
          notifications,
          locale: {
            en
          }
        }
      }
    },
    computed: {
      ...mapState({
        user: state => state.auth.user
      })
    },
    methods: {
      ...mapActions(['logoutUser']),
      login () {
        this.$modal.show('login-modal')
      },
      register () {
        this.$modal.show('login-modal')
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/css/variables';
  @import '../assets/css/breakpoints';

  .app-menu {
    position: relative;
    height: $menu-height;
    padding: 0 2rem;
    font-size: 1.125rem;

    color: white;
    background-color: $color-green;

    @media (max-width: $responsive-menu-medium) {
      padding: 0 1rem;
    }

    .app-menu-logo {
      display: inline-block;
      width: $menu-height;
      height: $menu-height;

      @media (max-width: $responsive-menu-short) {
        display: block;
        margin: 0 auto;
      }

      &>svg {
        fill: white;
      }
    }

    .app-menu-item {
      display: inline-block;
      padding: 0 0.75rem;
      vertical-align: top;
      height: $menu-height;
      line-height: $menu-height - 0.5rem;
      color: white;
      text-decoration: none;
      border-top: 0.25rem solid transparent;
      border-bottom: 0.25rem solid transparent;
      transition: all 0.4s ease;
      cursor: pointer;

      &:hover, &.is-active {
        border-bottom: 0.25rem solid rgba(0, 0, 0, 0.15);
      }

      &.is-logo {
        @media (max-width: $responsive-menu-medium) {
          display: none;
        }
      }
    }

    .app-menu-center {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: $menu-height;
      z-index: 1;

      text-align: center;
      white-space: nowrap;

      @media (max-width: $responsive-menu-medium) {
        position: static;
        display: inline-block;
        vertical-align: top;
        transform: none;
        width: auto;
      }
      @media (max-width: $responsive-menu-short) {
        display: none;
      }
    }

    .app-menu-profile {
      float: right;

      @media (max-width: $responsive-menu-short) {
        display: none;
      }

      .app-menu-item {
        padding: 0 0.5rem;
        &>svg {
          fill: white;
          width: 1.25rem;
          vertical-align: sub;
        }
      }
    }

    .app-menu-language {
      float: right;

      @media (max-width: $responsive-menu-short) {
        display: none;
      }
      .app-menu-item {
        padding: 0.375rem 0.5rem 0;
        &>svg {
          width: 30px;
          vertical-align: sub;
        }
      }
    }
  }
</style>
