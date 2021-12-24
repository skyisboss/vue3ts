import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import Layout from "@/layout/Layout.vue";
import NotFound from "@/layout/NotFound.vue";

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Layout',
		component: Layout,
	},
	{
		path: "/:pathMatch(.*)*",
		name: 'NotFound',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;