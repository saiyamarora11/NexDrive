<script setup lang="ts">
//dependencies
import { ref, watch } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import router from "../router";

//store,actions
import { sendOTP } from "../actions/auth";
import { useAuthStore } from "../store/auth";
import { useUserStore } from "../store/user";

//imports
import ArrowLeft from "../assets/arrow-left.svg?component";
import Spinner from "../components/common/Spinner.vue";

const customerStore = useUserStore();
const authStore = useAuthStore();
const otpSent = ref<boolean>(false);

const phoneNo = ref<string>("");

const submitHandler = async () => {
  const customerPhone = phoneNo.value.split(" ").join("");
  console.log(customerPhone);
  const recaptchaDiv = document.createElement("div");
  recaptchaDiv.setAttribute("id", "sign-in-with-phone");
  recaptchaDiv.setAttribute("class", "hidden");
  const captcaContainer = document.getElementById("recaptcha-container");
  captcaContainer?.appendChild(recaptchaDiv);

  otpSent.value = true;

  await sendOTP("+919873169858", (val: any) => {
    authStore.setLoginConfirmationResult(val);
  });
  customerStore.setPhoneNumber(customerPhone);
  otpSent.value = false;
};

watch(
  () => authStore.loginConfirmationResult,
  (confirmationResult) => {
    console.log("loader", confirmationResult);
    if (confirmationResult) {
      console.log("OTP verification successful");
      otpSent.value = false;
      router.push("/otp");
    }
  }
);
</script>

<template>
  <div class="flex flex-col">
    <button @click="() => router.go(-1)">
      <ArrowLeft class="w-6 mt-6 ml-4" />
    </button>
    <div class="font-bold text-2xl mt-4 ml-4">Enter your mobile number to get OTP</div>
    <div id="recaptcha-container">
      <Form id="recaptcha-container" @submit="submitHandler" v-slot="{ errors }">
        <div class="mt-6 mx-8">
          <div class="relative mt-3">
            <Field
              v-model="phoneNo"
              name="phoneNo"
              placeholder="10 digit mobile number"
              class="w-full border-emerald-500 border rounded-md py-2 px-4 bg-white focus:outline-none"
              type="number"
              autocomplete="off"
              :class="{ 'is-invalid': errors.phoneNo }"
            />

            <label
              class="absolute left-0 -top-3.5 text-emerald-500 text-sm bg-white px-1.5 text-emerald-500"
            >
              Mobile Number
            </label>
          </div>
        </div>
        <ErrorMessage name="phoneNo" class="validation-error ml-10" />
        <div class="mt-6 mx-8">
          <button
            class="w-full btn bg-emerald-500 hover:bg-emerald-500 h-10 rounded-lg"
            type="submit"
          >
            Get OTP
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<style scoped></style>
