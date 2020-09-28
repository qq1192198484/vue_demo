<template>
  <div><!--header-->
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
   <strong>订单：201301141737</strong>
  </div>
  <dl class="order_detail_infor">
   <dt>订单信息</dt>
   <dd><span>下单时间：</span>2013-01-14 17:50:58</dd>
   <dd><span>付款时间：</span>2013-01-15 13:30:58</dd>
   <dd><span>订单状态：</span>未付款<a>立即付款</a></dd>
   <dd><span>收件人：</span>DeathGhost</a></dd>
   <dd><span>联系电话：</span>1880927**73</a></dd>
   <dd><span>收件地址：</span>陕西省西安市陵城区幸福大道222号万达广场B座532室内</a></dd>
  </dl>
    <table class="order_table">
     <caption><strong>订单商品</strong><span class="fr">订单合计金额：<b class="rmb_icon">83.00</b> 配送费用：<b class="rmb_icon">25.00</b></span></caption>
     <tr>
      <th>产品图</th>
      <th>产品名</th>
      <th>单价</th>
      <th>数量</th>
      <th>小计</th>
     </tr>
     <tr>
      <td class="center"><a href="product.html"><img src="../../static/upload/goods009.jpg" style="width:50px;height:50px;"/></a></td>
      <td><a href="product.html">这里是产品名称哦</a></td>
      <td class="center"><span class="rmb_icon">52.00</span></td>
      <td class="center"><b>1</b></td>
      <td class="center"><strong class="rmb_icon">52.00</strong></td>
     </tr>
     <tr>
      <td class="center"><a href="product.html"><img src="../../static/upload/goods009.jpg" style="width:50px;height:50px;"/></a></td>
      <td><a href="product.html">这里是产品名称哦</a></td>
      <td class="center"><span class="rmb_icon">52.00</span></td>
      <td class="center"><b>1</b></td>
      <td class="center"><strong class="rmb_icon">52.00</strong></td>
     </tr>
    </table>
 </div>
</section>
<!--footer-->
    <shopFooter></shopFooter>
</div>
</template>

<script>
import shopHeaher from './Header.vue'
import shopFooter from './Footer.vue'
  export default{
    components:{
      shopHeaher,
      shopFooter
    },
    mounted:function(){
     $("nav .indexAsideNav").hide();
      $("nav .category").mouseover(function(){
        $(".asideNav").slideDown();
        });
      $("nav .asideNav").mouseleave(function(){
        $(".asideNav").slideUp();
        });
        }
  }
</script>

<style>
</style>
