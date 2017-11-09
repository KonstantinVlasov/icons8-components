<template lang="pug">
  .login-modal
    app-modal(
      ref="modal"
      name="login-modal"
      v-bind:width="450"
      v-bind:content-class="'login-form'"
      v-on:shown="shown"
    )
      template(v-if="mode === 'login'")
        h3.title {{ loginTitleText }}
        .description(v-if="descriptionText" v-html="descriptionText")
        form.is-big(v-on:submit.prevent="submit('login')")
          div
            .form-item
              input(v-model="email" name="email" placeholder="Email" v-bind:class="emailClasses")
            .form-item
              input(v-model="password" type="password" name="password" placeholder="Password" v-bind:class="passwordClasses")
          .form-controls
            button.button(
              type="submit"
              v-bind:class="{'is-loading': isLoading}"
            ) {{ $t('WEB_APP.REGISTER_MODAL.LOGIN', 'Login') }}
            a.switch-mode(v-on:click="mode='register'") {{ $t('WEB_APP.REGISTER_MODAL.REGISTER', 'Register') }}

      template(v-if="mode === 'register'")
        h3.title {{ registerTitleText }}
        .description(v-if="descriptionText" v-html="descriptionText")
        form.is-big(v-on:submit.prevent="submit('register')")
          div
            .form-item
              input(v-model="email" name="email" placeholder="Email" v-bind:class="emailClasses")
            .form-item
              input(v-model="name" name="name" placeholder="Name")
            .form-item
              input(v-model="password" type="password" name="password" placeholder="Password" v-bind:class="passwordClasses")
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
        errors: {password: false, email: false},
        registerTitleText: '',
        loginTitleText: '',
        descriptionText: ''
      }
    },
    computed: {
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
        this.registerTitleText = params.registerTitle || this.registerTitle || this.$t('WEB_APP.REGISTER_MODAL.REGISTER', 'Register')
        this.loginTitleText = params.loginTitle || this.loginTitle || this.$t('WEB_APP.REGISTER_MODAL.LOGIN', 'Login')
        this.descriptionText = params.description || this.description || ''
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
      padding: 0 4rem 3.25rem;
      text-align: left;
      line-height: 1.4;

      &>.title {
        color: #4a4a4a;
        margin: 2.75rem 0 0.25rem;
      }
      &>form {
        margin-top: 1.75rem;

        .form-item {
          margin: 0;
          &>input {
            border-radius: 0;
          }
          &:first-child>input {
            border-radius: 4px 4px 0 0;
          }
          &:last-child>input {
            border-radius: 0 0 4px 4px;
          }
          &:not(:last-child)>input {
            border-bottom: none;
          }
        }
      }
      .switch-mode {
        display: inline-block;
        font-size: 1.125rem;
        margin-top: 0.5rem;
        margin-left: 1.25rem;
      }
      &>.description {
        margin-bottom: 1rem;
        font-size: 18px;
      }
    }
  }
</style>
