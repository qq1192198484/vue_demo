<template>
  <div>
    <!--header-->
     <shopHeaher></shopHeaher>

    <section class="wrap user_form">
     <div class="lt_img">
      <img src="../../static/images/form_bg.jpg"/>
     </div>
     <div class="rt_form">
      <h2>会员注册</h2>
      <ul>
       <li class="user_icon">
        <input type="text" class="textbox" placeholder="手机号码"/>
       </li>
       <li class="link_li">
        <input type="button" value="获取手机校验码" class="get_num_btn"/>
       </li>
       <li class="user_cc">
        <input type="text" class="textbox" placeholder="手机校验码"/>
       </li>
       <li class="user_pwd">
        <input type="password" class="textbox" placeholder="设置密码"/>
       </li>
       <li class="user_pwd">
        <input type="password" class="textbox" placeholder="确认密码"/>
       </li>

       <li class="link_li">
        <input type="button" value="立即注册" class="sbmt_btn"/>
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
