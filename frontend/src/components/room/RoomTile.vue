<template>
  <div class="roomBox">
    <div class="roomTitle" @click="goToRoom(room.id)">
      {{room.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomTile",
  props: ["room"],
  methods: {
    goToRoom(id){
      console.log(id)
    }
  },
};
</script>


<style scoped lang="scss">
.roomBox {
  // -webkit-box-shadow: 8px 2px 29px -3px var(--v-secondary-base);
  // -moz-box-shadow: 8px 2px 29px -3px var(--v-secondary-base);
  // box-shadow: 8px 2px 29px -3px var(--v-secondary-base);
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px black;
}

 .roomTitle{
    font-size: 2em;
    padding: 50px;
    font-weight: bold;
  }
</style>