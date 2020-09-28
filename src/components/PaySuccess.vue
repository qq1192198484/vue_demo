<template>
  <div>
    <!--header-->
    <shopHeaher></shopHeaher>
    <section class="wrap order_back_infor">
      <div style="width:210px;margin:0 auto;overflow:hidden;text-align:left;">
        <h2>恭喜你，支付成功！</h2>
        <p>订单编号{{orderId}}</p>
      </div>
      <div class="order_btm_btn">
        <a href="index.html" class="link_btn_01 buy_btn">返回首页</a>
        <a href="javascript:" class="link_btn_02 add_btn" @click="$router.push('/orderList')">查看我的订单</a>
      </div>
    </section>
    <!--footer-->
    <shopFooter></shopFooter>
  </div>
</template>

<script>
  import shopHeaher from './Header.vue'
  import shopFooter from './Footer.vue'
  export default {
    data: function() {
      return {
        orderId: this.$route.query.orderId,
        productOrder: {}
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

    
    }
  }
</script>

<style>
</style>
