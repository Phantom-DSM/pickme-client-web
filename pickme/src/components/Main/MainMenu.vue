<template>
  <div class="main__menu">
    <ul class="main__menu__lists">
      <router-link :to="{name:'main-content-hire'}" class="main__menu__list__link" exact-active-class="active">
        채용공고
      </router-link>
      <router-link :to="{name:'main-content-company'}" class="main__menu__list__link" exact-active-class="active">
        회사목록
      </router-link>
      <router-link :to="{name:'main-content-talent'}" class="main__menu__list__link" exact-active-class="active">
        인재목록
      </router-link>
      <router-link :to="{name:'main-content-clinic'}" class="main__menu__list__link" exact-active-class="active">
        클리닉
      </router-link>
    </ul>
    <router-view></router-view>
  </div> 
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .main__menu{
    margin-top: 30px;
  }

  .main__menu__lists {
    width: 600px;
    margin: 0 auto;
    height: 100%;
    border: 3px solid #3199DC;
    border-radius: 25px;
    display: flex;
  }

  .main__menu__list__link{
    width: 25%;
    height: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 600; 
    border-radius: 25px;
    padding: 8px 0px;
    text-decoration: none;
    color: #3199DC;
  }
  .main__menu__list__link.active{
    background-color: #3199DC;
    color: #fff;
  }
</style>