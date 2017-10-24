<template lang="pug">
  .app-menu
    .app-menu-toggle(v-on:click="show = true" v-html="icons.menu")
    a.app-menu-logo(v-if="!isSlotLogo" v-bind:href="logoUrl" v-html="logo")
    a.app-menu-logo(v-if="isSlotLogo" v-bind:href="logoUrl")
      slot(name="logo")
    a.app-menu-item.is-logo(v-bind:href="logoUrl") {{ logoText }}

    transition(name="app-modal")
      .app-menu-overlay(
        v-on:click="show = false"
        v-if="show"
      )

    .app-menu-responsive(v-bind:class="{'is-active': show}")
      .app-menu-center
        a.app-menu-item(v-bind:href="baseUrl + '/icon'") {{ $t('MENU.ICONS', 'Icons') }}
        a.app-menu-item.is-sounds(v-bind:href="baseUrl + '/sounds'") {{ $t('MENU.SOUNDS', 'Sounds') }}
        // a.app-menu-item.is-photos(v-bind:href="baseUrl + '/photos'") {{ $t('MENU.PHOTOS', 'Photos') }}
        .app-menu-item
          app-popup.app-menu-submenu(
            position="bottom-center"
            responsive-position="bottom-left"
            v-bind:responsive-width="800"
          ) {{ $t('MENU.DOWNLOAD', 'Download') }}
            div(slot="content")
              .ribbon All Free
              .app-menu-column
                a.app-menu-submenu-item(v-bind:href="baseUrl + '/app'")
                  img.app-menu-image(src="../assets/images/icons8-96.png")
                  | Icons8 App
                  br
                  small {{ $t('MENU.APP_DESC', 'All our icons offline on your computer') }}
                a.app-menu-submenu-item(v-bind:href="baseUrl + '/lunacy'")
                  img.app-menu-image(src="../assets/images/lunacy-96.png")
                  | Icons8 Lunacy
                  br
                  small {{ $t('MENU.LUNACY_DESC', 'Sketch Viewer for Windows') }}

        a.app-menu-item(v-bind:href="baseUrl + '/request-icon'") {{ $t('MENU.REQUEST', 'Request') }}
        a.app-menu-item(v-bind:href="baseUrl + '/paid-license-99'") {{ $t('MENU.BUY', 'Buy') }}
        .app-menu-item
          app-popup.app-menu-submenu.is-wide(
            position="bottom-center"
            responsive-position="bottom-left"
            v-bind:responsive-width="800"
          ) {{ $t('MENU.LABS', 'Labs') }}
            div(slot="content")
              .ribbon All Free
              .app-menu-column.is-half
                a.app-menu-submenu-item(href="https://img.icons8.com/")
                  img.app-menu-image(src="../assets/images/stoned-bat-96.png")
                  | omg-img
                  br
                  small {{ $t('MENU.OMG_DESC', 'Search icons by writing URL') }}
                a.app-menu-submenu-item(v-bind:href="baseUrl + '/imessage'")
                  img.app-menu-image(src="../assets/images/mongrol-96.png")
                  |  {{ $t('MENU.IMESSAGE', 'iMessage Stickers') }}
                  br
                  small {{ $t('MENU.IMESSAGE_DESC', '3,900 flat color icons in your iMessages') }}
                a.app-menu-submenu-item(v-bind:href="baseUrl + '/line-awesome'")
                  img.app-menu-image(src="../assets/images/scout-knot-96.png")
                  | Line Awesome
                  br
                  small {{ $t('MENU.LA_DESC', 'Replace FontAwesome with modern line icons') }}
                a.app-menu-submenu-item(v-bind:href="baseUrl + '/pedro'")
                  img.app-menu-image(src="../assets/images/comet-96.png")
                  | Cosmic Pedro
                  br
                  small {{ $t('MENU.PEDRO_DESC', 'Choose icon, add text, post to social media') }}

              .app-menu-column.is-half
                a.app-menu-submenu-item(href="http://ai.icons8.com/Scribble/Search")
                  img.app-menu-image(src="../assets/images/autograph-96.png")
                  | Scribble AI
                  br
                  small {{ $t('MENU.SCRIBBLE_DESC', 'Search icons by drawing') }}
                a.app-menu-submenu-item(href="https://www.iconpharm.com/")
                  img.app-menu-image(src="../assets/images/sheep-96.png")
                  | IconPharm
                  br
                  small {{ $t('MENU.ICONPHARM_DESC', 'Icons8 technology for open source icons') }}
                a.app-menu-submenu-item(v-bind:href="baseUrl + '/welovesvg'")
                  img.app-menu-image(src="../assets/images/year-of-monkey-96.png")
                  | We Love SVG
                  br
                  small {{ $t('MENU.WE_LOVE_SVG_DESC', 'Insert open source icons into your web apps') }}
                a.app-menu-submenu-item(href="https://github.com/icons8/impresser")
                  img.app-menu-image(src="../assets/images/robot-96.png")
                  | Impresser
                  br
                  small {{ $t('MENU.IMPRESSER_DESC', 'As a front-end developer, I want HTML for bots') }}
        a.app-menu-item(v-bind:href="blogUrl") {{ $t('MENU.BLOG', 'Blog') }}

      .app-menu-profile
        .app-menu-language
          .app-menu-item
            app-popup(
              ref="langPopup"
              position="bottom-right"
              responsive-position="top"
              v-bind:responsive-width="800"
              v-bind:show-toggle="false"
            )
              .app-menu-language-icon
                img(v-bind:src="flags[locale]")
              div(slot="content")
                .list
                  .list-item(
                    v-on:click="selectLanguage(lang)"
                    v-for="lang in locales"
                  ) {{ lang.name }}

        template(v-if="!isGuest")
          a.app-menu-item(v-bind:href="baseUrl + '/profile/summary'") {{ $t('MENU.MY_ACCOUNT', 'My Account') }}
          //.app-menu-item(v-html="icons.notifications")
          .app-menu-item(
            v-on:click="logoutUser"
            v-html="icons.logout"
          )
        template(v-if="isGuest")
          .app-menu-item(v-on:click="login") {{ $t('MENU.LOGIN', 'Login') }}
          .app-menu-item(v-on:click="register") {{ $t('MENU.REGISTER', 'Register') }}
