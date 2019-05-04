import Vue from "vue"


export const RegisterValidationError = () => Vue.$toast.error('Please make sure all fields are filled up!');
export const InvalidCredentials = () => Vue.$toast.error('Please make sure you your credentials are correct')
export const AccountcreateError = () => Vue.$toast.error('Sorry your account could not be created, Contact Administrator')
export const userRecordExists = () => Vue.$toast.error('Sorry this user is already registered in the system..!')
export const ErrorOnPayment = () => Vue.$toast.error('Sorry there was an error during payment!')
export const ErrorDeletePurchsedItems = () => Vue.$toast.error('Sorry an error occured while deleting purchased items.!')
export const CustomerHasNoPurchases  = () => Vue.$toast.error('Sorry this customer has no purchases.!')
export const  ErrorOnQueryPurchasedItems = () => Vue.$toast.error('Sorry problem encountered while loading customer items purchased.!')