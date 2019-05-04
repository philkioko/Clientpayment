<template>
  <div>
    <!-- Header -->
   <HomeHeader/>
    <!-- Cart -->
    <div class="wrap-header-cart js-panel-cart">
      <div class="s-full js-hide-cart"></div>

      <div class="header-cart flex-col-l p-l-65 p-r-25">
        <div class="header-cart-title flex-w flex-sb-m p-b-8">
          <span class="mtext-103 cl2">Your Cart</span>

          <div class="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
            <i class="zmdi zmdi-close"></i>
          </div>
        </div>

        <div class="header-cart-content flex-w js-pscroll">
          <ul class="header-cart-wrapitem w-full">
            <li class="header-cart-item flex-w flex-t m-b-12" v-for="(items, index) in UserItems" :key ="index">
              
              <div class="header-cart-item-img">
                <img :src="items.itemimage" alt="IMG">
              </div>

              <div class="header-cart-item-txt p-t-8">
                <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">{{items.itemname}}</a>

                <span class="header-cart-item-info">{{items.price}}</span>
              </div>
            </li>

          </ul>

          <div class="w-full">
            <div class="header-cart-total w-full p-tb-40">Total: $ {{ItemsTotal}}</div>

            <div class="header-cart-buttons flex-w w-full">
              <router-link to="/Authentications/register" class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                Check Out
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Slider -->
    <section class="section-slide">
      <div class="wrap-slick1">
        <div class="slick1">
          <div class="item-slick1" style="background-image: url(images/slide-01.jpg);">
            <div class="container h-full">
              <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                <div
                  class="layer-slick1 animated visible-false"
                  data-appear="fadeInDown"
                  data-delay="0"
                >
                  <span class="ltext-101 cl2 respon2">Women Collection 2018</span>
                </div>

                <div
                  class="layer-slick1 animated visible-false"
                  data-appear="fadeInUp"
                  data-delay="800"
                >
                  <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">NEW SEASON</h2>
                </div>

                <div
                  class="layer-slick1 animated visible-false"
                  data-appear="zoomIn"
                  data-delay="1600"
                >
                  <a
                    href="product.html"
                    class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                  >Shop Now</a>
                </div>
              </div>
            </div>
          </div>

          <div class="item-slick1" style="background-image: url(images/slide-02.jpg);">
            <div class="container h-full">
              <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                <div
                  class="layer-slick1 animated visible-false"
                  data-appear="rollIn"
                  data-delay="0"
                >
                  <span class="ltext-101 cl2 respon2">Men New-Season</span>
                </div>

                <div
                  class="layer-slick1 animated visible-false"
                  data-appear="lightSpeedIn"
                  data-delay="800"
                >
                  <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">Jackets & Coats</h2>
                </div>

                <div
                  class="layer-slick1 animated visible-false"
                  data-appear="slideInUp"
                  data-delay="1600"
                >
                  <a
                    href="product.html"
                    class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                  >Shop Now</a>
                </div>
              </div>
            </div>
          </div>

          <div class="item-slick1" style="background-image: url(images/slide-03.jpg);">
            <div class="container h-full">
              <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                <div
                  class="layer-slick1 animated visible-false"
                  data-appear="rotateInDownLeft"
                  data-delay="0"
                >
                  <span class="ltext-101 cl2 respon2">Men Collection 2018</span>
                </div>

                <div
                  class="layer-slick1 animated visible-false"
                  data-appear="rotateInUpRight"
                  data-delay="800"
                >
                  <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">New arrivals</h2>
                </div>

                <div
                  class="layer-slick1 animated visible-false"
                  data-appear="rotateIn"
                  data-delay="1600"
                >
                  <a
                    href="product.html"
                    class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                  >Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Banner -->

    <!-- Product -->
    <section class="bg0 p-t-23 p-b-140">
      <div class="container">
        <div class="p-b-10">
          <h3 class="ltext-103 cl5">Product Overview</h3>
        </div>
     
        <div class="flex-w flex-sb-m p-b-52">
          <div class="flex-w flex-l-m filter-tope-group m-tb-10">
            <button
              class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
              data-filter="*"
            >All Products</button>

            <button
              class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
              data-filter=".women"
            >Women</button>

            <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">Men</button>

            <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">Bag</button>

            <button
              class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
              data-filter=".shoes"
            >Shoes</button>

            <button
              class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
              data-filter=".watches"
            >Watches</button>
          </div>

          <div class="flex-w flex-c-m m-tb-10">
            <div
              class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter"
            >
              <i class="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
              <i class="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
              Filter
            </div>

            <div
              class="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search"
            >
              <i class="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
              <i class="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
              Search
            </div>
          </div>

          <!-- Search product -->
          <div class="dis-none panel-search w-full p-t-10 p-b-15">
            <div class="bor8 dis-flex p-l-15">
              <button class="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                <i class="zmdi zmdi-search"></i>
              </button>

              <input
                class="mtext-107 cl2 size-114 plh2 p-r-15"
                type="text"
                name="search-product"
                placeholder="Search"
              >
            </div>
          </div>

          <!-- Filter -->
          <div class="dis-none panel-filter w-full p-t-10">
            <div class="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
              <div class="filter-col1 p-r-15 p-b-27">
                <div class="mtext-102 cl2 p-b-15">Sort By</div>

                <ul>
                  <li class="p-b-6">
                    <a href="#" class="filter-link stext-106 trans-04">Default</a>
                  </li>

                  <li class="p-b-6">
                    <a href="#" class="filter-link stext-106 trans-04">Popularity</a>
                  </li>

                  <li class="p-b-6">
                    <a href="#" class="filter-link stext-106 trans-04">Average rating</a>
                  </li>

                  <li class="p-b-6">
                    <a href="#" class="filter-link stext-106 trans-04 filter-link-active">Newness</a>
                  </li>

                  <li class="p-b-6">
                    <a href="#" class="filter-link stext-106 trans-04">Price: Low to High</a>
                  </li>

                  <li class="p-b-6">
                    <a href="#" class="filter-link stext-106 trans-04">Price: High to Low</a>
                  </li>
                </ul>
              </div>

              <div class="filter-col2 p-r-15 p-b-27">
                <div class="mtext-102 cl2 p-b-15">Price</div>

                <ul>
                  <li class="p-b-6">
                    <a href="#" class="filter-link stext-106 trans-04 filter-link-active">All</a>
                  </li>

                  <li class="p-b-6">
                    <a href="#" class="filter-link stext-106 trans-04">$0.00 - $50.00</a>
                  </li>

                  <li class="p-b-6">
                    <a href="#" class="filter-link stext-106 trans-04">$50.00 - $100.00</a>
                  </li>

                  <li class="p-b-6">
                    <a href="#" class="filter-link stext-106 trans-04">$100.00 - $150.00</a>
                  </li>

                  <li class="p-b-6">
                    <a href="#" class="filter-link stext-106 trans-04">$150.00 - $200.00</a>
                  </li>

                  <li class="p-b-6">
                    <a href="#" class="filter-link stext-106 trans-04">$200.00+</a>
                  </li>
                </ul>
              </div>

              <div class="filter-col3 p-r-15 p-b-27">
                <div class="mtext-102 cl2 p-b-15">Color</div>

                <ul>
                  <li class="p-b-6">
                    <span class="fs-15 lh-12 m-r-6" style="color: #222;">
                      <i class="zmdi zmdi-circle"></i>
                    </span>

                    <a href="#" class="filter-link stext-106 trans-04">Black</a>
                  </li>

                  <li class="p-b-6">
                    <span class="fs-15 lh-12 m-r-6" style="color: #4272d7;">
                      <i class="zmdi zmdi-circle"></i>
                    </span>

                    <a href="#" class="filter-link stext-106 trans-04 filter-link-active">Blue</a>
                  </li>

                  <li class="p-b-6">
                    <span class="fs-15 lh-12 m-r-6" style="color: #b3b3b3;">
                      <i class="zmdi zmdi-circle"></i>
                    </span>

                    <a href="#" class="filter-link stext-106 trans-04">Grey</a>
                  </li>

                  <li class="p-b-6">
                    <span class="fs-15 lh-12 m-r-6" style="color: #00ad5f;">
                      <i class="zmdi zmdi-circle"></i>
                    </span>

                    <a href="#" class="filter-link stext-106 trans-04">Green</a>
                  </li>

                  <li class="p-b-6">
                    <span class="fs-15 lh-12 m-r-6" style="color: #fa4251;">
                      <i class="zmdi zmdi-circle"></i>
                    </span>

                    <a href="#" class="filter-link stext-106 trans-04">Red</a>
                  </li>

                  <li class="p-b-6">
                    <span class="fs-15 lh-12 m-r-6" style="color: #aaa;">
                      <i class="zmdi zmdi-circle-o"></i>
                    </span>

                    <a href="#" class="filter-link stext-106 trans-04">White</a>
                  </li>
                </ul>
              </div>

              <div class="filter-col4 p-b-27">
                <div class="mtext-102 cl2 p-b-15">Tags</div>

                <div class="flex-w p-t-4 m-r--5">
                  <a
                    href="#"
                    class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                  >Fashion</a>

                  <a
                    href="#"
                    class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                  >Lifestyle</a>

                  <a
                    href="#"
                    class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                  >Denim</a>

                  <a
                    href="#"
                    class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                  >Streetstyle</a>

                  <a
                    href="#"
                    class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                  >Crafts</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row isotope-grid">
         
          <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women" v-for="item in items" :key="item.id">
            <div class="block2">
              <div class="block2-pic hov-img0">
                <img :src="item.itemimage" alt="IMG-PRODUCT">
              </div>

              <div class="block2-txt flex-w flex-t p-t-14">
                <div class="block2-txt-child1 flex-col-l">
                  <a
                    href="product-detail.html"
                    class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                  >{{item.itemname}}
                  </a>

                  <span class="stext-105 cl3">{{item.price}}</span>
                </div>

                <div class="block2-txt-child2 flex-r p-t-3">
                  <button class="btn btn-primary" @click.prevent="AddToCart(item)"><i class="fa fa-shopingcart"></i>cart</button>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </section>

    <!-- Footer -->
    <home-footer/>

    <!-- Back to top -->
    <div class="btn-back-to-top" id="myBtn">
      <span class="symbol-btn-back-to-top">
        <i class="zmdi zmdi-chevron-up"></i>
      </span>
    </div>

    <!-- Modal1 -->
    <div class="wrap-modal1 js-modal1 p-t-60 p-b-20">
      <div class="overlay-modal1 js-hide-modal1"></div>

      <div class="container">
        <div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
          <button class="how-pos3 hov3 trans-04 js-hide-modal1">
            <img src="images/icons/icon-close.png" alt="CLOSE">
          </button>

          <div class="row">
            <div class="col-md-6 col-lg-7 p-b-30">
              <div class="p-l-25 p-r-30 p-lr-0-lg">
                <div class="wrap-slick3 flex-sb flex-w">
                  <div class="wrap-slick3-dots"></div>
                  <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

                  <div class="slick3 gallery-lb">
                    <div class="item-slick3" data-thumb="images/product-detail-01.jpg">
                      <div class="wrap-pic-w pos-relative">
                        <img src="images/product-detail-01.jpg" alt="IMG-PRODUCT">

                        <a
                          class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                          href="images/product-detail-01.jpg"
                        >
                          <i class="fa fa-expand"></i>
                        </a>
                      </div>
                    </div>

                    <div class="item-slick3" data-thumb="images/product-detail-02.jpg">
                      <div class="wrap-pic-w pos-relative">
                        <img src="images/product-detail-02.jpg" alt="IMG-PRODUCT">

                        <a
                          class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                          href="images/product-detail-02.jpg"
                        >
                          <i class="fa fa-expand"></i>
                        </a>
                      </div>
                    </div>

                    <div class="item-slick3" data-thumb="images/product-detail-03.jpg">
                      <div class="wrap-pic-w pos-relative">
                        <img src="images/product-detail-03.jpg" alt="IMG-PRODUCT">

                        <a
                          class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                          href="images/product-detail-03.jpg"
                        >
                          <i class="fa fa-expand"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-5 p-b-30">
              <div class="p-r-50 p-t-5 p-lr-0-lg">
                <h4 class="mtext-105 cl2 js-name-detail p-b-14">Lightweight Jacket</h4>

                <span class="mtext-106 cl2">$58.79</span>

                <p class="stext-102 cl3 p-t-23">
                  Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                  ligula. Mauris consequat ornare feugiat.
                </p>

                <!--  -->
                <div class="p-t-33">
                  <div class="flex-w flex-r-m p-b-10">
                    <div class="size-203 flex-c-m respon6">Size</div>

                    <div class="size-204 respon6-next">
                      <div class="rs1-select2 bor8 bg0">
                        <select class="js-select2" name="time">
                          <option>Choose an option</option>
                          <option>Size S</option>
                          <option>Size M</option>
                          <option>Size L</option>
                          <option>Size XL</option>
                        </select>
                        <div class="dropDownSelect2"></div>
                      </div>
                    </div>
                  </div>

                  <div class="flex-w flex-r-m p-b-10">
                    <div class="size-203 flex-c-m respon6">Color</div>

                    <div class="size-204 respon6-next">
                      <div class="rs1-select2 bor8 bg0">
                        <select class="js-select2" name="time">
                          <option>Choose an option</option>
                          <option>Red</option>
                          <option>Blue</option>
                          <option>White</option>
                          <option>Grey</option>
                        </select>
                        <div class="dropDownSelect2"></div>
                      </div>
                    </div>
                  </div>

                  <div class="flex-w flex-r-m p-b-10">
                    <div class="size-204 flex-w flex-m respon6-next">
                      <div class="wrap-num-product flex-w m-r-20 m-tb-10">
                        <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                          <i class="fs-16 zmdi zmdi-minus"></i>
                        </div>

                        <input
                          class="mtext-104 cl3 txt-center num-product"
                          type="number"
                          name="num-product"
                          value="1"
                        >

                        <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                          <i class="fs-16 zmdi zmdi-plus"></i>
                        </div>
                      </div>

                      <button
                        class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                      >Add to cart</button>
                    </div>
                  </div>
                </div>

                <!--  -->
                <div class="flex-w flex-m p-l-100 p-t-40 respon7">
                  <div class="flex-m bor9 p-r-10 m-r-11">
                    <a
                      href="#"
                      class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                      data-tooltip="Add to Wishlist"
                    >
                      <i class="zmdi zmdi-favorite"></i>
                    </a>
                  </div>

                  <a
                    href="#"
                    class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Facebook"
                  >
                    <i class="fa fa-facebook"></i>
                  </a>

                  <a
                    href="#"
                    class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Twitter"
                  >
                    <i class="fa fa-twitter"></i>
                  </a>

                  <a
                    href="#"
                    class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Google Plus"
                  >
                    <i class="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHead";
