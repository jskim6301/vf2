<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <site-title v-bind:title="title"></site-title>
      <v-spacer />
    <v-btn icon to="/about">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon to="/">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <site-menu></site-menu>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>

    <site-footer v-bind:footer="footer"></site-footer>
  </v-app>
</template>

<script>
import SiteTitle from '@/views/site/title'
import SiteFooter from '@/views/site/footer'
import SiteMenu from '@/views/site/menu'
export default {
  components: {
    SiteTitle,
    SiteFooter,
    SiteMenu
  },
  name: 'App',
  data(){
    return {
      drawer: false,
      items: [],
      title: '나의 타이틀',
      footer: '나의 Footer',
    }
  }
}
</script>
