<script setup lang="ts">
//dependencies
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { verifyOTP } from "../actions/auth";
import VOtpInput from "vue3-otp-input";

//store,actions
import { useAuthStore } from "../store/auth";
import { useUserStore } from "../store/user";

//imports
import ArrowLeft from "../assets/arrow-left.svg?component";

const router = useRouter();
const customerStore = useUserStore();
const authStore = useAuthStore();

const otp = ref<string>();
const handleOnComplete = (value: string) => {
  otp.value = value;
};
const submitHandler = async (e: Event) => {
  e.preventDefault();
  if (!otp.value) {
    alert("Please enter valid otp");
    return;
  }
  await verifyOTP({
    otp: otp.value,
    confirmationResult: authStore.loginConfirmationResult,
  });
};

watch(customerStore, (updatedStore) => {
  if (updatedStore.user) {
    router.replace("/createProfile");
  }
});
</script>

<template>
  <button @click="() => router.go(-1)">
    <ArrowLeft class="w-6 mt-6 ml-4" />
  </button>
  <div class="font-bold text-2xl ml-4">
    Verify with OTP sent to {{ `+91-${customerStore.phoneNumber}` }}
  </div>

  <form @submit="submitHandler" class="flex flex-col items-center justify-center">
    <div class="relative w-full flex items-center justify-center"></div>
    <div class="mt-6">
      <v-otp-input
        ref="otpInput"
        input-classes="otp-input input w-12 h-12 text-xl"
        separator="&nbsp&nbsp"
        :num-inputs="6"
        :should-auto-focus="true"
        :is-input-num="true"
        :conditionalClass="['one', 'two', 'three', 'four']"
        @on-complete="handleOnComplete"
      />
    </div>

    <button
      class="w-11/12 mt-4 btn btn-blue rounded-lg"
      type="submit"
    >
      Contine
    </button>
  </form>
</template>

<style scoped></style>
