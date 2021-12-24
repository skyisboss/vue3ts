import { App } from "vue";
import 'element-plus/theme-chalk/base.css'

import {
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
//   locale, //语言包
} from "element-plus";
import lang from "element-plus/lib/locale/lang/zh-cn";

// const components = [ElCard, ElDivider];
const components = [
    ElDivider,
    ElDrawer,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
];

const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
];

// locale(lang);

export function useElementPlus(app: App) {
    for (const component of components) {
        app.component(component.name, component)
    }
}
