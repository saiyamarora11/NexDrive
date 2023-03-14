<script setup lang="ts">
//dependencies
import { ref } from "vue";
import { useRouter } from "vue-router";

//imports
import ArrowLeft from "../assets/arrow-left.svg?component";

const router = useRouter();
</script>

<template>
  <button @click="() => router.go(-1)">
    <ArrowLeft class="w-6 mt-6 ml-4" />
  </button>
  <div class="font-bold text-2xl ml-4">Verify with OTP sent to 9873169858</div>
  <div class="flex flex-col gap-y-2">
    <div class="flex justify-start ml-4 gap-x-5 mx-2 mt-4">
      <input
        type="number"
        maxlength="1"
        class="input w-14 font-semibold text-xl h-14 border-2 border-slate-300 hover:border-2 hover:border-blue-500"
      />
      <input
        type="number"
        maxlength="1"
        class="input w-14 font-semibold text-xl h-14 border-2 border-slate-300 hover:border-2 hover:border-blue-500"
      />
      <input
        type="number"
        maxlength="1"
        class="input w-14 font-semibold text-xl h-14 border-2 border-slate-300 hover:border-2 hover:border-blue-500"
      />
      <input
        type="number"
        maxlength="1"
        class="input w-14 font-semibold text-xl h-14 border-2 border-slate-300 hover:border-2 hover:border-blue-500"
      />
    </div>
    <router-link to="/location">
      <div class="btn btn-blue h-12 w-3/4 mx-4 mt-5 text-lg rounded-lg">Continue</div>
    </router-link>
    <div class="text-m text-slate-500 mx-4 link no-underline">Retry</div>
  </div>
</template>

<style scoped></style>
