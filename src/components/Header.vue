<template>
  <!--header-->
  <header>
    <!--topNavBg-->
    <div class="topNavBg">
      <div class="wrap">
        <!--topLeftNav-->
        <ul class="topLtNav" v-if="member.username">
          <li><a href="javascript:" class="obviousText" >欢迎{{member.username}}</a></li>
           <li><a href="javascript:" class="obviousText" @click="$router.push('/orderList')">我的订单</a></li>
        </ul>
        <ul class="topLtNav" v-else>
          <li><a href="login.html" class="obviousText" @click.prevent="$router.push('/login')">亲，请登录</a></li>
          <li><a href="register.html">注册</a></li>
        </ul>
        <!--topRightNav-->
        <ul class="topRtNav">
          <li><a href="user.html">个人中心</a></li>
          <li><a href="cart.html" class="cartIcon">购物车<i v-if="productList.length > 0">{{productList.length}}</i><i
                v-else>0</i></a></li>
          <li><a href="favorite.html" class="favorIcon">收藏夹</a></li>
          <li><a href="article_read.html" class="srvIcon">客户服务</a></li>
        </ul>
      </div>
    </div>
    <!--logoArea-->
    <div class="wrap logoSearch">
      <!--logo-->
      <div class="logo">
        <h1><img src="../../static/images/logo.png" /></h1>
      </div>
      <!--search-->
      <div class="search">
        <ul class="switchNav">
          <li class="active" id="chanpin">产品</li>
        </ul>
        <div class="searchBox">
          <form>
            <div class="inputWrap">
              <input v-model="searchName" type="text" placeholder="输入产品关键词" />
            </div>
            <div class="btnWrap">
              <input type="submit" value="搜索" @click.prevent="toProductList2(searchName)" />
            </div>
          </form>
          <a href="#" class="advancedSearch">高级搜索</a>
        </div>
      </div>
    </div>
    <!--nav-->
    <nav>
      <ul class="wrap navList">
        <li class="category">
          <a>产品分类</a>
          <dl class="asideNav indexAsideNav">
            <span v-for="p in data">
              <dt><a href="channel.html">{{p.name}}</a></dt>
              <dd>
                <a href="#" v-for="p2 in p.productCategorys" @click.prevent="toProductList(p2.id)">{{p2.name}}</a>
              </dd>
            </span>
          </dl>
        </li>
        <li>
          <a href="/" class="active">首页</a>
        </li>
        <li>
          <a href="#">时尚搭配</a>
        </li>
        <li>
          <a href="channel.html">原创设计</a>
        </li>
        <li>
          <a href="channel.html">时尚代购</a>
        </li>
        <li>
          <a href="channel.html">民族风</a>
        </li>
        <li>
          <a href="information.html">时尚搭配</a>
        </li>
        <li>
          <a href="library.html">搭配知识</a>
        </li>
        <li>
          <a href="#">促销专区</a>
        </li>
        <li>
          <a href="#">其他</a>
        </li>
      </ul>
    </nav>

  </header>
</template>

<script>
  export default {
    data: function() {
      return {
        data: [],
        searchName: "",
        productList: [],
        member:{}
      }
    },
    methods: {
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
      toProductList: function(cid) {
        this.$router.push({
          name: "ProductList",
          query: {
            cid: cid
          }
        });
      },
      toProductList2: function(searchName) {
        this.$router.push({
          name: "ProductList",
          query: {
            searchName: searchName
          }
        });
      },
      getProductCategorys: function() {
        var obj = this;
        $.ajax({
          url: "http://localhost:8081/productCategoryController/getProductCategorys",
          type: "get",
          data: {
            "time": new Date().getTime()
          },
          success: function(result) {
            if (result.code == 200) {
              obj.data = result.data;
            }
          },
          xhrFields: {
            withCredentials: true
          }
        });
      },
      getShopCart: function() {
        var shopCart = localStorage.getItem("shopCart");
        if(shopCart != null){
          this.productList = JSON.parse(shopCart).productList;
        }
        
      }

    },
    mounted: function() {
      this.getProductCategorys();
      this.getShopCart();
      this.isLogin();
    }

  }
</script>

<style>
</style>
