//dependencies
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";

//store
import { useAuthStore } from "../store/auth";

//imports
import { auth } from "../firebase";
import { ref } from "vue";
const verificationCode = ref<any>('');

export const sendOTP = async (
  phoneNumber: string,
  setConfirmationResult: any
) => {
  const authStore = useAuthStore();

  try {
    const recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-with-phone",
      {
        size: "invisible",
        callback: (response: any) => {
        },
      },
      auth
    );
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      recaptchaVerifier
    );
    setConfirmationResult(confirmationResult);
    authStore.toggleShowOTPSentLoader(false);
    recaptchaVerifier.clear();
    const recaptchaDiv = document.getElementById("sign-in-with-phone");
    recaptchaDiv?.remove();
  } catch (err) {
    alert("Error sending otp");
    console.log("otp not sent", err);
    authStore.toggleOTPVerificationModal(false);
    const recaptchaDiv = document.getElementById("sign-in-with-phone");
    recaptchaDiv?.remove();
  }
};

export const verifyOTP = async () => {
  const confirmationResult = JSON.parse(localStorage.getItem('confirmationResult') || '');
  try {
    await confirmationResult.confirm(verificationCode.value);
    console.log('OTP verified successfully!');
  } catch (error) {
    console.error(error);
  }
};



