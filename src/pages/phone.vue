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
const countryCode = ref<any>("+91");

const phoneRegExp = /^[6-9]\d{9}$/;
const schema = yup.object().shape({
  phoneNo: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

const submitHandler = async () => {
  const customerPhone = phoneNo.value.split(" ").join("");
  console.log(customerPhone);
  const recaptchaDiv = document.createElement("div");
  recaptchaDiv.setAttribute("id", "sign-in-with-phone");
  recaptchaDiv.setAttribute("class", "hidden");
  const captcaContainer = document.getElementById("recaptcha-container");
  captcaContainer?.appendChild(recaptchaDiv);

  otpSent.value = true;

  await sendOTP(countryCode.value + phoneNo.value, (val: any) => {
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
    <img class="scale-[0.8]" src="../assets/otp.png" />
    <div class="font-bold text-xl flex justify-center">Otp Verification</div>
    <div class="flex justify-center mx-8">
      <div class="text-slate-500  text-sm mt-2">We will send you an <span class="font-bold text-black">One Time Password </span>on this number</div>
    </div>
    
    <div id="recaptcha-container">
      <Form id="recaptcha-container" @submit="submitHandler" v-slot="{ errors }">
        <div class="mt-6 mx-4">
          <div class="relative mt-3">
            <Field
              v-model="phoneNo"
              name="phoneNo"
              placeholder="10 digit mobile number"
              class="w-full border-blue-500 border rounded-md py-2 px-4 bg-white focus:outline-none"
              type="number"
              autocomplete="off"
              :class="{ 'is-invalid': errors.phoneNo }"
            />

            <label
              class="absolute left-0 -top-3.5 text-blue-500 text-sm bg-white px-1.5 text-blue-500 font-semibold"
            >
              Mobile Number
            </label>
          </div>
        </div>
        <ErrorMessage name="phoneNo" class="validation-error ml-10" />
        <div class="mt-6 mx-4">
          <button
            class="w-full btn btn-blue  h-10 rounded-lg"
            type="submit"
          >
            <p v-if="!otpSent">Get OTP</p>
            <Spinner v-else :color="'emerald-spin'" :size="'spinner-md'" />
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<style scoped></style>
