<template>
  <el-config-provider :locale="store.getters.language === 'en' ? en : zhCn">
    <router-view />
  </el-config-provider>
</template>

<script setup>
  import { useStore } from 'vuex'
  import { generateNewStyle, writeNewStyle } from '@/utils/theme'
  import { watchSwitchLang } from '@/utils/i18n'
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  import en from 'element-plus/dist/locale/en.mjs'
  import { onMounted } from 'vue'

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
