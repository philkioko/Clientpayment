export const mutations = {

    STORE_CUSTOMERS(state, customers) {
        state.customers = customers
    },

    STORE_CUSTOMER_PURCHASES(state, purchases) {
        state.purchases = purchases
    },

    STORE_CUSTOMER_PAYMENTS(state, payments) {
        state.Customerpayments = payments
    },
}
export default mutations