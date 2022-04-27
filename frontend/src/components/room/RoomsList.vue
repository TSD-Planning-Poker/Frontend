<template>
  <div>
    <div class="roomsWrapper">
      <div v-for="room in roomsList" :key="room.id">
        <RoomTile :room="room" />
      </div>
    </div>
  </div>
</template>

<script>
import RoomTile from "./RoomTile.vue";
import axios from "../common/axios_s.js";

export default {
  name: "RoomsList",
  props: [],
  components: {
    RoomTile,
  },
  data() {
    return {
      roomsList: [],
    };
  },
  methods: {
    async getRoomsList() {
      await axios
        .get("http://127.0.0.1:8000/api/rooms/")
        .then((response) => {
          this.roomsList = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getRoomsList();
  },
};
</script>

<style>
.roomsWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* margin: 0  50px; */
}
</style>
