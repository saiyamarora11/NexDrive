
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import svgLoader from "vite-svg-loader";
import { VitePWA } from "vite-plugin-pwa";

const routeTitles = [
  { name: "user-paynow", title: "Scan & Pay" },
];
const excludeAuth = [
  "login"
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(
      {
        extendRoute(route, parent) {
          return {
            ...route,
            meta: {
              title: (() => {
                const match = routeTitles.find((title) => {
                  return title.name === route.name;
                });
                return match?.title || "";
              })(),
              requiresAuth: !excludeAuth.includes(route.name),
            },
          };
        },
      }
    ),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      manifest: {
        id: "in.NexDrive",
        name: "Fuel Buddy",
        short_name: "EvDrive",
        description: "EvDrive",
        background_color: "#a5f3fc",
        theme_color: "#a5f3fc",
        orientation: "portrait",
        // icons: [
        //   {
        //     src: "/icons/fb_min_logo.png",
        //     sizes: "192x192",
        //     type: "image/png",
        //   },
        //   {
        //     src: "/icons/fb_min_logo.png",
        //     sizes: "683x512",
        //     type: "image/png",
        //   },
        // ],
      },
    }),
    svgLoader(),
    svgLoader({
      svgoConfig: {
        multipass: true,
      },
    }),

  ],
});
