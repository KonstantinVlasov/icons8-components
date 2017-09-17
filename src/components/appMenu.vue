<template lang="pug">
  .app-menu
    .toggle(v-on:click="show = true" v-html="icons.menu")
    a.logo(href="https://icons8.com" v-html="icons.logo")
    a.item.is-logo(href="https://icons8.com") Icons8

    transition(name="app-modal")
      .overlay(
        v-on:click="show = false"
        v-if="show"
      )

    .responsive(v-bind:class="{'is-active': show}")
      .center
        nuxt-link.item(to="/icon") Icons
        nuxt-link.item(to="https://icons8.com/sounds") Sounds
        .item
          app-popup.submenu(
            position="bottom-center"
            responsive-position="bottom-left"
            v-bind:responsive-width="800"
          ) Download
            div(slot="content")
              .ribbon All Free
              .column
                a.submenu-item(href="https://icons8.com/app")
                  img.image(src="../assets/images/icons8-96.png")
                  | Icons8 App
                  br
                  small All our icons offline on your computer
                a.submenu-item(href="https://icons8.com/lunacy")
                  img.image(src="../assets/images/lunacy-96.png")
                  | Icons8 Lunacy
                  br
                  small Sketch Viewer for Windows

        a.item(href="https://icons8.com/request-icon") Request
        a.item(href="https://icons8.com/paid-license-99") Buy
        .item
          app-popup.submenu.is-wide(
            position="bottom-center"
            responsive-position="bottom-left"
            v-bind:responsive-width="800"
          ) Labs
            div(slot="content")
              .ribbon All Free
              .column.is-half
                a.submenu-item(href="https://img.icons8.com/")
                  img.image(src="../assets/images/stoned-bat-96.png")
                  | omg-img
                  br
                  small Search icons by writing URL
                a.submenu-item(href="https://icons8.com/imessage")
                  img.image(src="../assets/images/mongrol-96.png")
                  | iMessage Stickers
                  br
                  small 3,900 flat color icons in your iMessages
                a.submenu-item(href="https://icons8.com/line-awesome")
                  img.image(src="../assets/images/scout-knot-96.png")
                  | Line Awesome
                  br
                  small Replace FontAwesome with modern line icons
                a.submenu-item(href="https://icons8.com/pedro")
                  img.image(src="../assets/images/comet-96.png")
                  | Cosmic Pedro
                  br
                  small Choose icon, add text, post to social media

              .column.is-half
                a.submenu-item(href="http://ai.icons8.com/Scribble/Search")
                  img.image(src="../assets/images/autograph-96.png")
                  | Scribble AI
                  br
                  small Search icons by drawing
                a.submenu-item(href="https://www.iconpharm.com/")
                  img.image(src="../assets/images/sheep-96.png")
                  | IconPharm
                  br
                  small Icons8 technology for open source icons
                a.submenu-item(href="https://icons8.com/welovesvg")
                  img.image(src="../assets/images/year-of-monkey-96.png")
                  | We Love SVG
                  br
                  small Insert open source icons into your web apps
                a.submenu-item(href="https://github.com/icons8/impresser")
                  img.image(src="../assets/images/robot-96.png")
                  | Impresser
                  br
                  small As a front-end developer, I want HTML for bots
        a.item(href="https://icons8.com/blog") Blog


      .profile
        .language
          .item(
          v-on:click=""
          v-html="icons.locale.en"
          )

        template(v-if="!user.isGuest")
          a.item(href="https://icons8.com/profile/summary") My Account
          .item(
            v-html="icons.notifications"
          )
          .item(
            v-on:click="logoutUser"
            v-html="icons.logout"
          )
        template(v-if="user.isGuest")
          .item(v-on:click="login") Login
          .item(v-on:click="register") Register

    login-modal
</template>

