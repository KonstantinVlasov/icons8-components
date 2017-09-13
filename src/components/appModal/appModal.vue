<template lang="pug">
  transition(name="app-modal")
    .overlay(
      v-if="visible"
      v-bind:aria-expanded="visible.toString()"
      v-bind:data-modal="name"
      v-on:mousedown.stop="toggle(false)"
    )
      .app-modal(
        v-bind:style="modalStyle"
        v-on:mousedown.stop=""
        v-bind:class="contentClass"
      )
        slot
</template>
<script>
  import modalPlugin from './index'

  export default {
    name: 'appModal',
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      contentClass: String,
      width: {
        'default': false
      },
      height: {
        type: Number
      }
    },
    data () {
      return {
        visible: false,
        modal: {
          width: this.width,
          height: this.height
        },
        callback: undefined
      }
    },
    computed: {
      modalStyle () {
        return {
          width: this.width ? this.width + 'px' : undefined,
          height: this.height ? this.height + 'px' : undefined
        }
      }
    },
    created () {
      modalPlugin.event.$on('toggle', (name, state, params) => {
        if (name === this.name) {
          if (typeof state === 'undefined') {
            state = !this.visible
          }
          this.toggle(state, params)
          if (params) {
            this.callback = params.callback
          }
        }
      })
    },
    methods: {
      toggle (state) {
        this.visible = state
      }
    }
  }
</script>
<style lang="scss" scoped>
  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.3);
    z-index: 999;
    opacity: 1;
  }
  .app-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    min-width: 18rem;
    max-width: 95%;
    max-height: 95%;
    padding: 2rem;
    font-size: 1rem;
    text-align: left;

    background: white;
    color: #666;
    border-radius: 4px;
    box-shadow: 0 20px 60px -2px rgba(27, 33, 58, .4);
  }

  .app-modal-enter-active, .app-modal-leave-active {
    transition: all 0.2s;
  }
  .app-modal-enter, .app-modal-leave-active {
    opacity: 0;
  }
</style>
