<template>
  <div class="student__menu">
    <div class="company__count__cover">컨택중인 회사
      <span id="company__count">1264</span>
    </div>
    <ul class="student__contents__list">
      <router-link tag="li" to="" class="student__contents__list__link" id="login__link">
        <div class="student__contents__list__link__logo"></div>
        <div class="student__contents__list__link__text">로그인</div>
      </router-link>
      <router-link tag="li" to="" class="student__contents__list__link" id="join__link">
        <div class="student__contents__list__link__logo"></div>
        <div class="student__contents__list__link__text">회원가입</div>
      </router-link>
      <router-link tag="li" to="" class="student__contents__list__link" id="myinfo__link">
        <div class="student__contents__list__link__logo"></div>
        <div class="student__contents__list__link__text">내정보</div>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped>
  .student__menu {
    float: right;
    background-color: #3199DC;
    width: 300px;
    height: 100%;
    text-align: center;
  }

  .company__count__cover {
    margin-top: 100px;
    font-size: 20px;
    color: #fff;
  }

  .company__count__cover span {
    font-size: 55px;
    font-weight: 600;
    display: block;
    margin-top: 20px;
  }

  .student__contents__list {
    width: 150px;
    margin: 0 auto;
    margin-top: 150px;
  }

  .student__contents__list__link {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 20px;
    margin-bottom: 30px;
    cursor: pointer;
  }

  .student__contents__list__link:hover {
    background-color: #fff;
  }

  #login__link .student__contents__list__link__logo {
    background-image: url(../../assets/common/ic_login.png);
  }

  #join__link .student__contents__list__link__logo {
    background-image: url(../../assets/common/ic_signup.png);
  }

  #myinfo__link .student__contents__list__link__logo {
    background-image: url(../../assets/common/ic_mypage.png);
  }

  #login__link:hover .student__contents__list__link__logo {
    background-image: url(../../assets/common/ic_login_hover.png);
  }

  #join__link:hover .student__contents__list__link__logo {
    background-image: url(../../assets/common/ic_signup_hover.png);
  }

  #myinfo__link:hover .student__contents__list__link__logo {
    background-image: url(../../assets/common/ic_mypage_hover.png);
  }

  .student__contents__list__link__logo {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 30px;
    left: 50px;
  }

  .student__contents__list__link__text {
    position: absolute;
    width: 150px;
    bottom: 30px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
  }

  .student__contents__list__link:hover .student__contents__list__link__text {
    color: #3199DC;
  }
</style>