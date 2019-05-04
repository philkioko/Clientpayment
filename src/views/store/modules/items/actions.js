import baseurl from "../../../Auth/baseurl"
import router from '../../../../router'
import { ErrorOnPayment,ErrorDeletePurchsedItems } from "../../../errorsFucntions/errors"
import { successOnPayment } from "../../../Successfunctions/success"
import Swal from "sweetalert2"

export const actions = {

    AddItem({ commit }, items) {
        var Useritems = [];

        var MyItems = JSON.parse(localStorage.getItem('item'));
        if (MyItems === null) {
            Useritems.push(items)
            localStorage.setItem('item', JSON.stringify(Useritems));
            commit('STORE_ITEMS', JSON.parse(localStorage.getItem('item')))
            JSON.parse(localStorage.getItem('item')).forEach(function (amnt) {
                var PriceAmount = []
                PriceAmount.push(amnt.price.substr(1))
                localStorage.setItem('amount', JSON.stringify(PriceAmount))
                let NewAmounts = [...new Set(JSON.parse(localStorage.getItem('amount')))];
                var total = 0;
                for (var i = 0; i < NewAmounts.length; i++) {
                    if (isNaN(NewAmounts[i])) {
                        continue;
                    }
                    total += Number(NewAmounts[i]);
                }
                localStorage.setItem('totals', Math.round(total))
                commit('STORE_TOTALS', localStorage.getItem('totals'))

                var itemsInCart = JSON.parse(localStorage.getItem('item'))
                commit('STORE_ITEMS_NUMBER',itemsInCart.length)
                
            });
        } else {
            var Items = JSON.parse(localStorage.getItem('item'));
            Items.push(items)
            localStorage.setItem('item', JSON.stringify(Items))
            commit('STORE_ITEMS', JSON.parse(localStorage.getItem('item')))
            JSON.parse(localStorage.getItem('item')).forEach(function (amount) {
                var itemPrices = JSON.parse(localStorage.getItem('amount'))
                itemPrices.push(amount.price.substr(1))
                localStorage.setItem('amount', JSON.stringify(itemPrices))
                let NewAmounts = [...new Set(JSON.parse(localStorage.getItem('amount')))];
                var total = 0;
                for (var i = 0; i < NewAmounts.length; i++) {
                    if (isNaN(NewAmounts[i])) {
                        continue;
                    }
                    total += Number(NewAmounts[i]);
                }
                localStorage.setItem('totals', Math.round(total))
                commit('STORE_TOTALS', localStorage.getItem('totals'))

                var itemsInCart = JSON.parse(localStorage.getItem('item'))
                commit('STORE_ITEMS_NUMBER',itemsInCart.length)
            });
        }
    },

    //process items payments
    processItemsPayment({ dispatch }, payments) {
        var processPayments = {
            amount: payments,
            totals: localStorage.getItem('totals'),
            items: JSON.parse(localStorage.getItem('item')),
            userCredentials: JSON.parse(localStorage.getItem('Custdata'))
        }
        baseurl.post('api/ProcessPayments', processPayments).then(response => {
            if (response.data === 200) {
                successOnPayment({ dispatch })
                localStorage.clear()
                setTimeout(() => {
                    router.push('/')
                    location.reload(true)
                }, 3000);
            } else if (response.data === 402) {
                ErrorOnPayment({ dispatch })
            }
        })
    },

    //delete purchase items records
    DeletePurchasedItems({ dispatch }, custid) {
        // console.log(custid);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false,
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You want to delete this purchase record!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                var CustomerId = {
                    id: custid
                }
                baseurl.post('api/DeletePurchasedItem', CustomerId).then(response => {
                    if (response.data === 200) {
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Purchased Items have been deleted successfull..',
                            'success'
                        )
                          router.push('/users/manageusers')
                    } else if (response.data === 402) {
                        ErrorDeletePurchsedItems({ dispatch })
                    }

                })


            } else if (
                // Read more about handling dismissals
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Customers purchase record has not been deleted:)',
                    'error'
                )
            }
        })

    }
}
export default actions