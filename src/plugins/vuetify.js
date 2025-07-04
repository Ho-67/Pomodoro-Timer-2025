/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'

const lightTheme = {
  dark: false,
  colors: {
    background: '#FFF8F0', // 淺暖白色背景
    surface: '#FFFFFF', // 卡片或表面白色
    primary: '#EA5E57', // 番茄紅 (主色)
    secondary: '#FF8A65', // 橘色系，輔助色
    accent: '#FF7043', // 強調色橘紅
    error: '#D84315', // 鮮明錯誤紅
    info: '#29B6F6', // 輕快藍色
    success: '#66BB6A', // 綠色成功色
    warning: '#FFA726', // 警告橘色
  },
}

const darkTheme = {
  dark: true,
  colors: {
    background: '#1E1E1E', // 深色背景
    surface: '#2C2C2C', // 深灰表面
    primary: '#FF6F61', // 較柔和的番茄紅
    secondary: '#FF8A65', // 橘色系
    accent: '#FF7043', // 強調色橘紅
    error: '#EF5350', // 紅色錯誤
    info: '#29B6F6', // 藍色資訊
    success: '#66BB6A', // 綠色成功
    warning: '#FFA726', // 警告橘色
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
      darkTheme,
    },
  },
})
