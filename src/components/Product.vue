<template>
  <div>
    <!--header-->
   <shopHeaher></shopHeaher>

    <!--导航指向-->
    <aside class="wrap insideLink">
      <a href="index.html">首页</a>
      <a href="product_list.html">时尚女装</a>
    </aside>
    <section class="wrap product_detail">
      <!--img:left-->
      <div class="gallery">
        <div>
          <div id="preview" class="spec-preview"> <span class="jqzoom"><img jqimg="../../static/upload/goods.jpg" :src="product.image" /></span>
          </div>
          <!--缩图结束-->
        </div>
      </div>

      <!--text:right-->
      <div class="rt_infor">
        <!--lt_infor-->
        <div class="goods_infor">
          <h2>{{product.title}}</h2>
          <ul>
            <li>
              <dl class="horizontal">
                <dt>价格：</dt>
                <dd><strong class="rmb_icon univalent">{{product.price}}</strong>元</dd>
              </dl>
            </li>
            <li>
              <dl class="horizontal">
                <dt>上架时间：</dt>
                <dd><time>{{product.created}}</time></dd>
              </dl>
            </li>
            <li>
              <dl class="horizontal">
                <dt>品牌：</dt>
                <dd><em>品牌名</em></dd>
              </dl>
            </li>
            <li class="statistics">
              <dl class="vertical">
                <dt>月销量</dt>
                <dd>20</dd>
              </dl>
              <dl class="vertical">
                <dt>累计评论</dt>
                <dd>198</dd>
              </dl>
              <dl class="vertical">
                <dt>关注</dt>
                <dd>230</dd>
              </dl>
            </li>
            <li>
              <dl class="horizontal horizontal_attr">
                <dt>规格:</dt>
               <dd>
                   <label v-for="g in guiges" :class="{isTrue:g.id == gid}">
                     <input @click="gname = g.specs" type="radio" name="guige" :value="g.id" v-model="gid" />{{g.specs}}
                     </label>
                </dd>
              </dl>
            </li>
            <li>
              <dl class="horizontal horizontal_attr">
                <dt>颜色：</dt>
                <dd>
                  <label><input type="radio" name="yanse" />黑色</label>
                  <label><input type="radio" name="yanse" />蓝色</label>
                  <label><input type="radio" name="yanse" />白色</label>
                </dd>
              </dl>
            </li>
            </li>
            <li>
              <dl class="horizontal horizontal_attr">
                <dt>库存：</dt>
                <dd>
                  <span>{{product.num}}</span>
                </dd>
              </dl>
            </li>
            <li class="last_li">
              <input type="button" value="立即购买" class="buy_btn" onClick="javascript:location.href='cart.html'" />
              <input type="button" value="加入购物车" class="add_btn" @click="addProductToCar()" />
            </li>
          </ul>
        </div>

      </div>
    </section>

    <section class="wrap product_detail_btm">
      <article>
        <ul class="item_tab">
         <li><a class="curr_li">商品详情</a></li>
         <li><a>商品评价（2893）</a></li>
         <li><a>成交记录（1892）</a></li>
        </ul>
        <!--商品详情-->
        <div class="cont_wrap active" v-html="productDesc.itemDesc">

        </div>
        <!--商品评价-->
        <div class="cont_wrap">
         <table class="table">
          <tr>
           <td width="20%" align="center">李*锋</td>
           <td width="60%">这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦</td>
           <td width="20%" align="center"><time>2013-01-13 15:06</time></td>
          </tr>
          <tr>
           <td width="20%" align="center">彭**法</td>
           <td width="60%">这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦</td>
           <td width="20%" align="center"><time>2013-01-13 15:06</time></td>
          </tr>
          <tr>
           <td width="20%" align="center">代**彭</td>
           <td width="60%">这里是评论内容哦这里是评论内容哦这里是评论内容哦容哦这里是评论内容哦这里是评论内容哦这里是评论容哦这里是评论内容哦这里是评论内容哦这里是评论容哦这里是评论内容哦这里是评论内容哦这里是评论容哦这里是评论内容哦这里是评论内容哦这里是评论容哦这里是评论内容哦这里是评论内容哦这里是评论容哦这里是评论内容哦这里是评论内容哦这里是评论容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦</td>
           <td width="20%" align="center"><time>2013-01-13 15:06</time></td>
          </tr>
         </table>
         <!--分页-->
         <div class="paging">
          <a>第一页</a>
          <a class="active">2</a>
          <a>3</a>
          <a>...</a>
          <a>89</a>
          <a>最后一页</a>
         </div>
        </div>
        <!--成交记录-->
        <div class="cont_wrap">
         <table class="table">
          <tr>
           <th>买家</th>
           <th>产品属性</th>
           <th>数量</th>
           <th>成交时间</th>
          </tr>
          <tr>
           <td align="center">李**强</td>
           <td>
            <p>颜色：黑色</p>
            <p>规格：M</p>
           </td>
           <td align="center"><b>1</b></td>
           <td align="center"><time>2013-01-13 15:25:39</time></td>
          </tr>
          <tr>
           <td align="center">李**强</td>
           <td>
            <p>颜色：黑色</p>
            <p>规格：L</p>
           </td>
           <td align="center"><b>1</b></td>
           <td align="center"><time>2013-01-13 15:25:39</time></td>
          </tr>
          <tr>
           <td align="center">葛**华</td>
           <td>
            <p>颜色：白色</p>
            <p>规格：XL</p>
           </td>
           <td align="center"><b>5</b></td>
           <td align="center"><time>2013-01-13 15:25:39</time></td>
          </tr>
         </table>

         <!--分页-->
         <div class="paging">
          <a>第一页</a>
          <a class="active">2</a>
          <a>3</a>
          <a>...</a>
          <a>89</a>
          <a>最后一页</a>
         </div>
        </div>
       </article>

   <aside>
     <dl class="aside_pro_list">
      <dt>
       <strong>精品推荐</strong>
       <a>更多</a>
      </dt>
      <dd>
       <a href="#" class="goods_img"><img src="../../static/upload/goods002.jpg"/></a>
       <div class="rt_infor">
        <h3><a href="#">时尚女装 2019春季针织衫</a></h3>
        <p><del class="rmb_icon">1298.00</del></p>
        <p><strong class="rmb_icon">980.00</strong></p>
       </div>
      </dd>
      <dd>
       <a href="#" class="goods_img"><img src="../../static/upload/goods002.jpg"/></a>
       <div class="rt_infor">
        <h3><a href="#">时尚女装 2019春季针织衫</a></h3>
        <p><del class="rmb_icon">1298.00</del></p>
        <p><strong class="rmb_icon">980.00</strong></p>
       </div>
      </dd>
      <dd>
       <a href="#" class="goods_img"><img src="../../static/upload/goods002.jpg"/></a>
       <div class="rt_infor">
        <h3><a href="#">时尚女装 2019春季针织衫</a></h3>
        <p><del class="rmb_icon">1298.00</del></p>
        <p><strong class="rmb_icon">980.00</strong></p>
       </div>
      </dd>
       <dd>
       <a href="#" class="goods_img"><img src="../../static/upload/goods002.jpg"/></a>
       <div class="rt_infor">
        <h3><a href="#">时尚女装 2019春季针织衫</a></h3>
        <p><del class="rmb_icon">1298.00</del></p>
        <p><strong class="rmb_icon">980.00</strong></p>
       </div>
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
        id:this.$route.query.id,
        product:{},
        guiges:[],
        productDesc:{},
        gid:"",
        gname:""

      }
    },
    methods:{
        addProductToCar:function(){
            //localStorage.clear();
            //获取购物车
           var shopCart = localStorage.getItem("shopCart");
           //第一次加入购物车
           if(shopCart == null || shopCart == ""){
              //创建购物车,加入商品信息
              var productInfo = {};
              productInfo.id = this.product.id;
              productInfo.image = this.product.image;
              productInfo.title = this.product.title;
              productInfo.price = this.product.price;
              productInfo.num = 1;
              productInfo.guige = this.gid;
              productInfo.guigeName = this.gname
              localStorage.setItem("shopCart",JSON.stringify({productList:[productInfo]}));
           }else{
             var productInfo = {};
             productInfo.id = this.product.id;
             productInfo.image = this.product.image;
             productInfo.title = this.product.title;
             productInfo.price = this.product.price;
             productInfo.num = 1;
             productInfo.guige = this.gid;
             productInfo.guigeName = this.gname
             //不是第一次加入购物了，获取购物车
             var shopCart = localStorage.getItem("shopCart");
             //判断购物车，是否商品一样，规格一样，原来的商品数量+1
             var productArr = JSON.parse(shopCart).productList;
             var flag = false;  //标识商品是否存在，true为存在，false为不存在
             for(var i = 0;i<productArr.length;i++){
                if(productArr[i].id == productInfo.id && productArr[i].guige == productInfo.guige){
                    productArr[i].num += 1;
                    flag = true;
                    break;
                }
             }
             if(flag){
                localStorage.setItem("shopCart",JSON.stringify({productList:productArr}));
             }else{
                //如果不一样，添加到购物车
                productArr.push(productInfo);
                localStorage.setItem("shopCart",JSON.stringify({productList:productArr}));
             }
           }
           this.$router.push("/cart");

        },
        getProductItemById:function(){
          var obj = this;
          $.ajax({
                    url:"http://localhost:8081/productItemController/getProductItemById/"+obj.id,
                    type:"get",
                    data:{
                      "time":new Date().getTime()
                    },
                    success:function(result){
                        if(result.code == 200){
                          obj.product = result.data;
                        }
                    },
                    xhrFields: {
                      withCredentials: true
                    }
          });
        },
        getAllProductSpecs:function(){
          var obj = this;
          $.ajax({
                    url:"http://localhost:8081/productSpecsController/getAllProductSpecs",
                    type:"get",
                    data:{
                      "time":new Date().getTime()
                    },
                    success:function(result){
                        if(result.code == 200){
                          obj.guiges = result.data;
                        }
                    },
                    xhrFields: {
                      withCredentials: true
                    }
          });
        },

        getProductItemDesc:function(){
          var obj = this;
          $.ajax({
                    url:"http://localhost:8081/productItemDescController/getProductItemDesc/"+obj.id,
                    type:"get",
                    data:{
                      "time":new Date().getTime()
                    },
                    success:function(result){
                        if(result.code == 200){
                          obj.productDesc = result.data;
                        }
                    },
                    xhrFields: {
                      withCredentials: true
                    }
          });
        }

    },
    components:{
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

      //detail tab
      $(".product_detail_btm .item_tab a").click(function(){
      	   var liindex = $(".product_detail_btm .item_tab a").index(this);
      	   $(this).addClass("curr_li").parent().siblings().find("a").removeClass("curr_li");
           $(".cont_wrap").eq(liindex).fadeIn(150).siblings(".cont_wrap").hide();
      	  });
       //radio
      $(".horizontal_attr label").click(function(){
           $(this).addClass("isTrue").siblings().removeClass("isTrue");
      });

      this.getProductItemById();
      this.getAllProductSpecs();
      this.getProductItemDesc();
      //顶部
      window.scrollTo(0,0);
    },
  }
</script>

<style>
</style>
