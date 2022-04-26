<template>
  <div>
    Rooms
    <div v-for="room in roomsList"
    :key="room.id"
    >
    {{room}}
    </div>
  </div>
</template>

<script>
// import { apiService } from "../common/api.service.js";
import axios from 'axios'
import { CSRF_TOKEN } from "../common/csrf_token"

export default {
  name: "RoomsList",
  props: [],
  data() {
    return {
      roomsList: [{
        name: "room 1",

      },
      {
        name: "room 2",
      }
      ],
    };
  },
  methods: {
    async getRoomsList() {
      // await apiService(
      //   `/rooms/`,
      //   "GET"
      // ).then((data) => {
      //   console.log(data);
      //   this.roomsList = data
      // });

      let config = {
       headers: {
         'Access-Control-Allow-Origin': '*',
        'X-CSRFTOKEN': CSRF_TOKEN
        }
    }

    return axios.get(`http://127.0.0.1:8000/api/rooms/`, config)
    .then(console.log("success"))
    .catch(error => console.log(error));
    

    },
  },
  mounted() {
    this.getRoomsList();
  },
};
</script>
