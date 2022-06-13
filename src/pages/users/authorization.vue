

<template>
  <div class="authorizationPage">
     <h1 class="text-4xl font-bold text-indigo-900 ">Planning Poker</h1>
    <Login v-if="login" @register="login = 0" @authenticated="$emit('authenticated')" />
    <Register v-else @login="login = 1" />
  </div>
</template>

<script>
import Login from "./login.vue";
import Register from "./register.vue";
export default {
  components: {
    Login,
    Register,
  },
  data() {
    return {
      login: 1,
    };
  },
};
</script>

<style>
.authorizationPage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  align-items: center;
}
h1{
  margin-top: -10em !important;
}
</style>
