// @/icons/index.js
import SvgIcon from '@/components/SvgIcon'

const installIcons = app => {
  // Make sure you're passing the app instance to the component registration
  const svgRequire = import.meta.glob('./svg/*.svg', { eager: true })

  Object.keys(svgRequire).forEach(key => {
    const componentName = key.split('/').pop().replace('.svg', '')

    // Register the component globally
    app.component(componentName, svgRequire[key].default)
  })

  // Register the SvgIcon component globally
  app.component('svg-icon', SvgIcon)
}

export default installIcons
