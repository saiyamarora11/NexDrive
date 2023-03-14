
import { Loader } from "@googlemaps/js-api-loader";

export const loader = new Loader({
  apiKey: import.meta.env.VITE_MAP_KEY,
  version: "weekly",
  libraries: ["places","drawing"],
});

export const getLocation = () => {
  return new Promise<{ lat: number; lng: number } | null>(
    async (resolve, reject) => {
      if (
        (await window.navigator.permissions.query({ name: "geolocation" }))
          .state === "denied"
      ) {
        reject(null);
      } else {
        window.navigator.geolocation.getCurrentPosition(
          (location) => {
            resolve({
              lat: location.coords.latitude,
              lng: location.coords.longitude,
            });
          },
          (err) => {
            reject(null);
          }
        );
      }
    }
  );
};