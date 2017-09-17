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
        h3.title {{ loginTitle }}
        .description {{ description }}
        form.is-big(v-on:submit.prevent="submit")
          .form-item
            input(v-model="email" name="email" placeholder="email")
          .form-item
            input(v-model="password" type="password" name="password" placeholder="password")
          .form-controls
            .button(
              v-on:click="submit('login')"
              v-bind:class="{'is-loading': isLoading}"
            ) Login
        a.switch-mode(v-on:click="mode='register'") Register

      template(v-if="mode === 'register'")
        h3.title {{ registerTitle }}
        .description {{ description }}
        form.is-big(v-on:submit.prevent="submit")
          .form-item
            input(v-model="email" name="email" placeholder="email")
          .form-item
            input(v-model="name" name="name" placeholder="name")
          .form-item
            input(v-model="password" type="password" name="password" placeholder="password")
          .form-controls
            .button(
              v-on:click="submit('register')"
              v-bind:class="{'is-loading': isLoading}"
            ) Create Account
        a.switch-mode(v-on:click="mode='login'") Login
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'loginModal',
    props: {
      registerTitle: {
        'default': 'Register'
      },
      loginTitle: {
        'default': 'Login'
      },
      description: {
        'default': ''
      }
    },
    data () {
      return {
        email: '',
        name: '',
        password: '',
        isLoading: false,
        mode: undefined
      }
    },
    methods: {
      ...mapActions({
        loginUser: 'loginUser',
        registerUser: 'registerUser'
      }),
      shown (params) {
        this.mode = params.mode
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
      }
      &>.switch-mode {
        display: inline-block;
        margin-top: 0.5rem;
      }
    }
  }
</style>
