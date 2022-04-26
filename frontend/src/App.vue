<template>
  <v-app>
    <NavbarComponent/>
    <v-main>
      <RoomsList/>
    </v-main>
  </v-app>
</template>

<script>
import RoomsList from './components/room/RoomsList';
import NavbarComponent from './components/navbar_footer/NavbarComponent';

export default {
  name: 'App',

  components: {
    RoomsList,
    NavbarComponent
  },

  data: () => ({
    //
  }),
};
</script>
