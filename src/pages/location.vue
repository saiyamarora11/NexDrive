<script setup lang="ts">
//dependencies
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="font-bold text-2xl mt-6 ml-4">What's your location?</div>
  <div class="text-slate-500 text-sm ml-4 mr-10">
    We need you location to show available electric charging stations near you
  </div>
  <img class="w-full mt-20" src="../assets/fb.png" />
  <div class="flex flex-col items-center gap-y-2 mt-20">
    <router-link class="w-11/12"  to="/dashboard">
      <div class="btn btn-blue h-12 rounded-lg w-full text-m">Allow location access</div>
    </router-link>
    
    <router-link to="/location-manual">
      <div class="link text-blue-500 no-underline text-sm">Enter Location Manually</div>
    </router-link>
  </div>
</template>

<style scoped></style>
