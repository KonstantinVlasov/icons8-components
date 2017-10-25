<template lang="pug">
  .login-modal
    app-modal(
      ref="modal"
      name="login-modal"
      v-bind:width="360"
      v-bind:content-class="'login-form'"
      v-on:shown="shown"
    )
      template(v-if="mode === 'login'")
        h3.title {{ loginTitleText }}
        .description {{ description }}
        form.is-big(v-on:submit.prevent="submit('login')")
          .form-item
            input(v-model="email" name="email" placeholder="email" v-bind:class="emailClasses")
          .form-item
            input(v-model="password" type="password" name="password" placeholder="password" v-bind:class="passwordClasses")
          .form-controls
            button.button(
              type="submit"
              v-bind:class="{'is-loading': isLoading}"
            ) {{ $t('WEB_APP.REGISTER_MODAL.LOGIN', 'Login') }}
        a.switch-mode(v-on:click="mode='register'") {{ $t('WEB_APP.REGISTER_MODAL.REGISTER', 'Register') }}

      template(v-if="mode === 'register'")
        h3.title {{ registerTitleText }}
        .description {{ description }}
        form.is-big(v-on:submit.prevent="submit('register')")
          .form-item
            input(v-model="email" name="email" placeholder="email" v-bind:class="emailClasses")
          .form-item
            input(v-model="name" name="name" placeholder="name")
          .form-item
            input(v-model="password" type="password" name="password" placeholder="password" v-bind:class="passwordClasses")
          .form-controls
            button.button(
              type="submit"
              v-bind:class="{'is-loading': isLoading}"
            ) {{ $t('WEB_APP.REGISTER_MODAL.CREATE_ACCOUNT', 'Create Account') }}
        a.switch-mode(v-on:click="mode='login'") {{ $t('WEB_APP.REGISTER_MODAL.LOGIN', 'Login') }}
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'loginModal',
    props: {
      registerTitle: String,
      loginTitle: String,
      description: String
    },
    data () {
      return {
        email: '',
        name: '',
        password: '',
        isLoading: false,
        mode: undefined,
        errors: {password: false, email: false}
      }
    },
    computed: {
      registerTitleText () {
        return this.registerTitle || this.$t('WEB_APP.REGISTER_MODAL.REGISTER', 'Register')
      },
      loginTitleText () {
        return this.loginTitle || this.$t('WEB_APP.REGISTER_MODAL.LOGIN', 'Login')
      },
      emailClasses () {
        return {
          'is-invalid': this.errors.email
        }
      },
      passwordClasses () {
        return {
          'is-invalid': this.errors.password
        }
      }
    },
    methods: {
      ...mapActions({
        loginUser: 'loginUser',
        registerUser: 'registerUser'
      }),
      shown (params) {
        this.mode = params.mode || 'login'
      },
      submit (action) {
        this.isLoading = true
        this[`${action}User`]({
          email: this.email,
          password: this.password
        })
          .then(() => {
            this.isLoading = false
            if (this.$refs.modal.callback) {
              this.$refs.modal.callback()
            }
            this.$modal.hide('login-modal')
          })
          .catch(error => {
            this.isLoading = false
            console.log('login error', error)
            if (error.response && error.response.errors) {
              this.errors.email = error.response.errors.email
              this.errors.password = error.response.errors.password
              this.$error({
                title: this.$t(`${action} failed`),
                text: (this.errors.email || this.errors.password)[0]
              })
            } else {
              this.$error({
                title: this.$t(`${action} failed`),
                text: error.message
              })
            }
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/variables';

  .login-modal {

    & /deep/ .login-form {
      padding: 0 2rem 2rem;
      text-align: center;

      &>.title {
        color: #4a4a4a;
        margin: 1.75rem 0;
      }
      &>.switch-mode {
        display: inline-block;
        margin-top: 0.5rem;
      }
    }
  }
</style>
