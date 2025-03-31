import SvgIcon from '@/components/SvgIcon'

// 使用 import.meta.glob 动态导入 SVG 文件
const svgRequire = import.meta.glob('./svg/*.svg', { eager: true })

// 遍历所有 SVG 文件，动态注册为 Vue 组件
Object.keys(svgRequire).forEach(key => {
  // 提取文件名并直接使用（不转为大驼峰）
  const componentName = key.split('/').pop().replace('.svg', '')

  // 注册每个 SVG 文件作为 Vue 组件
  // eslint-disable-next-line no-undef
  app.component(componentName, svgRequire[key].default)
})

export default app => {
  // 注册 SvgIcon 组件
  app.component('svg-icon', SvgIcon)
}
