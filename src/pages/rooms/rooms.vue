<template>
<div class="">
  <div class="flex flex-row-reverse mr-8">

    <!-- Search room -->
    <div class="mb-4 w-72">
      <label class="block text-gray-700 text-xs text-left font-bold mb-0.5" for="username">
        search room
      </label>
      <input v-model="search" @input="searchRooms" type="search" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="roomname" placeholder="room name">
    </div>

  </div>

  <div class="flex flex-wrap">
    <div v-on:click="navigateRoom(i)" v-for="i in rooms" :key='i' class=" flex flex-col w-72 my-3 mx-5 h-36 bg-white rounded-md shadow-md hover:cursor-pointer">
        <div class="top h-7 m-1 text-xs text-right font-bold text-slate-300 pr-2"> Created: 20/04/2022</div>
        <div class="middle flex-grow flex mx-5">
          <div class="flex ml-3 flex-col">
            <div class=" text-left">{{i.name.toUpperCase()}}</div>
            <div class=" text-left w-60 text-xs text-slate-400 line-clamp-2">{{i.description}}</div>
          </div>
        </div>
        <div class="last flex justify-between px-4 h-7 m-2 ">
          <div class="text-xs mt-auto px-3 py-0.5 rounded-md font-bold" 
            :class="i.closed ? 'bg-red-300 text-red-900' : ' bg-green-300 text-green-700'"
          >{{i.closed ? "closed" : "pendding"}}</div>
          <div class=" text-xs mt-auto"> {{i.members.length}} Members</div>
        </div>
    </div>
    {{invitations}}
      
  </div>
</div>
  
</template>

<script>

export default {

  mounted() {
    this.$store.dispatch('fetchRooms', '')
    this.$store.dispatch('getInvitations')
  },

  computed: {
    rooms(){
      return this.$store.state.rooms.rooms
    },
    invitations(){
      return this.$store.state.users.all_invitations
    }
  },

  data() {
    return {
        search: ""
    }
  },

  methods: {
    searchRooms(){
      console.log("============searching", this.search)
      this.$store.dispatch('fetchRooms', this.search)
    },

    navigateRoom(room){
        console.log(room)
        this.$router.push({ name: 'rooms-details', params: { id: room.id } })
    }
  },

}
</script>

<style>

</style>