<template>
  <div class="main__content__clinic">
    <div class="main__clinic__el">
      <div class="clinic__ic" id="resume-ic">
      </div>
      <div class="clinic__text__cover">
        <span class="clinic__text">이력서 클리닉</span>
        <span class="clinic__sub__text">선생님께 이력서를 보여드리고
          <br>피드백을 신청합니다.</span>
        <div class="clinic__btn__cover">
          <router-link to="" tag="button" class="clinic__btn">신청</router-link>
          <router-link to="" tag="button" class="clinic__btn">내역</router-link>
        </div>
      </div>
    </div>
    <div class="main__clinic__el">
      <div class="clinic__ic" id="introduction-ic"></div>
      <div class="clinic__text__cover">
        <span class="clinic__text">자기소개서 클리닉</span>
        <span class="clinic__sub__text">선생님께 자기소개서를
          <br>보여드리고 피드백을 신청합니다.</span>
        <div class="clinic__btn__cover">
          <router-link to="" tag="button" class="clinic__btn">신청</router-link>
          <router-link to="" tag="button" class="clinic__btn">내역</router-link>
        </div>
      </div>
    </div>
    <div class="main__clinic__el">
      <div class="clinic__ic" id="consulting-ic"></div>
      <div class="clinic__text__cover">
        <span class="clinic__text">상담 신청하기</span>
        <span class="clinic__sub__text">
          온라인으로 상담 일정을 보고
          <br>신청을 진행합니다.</span>
        <div class="clinic__btn__cover">
          <router-link to="" tag="button" class="clinic__btn">신청</router-link>
          <router-link to="" tag="button" class="clinic__btn">내역</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .main__content__clinic {
    width: 1100px;
    height: 340px;
    margin: 0 auto;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
  }

  .main__clinic__el {
    display: block;
    width: 320px;
    height: 100%;
    box-shadow: 0px 3px 10px rgb(113, 113, 113);
    border-radius: 15px;
    background-color: #fff;
    text-align: center;
    margin: 0px 1.5%;
  }

  .clinic__ic {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 58px;
    margin-bottom: 39px;
  }

  .clinic__text__cover {
    width: 100%;
    height: 100px;
  }

  .clinic__text {
    display: inline-block;
    width: 100%;
    font-size: 19px;
    font-weight: bold;
  }

  .clinic__sub__text {
    display: inline-block;
    width: 100%;
    font-size: 17px;
    font-weight: bold;
    color: #616161;
    margin-top: 31px;
    line-height: 25px;
  }

  .clinic__btn__cover {
    width: 230px;
    margin: 0 auto;
    margin-top: 42px;
    display: none;
  }

  .clinic__btn {
    width: 100px;
    height: 35px;
    background-color: #3199DC;
    border: none;
    border-radius: 25px;
    padding: 0;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
  }

  .clinic__btn:first-child {
    float: left;
  }

  .clinic__btn:last-child {
    float: right;
  }

  .main__clinic__el:hover {
    transform: scale(1.05);
  }

  .main__clinic__el:hover .clinic__sub__text {
    display: none;
  }

  .main__clinic__el:hover .clinic__btn__cover {
    display: block;
  }

  #resume-ic {
    background-image: url(../../../assets/main/ic_clinic_resume.png);
  }

  #consulting-ic {
    background-image: url(../../../assets/main/ic_clinic_consulting.png);
  }

  #introduction-ic {
    background-image: url(../../../assets/main/ic_clinic_introduction.png);
  }
</style>