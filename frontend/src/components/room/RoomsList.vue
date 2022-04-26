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
// import axios from 'axios'
// import { CSRF_TOKEN } from "../common/csrf_token"
import axios from '../common/axios_s.js'

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

    //   let config = {
    //    headers: {
    //      'Access-Control-Allow-Origin': '*',
    //     'X-CSRFTOKEN': CSRF_TOKEN
    //     }
    // }

    // return axios.get(`http://127.0.0.1:8000/api/rooms/`, config)
    // .then(console.log("success"))
    // .catch(error => console.log(error));
    var rooms = await axios.get("http://127.0.0.1:8000/api/rooms/");
    console.log("=============")
    console.log(rooms)

    },
  },
  mounted() {
    this.getRoomsList();
  },
};
</script>
