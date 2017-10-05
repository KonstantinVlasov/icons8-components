<template lang="pug">
  .app-popup
    .app-popup-toggle(
      v-bind:class="{'is-toggle-hidden': !showToggle}"
      v-on:click="togglePopup"
    )
      slot
      .app-popup-arrow(
        v-html="arrowDown"
      )

    transition(name="app-popup")
      .panel.app-popup-content(
        v-if="show"
        v-bind:class="style"
      )
        slot(name="content")
</template>

<script>
  import arrowDown from '../assets/svg/arrow-down.svg'

  export default {
    name: 'appPopup',
    props: {
      position: {
        type: String
      },
      responsivePosition: {
        type: String
      },
      responsiveWidth: {
        type: Number
      },
      showToggle: {
        type: Boolean,
        'default': true
      }
    },
    data () {
      return {
        show: false,
        arrowDown
      }
    },
    computed: {
      style () {
        let style = this.position
        if (this.responsiveWidth && window.document.body.offsetWidth <= this.responsiveWidth) {
          style = this.responsivePosition
        }
        return 'is-' + style
      }
    },
    methods: {
      togglePopup () {
        this.show = !this.show
      },
      closePopup () {
        this.show = false
      },
      outsideClick (e) {
        if (!this.$el.contains(e.target)) {
          this.closePopup()
        }
      }
    },
    mounted () {
      document.documentElement.addEventListener('click', this.outsideClick, false)
    },
    beforeDestroy () {
      document.documentElement.removeEventListener('click', this.outsideClick, false)
    }
  }
</script>

<style lang="scss">
  @import '../assets/css/variables';

  .app-popup {
    position: relative;
    display: inline-block;

    .app-popup-toggle {
      position: relative;
      display: inline-block;
      padding-right: 19px;
      cursor: pointer;

      &.is-toggle-hidden {
        padding-right: 0;
        .app-popup-arrow {
          display: none;
        }
      }
    }

    .app-popup-arrow {
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -1px;

      width: 11px;
      height: 11px;

      svg {
        fill: currentColor;
        vertical-align: top;
      }
    }

    .app-popup-content {
      position: absolute;
      z-index: 1;
      top: 100%;
      left: 0;
      overflow: hidden;
      margin-top: 2px;
      color: $color-font;

      &.is-center {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -52%) scale(1);
      }
      &.is-top {
        top: auto;
        bottom: 100%;
        left: 0;
        margin-top: 0;
        margin-bottom: 2px;
      }
      &.is-bottom-center {
        top: 100%;
        bottom: auto;
        left: 50%;
        margin-top: 2px;
        margin-bottom: 0;
        transform: translateX(-50%) scale(1);
      }
      &.is-bottom-left {
        top: 100%;
        bottom: auto;
        left: 0;
        right: auto;
        margin-top: 2px;
        margin-bottom: 0;
      }
      &.is-bottom-right {
        top: 100%;
        bottom: auto;
        left: auto;
        right: 0;
        margin-top: 2px;
        margin-bottom: 0;
      }
    }
  }

  // transition
  .app-popup-enter-active,
  .app-popup-leave-active {
    transition: all 0.3s ease-in-out;
  }
  .app-popup-enter,
  .app-popup-leave-to {
    opacity: 0;
    transform: translateY(-16px) scale(0.97);

    &.is-bottom-left {
      transform: translateY(-10px) scale(0.97);
    }
    &.is-bottom-right {
      transform: translateY(-10px) scale(0.97);
    }
  }
</style>
