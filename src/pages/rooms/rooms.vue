<template>
  <div class="">
    <div class="flex flex-row-reverse mr-8">

      <!-- Search room -->
      <div class="mb-4 w-72">
        <label class="block text-gray-700 text-xs text-left font-bold mb-0.5" for="username">
          search room
        </label>

        <input v-model="search" @input="searchRooms" type="search"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="roomname" placeholder="room name">
      </div>

      <button @click="openModalAddRoom" class="mt-6 mr-5 bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold">
        Add New Room </button>

      <button @click="openModal" class="mt-6 mr-5 bg-blue-500 px-3 h-7 mx-3 text-sm text-white font-bold">
        Export </button>

    </div>

    <div class="flex flex-wrap">
      <div v-for="i in invitations" :key='i'
        class=" flex flex-col w-72 my-3 mx-5 h-36 bg-white rounded-md shadow-md hover:cursor-pointer">
        <div class="top h-7 m-1 text-xs text-right font-bold text-slate-300 pr-2"> Created: {{ i.created_at.slice(0,
            10)
        }}</div>
        <div class="middle flex-grow flex mx-5">
          <div class="flex ml-3 flex-col">
            <div class=" text-left">{{ i.room_id__name.toUpperCase() }}</div>
            <div class=" text-left w-60 text-xs text-slate-400 line-clamp-2">{{ i.description }}</div>
          </div>
        </div>
        <div class="text-left ml-7 text-s mt-auto"> Invitation from: {{ i.from_user__username }}</div>
        <div v-on:click="acceptInvitation(i)"
          class="bg-green-300 text-green-700 text-xs mt-5 px-7 py-2 rounded-md font-bold">accept invitation</div>
      </div>
    </div>


    <div class="flex flex-wrap">
      <div v-on:click="navigateRoom(i)" v-for="i in rooms" :key='i'
        class=" flex flex-col w-72 my-3 mx-5 h-36 bg-white rounded-md shadow-md hover:cursor-pointer">
        <div class="top h-7 m-1 text-xs text-right font-bold text-slate-300 pr-2"> Created: 20/04/2022</div>
        <div class="middle flex-grow flex mx-5">
          <div class="flex ml-3 flex-col">
            <div class=" text-left">{{ i.name.toUpperCase() }}</div>
            <div class=" text-left w-60 text-xs text-slate-400 line-clamp-2">{{ i.description }}</div>
          </div>
        </div>
        <div class="last flex justify-between px-4 h-7 m-2 ">
          <div class="text-xs mt-auto px-3 py-0.5 rounded-md font-bold"
            :class="i.closed ? 'bg-red-300 text-red-900' : ' bg-green-300 text-green-700'">{{ i.closed ? "closed" :
                "pendding"
            }}</div>
          <div class=" text-xs mt-auto"> {{ i.members.length }} Members</div>
        </div>
      </div>

    </div>
    <ExportFileModal :open="getopen" @cancelModal="openmodal" roomId="-1" />
    <AddRoom :open="getopenadd" @cancelModal="openModalAddRoom" @roomAdded="updateState" />

  </div>

</template>

<script>
import ExportFileModal from './export_file.vue'
import AddRoom from './add_room.vue'

export default {

  mounted() {
    this.updateState()
    // this.$store.dispatch('getInvitations')
  },
  components: {
    ExportFileModal,
    AddRoom
  },
  computed: {
    rooms() {
      return this.$store.state.rooms.rooms
    },
    invitations() {
      return this.$store.state.users.all_invitations
    },
    exportUrl() {
      return this.$store.state.stories.exportUrl
    },
    getopen() {
      return this.open;
    },
    getopenadd() {
      return this.open_add;
    }

  },

  data() {
    return {
      search: "",
      open: false,
      open_add: false,
    }
  },

  methods: {
    updateState() {
      this.$store.dispatch('fetchRooms', '')
      this.$store.dispatch('getInvitations')
    },
    searchRooms() {
      console.log("============searching", this.search)
      this.$store.dispatch('fetchRooms', this.search)
    },
    openModal() {
      this.open = !this.open
    },
    openModalAddRoom() {
      this.open_add = !this.open_add
    },
    navigateRoom(room) {
      console.log(room)
      this.$router.push({ name: 'rooms-details', params: { id: room.id } })
    },
    async acceptInvitation(invitation) {
      await this.$store.dispatch('acceptInvitiation', { invitation_code: invitation.code })
      this.updateState()
    },
    async exportUserStories() {
      await this.$store.dispatch('exportUserStories', { delimiter: '!' })
      document.getElementById("exportLink").click();
    },
  },

}
</script>

<style>
</style>