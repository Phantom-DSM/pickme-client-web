<template>
  <div class="main__content__hire">
    <router-link to="" tag="div" :key="index" v-for="(hire, index) in hires" class="hire__el">
      <div class="hire__photo"></div>
      <div class="hire__name">{{ hire.name}}</div>
      <div class="hire__term">
        <span id="first__term">{{hire.term1}}</span> ~
        <span id="second__term">{{hire.term2}}</span>
      </div>
      <div class="hire__person">
        채용인원
        <span id="person__num">{{hire.person}} 명</span>
      </div>
      <div class="hire__field">
        <span class="hire__field__title">채용분야</span>
        <div class="hire__field__el">
          <div v-for="(feild, index) in hire.fields" :key="index" class="field__el" v-if="index < 4">{{feild.name}}</div>
          <div v-if="hire.fields.length > 5" >
             <span @click="hire.showMore = !hire.showMore" class="hire__more__link">더보기</span>
             <div class="hire__more__div" v-show="hire.showMore">
               <span class="hire__more__div__title" >채용분야</span>
               <div v-for="(feild, index) in hire.fields" :key="index" class="field__el">{{feild.name}}</div>
             </div>
          </div>
        </div>
      </div>
      <div class="hire__href">
        <a href="http://www.woowahan.com/">http://www.woowahan.com/</a>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        hires: [{
          no: 1,
          name: "우아한 형제들",
          term1: "2018/06/12",
          term2: "2018/06/13",
          person: 6,
          fields: [{
              name: '임베디드 SW'
            },
            {
              name: '인공지능'
            },
            {
              name: 'DB'
            },
            {
              name: '서버'
            },
            {
              name: 'DB'
            },
            {
              name: '서버'
            },
            {
              name: 'DB'
            },
            {
              name: '서버'
            }
          ],
          src: '../../assets/company_logo.png',
          link: 'http://www.woowahan.com/',
          showMore: false
        }, {
          no: 1,
          name: "우아한 형제들",
          term1: "2018/06/12",
          term2: "2018/06/13",
          person: 6,
          fields: [{
              name: '임베디드 SW'
            },
            {
              name: '인공지능'
            },
            {
              name: 'DB'
            },
            {
              name: '서버'
            }
          ],
          src: '../../assets/company_logo.png',
          link: 'http://www.woowahan.com/',
          showMore: false
        }, {
          no: 1,
          name: "우아한 형제들",
          term1: "2018/06/12",
          term2: "2018/06/13",
          person: 6,
          fields: [{
              name: '임베디드 SW'
            },
            {
              name: '인공지능'
            },
            {
              name: 'DB'
            },
            {
              name: '서버'
            },
            {
              name: '서버'
            },
            {
              name: '서버'
            },
            {
              name: '서버'
            },
            {
              name: '서버'
            }
          ],
          src: '../../assets/company_logo.png',
          link: 'http://www.woowahan.com/',
          showMore: false
        }, {
          no: 1,
          name: "우아한 형제들",
          term1: "2018/06/12",
          term2: "2018/06/13",
          person: 6,
          fields: [{
              name: '임베디드 SW'
            },
            {
              name: '인공지능'
            }
          ],
          src: '../../assets/company_logo.png',
          link: 'http://www.woowahan.com/',
          showMore: false
        }]
      }
    }
  }
</script>
<style scoped>
  .main__content__hire {
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow-y: scroll;
  }

  .main__content__hire::-webkit-scrollbar {
    width: 18px;
  }

  .main__content__hire::-webkit-scrollbar-track {
    background-color: #E1E1E1;
    border-radius: 10px;
  }

  .main__content__hire::-webkit-scrollbar-thumb {
    background-color: #3096D7;
    border-radius: 10px;
  }

  .hire__el {
    width: 350px;
    height: 470px;
    background-color: #fff;
    box-shadow: 0px 3px 10px rgb(113, 113, 113);
    border-radius: 10px;
    margin-bottom: 50px;
    margin-top: 10px;
  }

  .hire__photo {
    width: 104px;
    height: 104px;
    margin: 0 auto;
    margin-top: 33px;
    border: 3px solid #EAEAEA;
    border-radius: 100%;
  }

  .hire__name {
    text-align: center;
    margin-top: 38px;
    font-size: 19px;
    font-weight: bold;
  }

  .hire__term {
    color: #939393;
    font-size: 17px;
    text-align: center;
    margin-top: 20px;
  }

  .hire__person #person__num {
    color: #939393;
    margin-left: 30px;
  }

  .hire__person {
    color: #000;
    font-size: 17px;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
  }

  .hire__field {
    color: #000;
    width: 80%;
    height: 118px;
    font-size: 17px;
    font-weight: bold;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
  }

  .hire__field__title {
    display: block;
    width: 100%;
    padding-left: 20px;
    margin-bottom: 15px;
  }

  .hire__field__el {
    display: flex;
    flex-wrap: wrap;
  }

  .field__el {
    background-color: #3199DC;
    color: #fff;
    display: inline-block;
    padding: 8px 20px;
    border-radius: 15px;
    margin-right: 15px;
    margin-bottom: 10px;
  }

  .hire__more__link{
    position: absolute;
    bottom: 20px;
    right: 30px;
    font-size: 16px;
    color: #3199DC;
    cursor: pointer;
  }

  .hire__more__div__title{
    margin: 15px 0px;
  }
  .hire__more__div{
    position: absolute;
    z-index: 1;
    width: 200px;
    background-color: #fff;
    box-shadow: 0px 3px 10px rgb(113, 113, 113);
    display: flex;
    flex-wrap: wrap;
    padding: 10px 20px;
    right: 0;
    bottom: -280px;
  }

  .hire__href {
    margin-top: 10px;
    text-align: center;
    font-size: 17px;
  }

  .hire__href a {
    color: #3199DC;
  }
</style>