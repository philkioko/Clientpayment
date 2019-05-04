
import baseurl from "../../../Auth/baseurl"
import $ from "jquery"
import { RegisterValidationError, AccountcreateError, userRecordExists,CustomerHasNoPurchases,ErrorOnQueryPurchasedItems } from "../../../errorsFucntions/errors"
import { AccountCreateSuccess } from "../../../Successfunctions/success"
import router from '../../../../router'
import AuthService from "../../../Auth/Auth"
import decode from "jwt-decode"

let Auth = new AuthService()

const actions = {

    // login user to the backend api
    LoginUser({ commit }, data) {
        $('.loginButton').hide()
        $('.loginLoader').show()
        var userCredentials = {
            username: data.username,
            password: data.password
        }
        baseurl.post('api/login', userCredentials).then(response => {
            $('.loginButton').show()
            $('.loginLoader').hide()
            let payload = decode(response.data.token); // getting expiry time for the token
            Auth.isTokenExpired(payload.exp + Date.now()) // setting expiry time
            Auth.setToken(response.data.token) //setting token to local storage
        })
    },

    // registering user account
    createUserAccount({ commit, dispatch }, userData) {
        $('.registerButton').hide()
        $('.registeringLoader').show()
        var registrationData = {
            fullnames: userData.fullnames,
            username: userData.username,
            email: userData.email,
            password: userData.password
        }
        baseurl.post('api/register', registrationData).then(response => {
            $('.registerButton').show()
            $('.registeringLoader').hide()
            if (response.data === 422) {
                RegisterValidationError({ dispatch })
            } else if (response.data === 402) {
                AccountcreateError({ dispatch })
            } else if (response.data === 409) {
                userRecordExists({ dispatch })
            } else if (response.data.code === 200) {
                AccountCreateSuccess({ dispatch })
                localStorage.setItem('Custdata', JSON.stringify(response.data.custdetails))
                setTimeout(() => {
                    router.push('/Authentications/shoppingCart')
                }, 3000);
            }
        })
    },

    //get all customers
    getCustomers({ commit }) {
        baseurl.get('api/AllCustomers').then(response => {
            $('.CustomerLoader').hide()
            commit('STORE_CUSTOMERS', response.data)
        })
    },

    // request all items purchased by this user
    ViewItemPurchases({ commit,dispatch }, custid) {

        baseurl.get('api/RequestPurchasedItems/' + custid).then(response => {
            if (response.data === 403) {
                CustomerHasNoPurchases({ dispatch })
            } else if (response.data === 402) {
                ErrorOnQueryPurchasedItems({ dispatch })
            } else {
                commit('STORE_CUSTOMER_PURCHASES', response.data.Customeritems)
                commit('STORE_CUSTOMER_PAYMENTS', response.data.payments)
                setTimeout(() => {
                    router.push('/customers/payments')
                }, 1000);
            }
        })
    }
}
export default actions