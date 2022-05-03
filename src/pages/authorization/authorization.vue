<script>
import Login from "../../components/authorization/login.vue";
import Register from "../../components/authorization/register.vue";

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
  methods: {
  },
};
</script>

<template>
  <div class="loginView">
    <div class="title">Planning Poker</div>
    <div class="loginPage">
      <div class="loginPackshot">
        <img src="../../assets/login.png" />
      </div>
      <div class="forms">
        <Login v-if="login" @register="login=0" @authenticated="$emit('authenticated')"/>
        <Register v-else @login="login=1"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.loginView {
  background-color: aliceblue;
  min-height: 100vh;
  padding: 40px 100px 50px 100px;

 @media screen and (max-width: 900px) {
     padding: 10px 0;
     font-size: .8em;
}


  .title {
    font-size: 3em;
    font-weight: 700;
    padding-bottom: 20px;
     @media screen and (max-width: 900px) {
       max-width: 200px;
       margin: 40px auto 0 auto;
}
  }
  .loginPage {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 50px;

    @media screen and (max-width: 900px) {
        flex-direction: column-reverse;
        width: 100%;
}


    .loginPackshot {
      flex-basis: 50%;
      margin: 0 auto;
      max-width: 480px;
      padding: 10px;
      img {
        width: 100%;
      }
       @media screen and (max-width: 900px) {
       margin-top: 4em;
       
}
    }
    .forms {
      flex-basis: 50%;
      margin: 0 auto;

      label {
        font-size: 2em;
        font-weight: 600;
      }
      input {
        border-radius: 10%;
        padding: 10px;
        margin: 10px auto 20px auto;
        @media screen and (max-width: 900px) {
       max-width: 300px;
}
      }
      
      button {
        background-color: #13c24f;
        font-size: 1.5em;
        font-weight: 500;
        font-style: italic;
        color: #fff;
        padding: 10px 40px;
        border-radius: 20% 0;
        transition: all 0.5s ease;
        margin: 0 20px;
        &:hover {
          background-color: #0fa342;
          transform: scale(1.05);
        }

         @media screen and (max-width: 900px) {
margin: 20px;
}

      }
    }
  }
}
</style>
