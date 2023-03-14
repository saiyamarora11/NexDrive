<script setup lang="ts">
//dependencies
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Map from "../components/common/Map.vue";

//store,actions
import { useMapStore } from "../store/mapStore";

//imports
import Person from "../assets/person.svg?component";
import Electricity from "../assets/icons.svg?component";
import { evData } from "../data/data";
import { distance } from "../data/distance";
import Direction from "../assets/directions.svg?component";
import Pin from "../assets/marker.svg?component";

const router = useRouter();
const mapStore = useMapStore();

const currentFilter = ref<string>();

function panToMarker(card: any) {
  const longitude: any = card?.longitude;
  const latitude: any = card?.lattitude;
  return mapStore.map.panTo([longitude, latitude]);
}
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="relative h-[100vh]">
      <Map class="" />
    </div>
    <div class="absolute w-full md:w-[36.5rem] left-0 md:left-4 top-6 shadow-xl">
      <div
        class="w-11/12 min-h-[3rem] md:w-full mx-auto px-3 flex items-center md:px-3 rounded-full bg-white"
      >
        <router-link to="/profile">
          <Electricity class="h-7 w-7" />
        </router-link>
        <input
          id="pac-input"
          type="search"
          placeholder="Search for location"
          :class="`w-11/12 min-h-[3rem] md:w-full mx-auto px-3 flex items-center md:px-3 rounded-md bg-white shadow`"
        />
        <router-link to="/profile">
          <Person class="h-7 w-7" />
        </router-link>
      </div>
    </div>

    <div
      class="w-full absolute top-10 left-0 md:left-4 mt-10 shadow-xl flex flex-row gap-x-4 overflow-x-scroll hidescroll mx-4"
    >
      <button
        v-for="filter in distance"
        class="btn btn-sm bg-white text-black text-xs active:bg-yellow-100 active:text-yellow-700 hover:border hover:border-yellow-700 font-semibold hover:bg-yellow-100 hover:text-yellow-700 min-w-[5rem] max-h-6 rounded-md"
      >
        {{ filter?.title }}
      </button>
    </div>

    <div
      class="w-full absolute bottom-8 flex flex-row gap-x-1 overflow-y-hidden overflow-x-scroll hidescroll mx-2"
    >
      <div
        v-for="charger in evData"
        key="charger.id"
        class="flex flex-col items-start px-3"
        @click="panToMarker(charger)"
      >
        <div class="bg-white w-[80vw] h-[26vh] rounded-md flex flex-col px-2 gap-y-2">
          <div class="flex justify-center">
            <div class="btn bg-slate-300 hover:bg-slate-300 h-1 w-8 mt-2" />
          </div>
          <div
            class="font-semibold text-m text-emerald-700 bg-emerald-100 border border-emerald-700 flex justify-center"
          >
            {{ charger.name }}
          </div>

          <div class="truncate">
            <div class="text-xs">{{ charger?.address }}</div>
          </div>

          <div class="flex gap-x-1">
            <Pin class="scale-[0.6]" /><span class="text-xs text-emerald-400 mt-1"
              >50 min | 10Km</span
            >
          </div>

          <div class="btn btn-blue w-11/12 text-xs max-h-8 mx-3 mt-2">Directions</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