</template>

<script>
  import logo from '../assets/svg/logo.svg'
  import logout from '../assets/svg/logout.svg'
  import notifications from '../assets/svg/notifications.svg'
  import menu from '../assets/svg/menu.svg'

  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'appMenu',
    serverCacheKey: props => JSON.stringify(props),
    props: {
      baseUrl: {
        type: String,
        'default': 'https://icons8.com'
      },
      blogUrl: {
        type: String,
        'default': 'https://icons8.com/blog'
      },
      logo: {
        type: String,
        'default': logo
      },
      logoUrl: {
        type: String,
        'default': 'https://icons8.com'
      },
      logoText: {
        type: String,
        'default': 'Icons8'
      },
      active: {
        type: String
      },
      locale: {
        type: String,
        'default': 'en-US'
      },
      locales: {
        type: Array,
        'default': () => {
          return [{
            name: 'Chinese',
            url: 'https://icons8.cn'
          }, {
            name: 'English',
            url: 'https://icons8.com'
          }, {
            name: 'French',
            url: 'https://icones8.fr'
          }, {
            name: 'German',
            url: 'https://icons8.de'
          }, {
            name: 'Italian',
            url: 'https://it.icons8.com'
          }, {
            name: 'Japanese',
            url: 'https://icons8.jp'
          }, {
            name: 'Polish',
            url: 'https://pl.icons8.com'
          }, {
            name: 'Portuguese',
            url: 'https://pt.icons8.com'
          }, {
            name: 'Russian',
            url: 'https://icons8.ru'
          }, {
            name: 'Spanish',
            url: 'https://iconos8.es'
          }]
        }
      }
    },
    data () {
      return {
        icons: {
          logout,
          notifications,
          menu
        },
        show: false,
        isSlotLogo: false,
        flags: {
          'zh-CN': require('../assets/icons/locale/zh-CN.png'),
          'en-US': require('../assets/icons/locale/en-US.png'),
          'fr-FR': require('../assets/icons/locale/fr-FR.png'),
          'de-DE': require('../assets/icons/locale/de-DE.png'),
          'it-IT': require('../assets/icons/locale/it-IT.png'),
          'ja-JP': require('../assets/icons/locale/ja-JP.png'),
          'pl-PL': require('../assets/icons/locale/pl-PL.png'),
          'pt-BR': require('../assets/icons/locale/pt-BR.png'),
          'ru-RU': require('../assets/icons/locale/ru-RU.png'),
          'es-ES': require('../assets/icons/locale/es-ES.png')
        }
      }
    },
    computed: {
      ...mapState({
        isGuest: state => state.auth.user.isGuest
      })
    },
    mounted () {
      if (this.$slots.logo) {
        this.isSlotLogo = true
      }
      if (this.active) {
        this.$el.querySelector(`.app-menu-item.is-${this.active}`).classList.add('is-active')
      }
    },
    methods: {
      ...mapActions(['logoutUser']),
      login () {
        this.$modal.show('login-modal')
      },
      register () {
        this.$modal.show('login-modal', {mode: 'register'})
      },
      selectLanguage (lang) {
        const loc = lang.url + location.pathname
        if (loc !== location.href) location.href = loc
        this.$refs.langPopup.closePopup()
      }
    }
  }
