<template>
  <div>
    <!--header-->
    <shopHeaher></shopHeaher>

    <section class="wrap" style="margin-top:20px;overflow:hidden;">
      <table class="order_table">
        <caption>
          <strong>订单商品</strong>
          <router-link to="/cart">返回购物车修改</router-link>
        </caption>
        <tr v-for="p in productList">
          <td class="center"><a href="product.html"><img :src="p.image" style="width:50px;height:50px;" /></a></td>
          <td><a href="product.html">{{p.title}}</a></td>
          <td>
            <p>颜色：黑色</p>
            <p>规格：{{p.guigeName}}</p>
          </td>
          <td class="center"><span class="rmb_icon">{{p.price}}</span></td>
          <td class="center"><span>{{p.num}}</span></td>
          <td class="center"><strong class="rmb_icon">{{p.price * p.num }}</strong></td>
        </tr>
      </table>

      <div style="margin-left: 500px">
        收件人:<input v-model="consignee" /><br /><br />
        地&emsp;址:<input v-model="address" /><br /><br />
        手机号:<input v-model="phone" /><br /><br />
      </div>

      <div class="order_btm_btn">
        <a href="system_prompts.html" class="link_btn_02 add_btn" @click.prevent="toOrder()">共计金额<strong class="rmb_icon">{{countPrice}}</strong>提交订单</a>
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
        productList: [],
        member: {},
        consignee: "",
        address: "",
        phone: ""
      }

    },

    components: {
      shopHeaher,
      shopFooter
    },
    methods: {
      toOrder: function() {
        var obj = this;
        if (!obj.member.username) {
          alert("请登录");
          return;
        }
        var mydata = {};
        mydata.payment = obj.countPrice;
        mydata.memberId = obj.member.id;
        mydata.productList = obj.productList;
        mydata.consignee = obj.consignee;
        mydata.address = obj.address;
        mydata.phone = obj.phone;
        //提交订单
        $.ajax({
          url: "http://localhost:8081/orderController/addOrder",
          type: "post",
          contentType: 'application/json;charset=UTF-8',
          dataType:"json",
          data: JSON.stringify(mydata),
          success: function(result) {
              if(result.code == 200){
                   alert("添加成功");
                  // alert(result.orderId);
                  //清除购物车
                  var productArr = [];
                  localStorage.setItem("shopCart",JSON.stringify({productList:productArr}));
                  //跳转到成功页面
                  obj.$router.push({name:'SystemPrompts',query:{orderId:result.orderId}})
              }
          },
          xhrFields: {
            withCredentials: true
          }
        });





      },
      isLogin: function() {
        var obj = this;
        $.ajax({
          url: "http://localhost:8081/memberController/getMember",
          type: "get",
          data: {
            "time": new Date().getTime()
          },
          success: function(result) {
            if (result.code == 200) {
              obj.member = result.member;
            }
          },
          xhrFields: {
            withCredentials: true
          }
        });
      },
      getShopCart: function() {
        var shopCart = localStorage.getItem("shopCart");
        this.productList = JSON.parse(shopCart).productList;
      }
    },
    computed: {
      countPrice: function() {
        var count = 0;
        if (this.productList != null && this.productList.length > 0) {
          for (var i = 0; i < this.productList.length; i++) {
            count += this.productList[i].price * this.productList[i].num
          }
        }
        return count;
      }

    },
    mounted: function() {
      $("nav .indexAsideNav").hide();
      $("nav .category").mouseover(function() {
        $(".asideNav").slideDown();
      });
      $("nav .asideNav").mouseleave(function() {
        $(".asideNav").slideUp();
      });

      this.getShopCart();
      this.isLogin();
    }
  }
</script>

<style>
</style>
