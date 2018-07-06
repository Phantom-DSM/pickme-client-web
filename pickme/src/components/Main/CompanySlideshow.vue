<template>
  <div class="company__slideshow" id="company__slideshow">
    <div id="prevbtn" @click.stop="goToPrev()"></div>
    <div id="nextbtn" @click.stop="goToNext()"></div>
    <div :style="{width: innerWidth+'px', marginLeft: '-'+slidesInnerMarginLeft+'px' }" class="company__inner">
      <div :key="index" v-for="(company, index) in companys" @click="goToHref(index)" :style="{width:singleWidth+'px'}" class="company__el">
        <img src="../../assets/main/ex-naver.png" alt="" class="company__img">
        <span class="company__name">{{ company.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        companys: [{
          src: '../../assets/main/ex-naver.png',
          name: '네이버',
          link: 'http://www.naver.com'
        }, {
          src: '../../assets/main/ex-naver.png',
          name: '네이버',
          link: 'www.naver.com'
        }, {
          src: '../../assets/main/ex-naver.png',
          name: '네이버',
          link: 'www.naver.com'
        }, {
          src: '../../assets/main/ex-naver.png',
          name: '네이버',
          link: 'www.naver.com'
        }, {
          src: '../../assets/main/ex-naver.png',
          name: '네이버',
          link: 'www.naver.com'
        }],
        innerWidth: 0,
        singleWidth: 0,
        currentIndex: 0
      }
    },
    computed: {
      slidesInnerMarginLeft(){
        return this.currentIndex * this.singleWidth;
      }
    },
    props: {
      itemPerSlide: {
        type: null,
        default: 1
      }
    },
    methods: {
      goToPrev() {
        if(this.currentIndex === 0){
          return
        }
        this.currentIndex--

      },
      goToNext() {
        if(this.currentIndex === this.companys.length -1 ){
          return
        }
        if(this.companys.length - this.currentIndex == 4){
          return;
        }
        this.currentIndex++
      },
      goToHref(index) {
        location.href = this.companys[index].link;
      }
    },
    mounted(){ 
      let singleWidthDocument = document.getElementById('company__slideshow');
      let singleWidth = window.getComputedStyle(singleWidthDocument, null).getPropertyValue('width');
      this.singleWidth = Number(singleWidth.slice(0, -2))/ 4;
      this.innerWidth = this.singleWidth * this.companys.length;
    }

  }
</script>
<style scoped>
  .company__slideshow{
    overflow: hidden;
    position: relative;
    margin-top: 50px;
  }

  .company__inner{
    transition: margin 0.6s ease-out;
  }

  .company__el{
    position: relative;
    box-sizing: border-box;
    padding: 15px;
    display: inline-block;
  }

  #prevbtn{
    z-index: 1;
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  #prevbtn:hover{
    background-color: rgba(255,255,255,0.7);
    background-image: url(../../assets/main/arrow-left.png);
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
  }

  #nextbtn{ 
    z-index: 1;
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  #nextbtn:hover{
    background-color: rgba(255,255,255,0.7);
    background-color: rgba(255,255,255,0.7);
    background-image: url(../../assets/main/arrow-right.png);
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .company__img{
    width: 100%;
    height: 100%;
  }

  .company__name{
    position: absolute;
    font-size: 25px;
    font-weight: 600;
    color: #fff;
    bottom: 50px;
    left: 50px;
  }
</style>