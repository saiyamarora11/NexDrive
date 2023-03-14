<script setup lang="ts">
//dependencies
import { ref} from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import router from "../router";

//imports
import ArrowLeft from "../assets/arrow-left.svg?component";

const phoneNo = ref<string>("");

const phoneRegExp = /^[6-9]\d{9}$/;


const schema = yup.object().shape({
  phoneNo: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

function submitHandler() {
  const customerPhone = phoneNo.value.split(" ").join("");
  router.push("/otp");
}
</script>

<template>
  <div class="flex flex-col">
    <button @click="() => router.go(-1)">
      <ArrowLeft class="w-6 mt-6 ml-4" />
    </button>
    <div class="font-bold text-2xl mt-4 ml-4">Enter your mobile number to get OTP</div>
    <Form @submit="submitHandler" :validation-schema="schema" v-slot="{ errors }">
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
</template>

<style scoped></style>