<script>
  import logo from '../assets/svg/logo.svg'
  import logout from '../assets/svg/logout.svg'
  import notifications from '../assets/svg/notifications.svg'
  import menu from '../assets/svg/menu.svg'

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
          menu,
          locale: {
            en
          }
        },
        show: false
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
        this.$modal.show('login-modal', {mode: 'register'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/variables';
  @import '../assets/css/breakpoints';

  .app-menu {
    position: relative;
    z-index: 10;
    height: $menu-height;
    padding: 0 2rem;
    font-size: 1.125rem;

    color: white;
    background-color: $color-green;

    @media (max-width: $responsive-menu-medium) {
      padding: 0 1rem;
    }

    @media (max-width: 75rem) {
      padding: 0 1rem;
    }

    .overlay {
      @media (max-width: $responsive-menu-short) {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,0.3);

        &.is-active {
          left: 0;
        }
      }
    }

    .responsive {
      @media (max-width: $responsive-menu-short) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: fixed;
        top: 0;
        bottom: 0;
        left: -201px;
        width: 200px;
        padding: 1rem 1rem 2rem;
        background: #2c3e50;
        transition: 0.4s all ease;

        &.is-active {
          left: 0;
        }
      }
    }

    .toggle {
      display: none;
      cursor: pointer;
      @media (max-width: $responsive-menu-short) {
        display: inline-block;
        width: 26px;
        position: absolute;
        top: 10px;
        left: 1rem;

        & /deep/ > svg {
          fill: white;
        }
      }
    }

    .logo {
      display: inline-block;
      width: $menu-height;
      height: $menu-height;
      float: left;

      @media (max-width: $responsive-menu-short) {
        display: block;
        margin: 0 auto;
        float: none;
      }

      & /deep/ > svg {
        fill: white;
      }
    }

    .item {
      display: inline-block;
      padding: 0 10px;
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

      @media (max-width: $responsive-menu-medium) {
        padding: 0 8px;
        font-size: 1rem;
      }
      @media (max-width: $responsive-menu-short) {
        display: block;
        text-align: left;
      }

      &.is-logo {
        float: left;
        @media (max-width: $responsive-menu-medium) {
          display: none;
        }
        @media (max-width: $responsive-menu-short) {
          display: block;
        }
      }
    }

    .submenu {
      position: relative;
      & /deep/ .app-popup-content {
        position: fixed;
        width: 400px;
        padding: 2rem 2rem 1rem;
        text-align: left;
        color: black;
        line-height: 1.4;
        cursor: default;
        @media (max-width: $responsive-menu-medium) {
          width: 360px;
          padding: 1rem 1rem 0.5rem;
        }
        @media (max-width: $responsive-menu-short) {
          position: absolute;
        }
      }
      &.is-wide /deep/ .app-popup-content {
        width: 800px;
        @media (max-width: $responsive-menu-medium) {
          width: 360px;
          line-height: 1.2;
        }
      }
    }

    .column {
      &.is-half {
        width: 50%;
        float: left;
        @media (max-width: $responsive-menu-medium) {
          width: 100%;
        }
      }
    }

    .submenu-item {
      display: block;
      margin-bottom: 1rem;
      border-color: transparent;
      text-decoration: none;
      white-space: initial;
      cursor: pointer;

      &>small {
        color: $color-font-light;
      }
    }

    .image {
      width: 48px;
      float: left;
      margin-right: 1rem;
    }

    .center {
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
        left: 0;
        transform: translateX(0);
        display: inline-block;
        vertical-align: top;
        width: auto;
      }
      @media (max-width: $responsive-menu-short) {
        height: auto;
      }
    }

    .profile {
      float: right;

      @media (max-width: $responsive-menu-short) {
        float: none;
      }

      .item {
        padding: 0 0.5rem;
        & /deep/ > svg {
          fill: white;
          width: 1.25rem;
          vertical-align: sub;
        }
        @media (max-width: $responsive-menu-short) {
          padding: 0 0.75rem;
        }
      }
    }

    .language {
      float: right;

      @media (max-width: $responsive-menu-short) {
        float: none;
      }
      .item {
        padding: 0.375rem 0.5rem 0;
        & /deep/ > svg {
          width: 30px;
          vertical-align: sub;
        }
        @media (max-width: $responsive-menu-short) {
          padding: 0 0.75rem;
        }
      }
    }
  }


  .app-menu-enter-active, .app-menu-leave-active {
    transition: all 0.2s;
  }
  .app-menu-enter, .app-menu-leave-active {
    opacity: 0;
  }
</style>
