import {
    create,

    NConfigProvider,
    NButton,
    NTag,
    NDivider,
    NForm,
    NFormItem,
    NInput,
    NIcon,
    NCard,
    NMessageProvider,
    NNotificationProvider,
    NDropdown,
    NLayout,
    NLayoutSider,
    NLayoutContent,
    NLayoutHeader,
    NLayoutFooter,
    NGlobalStyle,
    NSpace,
    NBadge,
    NAvatar,
    NMenu,
    NPopover,
    NButtonGroup,
    NBreadcrumb,
    NBreadcrumbItem
} from 'naive-ui'

const naive = create({
    components: [
        NConfigProvider,
        NNotificationProvider,
        NLayout,
        NLayoutSider,
        NLayoutHeader,
        NLayoutContent,
        NLayoutFooter,
        NGlobalStyle,
        NMessageProvider,
        NButton,
        NTag,
        NDivider,
        NForm,
        NFormItem,
        NInput,
        NIcon,
        NCard,
        NDropdown,
        NSpace,
        NBadge,
        NAvatar,
        NMenu,
        NPopover,
        NButtonGroup,
        NBreadcrumb,
        NBreadcrumbItem
    ]
})

export function useNaiveUI(app: any) {
    app.use(naive)
}