<template>
  <div>
    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">

        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">

          <div class="mt-2 flex flex-col ">
            <input type="text" v-model="signUp.username" class=" w-96 border-2 rounded-sm px-2 py-1 mt-2"
              placeholder="Username" />
            <input type="text" v-model="signUp.first_name" class=" w-96 border-2 rounded-sm px-2 py-1 mt-2"
              placeholder="First Name" />
            <input type="text" v-model="signUp.last_name" class=" w-96 border-2 rounded-sm px-2 py-1 mt-2"
              placeholder="Last Name" />
            <input type="email" v-model="signUp.email" class=" w-96 border-2 rounded-sm px-2 py-1 mt-2"
              placeholder="email" />
            <input type="password" v-model="signUp.password" class=" w-96 border-2 rounded-sm px-2 py-1 mt-2"
              placeholder="Password" />
            <input type="password" v-model="signUp.passwordRepeated" class=" w-96 border-2 rounded-sm px-2 py-1 mt-2"
              placeholder="Repeat Password" />
              <div class="sm:flex sm:items-start w-96 mt-5">

                <input type="checkbox" id="checkbox" v-model="checked" class="mr-3  border-2 rounded-sm px-2 py-1 mt-1" />
            <label for="checkbox">I have read and agree to  the <span class="text-indigo-600 font-semibold hover:cursor-pointer" @click="openModal">forum privacy policy</span> </label>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      <button type="button"
        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
        @click="validateRegisterForm">
        Sign Up
      </button>
      <button type="button"
        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        @click="$emit('login')" ref="cancelButtonRef">
        Login
      </button>
    </div>

        <ForumPrivacyPolicy :open="open" @cancelModal="openModal" @storyAdded="fetch" :roomId="id" />


  </div>
</template>

  <script>
  import ForumPrivacyPolicy from './forumPrivavyPolicy.vue';
export default {
  components: {
    ForumPrivacyPolicy
  },
  data() {
    return {
      checked:false, 
      open:false,
      signUp: {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        passwordRepeated: "",
      },
    };
  },
  methods: {
    openModal() {
            this.open = !this.open
        },
    validateRegisterForm() {
      this.signUp.error = false;
      if(!this.checked){
         this.$notify({
          type: 'error',
          title: `ERROR`,
          text: `You need to agree to the forum privacy policy`,
        });
        this.signUp.error = true;
      }
      if (this.signUp.password != this.signUp.passwordRepeated) {

        this.$notify({
          type: 'error',
          title: `ERROR`,
          text: `The passwords are not the same`,
        });
        this.signUp.error = true;
      }
      if (this.signUp.password.length < 6 && this.signUp.password.length > 0) {

        this.$notify({
          type: 'error',
          title: `ERROR`,
          text: `The password need to have at least 6 characters`,
        });

        this.signUp.error = true;
      }
      if (
        !this.signUp.password ||
        !this.signUp.passwordRepeated ||
        !this.signUp.username ||
        !this.signUp.first_name ||
        !this.signUp.last_name ||
        !this.signUp.email
      ) {

        this.$notify({
          type: 'error',
          title: `ERROR`,
          text: `no fields can be empty`,
        });
        this.signUp.error = true;
      }
      if (!this.signUp.error) {
        this.register();
      } else {
        setTimeout(() => (this.signUp.error = false), 5000);
      }
    },
    async register() {
      await this.$store.dispatch("Register", {
        username: this.signUp.username,
        first_name: this.signUp.first_name,
        last_name: this.signUp.last_name,
        email: this.signUp.email,
        password: this.signUp.password,
      });
      this.$router.push('/#');
    },
  },
};
</script>