import { mapActions,mapGetters} from 'vuex';


export default {
  data() {
    return {
      items: [
        {
          id: 1,
          itemimage: "http://localhost:8000/images/product-01.jpg",
          itemname: "Esprit Ruffle Shirt",
          price: "$16.64"
        },
        {
          id: 2,
          itemimage: "http://localhost:8000/images/product-02.jpg",
          itemname: "Herschel supply",
          price: "$35.31"
        },
        {
          id: 3,
          itemimage: "http://localhost:8000/images/product-03.jpg",
          itemname: "Only Check Trouser",
          price: "$34.75"
        },
        {
          id: 4,
          itemimage: "http://localhost:8000/images/product-04.jpg",
          itemname: "Classic Trench Coat",
          price: "$93.20"
        },
        {
          id: 5,
          itemimage: "http://localhost:8000/images/product-05.jpg",
          itemname: "Pocket Jumper",
          price: "$103.20"
        },
        {
          id: 6,
          itemimage: "http://localhost:8000/images/product-06.jpg",
          itemname: "Vintage Inspired Classic",
          price: "$89.20"
        },
        {
          id: 7,
          itemimage: "http://localhost:8000/images/product-07.jpg",
          itemname: "Shirt in Stretch Cotton",
          price: "$76.20"
        },
        {
          id: 8,
          itemimage: "http://localhost:8000/images/product-08.jpg",
          itemname: "Pieces Metallic Printed",
          price: "$80.20"
        },

      ]
    };
  },
  components: {
    HomeFooter,
    HomeHeader
  },
  computed: {
    ...mapGetters({
      UserItems: 'UserItems',
      ItemsTotal: 'ItemsTotal'
    })
  },
  mounted() {
    this.initializeMoment();
  },
  methods: {

    ...mapActions(['AddItem']),
      AddToCart(item) {
        this.AddItem(item)
      },

    initializeMoment() {
      /*[ Load page ]
    ===========================================================*/
      $(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 1500,
        outDuration: 800,
        linkElement: ".animsition-link",
        loading: true,
        loadingParentElement: "html",
        loadingClass: "animsition-loading-1",
        loadingInner: '<div class="loader05"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ["animation-duration", "-webkit-animation-duration"],
        overlay: false,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "html",
        transition: function(url) {
          window.location.href = url;
        }
      });

      /*[ Back to top ]
    ===========================================================*/
      var windowH = $(window).height() / 2;

      $(window).on("scroll", function() {
        if ($(this).scrollTop() > windowH) {
          $("#myBtn").css("display", "flex");
        } else {
          $("#myBtn").css("display", "none");
        }
      });

      $("#myBtn").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 300);
      });

      /*==================================================================
    [ Fixed Header ]*/
      var headerDesktop = $(".container-menu-desktop");
      var wrapMenu = $(".wrap-menu-desktop");

      if ($(".top-bar").length > 0) {
        var posWrapHeader = $(".top-bar").height();
      } else {
        var posWrapHeader = 0;
      }

      if ($(window).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass("fix-menu-desktop");
        $(wrapMenu).css("top", 0);
      } else {
        $(headerDesktop).removeClass("fix-menu-desktop");
        $(wrapMenu).css("top", posWrapHeader - $(this).scrollTop());
      }

      $(window).on("scroll", function() {
        if ($(this).scrollTop() > posWrapHeader) {
          $(headerDesktop).addClass("fix-menu-desktop");
          $(wrapMenu).css("top", 0);
        } else {
          $(headerDesktop).removeClass("fix-menu-desktop");
          $(wrapMenu).css("top", posWrapHeader - $(this).scrollTop());
        }
      });

      /*==================================================================
    [ Menu mobile ]*/
      $(".btn-show-menu-mobile").on("click", function() {
        $(this).toggleClass("is-active");
        $(".menu-mobile").slideToggle();
      });

      var arrowMainMenu = $(".arrow-main-menu-m");

      for (var i = 0; i < arrowMainMenu.length; i++) {
        $(arrowMainMenu[i]).on("click", function() {
          $(this)
            .parent()
            .find(".sub-menu-m")
            .slideToggle();
          $(this).toggleClass("turn-arrow-main-menu-m");
        });
      }

      $(window).resize(function() {
        if ($(window).width() >= 992) {
          if ($(".menu-mobile").css("display") == "block") {
            $(".menu-mobile").css("display", "none");
            $(".btn-show-menu-mobile").toggleClass("is-active");
          }

          $(".sub-menu-m").each(function() {
            if ($(this).css("display") == "block") {
              console.log("hello");
              $(this).css("display", "none");
              $(arrowMainMenu).removeClass("turn-arrow-main-menu-m");
            }
          });
        }
      });

      /*==================================================================
    [ Show / hide modal search ]*/
      $(".js-show-modal-search").on("click", function() {
        $(".modal-search-header").addClass("show-modal-search");
        $(this).css("opacity", "0");
      });

      $(".js-hide-modal-search").on("click", function() {
        $(".modal-search-header").removeClass("show-modal-search");
        $(".js-show-modal-search").css("opacity", "1");
      });

      $(".container-search-header").on("click", function(e) {
        e.stopPropagation();
      });

      /*==================================================================
    [ Isotope ]*/
      var $topeContainer = $(".isotope-grid");
      var $filter = $(".filter-tope-group");

      // filter items on button click
      $filter.each(function() {
        $filter.on("click", "button", function() {
          var filterValue = $(this).attr("data-filter");
          $topeContainer.isotope({ filter: filterValue });
        });
      });

      // init Isotope
      $(window).on("load", function() {
        var $grid = $topeContainer.each(function() {
          $(this).isotope({
            itemSelector: ".isotope-item",
            layoutMode: "fitRows",
            percentPosition: true,
            animationEngine: "best-available",
            masonry: {
              columnWidth: ".isotope-item"
            }
          });
        });
      });

      var isotopeButton = $(".filter-tope-group button");

      $(isotopeButton).each(function() {
        $(this).on("click", function() {
          for (var i = 0; i < isotopeButton.length; i++) {
            $(isotopeButton[i]).removeClass("how-active1");
          }

          $(this).addClass("how-active1");
        });
      });

      /*==================================================================
    [ Filter / Search product ]*/
      $(".js-show-filter").on("click", function() {
        $(this).toggleClass("show-filter");
        $(".panel-filter").slideToggle(400);

        if ($(".js-show-search").hasClass("show-search")) {
          $(".js-show-search").removeClass("show-search");
          $(".panel-search").slideUp(400);
        }
      });

      $(".js-show-search").on("click", function() {
        $(this).toggleClass("show-search");
        $(".panel-search").slideToggle(400);

        if ($(".js-show-filter").hasClass("show-filter")) {
          $(".js-show-filter").removeClass("show-filter");
          $(".panel-filter").slideUp(400);
        }
      });

      /*==================================================================
    [ Cart ]*/
      $(".js-show-cart").on("click", function() {
        $(".js-panel-cart").addClass("show-header-cart");
      });

      $(".js-hide-cart").on("click", function() {
        $(".js-panel-cart").removeClass("show-header-cart");
      });

      /*==================================================================
    [ Cart ]*/
      $(".js-show-sidebar").on("click", function() {
        $(".js-sidebar").addClass("show-sidebar");
      });

      $(".js-hide-sidebar").on("click", function() {
        $(".js-sidebar").removeClass("show-sidebar");
      });

      /*==================================================================
    [ +/- num product ]*/
      $(".btn-num-product-down").on("click", function() {
        var numProduct = Number(
          $(this)
            .next()
            .val()
        );
        if (numProduct > 0)
          $(this)
            .next()
            .val(numProduct - 1);
      });

      $(".btn-num-product-up").on("click", function() {
        var numProduct = Number(
          $(this)
            .prev()
            .val()
        );
        $(this)
          .prev()
          .val(numProduct + 1);
      });

      /*==================================================================
    [ Rating ]*/
      $(".wrap-rating").each(function() {
        var item = $(this).find(".item-rating");
        var rated = -1;
        var input = $(this).find("input");
        $(input).val(0);

        $(item).on("mouseenter", function() {
          var index = item.index(this);
          var i = 0;
          for (i = 0; i <= index; i++) {
            $(item[i]).removeClass("zmdi-star-outline");
            $(item[i]).addClass("zmdi-star");
          }

          for (var j = i; j < item.length; j++) {
            $(item[j]).addClass("zmdi-star-outline");
            $(item[j]).removeClass("zmdi-star");
          }
        });

        $(item).on("click", function() {
          var index = item.index(this);
          rated = index;
          $(input).val(index + 1);
        });

        $(this).on("mouseleave", function() {
          var i = 0;
          for (i = 0; i <= rated; i++) {
            $(item[i]).removeClass("zmdi-star-outline");
            $(item[i]).addClass("zmdi-star");
          }

          for (var j = i; j < item.length; j++) {
            $(item[j]).addClass("zmdi-star-outline");
            $(item[j]).removeClass("zmdi-star");
          }
        });
      });

      /*==================================================================
    [ Show modal1 ]*/
      $(".js-show-modal1").on("click", function(e) {
        e.preventDefault();
        $(".js-modal1").addClass("show-modal1");
      });

      $(".js-hide-modal1").on("click", function() {
        $(".js-modal1").removeClass("show-modal1");
      });

      // [inline]

      $(".js-select2").each(function() {
        $(this).select2({
          minimumResultsForSearch: 20,
          dropdownParent: $(this).next(".dropDownSelect2")
        });
      });

      $(".gallery-lb").each(function() {
        // the containers for all your galleries
        $(this).magnificPopup({
          delegate: "a", // the selector for gallery item
          type: "image",
          gallery: {
            enabled: true
          },
          mainClass: "mfp-fade"
        });
      });

      $(".js-pscroll").each(function() {
        $(this).css("position", "relative");
        $(this).css("overflow", "hidden");
        var ps = new PerfectScrollbar(this, {
          wheelSpeed: 1,
          scrollingThreshold: 1000,
          wheelPropagation: false
        });

        $(window).on("resize", function() {
          ps.update();
        });
      });

      $(".js-addwish-b2").on("click", function(e) {
        e.preventDefault();
      });

      $(".js-addwish-b2").each(function() {
        var nameProduct = $(this)
          .parent()
          .parent()
          .find(".js-name-b2")
          .html();
        $(this).on("click", function() {
          swal(nameProduct, "is added to wishlist !", "success");

          $(this).addClass("js-addedwish-b2");
          $(this).off("click");
        });
      });

      $(".js-addwish-detail").each(function() {
        var nameProduct = $(this)
          .parent()
          .parent()
          .parent()
          .find(".js-name-detail")
          .html();

        $(this).on("click", function() {
          swal(nameProduct, "is added to wishlist !", "success");

          $(this).addClass("js-addedwish-detail");
          $(this).off("click");
        });
      });

      /*---------------------------------------------*/

      $(".js-addcart-detail").each(function() {
        var nameProduct = $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .find(".js-name-detail")
          .html();
        $(this).on("click", function() {
          swal(nameProduct, "is added to cart !", "success");
        });
      });

      $(".parallax100").parallax100();

      // Slick */

      /*==================================================================
        [ Slick1 ]*/
      $(".wrap-slick1").each(function() {
        var wrapSlick1 = $(this);
        var slick1 = $(this).find(".slick1");

        var itemSlick1 = $(slick1).find(".item-slick1");
        var layerSlick1 = $(slick1).find(".layer-slick1");
        var actionSlick1 = [];

        $(slick1).on("init", function() {
          var layerCurrentItem = $(itemSlick1[0]).find(".layer-slick1");

          for (var i = 0; i < actionSlick1.length; i++) {
            clearTimeout(actionSlick1[i]);
          }

          $(layerSlick1).each(function() {
            $(this).removeClass($(this).data("appear") + " visible-true");
          });

          for (var i = 0; i < layerCurrentItem.length; i++) {
            actionSlick1[i] = setTimeout(
              function(index) {
                $(layerCurrentItem[index]).addClass(
                  $(layerCurrentItem[index]).data("appear") + " visible-true"
                );
              },
              $(layerCurrentItem[i]).data("delay"),
              i
            );
          }
        });

        var showDot = false;
        if ($(wrapSlick1).find(".wrap-slick1-dots").length > 0) {
          showDot = true;
        }

        $(slick1).slick({
          pauseOnFocus: false,
          pauseOnHover: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          speed: 1000,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 6000,
          arrows: true,
          appendArrows: $(wrapSlick1),
          prevArrow:
            '<button class="arrow-slick1 prev-slick1"><i class="zmdi zmdi-caret-left"></i></button>',
          nextArrow:
            '<button class="arrow-slick1 next-slick1"><i class="zmdi zmdi-caret-right"></i></button>',
          dots: showDot,
          appendDots: $(wrapSlick1).find(".wrap-slick1-dots"),
          dotsClass: "slick1-dots",
          customPaging: function(slick, index) {
            var linkThumb = $(slick.$slides[index]).data("thumb");
            var caption = $(slick.$slides[index]).data("caption");
            return (
              '<img src="' +
              linkThumb +
              '">' +
              '<span class="caption-dots-slick1">' +
              caption +
              "</span>"
            );
          }
        });

        $(slick1).on("afterChange", function(event, slick, currentSlide) {
          var layerCurrentItem = $(itemSlick1[currentSlide]).find(
            ".layer-slick1"
          );

          for (var i = 0; i < actionSlick1.length; i++) {
            clearTimeout(actionSlick1[i]);
          }

          $(layerSlick1).each(function() {
            $(this).removeClass($(this).data("appear") + " visible-true");
          });

          for (var i = 0; i < layerCurrentItem.length; i++) {
            actionSlick1[i] = setTimeout(
              function(index) {
                $(layerCurrentItem[index]).addClass(
                  $(layerCurrentItem[index]).data("appear") + " visible-true"
                );
              },
              $(layerCurrentItem[i]).data("delay"),
              i
            );
          }
        });
      });

      /*==================================================================
        [ Slick2 ]*/
      $(".wrap-slick2").each(function() {
        $(this)
          .find(".slick2")
          .slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $(this),
            prevArrow:
              '<button class="arrow-slick2 prev-slick2"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:
              '<button class="arrow-slick2 next-slick2"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
      });

      $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
        var nameTab = $(e.target).attr("href");
        $(nameTab)
          .find(".slick2")
          .slick("reinit");
      });

      /*==================================================================
        [ Slick3 ]*/
      $(".wrap-slick3").each(function() {
        $(this)
          .find(".slick3")
          .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 6000,

            arrows: true,
            appendArrows: $(this).find(".wrap-slick3-arrows"),
            prevArrow:
              '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:
              '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',

            dots: true,
            appendDots: $(this).find(".wrap-slick3-dots"),
            dotsClass: "slick3-dots",
            customPaging: function(slick, index) {
              var portrait = $(slick.$slides[index]).data("thumb");
              return (
                '<img src=" ' +
                portrait +
                ' "/><div class="slick3-dot-overlay"></div>'
              );
            }
          });
      });
    }
  }
};
</script>

<style scoped>
@import url("http://localhost:8080/fonts/font-awesome-4.7.0/css/font-awesome.min.css");
@import url("http://localhost:8080/fonts/iconic/css/material-design-iconic-font.min.css");
@import url("http://localhost:8080/fonts/linearicons-v1.0.0/icon-font.min.css");
@import url("http://localhost:8080/vendor/animate/animate.css");
@import url("http://localhost:8080/vendor/css-hamburgers/hamburgers.min.css");
@import url("http://localhost:8080/vendor/animsition/css/animsition.min.css");
@import url("http://localhost:8080/vendor/select2/select2.min.css");
@import url("http://localhost:8080/vendor/daterangepicker/daterangepicker.css");
@import url("http://localhost:8080/vendor/slick/slick.css");
@import url("http://localhost:8080/vendor/MagnificPopup/magnific-popup.css");
@import url("http://localhost:8080/vendor/perfect-scrollbar/perfect-scrollbar.css");
@import url("http://localhost:8080/css/util.css");
@import url("http://localhost:8080/css/main.css");
</style>
