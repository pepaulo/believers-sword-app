import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style/main.scss";
import "virtual:windi.css";
import { MessageProviderInst, NotificationProviderInst } from "naive-ui"
import { createPinia } from 'pinia'

declare global {
    interface Window {
        message: MessageProviderInst;
        notification: NotificationProviderInst
    }
}

createApp(App)
    .use(store)
    .use(router)
    .use(createPinia())
    .mount("#app");
