//dependencies
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  ConfirmationResult,
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



export const verifyOTP = async (args: {
  otp: string;
  confirmationResult: ConfirmationResult;
}) => {
  const authStore = useAuthStore();
  args.confirmationResult
    .confirm(args.otp)
    .then(async (result:any) => {
      console.log("otp verification result", result)

    })
    .catch((reason:any) => {
      authStore.setIsOTPVerified(false);
      alert("Invalid Otp Verification");
      console.log("otp verification cause", reason?.cause);
    })
    .finally(() => {
      authStore.toggleVerificationStarted(false);
    });
};


