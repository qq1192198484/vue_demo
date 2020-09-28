<template>


  <div><!--header-->
  {{productList}}
 <shopHeaher></shopHeaher>

<section class="wrap" style="margin-top:20px;overflow:hidden;">
 <table class="order_table">
  <tr>
   <th>产品</th>
   <th>名称</th>
   <th>属性</th>
   <th>单价</th>
   <th>数量</th>
   <th>小计</th>
   <th>操作</th>
  </tr>
  <tr v-for="(p,index) in productList">
   <td class="center"><a href="product.html"><img :src="p.image" style="width:50px;height:50px;"/></a></td>
   <td><a href="product.html">{{p.title}}</a></td>
   <td>
    <p>颜色：黑色</p>

    <p>规格：{{p.guigeName}}</p>
   </td>
   <td class="center"><span class="rmb_icon">{{p.price}}</span></td>
   <td class="center">
    <input type="button" value="-" class="jj_btn" @click="subNum(p.id,p.guige)">
    <input type="text"  :value="p.num" class="number" readonly/>
    <input type="button" value="+" class="jj_btn" @click="addNum(p.id,p.guige)"/>
   </td>
   <td class="center"><strong class="rmb_icon">{{p.price * p.num }}</strong></td>
   <td class="center"><a @click.prevent="del(index)">删除</a></td>
  </tr>
 </table>
 <div class="order_btm_btn">
  <a href="index.html" class="link_btn_01 buy_btn">继续购买</a>
  <a href="order_confirm.html" class="link_btn_02 add_btn" @click.prevent="toOrderConfirm()">共计金额<strong class="rmb_icon">{{countPrice}}</strong>立即结算</a>
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
    data:function(){
      return{
          productList:[],
      }
    },
    computed:{
      countPrice:function(){
        var count = 0;
        if(this.productList != null && this.productList.length > 0){
          for(var i = 0;i<this.productList.length;i++){
            count += this.productList[i].price * this.productList[i].num
          }
        }
        return count;
      }

    },

    components:{
      shopHeaher,
      shopFooter
    },

    methods:{
        toOrderConfirm:function(){
            this.$router.push("/orderConfirm");
        },
        del:function(index){
          //alert(index);
          var shopCart = localStorage.getItem("shopCart");
          var productArr = JSON.parse(shopCart).productList;
          productArr.splice(index,1);

          localStorage.setItem("shopCart",JSON.stringify({productList:productArr}));
          var shopCart2 = localStorage.getItem("shopCart");
          this.productList = JSON.parse(shopCart2).productList;
          this.$router.go(0);
        },
        subNum:function(id,guige){
            var shopCart = localStorage.getItem("shopCart");
            var productArr = JSON.parse(shopCart).productList;
            for(var i = 0;i<productArr.length;i++){
               if(productArr[i].id == id && productArr[i].guige == guige){
                    if(productArr[i].num == 1){
                      return;
                    }
                    productArr[i].num -= 1;
                    break;
               }
            }
            localStorage.setItem("shopCart",JSON.stringify({productList:productArr}));
            var shopCart2 = localStorage.getItem("shopCart");
            this.productList = JSON.parse(shopCart2).productList;
        },
        addNum:function(id,guige){
          var shopCart = localStorage.getItem("shopCart");
          var productArr = JSON.parse(shopCart).productList;
          for(var i = 0;i<productArr.length;i++){
             if(productArr[i].id == id && productArr[i].guige == guige){
                  productArr[i].num += 1;
                  break;
             }
          }
          localStorage.setItem("shopCart",JSON.stringify({productList:productArr}));
          var shopCart2 = localStorage.getItem("shopCart");
          this.productList = JSON.parse(shopCart2).productList;
        },
        getShopCart:function(){
            var shopCart = localStorage.getItem("shopCart");
            this.productList = JSON.parse(shopCart).productList;
        }
    },
    mounted:function(){
     $("nav .indexAsideNav").hide();
      $("nav .category").mouseover(function(){
        $(".asideNav").slideDown();
        });
      $("nav .asideNav").mouseleave(function(){
        $(".asideNav").slideUp();
        });

      this.getShopCart();

      }


  }
</script>

<style>
</style>
