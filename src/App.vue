<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center">
        <v-app-bar-title class="text-primary font-weight-bold title-container"
          ><span class="mdi mdi-clock icon" /><span>番茄鐘</span></v-app-bar-title
        >
        <v-btn color="primary" outlined prepend-icon="mdi-home" to="/">首頁</v-btn>
        <v-btn color="primary" outlined prepend-icon="mdi-format-list-bulleted" to="/list"
          >事項</v-btn
        >
        <v-btn color="primary" outlined prepend-icon="mdi-cog" to="/settings">設定</v-btn>

        <v-btn color="primary" outlined prepend-icon="mdi-theme-light-dark" @click="toggleTheme">
          切換主題 (目前: {{ currentTheme }})
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <!--
      <SlotExample v-slot="apple">
        <h1>{{ apple }}</h1>
        <h1>{{ apple.num }}</h1>
        <h1>{{ apple.text }}</h1>
      </SlotExample>
      <SlotExample v-slot="{ num }">
        <h1>{{ num }}</h1>
      </SlotExample>
      -->
      <!--
      <CardA />
      <component :is="CardA" />
      <component :is="CardB" />
      <component :is="c" v-for="(c, i) in components" :key="i" />
      -->
      <!--
        slot = 插槽 = 自訂元件內的某部分 HTML
        v-slot="插槽提供的元件內的變數"
        https://zh-hk.vuejs.org/guide/components/slots.html#scoped-slots
        Component = 目前路由應該顯示的元件
        https://router.vuejs.org/zh/guide/advanced/router-view-slot.html#RouterView-%E6%8F%92%E6%A7%BD
      -->
      <router-view v-slot="{ Component }">
        <!--
          keep-alive 包住的元件不會被銷毀
          include 指定保留的元件
          https://zh-hk.vuejs.org/guide/built-ins/keep-alive.html#include-exclude
        -->
        <!--
          component 動態元件
          is 要使用的元件
        -->
        <keep-alive include="HomeView">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
// import CardA from '@/components/CardA.vue'
// import CardB from '@/components/CardB.vue'
// import SlotExample from '@/components/SlotExample.vue'

// const components = [CardA, CardB]

import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.name.value === 'lightTheme' ? 'darkTheme' : 'lightTheme'
}

const currentTheme = computed(() => (theme.global.name.value === 'lightTheme' ? '淺色' : '深色'))
</script>

<style scoped>
.title-container {
  display: inline-flex;
  align-items: center;
}

.title-container .icon {
  margin-right: 6px;
}
</style>
