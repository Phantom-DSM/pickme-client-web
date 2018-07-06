<template>
  <div class="main__layout">
    <main-sidemenu />
    <main-content />
  </div>
</template>
<script>
  import MainSidemenu from './MainSidemenu';
  import MainContent from './MainContent';
  export default {
    name: 'main-layout',
    components: {
      MainSidemenu,
      MainContent,
    }
  }
</script>
<style scoped>
.main__layout{
  width: 100%;
  height: 100%;
}
</style>