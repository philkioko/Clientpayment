<template>
  <footer class="bg3 p-t-75 p-b-32">
    <div class="container">

      <div class="p-t-40">
        <p class="stext-107 cl6 txt-center">

          Copyright &copy;
          {{getDate()}} All rights reserved | Made with
          <i
            class="fa fa-heart-o"
            aria-hidden="true"
          ></i> by
          <a href="https://www.epsotechsolutions.com" target="_blank">Epsotech Solutions</a> &amp;
          maintained by
          <a href="https://www.epsotechsolutions.com" target="_blank">Epsotech Solutions</a>
        
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  created() {
    this.getDate();
  },
  methods: {
    getDate() {
      return new Date().getFullYear();
    }
  }
};
</script>
