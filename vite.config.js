import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig(({ mode }) => ({
  // 根据当前工作模式加载环境变量配置
  mode,
  build: {
    // 代码分割配置
    rollupOptions: {
      output: {
        manualChunks: {
          'element-plus': ['element-plus'],
          'vue-vendor': ['vue', 'vue-router', 'vuex', 'vue-i18n']
        }
      }
    },
    // 静态资源处理
    assetsDir: 'static',
    // CSS提取
    cssCodeSplit: true,
    // 启用gzip压缩
    reportCompressedSize: false,
    // 设置chunk大小警告的限制
    chunkSizeWarningLimit: 2000,
    // 最小化混淆
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  base: './',
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      symbolId: 'icon-[name]',
      inject: 'body-first', // 添加注入位置
      customDomId: '__svg__icons__dom__' // 添加自定义 DOM ID
    })
  ],
  server: {
    proxy: {
      // 代理所有 /api 的请求，该求情将被代理到 target 中
      '/api': {
        // 代理请求之后的请求地址  https://imooc-admin.lgdsunday.club/prod-api  https://api.imooc-admin.lgdsunday.club/
        target: 'https://api.imooc-admin.lgdsunday.club/',
        // rewrite: path => path.replace(/^\/api/, '/prod-api'),
        // 跨域
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~@': path.resolve(__dirname, 'src'),
      path: 'path-browserify'
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
  }
}))
