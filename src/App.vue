<template>
  <el-config-provider :locale="store.getters.language === 'en' ? en : zhCn">
    <router-view />
  </el-config-provider>
</template>

<script setup>
  import { useStore } from 'vuex'
  import { generateNewStyle, writeNewStyle } from '@/utils/theme'
  import { watchSwitchLang } from '@/utils/i18n'
  import { onMounted } from 'vue'
  import { ElConfigProvider } from 'element-plus'
  import zhCn from 'element-plus/es/locale/lang/zh-cn'
  import en from 'element-plus/es/locale/lang/en'

  const store = useStore()
  generateNewStyle(store.getters.mainColor).then(newStyleText => {
    writeNewStyle(newStyleText)
  })

  watchSwitchLang(() => {
    if (store.getters.token) {
      store.dispatch('user/getUserInfo')
    }
  })

  // Move removeChild to onMounted hook
  onMounted(() => {
    const toastElement = document.getElementById('m-toast')
    if (toastElement) {
      document.body.removeChild(toastElement)
    }
  })
</script>

<style lang="scss"></style>
