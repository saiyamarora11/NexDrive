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
  <div class="flex flex-col mt-6 flex justify-start">
    <div class="flex gap-x-4 ml-4">
      <button @click="() => router.go(-1)">
        <ArrowLeft class="w-6" />
      </button>

      <div class="font-bold">Enter your area or apartment name</div>
    </div>

    <div
      class="flex items-center px-2 mt-4 h border border-gray-200 rounded-md shadow-md mx-4"
    >
      <input
        type="text"
        class="text-gray-700 h-10 text-sm w-full focus:outline-none pl-3 bg-white"
        placeholder="Try Cyber City, Connaught Place etc."
      />
      <div class="flex items-center">
        <button>
          <search class="text-gray-400 w-5 pr-1" />
        </button>
      </div>
    </div>
  </div>
  <div class="flex gap-x-2 ml-6 mt-4 border-b pb-4 mr-3">
    <Navigation class="w-5 h-5" />
    <router-link to="/dashboard">
      <div class="link no-underline font-semibold text-blue-500 text-sm">
        Use my current location
      </div>
    </router-link>
  </div>
</template>

<style scoped></style>
