<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form @submit.prevent="HandleUserLogin">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" required class="form-control" placeholder="Username" autocomplete="username email" v-model="auth.username"/>
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" required class="form-control" placeholder="Password" autocomplete="current-password" v-model="auth.password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="12">
                      <b-button variant="primary" class="px-4 loginButton" type="submit">Login</b-button>
                      <span class="loginLoader"><img :src="loader" alt="loader" /> Authenticating...</span>
                    </b-col>                    
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>You don't have an account, please click the signup link below to create account</p>
                  <router-link to="/Authentications/register"><b-button variant="primary" class="active mt-3">Register Now!</b-button></router-link>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import loader from "../../assets/images/ajax-loader.gif"
import AuthService from "../Auth/Auth"
import router from '../../router'

let Auth = new AuthService()

export default {
  data() {
    return {
      loader:loader,
      auth: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    
    ...mapActions(["LoginUser"]),  //passing userCredentials data to actions for loggin
    HandleUserLogin() {
      this.LoginUser(this.auth);
    }
  },
  created(){
     const expireTime = Auth.loggedIn()
        if (expireTime === false) {
            router.push('/Authentications/Login')
        } else {
            router.push('/dashboard')
        }  
  }
};
</script>

<style>
 .loginLoader {
   display: none
 }
</style>

