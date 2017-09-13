<template lang="pug">
  .list
    nuxt-link.list-item(
      v-for="item in items"

      v-bind:key="item.title"
      v-bind:to="item.url"
      v-html="item.title"
    )
</template>

<script>
  export default {
    name: 'menuList',
    props: {
      items: {
        type: Array,
        'default': []
      }
    }
  }
</script>
