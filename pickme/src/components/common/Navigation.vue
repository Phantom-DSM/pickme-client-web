<template>
  <nav class="nav">
    <div class="nav__contents">
      <div class="nav__contents__logo">
        <router-link to="/">
          <img src="../../assets/pickme_logo.png" alt="pickme 로고">
        </router-link>
      </div>
      <ul class="nav__contents__list">
        <li v-for="(nav, index) in navigation" :key=index class="nav__contents__list__link" @click="open(index)">
          <a>{{nav.name}}</a>
          <ul class="nav__contents__sub__list">
            <li v-if=nav.open v-for="(subnav, index) in nav.subnav" :key=index class="nav__contents__sub__list__link">
              <router-link to=""> {{subnav.name}} </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        navigation: [{
          name: '소개',
          subnav: [{
              name: '오시는 길'
            },
            {
              name: '개발진 소개'
            },
            {
              name: '동아리 소개'
            }
          ],
          open: false
        }, {
          name: '인재검색',
          open: false
        }, {
          name: '취업',
          subnav: [{
              name: '채용공고'
            },
            {
              name: '회사목록'
            }
          ],
          open: false
        }, {
          name: '상담 / 클리닉',
          subnav: [{
              name: '자기소개서 클리닉'
            },
            {
              name: '이력서 클리닉'
            },
            {
              name: '진로 상담'
            }
          ],
          open: false
        }, {
          name: '고객센터',
          open: false
        }, ]
      }
    },
    methods:{
      open(index){
        if(this.navigation[index].open){
          this.navigation[index].open = !this.navigation[index].open;
          return;
        }
        let i = 0;
        while (i < this.navigation.length) {
          this.navigation[i].open = false;
          i++;
        }
        this.navigation[index].open = true;
        
      }
    }
  };
</script>
<style scoped>
  .nav {
    width: 199px;
    height: 100%;
    background-color: #fff;
    float: left;
    border-right: 1px solid #257CB2;
  }

  .nav__contents {
    width: 100%;
    height: 100%;
  }

  .nav__contents__logo {
    width: 100%;
    height: 100px;
    text-align: center;
  }

  .nav__contents__logo img {
    margin-top: 30px;
  }

  .nav__contents__list {
    width: 100%;
    height: calc(100% - 100px);
    text-align: center;
    background-color: #2581BA;
    cursor: pointer;
  }

  .nav__contents__list__link>a {
    display: block;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background-color: #2581BA;
    border-bottom: 2px solid #257CB2;
    text-decoration: none;
    color: #fff;
    font-size: 19px;
  }

  .nav__contents__sub__list__link a {
    display: block;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background-color: #3199DC;
    border-bottom: 2px solid #2B89C5;
    text-decoration: none;
    color: #fff;
    font-size: 19px;
  }
</style>