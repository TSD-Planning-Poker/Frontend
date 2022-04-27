<template>
  <div id="app">
    <v-app>
    <navbar-component/>
    <router-view class="wrapper"/>
    </v-app>
  </div>
</template>

<script>
import NavbarComponent from '@/components/navbar_footer/NavbarComponent'
export default {
  components:{
    NavbarComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}


.wrapper{
  margin-top: 100px;
}
</style>
