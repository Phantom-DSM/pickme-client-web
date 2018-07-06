<template>
  <div class="main__content__company">
    <router-link to="" tag="div" :key="index" v-for="(company, index) in companys" class="company__el">
      <div class="company__photo"></div>
      <div class="company__name">{{ company.name }}</div>
      <div class="company__explanation"> {{company.explanation}} </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        companys: [{
          no: 1,
          src: '../../assets/main/ex-naver.png',
          name: '우아한 형제들',
          explanation: '법률을 지키고 서로를 배려하면서 이해상충을 피하고 자산을 보호하는 우아한 사람이 되자',
        },{
          no: 2,
          src: '../../assets/main/ex-naver.png',
          name: '우아한 형제',
          explanation: '법률을 지키고 서로를 배려하면서 이해상충을 피하고 자산을 보호하는 우아한 사람이 되자',
        },{
          no: 3,
          src: '../../assets/main/ex-naver.png',
          name: '우아한 형제들',
          explanation: '법률을 지키고 서로를 배려하면서 이해상충을 피하고 자산을 보호하는 우아한 사람이 되자',
        },{
          no: 4,
          src: '../../assets/main/ex-naver.png',
          name: '우아한 형제들',
          explanation: '법률을 지키고 서로를 배려하면서 이해상충을 피하고 자산을 보호하는 우아한 사람이 되자',
        },],
        innerWidth: 0,
        singleWidth: 0,
        currentIndex: 0
      }
    },
  }
</script>
<style scoped>
  .main__content__company {
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow-y: scroll;
  }

  .main__content__company::-webkit-scrollbar {
    width: 18px;
  }

  .main__content__company::-webkit-scrollbar-track {
    background-color: #E1E1E1;
    border-radius: 10px;
  }

  .main__content__company::-webkit-scrollbar-thumb {
    background-color: #3096D7;
    border-radius: 10px;
  }

  .company__el {
    width: 350px;
    height: 350px;
    background-color: #fff;
    box-shadow: 0px 3px 10px rgb(113, 113, 113);
    border-radius: 10px;
    margin-bottom: 50px;
    margin-top: 10px;
    cursor: pointer;
  }

  .company__photo {
    width: 104px;
    height: 104px;
    margin: 0 auto;
    margin-top: 33px;
    border: 3px solid #EAEAEA;
    border-radius: 100%;
  }

  .company__name {
    text-align: center;
    margin-top: 38px;
    font-size: 19px;
    font-weight: bold;
  }

  .company__explanation {
    width: 290px;
    height: 80px;
    text-align: center;
    font-size: 17px;
    color: #616161;
    margin: 0 auto;
    margin-top: 30px;
    line-height: 24px;
    word-break: keep-all;
  }
</style>