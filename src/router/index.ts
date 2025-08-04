/**
 * router/index.ts
 *
 * Project-based routing structure: /{project}/{section}
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";

// Import components
import HelloWorld from "@/components/HelloWorld.vue";
import NodeMapPage from "@/pages/NodeMapPage.vue";
import StaticPageLoader from "@/components/StaticPageLoader.vue";

const routes = [
  // Root page
  { path: "/", name: "home", component: HelloWorld },
  
  // Christmas 2024 Hunt project routes
  {
    path: "/christmas-2024-hunt",
    children: [
      { 
        path: "map", 
        name: "christmas-2024-hunt-map", 
        component: NodeMapPage,
        props: { dataConfig: "christmas-2024" }
      },
      { 
        path: "map2", 
        name: "christmas-2024-hunt-map2", 
        component: NodeMapPage,
        props: { }
      },
      // Add other sections later: about, gallery, etc.
    ]
  },

  // Redirect /christmas-2024-hunt/terminal to /terminal
  { path: "/christmas-2024-hunt/terminal", redirect: "/terminal" },
  
  // Static pages using StaticPageLoader
  { 
    path: "/terminal", 
    name: "terminal",
    component: StaticPageLoader, 
    props: { pageName: 'terminal' }
  },
  
  // Legacy redirect - redirect old /about to new structure
  { path: "/about", redirect: "/christmas-2024-hunt/map" },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
