<script setup lang="ts">
//dependencies
import { ref } from "vue";
import { useRouter } from "vue-router";

//imports
import ArrowLeft from "../assets/arrow-left.svg?component";
import Search from "../assets/search.svg?component";
import Navigation from "../assets/navigation.svg?component";

const router = useRouter();
</script>

<template>
  <div class="flex flex-col mt-6 ml-4">
    <div class="flex gap-x-4">
      <button @click="() => router.go(-1)">
        <ArrowLeft class="w-6" />
      </button>

      <div class="font-bold">Enter your area or apartment name</div>
    </div>
    <div
      class="flex items-center mt-4 border-2 border-gray-200 rounded-md h-10 mx-4 rounded-lg"
    >
      <Search class="pl-2" />
      <input
        id="pac-input"
        class="text-sm w-full px-4"
        type="text"
        placeholder="Try Cyber City, Connaught Place, etc."
      />
    </div>
  </div>
  <div class="flex gap-x-2 ml-6 mt-4 border-b pb-4 mr-3">
    <Navigation class="w-5 h-5" />
    <router-link to="/dashboard">
      <div class="link no-underline font-semibold text-orange-500 text-sm">
      Use my current location
    </div>
    </router-link>
  </div>
</template>

<style scoped></style>
