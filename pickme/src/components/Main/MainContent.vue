<template>
  <div class="main__content">
    <company-slideshow />
    <main-menu/>
  </div>

</template>
<script>
import CompanySlideshow from './CompanySlideshow';
import MainMenu from './MainMenu';
  export default {
    name: 'main-content',
    components: {
      CompanySlideshow,
      MainMenu
    }
  }
</script>
<style scoped>
  .main__content {
    width: calc(100% - 500px);
    min-width: calc(100% - 500px);
    height: 100vh;
    float: right;
  }
</style>