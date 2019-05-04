import decode from "jwt-decode"
import router from '../../router'

export default class AuthService {
    loggedIn(){
     var token = localStorage.getItem('token')
      var expiration = localStorage.getItem('expiration')
      if (!token || !expiration) {
        return false
      }

      if (Date.now() > parseInt(expiration, 10)) { 
        this.logout()
        return false
      } else {
        return token
      }
    }

    isTokenExpired(expiration) {
        localStorage.setItem('expiration', expiration)
    }

    setToken(Token) {
        localStorage.setItem('token', Token)
        router.push('/dashboard')   // redirecting to dashboard after setting up token from backend Api
    }

    getToken() {
        return localStorage.getItem('token')
    }

    logout() {
        localStorage.clear()
    }

    getProfile() {
        return decode(this.getToken());
    }
}
