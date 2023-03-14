import { defineStore } from "pinia";
import { ref } from "vue";

export const useMapStore = defineStore("mapStore", () => {

  //state
  const map = ref<any>();
  const maploader = ref<boolean>(true);
  const formattedAddress = ref<string>("");


  //actions
  const toggleMaploader = (map: boolean) => {
    maploader.value = map;
  };
  const setFormattedAddress = (address: string) =>
  (formattedAddress.value = address);

  return {
   map,
   maploader,
   formattedAddress,
   toggleMaploader,
   setFormattedAddress,
  };
});
