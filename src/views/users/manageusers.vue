<template>
  <b-col md='12'>
      <div>
        <h3>Manage Customers</h3>
         <span class="CustomerLoader"><img :src="loader" alt="loader" /> loading customers...</span>
      <vue-good-table
        :columns="columns"
        :rows="Mycustomers"
        :search-options="{
        enabled: true,
        trigger: 'enter',
        skipDiacritics: true,        
        placeholder: 'Search this table',        
      }"
        :pagination-options="{
          enabled: true,
          mode: 'records',
          perPage: 5,
          position: 'bottom',
          perPageDropdown: [3, 7, 9],
          dropdownAllowAll: false,
          setCurrentPage: 2,
          nextLabel: 'next',
          prevLabel: 'prev',
          rowsPerPageLabel: 'Rows per page',
          ofLabel: 'of',
          pageLabel: 'page', // for 'pages' mode
          allLabel: 'All',
        }"
        
        > 
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'btn'">
              <button  @click="ViewItemPurchases(props.row.id )" class="btn btn-success btn-sm btnViewPurchase"><i class="icon icon-folder"></i> View Payments</button>
             
          </span>
          <span v-else>
            {{props.formattedRow[props.column.field]}}
          </span>
      </template>
    </vue-good-table>
  </div>
    </b-col>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import loader from "../../assets/images/ajax-loader.gif"

export default {
  data() {
    return {
      loader:loader,
      columns: [
        {
          label: "Fullnames",
          field: "fullnames"
        },
        {
          label: "Username",
          field: "username"
        },
        {
          label: "Email",
          field: "email"
        },
        {
          label: "Purchase date",
          field: "created_at",
          type: "date",
          dateInputFormat: "YYYY-MM-DD",
          dateOutputFormat: "MMM Do YYYY"
        },
        {
          label: "View Payments",
          field: "btn",
          html: true
        }
      ]
    };
  },
  name: "manageusers",
  components: {
    VueGoodTable
  },
  created() {
    this.getCustomers();
  },
  methods: {
    ...mapActions({
      getCustomers: "getCustomers",
      CheckUserPurchases: "CheckUserPurchases",
      ViewItemPurchases: "ViewItemPurchases"
    })
  },
  computed: {
    ...mapGetters({
      Mycustomers: "Mycustomers"
    })
  }
};
</script>

<style>
  
</style>

