import SvgIcon from '@/components/SvgIcon'
import 'virtual:svg-icons-register'

const installIcons = app => {
  app.component('svg-icon', SvgIcon)
}

export default installIcons
