<template>
  <div>
    <div class="roomAbout">
      <div class="roomName">
        {{room.name}}
      </div>
      <div class="roomDesc">
        {{room.description}}
      </div>
    </div>
    <div v-for="task in tasksList" :key="task.id">
      <TaskTile :task="task" />
    </div>
  </div>
</template>

<script>
import axios from "../common/axios_s.js";
import TaskTile from './TaskTile'

export default {
  name: "RoomDetails",
  props: ["room"],
  components: {
    TaskTile
  },
  data() {
    return {
      tasksList: [],
    };
  },
  methods: {
    async getTasksList() {
      await axios
        .get(`http://127.0.0.1:8000/api/rooms/${this.room.id}/alltasks`)
        .then((response) => {
          this.tasksList = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getTasksList();
  },
  // async beforeRouteEnter(to, from, next) {
  //   if (to.params.id !== undefined) {
  //     let endpoint = `http://127.0.0.1:8000/api/rooms/${to.params.id}/alltasks`;
  //     let data = await axios.get(endpoint);

  //     return next((vm) => {
  //       console.log(data)
  //       vm.tasksList = data.data;
  //     });
  //   } else {
  //     return next();
  //   }
  // },
};
</script>

<style lang="scss"> 
.roomsWrapper {
  display: flex;
  margin: 100px 100px 50px 100px;
}

.roomAbout{
  width: 80%;
  margin: 0 auto;
  padding: 50px;
  -webkit-box-shadow: 3px 1px 100px -68px rgba(66, 68, 90, 1);
  -moz-box-shadow: 3px 1px 100px -68px rgba(66, 68, 90, 1);
  box-shadow: 3px 1px 100px -68px rgba(66, 68, 90, 1);

  .roomName{
    font-size: 1.4em;
    text-transform: uppercase;
    color: black;
  }
  .roomDesc{
    font-size: .9em;
    margin-top: .4em;
  }
}
</style>
