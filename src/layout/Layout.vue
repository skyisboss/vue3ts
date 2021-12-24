<template>
    <div class="text-center mt-20 space-y-4">
        <h1 class="text-5xl font-bold">hello, vue3+ts </h1>
        <div class="space-x-4 text-2xl">
            <i class="ri-mail-unread-fill"></i>
            <i class="ri-chat-smile-3-fill"></i>
            <i class="ri-magic-line"></i>
        </div>
        <div> 
            <n-button secondary @click="()=>locale = locale == 'enUS' ? 'zhCN' : 'enUS'">
                多语言: 
            </n-button> 
            {{ messages[locale].lang[locale] }}，locale = {{locale}}
        </div>
        <div><n-button secondary @click="handleMockjsDemo">mockjs:</n-button>{{ mockjs }}</div>
        <div>
            <router-link to="/404"><n-button secondary>404路由</n-button></router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from 'naive-ui';
import { useI18n } from "vue-i18n";
import { demoAPI } from '../api/demo'

const { t,messages,locale } = useI18n();

const mockjs = ref(null)
const handleMockjsDemo = async () => {
    let res = await demoAPI.init()
    mockjs.value = res.data
}
handleMockjsDemo()
</script>

<style lang="scss" scoped>
</style>