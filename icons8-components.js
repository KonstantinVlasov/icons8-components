import ColorPicker from './src/components/colorPicker.vue'

module.exports = {
  install: function (Vue) {
    Vue.component('color-picker', ColorPicker)
  }
}
