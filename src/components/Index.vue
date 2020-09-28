<template>
  <div>
    <!--头部-->
    <shopHeaher></shopHeaher>

    <!--advertisment area-->
    <section class="wrap">
     <!--ctCont-->
     <div class="IdxmainArea">
        <!--slide-->
        <div id="slide">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
             <a href="#">
              <img src="../../static/upload/slide01.jpg"/>
             </a>
            </div>
            <div class="swiper-slide">
             <a href="#">
              <img src="../../static/upload/slide02.jpg"/>
             </a>
            </div>
            <div class="swiper-slide">
             <a href="#">
              <img src="../../static/upload/slide03.jpg"/>
             </a>
            </div>


          </div>
          <div class="pagination"></div>
        </div>
        <!--singleAd-->
        <div class="singleAd">
         <a href="#">
          <img src="../../static/upload/sigleAd.jpg"/>
         </a>
        </div>
         <!--bestShop-->
        <dl class="bestShop">
         <dt>
          <strong>强烈推荐</strong>
          <a href="shop_list.html" class="fr">更多</a>
         </dt>
         <dd>
          <a href="shop.html">
           <img src="../../static/upload/001.jpg"/>
           <h2>DM精品女装</h2>
          </a>
         </dd>
         <dd>
          <a href="shop.html">
           <img src="../../static/upload/002.jpg"/>
           <h2>DM精品女装</h2>
          </a>
         </dd>
         <dd>
          <a href="shop.html">
           <img src="../../static/upload/003.jpg"/>
           <h2>DM精品女装</h2>
          </a>
         </dd>
         <dd>
          <a href="shop.html">
           <img src="../../static/upload/004.jpg"/>
           <h2>DM精品女装</h2>
          </a>
         </dd>
         <dd>
          <a href="shop.html">
           <img src="../../static/upload/005.jpg"/>
           <h2>DM精品女装</h2>
          </a>
         </dd>
         <dd>
          <a href="shop.html">
           <img src="../../static/upload/006.jpg"/>
           <h2>DM精品女装</h2>
          </a>
         </dd>
         <dd>
          <a href="shop.html">
           <img src="../../static/upload/007.jpg"/>
           <h2>DM精品女装</h2>
          </a>
         </dd>
         <dd>
          <a href="shop.html">
           <img src="../../static/upload/008.jpg"/>
           <h2>DM精品女装</h2>
          </a>
         </dd>
        </dl>
     </div>
     <!--asdCont-->
     <div class="IdxAsideRt">
      <!--login-->
      <div class="idxRtLogin">
       <div class="fstArea">
         <a href="#" class="userIcon">
          <img src="../../static/images/icon/DefaultAvatar.jpg">
         </a>
         <div class="rtInfor">
          <p>Hi!你好</p>
          <p class="obviousText">亲，请登陆</p>
         </div>
        </div>
        <div class="secArea">
         <a href="login.html">登录</a>
         <a href="register.html">免费注册</a>
        </div>
       </div>
       <dl class="idxRtAtc">
        <dt>
         <em class="obviousText">最新公告</em>
         <a href="article_list.html">more</a>
        </dt>
        <dd><a href="article_read.html">2015年12月20日系统升级通告统升级通告</a></dd>
        <dd><a href="article_read.html">2015年12月20日系统升级通告</a></dd>
        <dd><a href="article_read.html">2015年12月20日系统升级通告</a></dd>
        <dd><a href="article_read.html">2015年12月20日系统升级通告</a></dd>
        <dd><a href="article_read.html">2015年12月20日系统升级通告</a></dd>
       </dl>
       <dl class="idxRtAtc">
        <dt>
         <em>质量标准技术参数</em>
         <a href="article_list.html">more</a>
        </dt>
        <dd><a href="article_read.html">2015年12月20日系统升级通告统升级通告</a></dd>
        <dd><a href="article_read.html">2015年12月20日系统升级通告</a></dd>
       </dl>
      </div>
    </section>
    <!--productList-->
    <section class="wrap idxproLi">
     <h2>
      <strong>
       <a href="channel.html">热门推荐区</a>
      </strong>
      <span class="classLi">
       <a href="product_list.html">夏装</a>
       <a href="product_list.html">连衣裙</a>
       <a href="product_list.html">开衫</a>
       <a href="product_list.html">牛仔裤</a>
       <a href="product_list.html">背带裤</a>
       <a href="product_list.html">T恤</a>
      </span>
     </h2>
     <div class="ltArea">
      <!--ad:category pic-->
       <a href="product_list.html"><img src="../../static/upload/bestCategoryPic01.jpg"/></a>
     </div>
     <div class="ctLi">
      <ul>
       <li v-for="p in products">
        <a @click.prevent="toProduct(p.id)">
         <img :src="p.image"/>
         <h3>{{p.title}}</h3>
         <p><span>{{p.price}}</span></p>
        </a>
       </li>

      </ul>
      <!--bestBrand-->
      <div class="idxBrandLi">
       <a href="shop.html"><img src="../../static/upload/brandLogo01.jpg"/></a>
       <a href="shop.html"><img src="../../static/upload/brandLogo02.jpg"/></a>
       <a href="shop.html"><img src="../../static/upload/brandLogo03.jpg"/></a>
       <a href="shop.html"><img src="../../static/upload/brandLogo04.jpg"/></a>
      </div>
     </div>
    </section>

    <section class="wrap idxproLi">
     <h2>
      <strong>
       <a href="channel.html">最新商品区</a>
      </strong>
      <span class="classLi">
       <a href="product_list.html">夏装</a>
       <a href="product_list.html">连衣裙</a>
       <a href="product_list.html">开衫</a>
       <a href="product_list.html">牛仔裤</a>
       <a href="product_list.html">背带裤</a>
       <a href="product_list.html">T恤</a>
      </span>
     </h2>
     <div class="ltArea">
      <!--ad:category pic-->
       <a href="product_list.html"><img src="../../static/upload/bestCategoryPic02.jpg"/></a>
     </div>
     <div class="ctLi">
      <ul>
       <li>
        <a href="product.html">
         <img src="../../static/upload/goods005.jpg"/>
         <h3>2019时尚新款</h3>
         <p><span>1000.00</span></p>
        </a>
       </li>
       <li>
        <a href="product.html">
         <img src="../../static/upload/goods006.jpg"/>
         <h3>2019时尚新款</h3>
         <p><span>545.00</span></p>
        </a>
       </li>
       <li>
        <a href="product.html">
         <img src="../../static/upload/goods007.jpg"/>
         <h3>2019时尚新款</h3>
         <p><span>1000.00</span></p>
        </a>
       </li>
       <li>
        <a href="product.html">
         <img src="../../static/upload/goods008.jpg"/>
         <h3>2019时尚新款</h3>
         <p><span>1000.00</span></p>
        </a>
       </li>
       <li>
        <a href="product.html">
         <img src="../../static/upload/goods009.jpg"/>
         <h3>2019时尚新款</h3>
         <p><span>980.00</span></p>
        </a>
       </li>
       <li>
        <a href="product.html">
         <img src="../../static/upload/goods010.jpg"/>
         <h3>2019时尚新款</h3>
         <p><span>642.00</span></p>
        </a>
       </li>
       <li>
        <a href="product.html">
         <img src="../../static/upload/goods005.jpg"/>
         <h3>2019时尚新款</h3>
         <p><span>793.00</span></p>
        </a>
       </li>
       <li>
        <a href="product.html">
         <img src="../../static/upload/goods006.jpg"/>
         <h3>2019时尚新款</h3>
         <p><span>755.00</span></p>
        </a>
       </li>
       <li>
        <a href="product.html">
         <img src="../../static/upload/goods007.jpg"/>
         <h3>2019时尚新款</h3>
         <p><span>360.00</span></p>
        </a>
       </li>
       <li>
        <a href="product.html">
         <img src="../../static/upload/goods008.jpg"/>
         <h3>2019时尚新款</h3>
         <p><span>1255.00</span></p>
        </a>
       </li>
      </ul>
      <!--bestBrand-->
      <div class="idxBrandLi">
       <a href="shop.html"><img src="../../static/upload/brandLogo01.jpg"/></a>
       <a href="shop.html"><img src="../../static/upload/brandLogo02.jpg"/></a>
       <a href="shop.html"><img src="../../static/upload/brandLogo03.jpg"/></a>
       <a href="shop.html"><img src="../../static/upload/brandLogo04.jpg"/></a>
      </div>
     </div>
    </section>
    <!--case-->
    <section class="wrap idexCase">
     <h2>
      <strong>流行商品区</strong>
      <a href="#">more</a>
     </h2>
     <ul>
      <li>
       <a href="#">
        <img src="../../static/upload/case001.jpg"/>
        <h3>时尚搭配案例</h3>
       </a>
      </li>
      <li>
       <a href="#">
        <img src="../../static/upload/case002.jpg"/>
        <h3>时尚搭配案例</h3>
       </a>
      </li>
      <li>
       <a href="#">
        <img src="../../static/upload/case003.jpg"/>
        <h3>时尚搭配案例</h3>
       </a>
      </li>
      <li>
       <a href="#">
        <img src="../../static/upload/case004.jpg"/>
        <h3>时尚搭配案例</h3>
       </a>
      </li>
      <li>
       <a href="#">
        <img src="../../static/upload/case005.jpg"/>
        <h3>时尚搭配案例</h3>
       </a>
      </li>
      <li>
       <a href="#">
        <img src="../../static/upload/case001.jpg"/>
        <h3>时尚搭配案例</h3>
       </a>
      </li>
      <li>
       <a href="#">
        <img src="../../static/upload/case002.jpg"/>
        <h3>时尚搭配案例</h3>
       </a>
      </li>
      <li>
       <a href="#">
        <img src="../../static/upload/case003.jpg"/>
        <h3>时尚搭配案例</h3>
       </a>
      </li>
      <li>
       <a href="#">
        <img src="../../static/upload/case004.jpg"/>
        <h3>时尚搭配案例</h3>
       </a>
      </li>
      <li>
       <a href="#">
        <img src="../../static/upload/case005.jpg"/>
        <h3>时尚搭配案例</h3>
       </a>
      </li>
     </ul>
    </section>


    <shopFooter></shopFooter>



  </div>
</template>

<script>

import shopHeaher from './Header.vue'
import shopFooter from './Footer.vue'


export default {
  components:{
    shopHeaher,
    shopFooter
  },
  data:function(){
    return {
      products:[]
    }
  },
  methods:{
    toProduct:function(id){
      this.$router.push({name:"Product",query:{id:id}});
      this.$router.go(0);
    },
    getProductItems:function(){
        var obj = this;
        $.ajax({
                  url:"http://localhost:8081/productItemController/getProductItems",
                  type:"get",
                  data:{
                    "time":new Date().getTime(),
                    "pageNum":1,
                    "pageSize":10
                  },
                  success:function(result){
                      if(result.code == 200){
                        obj.products = result.data.list;
                      }
                  },
                  xhrFields: {
                    withCredentials: true
                  }
        });
    }
  },
  mounted:function(){
    this.getProductItems();
  }
}
</script>

<style scoped>

</style>
