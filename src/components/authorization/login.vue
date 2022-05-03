<script>
export default {
  data() {
    return {
      loginData: {
        username: "",
        password: "",
        emptyFieldError: "",
        error: false,
      },
    };
  },
  methods: {
    validateRegisterForm() {
      this.loginData.error = false;
      if (!this.loginData.password || !this.loginData.username) {
        console.log("cos tam");
        this.loginData.emptyFieldError = "no fields can be empty";
        this.loginData.error = true;
      }
      if (this.loginData.error == false) {
        this.login();
      } else {
        setTimeout(() => (this.loginData.error = false), 5000);
      }
    },
    async login() {
      await this.$http
        .post("auth/login/", {
          username: this.loginData.username,
          password: this.loginData.password,
        })
        .then((response) => {
          localStorage.setItem("authtoken", response.data.token);
          localStorage.setItem("username", this.login.username);
          this.$emit("authenticated");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<template>
  <div>
    <label
      >Username <br />
      <input type="text" v-model="loginData.username" />
    </label>

    <br /><br />
    <label
      >Password <br />
      <input type="password" v-model="loginData.password" /> </label
    ><br />
    <div class="buttons">
      <button @click="$emit('register')">sign up</button>
      <button @click="validateRegisterForm">login</button>
    </div>
    <div class="error" v-if="loginData.error">
      {{ loginData.emptyFieldError }}
    </div>
  </div>
</template>
