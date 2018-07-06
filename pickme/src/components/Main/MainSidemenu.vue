<template>
  <div class="main__sidemenu">
    <navigation />
    <student-menu />
  </div>
</template>
<script>
  import Navigation from '../common/Navigation';
  import StudentMenu from '../common/StudentMenu';
  export default {
    name: 'main-sidemenu',
    components: {
      Navigation,
      StudentMenu,
    }
  }
</script>
<style scoped>
  .main__sidemenu {
    width: 500px;
    height: 100%;
    float: left;
  }
</style>