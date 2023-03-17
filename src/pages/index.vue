<script setup lang="ts">
//dependencies

//imports
import Electrify from "../assets/charge.svg?component";
import Electricity from "../assets/electrifying.svg?component";
import Fast from "../assets/fastCharger.svg?component";
import Charging from "../assets/home.svg?component";
import Cow from "../assets/cow.svg?component";
import Hubs from "../assets/hub.svg?component";
</script>

<template>
  <div class="flex flex-col items-center bg-gray-800 h-[100vh]">
    <div class="flex gap-x-2 mt-10">
      <div class="font-bold text-4xl text-white mt-4">NEXDRIVE</div>
      <Electrify />
    </div>
    <div class="flex flex-wrap gap-x-4">
      <div class="bg-black h-20 rounded-full">
        <Fast class="w-full h-full" />
      </div>

      <Charging />2
      <Cow />
      <Hubs />
    </div>

    <router-link class="absolute bottom-10" to="/phone">
      <button class="btn btn-blue h-12 w-full text-lg">
        <Electricity />Get Electrified
      </button>
    </router-link>
  </div>
</template>

<style scoped></style>
