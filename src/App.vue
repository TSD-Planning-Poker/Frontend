<script>
import Authorization from "./pages/authorization/authorization.vue"
export default{
    components:{Authorization},
    data(){
      return{
        authorized:  localStorage.getItem('authtoken'),
    }
}
}
// This starter template is using Vue 3 <script setup> SFCs

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
<div>
<!-- <link rel="icon" href="<%= BASE_URL %>login.ico"> -->
  <Authorization v-if="authorized" @authenticated="authorized=false"></Authorization>
  <router-view v-else></router-view>

</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family:  'Public Sans', sans-serif;
  /* margin-top: 60px; */
}
.error{
  padding: 10px 30px;
  background-color: #e69f95;
  color:brown;
  max-width: 400px;
  margin: 30px auto;
  font-size: 1.2em;
  font-weight: 300;
  font-style: italic;
}
</style>
