<template lang="pug">
  .icons8-components
    app-notify
    login-modal
    buy-modal
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Icons8Components',
    props: {
      loadUser: {
        type: Boolean,
        'default': false
      }
    },
    mounted () {
      if (this.loadUser) {
        this.fillUserInfo()
      }
    },
    methods: {
      ...mapActions(['fillUserInfo'])
    }
  }
</script>