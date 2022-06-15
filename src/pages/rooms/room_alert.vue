<template>
  <div 
  class=" text-center py-3 ml-10 lg:px-4"
  :class="status == 'completed' ? 'bg-green-300' : 'bg-yellow-300'"
  >
  <div class="p-2 items-center  leading-none lg:rounded-full flex lg:inline-flex"
    :class="status == 'completed' ? 'bg-green-800 text-green-100' : 'bg-yellow-500 text-amber-800'"
   role="alert">
    <span class="flex rounded-full bg-blue-500 text-xs text-white uppercase px-4 py-1 font-bold mr-3">Status</span>
    <span class="font-semibold mr-2 text-left text-xs flex-auto">{{ status == 'completed' ? 'Story has been completed by amdin with final Story point of: ' + mark : 'Story has been Evalueated by all developers and waiting for final decision from admin.' }}</span>
  </div>
</div>
</template>

<script>
export default {

    props: [ 'status', 'mark' ]
}
</script>

<style>

</style>