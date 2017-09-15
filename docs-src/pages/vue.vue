<template lang="pug">
  .docs
    h2 VUE Components

    h3 AppMenu
    pre(v-highlightjs="html")
      code.html

    <app-menu></app-menu>
</template>

<script>
  export default {
    name: 'VUEDocs',
    data () {
      return {
        html: `<app-menu></app-menu>`
      }
    }
  }
</script>