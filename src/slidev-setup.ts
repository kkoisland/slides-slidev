/// <reference types="vite/client" />
import type { App } from "vue";

export default ({ app }: { app: App }) => {
	app.config.globalProperties.$base = import.meta.env.BASE_URL;
};
