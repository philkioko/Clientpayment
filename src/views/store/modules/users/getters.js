export const getters = {
    Mycustomers: state=>state.customers,
    customerPurchases: state => state.purchases,
    customerPayments: state => state.Customerpayments
}
export default getters