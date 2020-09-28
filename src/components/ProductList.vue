<template>
  <div>


    <!--header-->
    <shopHeaher></shopHeaher>


    <section class="wrap list_class_page">
      <div class="lt_area">

        <!--产品列表-->
        <section class="shop_goods_li">
          <h2>产品{{searchName}}</h2>
          <ul class="favorite_list">

            <li v-for="p in products">
              <a @click.prevent="toProduct(p.id)">
                <img :src="p.image">
                <h3>{{p.title}}</h3>
                <p class="price"><span class="rmb_icon">{{p.price}}</span></p>
                <p class="shop_collect_goods" title="收藏该产品"><span>s</span></p>
              </a>
            </li>


          </ul>
          <!--分页-->
          <div class="paging">
            <a @click.prevent="toPage(1)">第一页</a>
           <!-- <a class="active">2</a> -->
            <a v-for="i in navigatepageNums" :class="{active:i == pageNum}" @click.prevent="toPage(i)">{{i}}</a>
            <a @click.prevent="toPage(pages)">最后一页</a>
          </div>
        </section>

      </div>
      <aside class="rtWrap">
        <dl class="rtLiTwoCol">
          <dt>热门推荐</dt>
          <dd>
            <a href="product.html">
              <img src="../../static/upload/goods002.jpg">
              <p>0.00</p>
            </a>
          </dd>
          <dd>
            <a href="product.html">
              <img src="../../static/upload/goods001.jpg">
              <p>0.00</p>
            </a>
          </dd>
          <dd>
            <a href="product.html">
              <img src="../../static/upload/goods003.jpg">
              <p>0.00</p>
            </a>
          </dd>
          <dd>
            <a href="product.html">
              <img src="../../static/upload/goods004.jpg">
              <p>0.00</p>
            </a>
          </dd>
          <dd>
            <a href="product.html">
              <img src="../../static/upload/goods008.jpg">
              <p>0.00</p>
            </a>
          </dd>
          <dd>
            <a href="product.html">
              <img src="../../static/upload/goods007.jpg">
              <p>0.00</p>
            </a>
          </dd>
          <dd>
            <a href="product.html">
              <img src="../../static/upload/goods006.jpg">
              <p>0.00</p>
            </a>
          </dd>
          <dd>
            <a href="product.html">
              <img src="../../static/upload/goods005.jpg">
              <p>0.00</p>
            </a>
          </dd>
          <dd>
            <a href="product.html">
              <img src="../../static/upload/goods008.jpg">
              <p>0.00</p>
            </a>
          </dd>
          <dd>
            <a href="product.html">
              <img src="../../static/upload/goods007.jpg">
              <p>0.00</p>
            </a>
          </dd>
          <dd>
            <a href="product.html">
              <img src="../../static/upload/goods006.jpg">
              <p>0.00</p>
            </a>
          </dd>
          <dd>
            <a href="product.html">
              <img src="../../static/upload/goods005.jpg">
              <p>0.00</p>
            </a>
          </dd>
        </dl>
      </aside>
    </section>
    <!--footer-->
    <shopFooter></shopFooter>
  </div>
</template>

<script>
  import shopHeaher from './Header.vue'
  import shopFooter from './Footer.vue'
  export default {
    data:function(){
      return {
        cid:this.$route.query.cid,
        searchName:this.$route.query.searchName,
        pageNum:1,
        pageSize:15,
        products:[],
        navigatepageNums:[],
        pages:""
      }
    },


    components: {
      shopHeaher,
      shopFooter
    },
    mounted: function() {
      $("nav .indexAsideNav").hide();
      $("nav .category").mouseover(function() {
        $(".asideNav").slideDown();
      });
      $("nav .asideNav").mouseleave(function() {
        $(".asideNav").slideUp();
      });
      this.getProductItemByPageWithCriteria();
    },
    methods:{
      toProduct:function(id){
        this.$router.push({name:"Product",query:{id:id}})
        this.$router.go(0);
      },
      toPage:function(page){
        this.pageNum = page;
        this.getProductItemByPageWithCriteria();
      },
      getProductItemByPageWithCriteria:function(){
        var obj = this;
        $.ajax({
          url: "http://localhost:8081/productItemController/getProductItemByPageWithCriteria",
          type: "get",
          data:{
            "time":new Date().getTime(),
            "pageNum":obj.pageNum,
            "pageSize":obj.pageSize,
            "cid":obj.cid,
            "searchName":obj.searchName
          },
          success: function(result) {
            if (result.code == 200) {
              obj.pageNum = result.data.pageNum;
              obj.pageSize = result.data.pageSize;
              obj.products = result.data.list;
              obj.navigatepageNums = result.data.navigatepageNums;
              obj.pages = result.data.pages;
              return;
            }
          },
          xhrFields: {
            withCredentials: true
          }
        });


      }
    }
  }
</script>

<style>
</style>
