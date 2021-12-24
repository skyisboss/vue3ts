<template>
	<n-config-provider :theme-overrides="themeOverrides" :theme="currTheme">
		<n-message-provider>
			<router-view />
		</n-message-provider>
	</n-config-provider>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import { GlobalThemeOverrides, darkTheme } from "naive-ui";
import { BuiltInGlobalTheme } from "naive-ui/lib/themes/interface";

const themeOverrides: GlobalThemeOverrides = {
	common: {
		baseColor: "#fff",

		primaryColor: "#006eff",
		primaryColorHover: "#006eff",
		primaryColorPressed: "#338bff",
		primaryColorSuppl: "#006eff",

		successColor: "#67c23a",
		successColorHover: "#85ce61",
		successColorPressed: "#529b2e",
		successColorSuppl: "#67c23a",
	},
	Button: {},
};
const currTheme = ref<BuiltInGlobalTheme | null>(null);
const handleChangeTheme:()=>void = () => {
	currTheme.value = currTheme.value == null 
		? darkTheme
		: null
}

provide("handleChangeTheme", handleChangeTheme);
</script>

<style></style>
