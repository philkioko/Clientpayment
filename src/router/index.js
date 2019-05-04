import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
//manage users
const Users = () => import('@/views/users/manageusers')
// Views - Pages
const Login = () => import('@/views/Authentications/Login')
const Register = () => import('@/views/Authentications/Register')

const Layout = () => import("@/homepages/Layout");
const Shoppingcart = () => import('@/homepages/Shoppincart')
const ViewPayments = () => import('@/views/payments/viewpayments')
const ReportsPage = () => import('@/views/reports/reportsPage')


Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode hash
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout
    },
    {
      path: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        },

        {
          path: 'users',
          redirect: '/users',
          name: 'Users',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: '/users/manageusers',
              name: 'Manageusers',
              component: Users
            },
            {
              path: '/customers/payments',
              name: 'Payments',
              component: ViewPayments
            },
            {
              path: '/reports/reports',
              name: 'Reports',
              component: ReportsPage
            }

          ]
        }
      ]
    },

    {
      path: '/Authentications',
      name: 'Authentications',
      component: {
        render(c) { return c('router-view') }
      },
      children: [

        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        },
        {
          path: 'ShoppingCart',
          name: 'ShoppingCart',
          component: Shoppingcart
        }
      ]
    },
  ]
})
