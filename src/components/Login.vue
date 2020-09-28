<template>
  <div>
    <shopHeaher></shopHeaher>

    <section class="wrap user_form">
      <div class="lt_img">
        <img src="../../static/images/form_bg.jpg" />
      </div>
      <div class="rt_form">
        <h2>会员登录</h2>
        <ul>
          <li class="user_icon">
            <input type="text" class="textbox" placeholder="账号" v-model="username" />
          </li>
          <li class="user_pwd">
            <input type="password" class="textbox" placeholder="密码" v-model="password" />
          </li>
          <li class="link_li">
            <a href="register.html" title="注册新用户" class="fl">注册新用户</a>
            <a href="find_pwd.html" title="忘记密码" class="fr">忘记密码？</a>
          </li>
          <li class="link_li">
            <input type="button" value="立即登录" class="sbmt_btn" @click="login()" />
          </li>
        </ul>
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
        username: "",
        password: ""
      }
    },
    methods: {
      login: function() {
        var obj = this;
        $.ajax({
          url: "http://localhost:8081/memberController/login",
          type: "get",
          data: {
            "time": new Date().getTime(),
            "username": obj.username,
            "password": obj.password
          },
          success: function(result) {
            if (result.code == 200) {
                obj.$router.push("/");
            }else{
              alert("用户名或密码错误");
            }
          },
          xhrFields: {
            withCredentials: true
          }
        });
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
