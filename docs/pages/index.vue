<template lang="pug">
  .docs
    .content
      h1 Icons8 Components

      h3 Button
      pre(v-highlightjs="button.html")
        code.html
      <div class="button">Hello</div>&nbsp;
      <div class="button is-loading">Hello</div>&nbsp;
      <div class="button is-small">Small</div>&nbsp;
      <div class="button is-tiny">Tiny</div>&nbsp;
      <div class="button is-white">White</div>&nbsp;
      <div class="button is-white is-loading">Hello</div>&nbsp;
      <div class="button is-orange">Orange</div>&nbsp;
      <div class="button is-gray">Gray</div>&nbsp;
      <div class="button is-disabled">Disabled</div>&nbsp;

      h3 AppModal
      p Template
      pre(v-highlightjs="appModal.html")
        code.html
      p Script
      pre(v-highlightjs="appModal.js")
        code.javascript
      .button(v-on:click="showModal") Show modal
      app-modal(
        name="modal-example"
        content-class="custom-class"
      )
        p <strong>Yay!</strong> Pretty modal!

      h3 AppMenu
      pre(v-highlightjs)
        code.html= '<app-menu></app-menu>'
      app-menu
</template>

<script>
  export default {
    name: 'Docs',
    data () {
      return {
        button: {
          html: `<div class="button">Hello</div>
<div class="button is-loading">Hello</div>
<div class="button is-small">Small</div>
<div class="button is-tiny">Tiny</div>
<div class="button is-white">White</div>
<div class="button is-white is-loading">Hello</div>
<div class="button is-orange">Orange</div>
<div class="button is-gray">Gray</div>
<div class="button is-disabled">Disabled</div>`
        },
        appModal: {
          html: `<div class="button" v-on:click="showModal">Show modal</div>
<app-modal
  name="modal-example"
  content-class="custom-class">
  <p><strong>Yay!</strong> Pretty modal!</p>
</app-modal>`,
          js: `showModal () {
  this.$modal.show('modal-example')
}`
        }
      }
    },
    methods: {
      showModal () {
        this.$modal.show('modal-example')
      }
    }
  }
</script>

<style lang="scss">
  .content {
    margin: 0 auto;
    padding: 0 0 4rem;
    width: 960px;

    h3 {
      margin-top: 5rem;
    }
  }
</style>