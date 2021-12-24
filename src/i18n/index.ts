// import { createI18n } from "vue-i18n";
import { createI18n } from "vue-i18n/index"
import zhCN from './zh-cn'
import enUS from './en-us'


// 构建实例
const i18n = createI18n({
    locale: localStorage.lang || "zhCN", // 默认当前语言环境
    fallbackLocale: "enUS", // 第二默认语言环境
    messages: {
        zhCN,
        enUS,
    },
});

export default i18n;