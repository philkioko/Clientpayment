<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form @submit.prevent = "CreateAccount">               
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                     <b-input-group-text><i class="icon-pencil"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" class="form-control" placeholder="fullnames" autocomplete="fullnames" v-model="auth.fullnames" required/>
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" class="form-control" placeholder="Username" autocomplete="username"  v-model="auth.username" required/>
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="email" class="form-control" placeholder="Email" autocomplete="email" v-model="auth.email" required/>
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" class="form-control" placeholder="Password" autocomplete="new-password" v-model="auth.password" required />
                </b-input-group>
                <b-row>
                <b-col cols="6">
                  <b-button variant="success" class="registerButton" block type="submit">Create Account</b-button>
                  <span class="registeringLoader"><img :src="loader" alt="loader" /> Creating account...</span>
                </b-col>
                <b-col cols="6">
                  <p>Have account with us? <router-link to="/Authentications/Login">login</router-link></p>
                </b-col>
                </b-row>          
              </b-form>
            </b-card-body>
    
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
import loader from "../../assets/images/ajax-loader.gif"
import AuthService from "../Auth/Auth"
import router from '../../router'

let Auth = new AuthService()

export default {
  name: "Register",
  data () {
    return {
      loader: loader,
      auth: {
        fullnames: '',
        username: '',
        email: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapActions(['createUserAccount']),
    CreateAccount() {
      this.createUserAccount(this.auth)
    },
  },

  created () {
    const expireTime = Auth.loggedIn()
        if (expireTime === false) {
            router.push('/Authentications/register')
        } else {
            router.push('/dashboard')
        }  
  }
};
</script>
<style>
 .registeringLoader{
 display: none
 }
</style>

