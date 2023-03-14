import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("authStore", () => {
  //state
  const phoneNumber = ref<string>("");
  const isOTPVerified = ref<boolean>(false);
  const verificationStarted = ref<boolean>(false);
  const otpVerificationError = ref<string>("");
  const loginConfirmationResult = ref<any>("");
  const firstName = ref<string>("");
  const middleName = ref<string>("");
  const lastName = ref<string>("");

  //actions
  const setPhoneNumber = (phone: string) => {
    phoneNumber.value = phone;
  };

  const setIsOTPVerified = (state: boolean) => {
    isOTPVerified.value = state;
  };

  const setOTPVerificationError = (errorMessage: string) => {
    otpVerificationError.value = errorMessage;
  };

  const setLoginConfirmationResult = (confirmationResult: any) => {
    loginConfirmationResult.value = confirmationResult;
  };

  const setFirstName = (fName: string) => {
    firstName.value = fName;
  };

  const setMiddleName = (mName: string) => {
    middleName.value = mName;
  };

  const setLastName = (lName: string) => {
    lastName.value = lName;
  };

  //modals
  const showOTPVerificationModal = ref<boolean>(false);

  //loading states
  const showSignInLoader = ref<boolean>(false);
  const showOTPSentLoader = ref<boolean>(true);

  //toggles
  const toggleSignInLoader = (state: boolean) => {
    showSignInLoader.value = state;
  };

  const toggleShowOTPSentLoader = (state: boolean) => {
    showOTPSentLoader.value = state;
  };

  const toggleVerificationStarted = (state: boolean) => {
    verificationStarted.value = state;
  };

  const toggleOTPVerificationModal = (state: boolean) => {
    showOTPVerificationModal.value = state;
  };

  return {
    phoneNumber,
    showOTPVerificationModal,
    showOTPSentLoader,
    isOTPVerified,
    verificationStarted,
    otpVerificationError,
    loginConfirmationResult,
    showSignInLoader,
    firstName,
    middleName,
    lastName,
    setFirstName,
    setMiddleName,
    setLastName,
    setPhoneNumber,
    toggleOTPVerificationModal,
    toggleShowOTPSentLoader,
    setIsOTPVerified,
    toggleVerificationStarted,
    setOTPVerificationError,
    setLoginConfirmationResult,
    toggleSignInLoader,
  };
});

export default useAuthStore;
