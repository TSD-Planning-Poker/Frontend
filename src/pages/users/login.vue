<template>
    <div>
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">

                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
               
                    <div class="mt-2 flex flex-col ">
                        <input type="text" v-model="loginData.username" class=" w-96 border-2 rounded-sm px-2 py-1 mt-2"
                            placeholder="Username" />
                        <input type="password" v-model="loginData.password"
                            class=" w-96 border-2 rounded-sm px-2 py-1 mt-2" placeholder="Password" />
                    </div>
                </div>
            </div>
        </div>

        <div class=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                @click="validateLoginForm">
                Login
            </button>
            <button type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                @click="$emit('register')" ref="cancelButtonRef">
                Sign Up
            </button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            loginData: {
                username: "",
                password: "",
            },
        };
    },
    methods: {
        validateLoginForm() {
            this.loginData.error = false;
            if (!this.loginData.password || !this.loginData.username) {
                this.$notify({
                    type: 'error',
                    title: `ERROR`,
                    text: `no fields can be empty`,
                });
            }
            else {
                this.login();
            }
        },
        async login() {
            await this.$store.dispatch("Login", {
                username: this.loginData.username,
                password: this.loginData.password,
            });
            this.$router.push('/#');
        },
    },
};
</script>

