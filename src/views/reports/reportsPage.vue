<template>
    <div>
        <h4>Generate purchase reports</h4>
    <hr/>

    <form @submit.prevent="QueryPurchessReport">
        <b-card>
            <div slot="header">
              <strong>Reports</strong>
            </div>
            <div class="input-group mb-3">
            <span>Duration:</span>
            <select name='puchaseQuery' id='' class="form-control reportDuration" @change="HandlereportDuration" v-model="auth.duration">
            <option value="">Select duration</option>
            <option value='daily'>Daily</option>
            <option value='weekly'>Weekly</option>
            <option value='monthly'>Monthly</option>
          </select>
        </div>

         <div class="input-group mb-3">
               <span class="dailyReports">Todays Date:</span>
               <b-form-input type="date"   name="daily" class='daily dailyReports' v-model="auth.todaysdate"></b-form-input>
        </div>

            <div class="input-group mb-3">
               <span class="startDate">Start Date:</span>
               <b-form-input type="date"   name="startdate" class='startdate startDate' v-model="auth.startdate"></b-form-input>
            </div>
            <div class="input-group mb-3">
               <span class="startDate">End Date:</span>
               <b-form-input type="date" name="enddate"  class='enddate startDate' v-model="auth.enddate"></b-form-input>
            </div> 

            <div class="input-group mb-3">
               <span class="monthly">Select Month:</span>
              <select name='puchaseQuery' id='' class="form-control monthly" v-model="auth.month">
                <option value="">Select Month</option>
                <option value='1'>January</option>
                <option value='2'>February</option>
                <option value='4'>April</option>
                <option value='5'>may</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
            </select>
        </div> 
        <div class="input-group mb-3">
               <span class="monthly">Select Year:</span>
              <select name='puchaseQuery' id='' class="form-control monthly" v-model="auth.year">
                <option value="">Select Year</option>
                <option value='2017'>2017</option>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>                
            </select>
        </div>
         <button class="btn btn-primary"><i class="fa fa-print"></i> Gerate Report</button>
        </b-card>
    </form>

    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            auth:{
                duration: '',
                todaysdate: '',
                startdate: '',
                enddate: '',
                month: '',
                year: ''
            }
        }
    },
    computed: {
        ...mapGetters ({
            mypurchases: 'mypurchases',
            purchasedItems: 'purchasedItems'
        })
    },
  methods: {
      ...mapActions(['QueryPurchaseReport']),
        QueryPurchessReport () {
            this.QueryPurchaseReport(this.auth)
        },
    HandlereportDuration() {
      var duration = $(".reportDuration").val();
      if (duration === "daily") {
        $(".dailyReports").show();
        $(".dailyReports").attr("required", "required");
        $(".monthly").hide();
        $(".startDate").attr("required", false);
        $(".startDate").hide();
        $(".monthly").attr("required", false);
        $(".startDate").hide();
      } else if (duration === "weekly") {
        $(".dailyReports").hide();
        $(".dailyReports").attr("required", false);
        $(".monthly").hide();
        $(".monthly").attr("required", false);
        $(".startDate").attr("required", "required");
        $(".startDate").show();
      } else if (duration === "monthly") {
        $(".monthly").show();
        $(".monthly").attr("required", "required");
        $(".startDate").attr("required", false);
        $(".dailyReports").attr("required", false);
        $(".dailyReports").hide();
        $(".startDate").hide();
      }
    }
  }
};
</script>
<style>
.dailyReports {
  display: none;
}
.startDate {
  display: none;
}
.monthly {
  display: none;
}
</style>
