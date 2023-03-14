<script setup lang="ts">
//dependencies
import Electrify from "../assets/charge.svg?component";
import Electricity from "../assets/electrifying.svg?component";
</script>

<template>
  
  <div class="flex flex-col justify-center items-center">
    <div class="flex gap-x-2 mt-10">
      <div class="font-bold text-4xl text-green-500 mt-4">NEXDRIVE</div>
      <Electrify />
    </div>

    <img class="w-full mt-20" src="../assets/fb.png" />
    <router-link class="absolute bottom-10" to="/phone">
      <button class="btn btn-blue h-12 w-full text-lg">
        <span><Electricity class="mr-2" /></span>Get Electrified
      </button>
    </router-link>
  </div>
</template>

<style scoped></style>
