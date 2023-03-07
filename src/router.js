import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/Home.vue";
import AdvancedSearch from "./pages/AdvancedSearch";
import ApartmentIndex from "./pages/Apartment/Index.vue";
import ApartmentShow from "./pages/Apartment/Show.vue";
import SendMessage from "./pages/Message.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/ricerca-avanzata",
            name: "search",
            component: AdvancedSearch
        },
        {
            path:"/appartamenti/:id",
            name: "apartments.show",
            component: ApartmentShow
        },
        {
            path: "/appartamenti",
            name:"apartments.index",
            component: ApartmentIndex
        },
        {
            path: "/messaggio",
            name:"message",
            component: SendMessage
        }

    ]
});

export { router };