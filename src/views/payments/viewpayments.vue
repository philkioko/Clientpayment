<template>
<div>
     <h3>Manage customer purchases</h3>
    <hr>
    <b-row>
        <b-col md='8'>
             <h4>customer purchases</h4>
             <hr/>
           <div class="wrap-header-cart js-panel-cart">
		<div class="s-full js-hide-cart"></div>

		<div class="header-cart flex-col-l p-l-65 p-r-25">
			<div class="header-cart-title flex-w flex-sb-m p-b-8">
				
				<div class="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
					<i class="zmdi zmdi-close"></i>
				</div>
			</div>
			
			<div class="header-cart-content flex-w js-pscroll">
                <b-row>
                    <b-col md="4" class="card" style="width: 18rem;" v-for="(itemspurchased, index) in customerPurchases" :key ="index">
                        <img :src="itemspurchased.items_image" class="card-img-top" alt="IMG" height="150" >
                    <div class="card-body">
                        <h5 class="card-title">Description</h5>
                        <p class="card-text"><b>Item Name:</b> {{itemspurchased.itemname}}</p>
                        <p class="card-text"><b>Item price:</b> {{itemspurchased.items_price}}</p>
                        
                    </div>
                    </b-col>
                </b-row>
				
				<div class="w-full">
					<div class="header-cart-total w-full p-tb-40" v-for="(itemtotals, index) in customerPayments" :key ="index">
						Total Amount: $ {{itemtotals.items_totals}}
					</div>
				</div>
			</div>
		</div>
	</div>
        </b-col>
         <b-col md='4'>
           <h4>customer details</h4>
           <hr/>
           	<div >
						<div class="flex-w flex-t bor12 p-b-13">
							<div class="size-208">
								<span class="stext-110 cl2" v-for="(itemtotals, index) in customerPayments" :key ="index">
									 <strong>Customers fullnames:</strong> {{itemtotals.customer_name}}
								</span>
							</div>

							<div class="size-209">
								<span class="mtext-110 cl2" v-for="(itemtotals, index) in customerPayments" :key ="index">
									 <strong>Amount Paid:</strong> {{itemtotals.amount_paid}}
								</span>
							</div>
						</div>

						<div class="flex-w flex-t bor12 p-t-15 p-b-30">
							<div class="size-208 w-full-ssm">
								<span class="stext-110 cl2" v-for="(itemtotals, index) in customerPayments" :key ="index">
									 <strong>Items Totals:</strong> {{itemtotals.items_totals}}
								</span>
							</div>

							<div class="size-209 p-r-18 p-r-0-sm w-full-ssm">
								<p class="stext-111 cl6 p-t-2">
									Shippin around is free for orders above $ 300.
								</p>
							</div>
						</div>

						<div class="flex-w flex-t p-t-27 p-b-33">
							<div class="size-208">
								<span class="mtext-101 cl2">
									<div class="header-cart-total w-full p-tb-40" v-for="(itemtotals, index) in customerPayments" :key ="index">
                                        Total Amount: $ {{itemtotals.items_totals}}
                                    </div>
								</span>
							</div>
                        <hr>
							<div class="size-209 p-t-1">
								<span class="mtext-110 cl2" v-for="(itemtotals, index) in customerPayments" :key ="index">
									<button @click.prevent="DeleteItemPurchase(itemtotals.customer_id)" class="btn btn-danger" ><i class="fa fa-fw fa-trash"></i> Delete record</button>
								</span>
							</div>
						</div>
					</div>
				
        </b-col>
    </b-row>
</div>
   
</template>
 <script>
import { mapGetters, mapActions } from "vuex";
export default {
    
  methods: {
    ...mapActions(["DeletePurchasedItems"]),
    DeleteItemPurchase(custId) {
      this.DeletePurchasedItems(custId);
    }
  },
  computed: {
    ...mapGetters({
      customerPurchases: "customerPurchases",
      customerPayments: "customerPayments"
    })
  }
};
</script>
 
 <style>
</style>
 