import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  //state
  const user = ref<any>(null);
  const userRoles = ref<any>();
  const userIdToken = ref<any>();
  const loadingUser = ref<boolean>(true);
  const phoneNumber = ref<string>("");

  //actions
  function setUser(firebaseUser: any) {
    user.value = firebaseUser;
  }
  function setUserRoles(userRole: any) {
    userRoles.value = userRole;
  }
  function setUserIdToken(token: any) {
    userIdToken.value = token;
  }
  function setLoadingUser(loadingState: boolean) {
    loadingUser.value = loadingState;
  }
  const setPhoneNumber = (phone: string) => {
    phoneNumber.value = phone;
  };

  return {
    user,
    userRoles,
    phoneNumber,
    setUser,
    setUserRoles,
    setUserIdToken,
    setLoadingUser,
    setPhoneNumber,
  };
});
