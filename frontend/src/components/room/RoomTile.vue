<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <h2 class="mb-2">{{ room.name }}</h2>
        <div class="text--primary">
          {{ room.description }}
        </div>
      </v-card-text>
      <v-card-actions>
        <span v-if="!member">
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="secondary" class="pamparam" v-bind="attrs" v-on="on"
              >Join the room</v-btn
            >
          </template>

          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark> {{ room.name }}</v-toolbar>
              <v-card-text>
                <div class="text-h4 pa-4">Do you want to join this room?</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="
                    dialog.value = false;
                    joinRoom(room.id);
                  "
                  >Yes, join the room</v-btn
                >
                <v-btn text @click="dialog.value = false">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
        </span>
        <span v-else>
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="secondary" class="pamparam" v-bind="attrs" v-on="on"
              >Leave the room</v-btn
            >
          </template>

          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark> {{ room.name }}</v-toolbar>
              <v-card-text>
                <div class="text-h4 pa-4">Do you want to leave this room?</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="
                    dialog.value = false;
                    leaveRoom(room.id);
                  "
                  >Yes</v-btn
                >
                <v-btn text @click="dialog.value = false">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
        </span>
        <router-link
          :to="{
            name: roomDetails,
            params: { room: room, id: room.id },
          }"
        >
          <v-btn text color="secondary"> enter room </v-btn></router-link
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "../common/axios_s.js";

export default {
  name: "RoomTile",
  props: ["room"],
  data() {
    return {
      roomDetails: "roomDetails",
      member: true, 
    };
  },
  methods: {
    goToRoom(id) {
      console.log(id);
    },
    async joinRoom(id) {
      await axios
        .get(`http://127.0.0.1:8000/api/rooms/${id}/join/2`)
        .then((response) => {
          console.log(response);
          this.member = !this.member;
        })
        .catch((error) => console.log(error));
    },
    async checkIfMember() {
      await axios
        .get(`http://127.0.0.1:8000/api/rooms/${this.room.id}/allusers`)
        .then((response) => {
          console.log(response);
          this.member = response;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.checkIfMember();
  },
};
</script>


<style scoped lang="scss">
.v-application .mx-auto {
  margin: 20px !important;
  background-color: var(--v-secondary-lighten1) !important;
}

// .v-sheet.v-card:not(.v-sheet--outlined) {
//   -webkit-box-shadow: 3px 1px 100px 100px rgba(66, 68, 90, 1);
//   -moz-box-shadow: 3px 1px 100px 100px rgba(66, 68, 90, 1);
//   box-shadow: 3px 1px 100px 100px rgba(66, 68, 90, 1);
// }

// .pamparam {
//   box-shadow: 3px 1px 100px 100px #42f548;
// }
</style>