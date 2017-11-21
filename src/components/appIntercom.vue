<template lang="pug">
  .app-intercom(
    v-on:click="open"
    v-bind:class="{'is-loading': isLoading}"
  )
</template>

<script>
  export default {
    name: 'appIntercom',
    data () {
      return {
        loaded: false,
        isLoading: false
      }
    },
    methods: {
      open () {
        console.log('open')
        if (!this.loaded) {
          this.init()
        }
      },
      init () {
//        if (typeof window.Intercom === 'function') {
//          window.Intercom('reattach_activator')
//          window.Intercom('update', {
//            app_id: 'v9guv1i0',
//            horizontal_padding: 20,
//            vertical_padding: 20
//          })
//          // window.Intercom('show')
//        } else {
//          const intercom = function () { intercom.c(arguments) }
//          intercom.q = []
//          intercom.c = function (args) { intercom.q.push(args) }
//          window.Intercom = intercom
//          console.log('intercom', intercom)
//
//          const script = document.createElement('script')
//          script.type = 'text/javascript'
//          script.async = true
//          script.src = 'https://widget.intercom.io/widget/v9guv1i0'
//          document.body.appendChild(script)
//        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*.app-intercom {*/
    /*position: absolute;*/
    /*bottom: 20px;*/
    /*right: 20px;*/
    /*width: 80px;*/
    /*height: 80px;*/
    /*background-color: green;*/
    /*border-radius: 50%;*/
    /*box-shadow: 0 1px 4px rgba(0,0,0,0.2);*/
  /*}*/
</style>
