<script>
export default {
  data() {
    return {
      signUp: {
        username: "",
        password: "",
        passwordRepeated: "",
        passwordError: "",
        emptyFieldError: "",
        error: false,
      },
    };
  },
  methods: {
    validateRegisterForm() {
      this.signUp.error = false;
      if (this.signUp.password != this.signUp.passwordRepeated) {
        this.signUp.error = true;
        this.signUp.passwordError = "The passwords are not the same";
      }
      if (
        !this.signUp.password ||
        !this.signUp.passwordRepeated ||
        !this.signUp.username
      ) {
        this.signUp.error = true;
        this.signUp.emptyFieldError = "no fields can be empty";
      }
      if (!this.signUp.error) {
        this.register();
      } else {
        setTimeout(() => (this.signUp.error = false), 5000);
      }
    },
    async register() {
      //TODO
      //   await this.$http
      //     .post("auth/login/", {
      //       username: this.loginData.username,
      //       password: this.loginData.password,
      //     })
      //     .then((response) => {
      //       localStorage.setItem("authtoken", response.data.token);
      //       localStorage.setItem("username", this.login.username);
      //       this.$emit("authenticated");
      //     })
      //     .catch((error) => console.log(error));
    },
  },
};
</script>

<template>
  <div>
    <label
      >Username <br />
      <input type="text" v-model="signUp.username" />
    </label>

    <br /><br />
    <label
      >Password <br />
      <input type="password" v-model="signUp.password" /> </label
    ><br />
    <label
      >Repeat Password <br />
      <input type="password" v-model="signUp.passwordRepeated" /> </label
    ><br />
    <div class="buttons">
      <button @click="$emit('login')">sign in</button>
      <button @click="validateRegisterForm">register</button>
    </div>
    <div class="error" v-if="signUp.error">
      {{ signUp.emptyFieldError }}<br />{{ signUp.passwordError }}
    </div>
  </div>
</template>
