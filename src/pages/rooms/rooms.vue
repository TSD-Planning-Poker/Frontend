<template>
  <div class="main">
      Rooms
  </div>
</template>

<script>
export default {
data(){
    return{
      rooms: [],
    }
  },
  methods:{
     async getRoomsList() {
      await this.$http
        .get("api/rooms/")
        .then((response) => {
            localStorage.setItem('authtoken', response.data.token);
            localStorage.setItem('username', this.username);
        })
        .catch((error) => console.log(error));
    },
  }
}
</script>

<style>

</style>