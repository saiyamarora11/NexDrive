<script setup lang="ts">
//dependencies
import { ref } from "vue";
import { useRouter } from "vue-router";

//imports
import ArrowLeft from "../assets/arrow-left.svg?component";

const router = useRouter();

const name = ref<string>("Saiyam Arora");
const disabledName = ref<boolean>(false);

const phone = ref<number>(9873169858);
const disabledPhone = ref<boolean>(false);

const email = ref<string>("saiyam.arora11@gmail.com");
const disabledEmail = ref<boolean>(false);

//end-of-script
</script>

<template>
  <div class="flex flex-col h-[100vh-4rem]">
    <div class="flex gap-x-3 mt-4 border-b pb-4">
      <button @click="() => router.go(-1)">
        <ArrowLeft class="w-6 ml-4" />
      </button>
      <div class="font-semibold text-sm mt-1">EDIT ACCOUNT</div>
    </div>

    <div class="flex flex-col gap-x-1 mt-1 border-b pb-1 mx-2">
      <div class="text-xs text-gray-500 ml-5 mt-1">NAME</div>
      <div class="flex justify-between mx-3">
        <input
          v-model="name"
          :disabled="!disabledName"
          type="text"
          class="input border-none text-black"
        />
        <div
          @click="disabledName = true"
          class="link no-underline text-blue-500 text-sm font-semibold"
        >
          EDIT
        </div>
      </div>
    </div>
    <div v-if="disabledName" class="flex justify-between gap-x-2 mx-3 mt-5">
      <button
        @click="disabledName = false"
        class="btn bg-blue-500 hover:bg-blue-500 w-1/2"
      >
        UPDATE
      </button>
      <button
        @click="disabledName = false"
        class="btn btn-outline border border-blue-500 hover:bg-blue-500 text-blue-500 w-1/2 font-semibold"
      >
        CANCEL
      </button>
    </div>

    <div class="flex flex-col gap-x-1 mt-1 border-b pb-1 mx-2">
      <div class="text-xs text-gray-500 ml-5 mt-1">PHONE NUMBER</div>
      <div class="flex justify-between mx-3">
        <input
          v-model="phone"
          :disabled="!disabledPhone"
          type="text"
          class="input border-none text-black"
        />
        <div
          @click="disabledPhone = true"
          class="link no-underline text-blue-500 text-sm font-semibold"
        >
          EDIT
        </div>
      </div>
    </div>
    <div v-if="disabledPhone" class="flex justify-between gap-x-2 mx-3 mt-5">
      <button
        @click="disabledPhone = false"
        class="btn bg-blue-500 hover:bg-blue-500 w-1/2"
      >
        UPDATE
      </button>
      <button
        @click="disabledPhone = false"
        class="btn btn-outline border border-blue-500 hover:bg-blue-500 text-blue-500 w-1/2 font-semibold"
      >
        CANCEL
      </button>
    </div>

    <div class="flex flex-col gap-x-1 mt-1 border-b pb-1 mx-2">
      <div class="text-xs text-gray-500 ml-5 mt-1">EMAIL ADDRESS</div>
      <div class="flex justify-between mx-3">
        <input
          v-model="email"
          :disabled="!disabledEmail"
          type="text"
          class="input border-none text-black"
        />
        <div
          @click="disabledEmail = true"
          class="link no-underline text-blue-500 text-sm font-semibold"
        >
          EDIT
        </div>
      </div>
    </div>
    <div v-if="disabledEmail" class="flex justify-between gap-x-2 mx-3 mt-5">
      <button
        @click="disabledEmail = false"
        class="btn bg-blue-500 hover:bg-blue-500 w-1/2"
      >
        UPDATE
      </button>
      <button
        @click="disabledEmail = false"
        class="btn btn-outline border border-blue-500 hover:bg-blue-500 text-blue-500 w-1/2 font-semibold"
      >
        CANCEL
      </button>
    </div>
  </div>
</template>

<style scoped>
input[type="text"]:disabled {
  background: white;
}
</style>
