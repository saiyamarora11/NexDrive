//dependencies
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";


//store

//imports
import { auth } from "../firebase";
import { ref } from "vue";
const verificationCode = ref<any>('');

export const sendOTP = async (
  phoneNumber: string
) => {
  try {
    const recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-with-phone",
      {
        size: "invisible",
        callback: (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      recaptchaVerifier
    );
    localStorage.setItem('confirmationResult', JSON.stringify(confirmationResult));
    console.log('OTP sent successfully!');
  } catch (err) {
    alert("Error sending otp");
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



