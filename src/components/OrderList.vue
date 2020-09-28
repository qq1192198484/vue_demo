<template>
  <div>
    <!--header-->
    <shopHeaher></shopHeaher>

    <section class="wrap user_center_wrap">
      <!--左侧导航-->
      <aside class="user_aside_nav">
        <dl>
          <dt>买家中心</dt>
          <dd><a href="order_list.html">我的订单</a></dd>
          <dd><a href="price_list.html">我的询价单</a></dd>
          <dd><a href="favorite.html">我的收藏</a></dd>
          <dd><a href="address.html">我的地址库</a></dd>
        </dl>
        <dl>
          <dt>控制面板</dt>
          <dd><a href="message.html">站内短消息</a></dd>
          <dd><a href="account.html">资金管理</a></dd>
          <dd><a href="profile.html">个人资料</a></dd>
          <dd><a href="change_password.html">修改密码</a></dd>
        </dl>
      </aside>
      <!--右侧：内容区域-->
      <div class="user_rt_cont">
        <div class="top_title">
          <strong>我的订单</strong>
        </div>
        <!--条件检索-->
        <div style="margin:8px 0;">

          <input type="text" class="textbox textbox_225" placeholder="输入订单编号" />
          <input type="button" value="查询" class="group_btn" />
        </div>
        <ul class="order_li">
          <li v-for="po in productOrders">
            <table class="order_table">
              <caption>
                <strong>订单编号：{{po.orderId}}</strong>
                 <a href="javascript:" v-if="po.status==1" @click="toPay(po.orderId,po.payment)">付款</a>
                 <a href="javascript:" v-else-if="po.status==2">已支付</a>
                 <a href="javascript:" style="position: relative; left: -25px;">订单详情</a>
                 <a href="javascript:" style="position: relative; left: -50px;">总共{{po.payment}}元</a>
              </caption>
              <tr v-for="item in po.productOrderItems">
                <td class="center"><a href="product.html"><img :src="item.productItem.image" style="width:50px;height:50px;" /></a></td>
                <td><a href="product.html">{{item.productItem.title}}</a></td>
                <td class="center"><span class="rmb_icon">{{item.productItem.price}}</span></td>
                <td class="center"><b>{{item.productNum}}</b></td>
                <td class="center"><strong class="rmb_icon">{{item.productItem.price * item.productNum}}</strong></td>

              </tr>
            </table>
          </li>

        </ul>
        <!--分页-->
        <div class="paging" style="text-align:right">
          <a>第一页</a>
          <a class="active">2</a>
          <a>3</a>
          <a>最后一页</a>
        </div>
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
    data:function(){
      return {
        member:{},
        productOrders:[]
      }
    },
    components: {
      shopHeaher,
      shopFooter
    },
    methods: {
      toPay:function(orderId,payment){
        window.location.href="http://localhost:8081/alipayController/pay?orderId="+orderId+"&payment="+payment;
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
              obj.getOrdersByMemberid();
            }
          },
          xhrFields: {
            withCredentials: true
          }
        });
      },
      getOrdersByMemberid: function() {
        var obj = this;
        $.ajax({
          url: "http://localhost:8081/orderController/getOrders/"+obj.member.id,
          type: "get",
          data: {
            "time": new Date().getTime()
          },
          success: function(result) {
            if (result.code == 200) {
              obj.productOrders = result.productOrders;
            }
          },
          xhrFields: {
            withCredentials: true
          }
        });
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
      this.isLogin();
    }
  }
</script>

<style>
</style>
