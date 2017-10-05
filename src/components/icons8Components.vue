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
    mounted () {
      this.fillUserInfo()
    },
    methods: {
      ...mapActions(['fillUserInfo'])
    }
  }
</script>