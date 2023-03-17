<script setup lang="ts">
import { ref } from "vue";
import router from "../router";
//dependencies

//imports
import ArrowLeft from "../assets/arrow-left.svg?component";

const name = ref<string>("");
</script>

<template>
  <div class="flex flex-col mx-4">
    <div class="flex gap-x-3 mt-4 border-b pb-4">
      <button @click="() => router.go(-1)">
        <ArrowLeft class="w-6" />
      </button>
      <div class="font-semibold text-sm mt-1">Create Profile</div>
    </div>
    <div class="flex justify-center mt-4">
      <img class="w-40 h-40" src="../assets/createProfile.png" />
    </div>

    <div class="relative mt-8">
      <input
        v-model="name"
        placeholder="Name"
        class="w-full border-blue-500 border rounded-md py-2 px-4 bg-white focus:outline-none"
        type="name"
        autocomplete="off"
      />
      <label
        class="absolute left-0 -top-3.5 text-blue-500 text-sm bg-white px-1.5 text-blue-500 text-sm"
      >
        Enter Full Name
      </label>
    </div>
    <div class="relative mt-8">
      <input
        placeholder="Number"
        class="w-full border-blue-500 border rounded-md py-2 px-4 bg-white focus:outline-none"
        type="number"
        autocomplete="off"
      />
      <label
        class="absolute left-0 -top-3.5 text-blue-500 text-sm bg-white px-1.5 text-blue-500 text-sm"
      >
        Phone Number
      </label>
    </div>
    <div class="relative mt-8">
      <input
        placeholder="Email"
        class="w-full border-blue-500 border rounded-md py-2 px-4 bg-white focus:outline-none"
        type="email"
        autocomplete="off"
      />
      <label
        class="absolute left-0 -top-3.5 text-blue-500 text-sm bg-white px-1.5 text-blue-500 text-sm"
      >
        Email
      </label>
    </div>
    <div class="text-xs text-slate-500 mt-4">Gender (Optional)</div>
    <div class="flex justify-between gap-x-1 mt-2">
      <button
        class="btn btn-sm bg-slate-100 hover:bg-slate-100 text-black h-8 w-1/3 border-slate-700"
      >
        Male
      </button>
      <button
        class="btn btn-sm bg-slate-100 hover:bg-slate-100 text-black h-8 w-1/3 border-slate-700"
      >
        Female
      </button>
      <button
        class="btn btn-sm bg-slate-100 hover:bg-slate-100 text-black h-8 w-1/3 border-slate-700"
      >
        Other
      </button>
    </div>

    <router-link to="/dashboard">
      <div class="btn btn-blue w-full h-12 mt-20">Proceed</div>
    </router-link>
  </div>
</template>
<style scoped></style>