</script>

<style lang="scss">
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

    .app-menu-overlay {
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

    .app-menu-responsive {
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

    .app-menu-toggle {
      display: none;
      cursor: pointer;
      @media (max-width: $responsive-menu-short) {
        display: inline-block;
        width: 26px;
        position: absolute;
        top: 10px;
        left: 1rem;

        & > svg {
          fill: currentColor;
        }
      }
    }

    .app-menu-logo {
      display: inline-block;
      width: $menu-height;
      height: $menu-height;
      line-height: $menu-height;
      float: left;

      @media (max-width: $responsive-menu-short) {
        display: block;
        margin: 0 auto;
        float: none;
      }

      & > svg {
        fill: currentColor;
      }
    }

    .app-menu-item {
      display: inline-block;
      padding: 0 12px;
      vertical-align: top;
      height: $menu-height;
      line-height: $menu-height - 0.5rem;
      text-decoration: none;
      border-top: 0.25rem solid transparent;
      border-bottom: 0.25rem solid transparent;
      transition: all 0.4s ease;
      cursor: pointer;

      &:hover, &.is-active {
        border-bottom: 0.25rem solid rgba(0, 0, 0, 0.15);
      }

      @media (max-width: $responsive-menu-wide) {
        padding: 0 8px;
      }
      @media (max-width: $responsive-menu-medium) {
        padding: 0 6px;
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
      }
    }

    .app-menu-submenu {
      position: relative;
      &.app-popup .app-popup-content {
        position: fixed;
        width: 400px;
        padding: 2rem 2rem 1rem;
        margin-top: 0;
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
      &.is-wide .app-popup-content {
        width: 800px;
        @media (max-width: $responsive-menu-medium) {
          width: 360px;
          line-height: 1.2;
        }
      }
    }

    .app-menu-column {
      &.is-half {
        width: 50%;
        float: left;
        @media (max-width: $responsive-menu-medium) {
          width: 100%;
        }
      }
    }

    .app-menu-submenu-item {
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

    .app-menu-image {
      width: 48px;
      float: left;
      margin-right: 1rem;
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

    .app-menu-profile {
      float: right;

      @media (max-width: $responsive-menu-short) {
        float: none;
      }

      .app-menu-item {
        padding: 0 8px;
        & > svg {
          fill: currentColor;
          width: 1.25rem;
          vertical-align: sub;
        }
        @media (max-width: $responsive-menu-medium) {
          padding: 0 6px;
        }
        @media (max-width: $responsive-menu-short) {
          padding: 0 0.75rem;
        }
      }
    }

    .app-menu-language {
      float: right;

      @media (max-width: $responsive-menu-short) {
        float: none;
      }
      .app-menu-item {
        padding: 0 6px;
        @media (max-width: $responsive-menu-short) {
          padding: 0 0.75rem;
        }
      }
      .app-menu-language-icon {
        padding-top: 0.375rem;
        & > img {
          width: 30px;
          vertical-align: sub;
        }
      }
      .app-popup-content {
        width: 110px;
        margin-right: -0.5rem;
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
