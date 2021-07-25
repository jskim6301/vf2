<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <site-title v-bind:title="site.title"></site-title>
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" width="400">
      <site-menu v-bind:menuItems="site.menu"></site-menu>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>

    <site-footer v-bind:footer="site.footer"></site-footer>

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
  data () {
    return {
      drawer: false,
      site: {
        menu: [
          {
            icon: 'mdi-home',
            subItems: [
              {
                title: 'Dashboard',
                to: '/'
              }
            ],
            title: 'home'
          },
          {
            icon: 'mdi-ticket',
            title: 'about',
            active: true,
            subItems: [
              {
                title: 'xxx',
                to: '/xxx'
              }
            ]
          },
          {
            icon: 'mdi-ticket',
            subItems: [{ title: 'List Item' }],
            title: 'Attractions'
          },
          {
            icon: 'mdi-silverware-fork-knife',
            active: true,
            subItems: [
              { title: 'Breakfast & brunch' },
              { title: 'New American' },
              { title: 'Sushi' }
            ],
            title: 'Dining'
          },
          {
            icon: 'mdi-school',
            subItems: [{ title: 'List Item' }],
            title: 'Education'
          },
          {
            icon: 'mdi-run',
            subItems: [{ title: 'List Item' }],
            title: 'Family'
          },
          {
            icon: 'mdi-bottle-tonic-plus',
            subItems: [{ title: 'List Item' }],
            title: 'Health'
          },
          {
            icon: 'mdi-content-cut',
            subItems: [{ title: 'List Item' }],
            title: 'Office'
          },
          {
            icon: 'mdi-tag',
            subItems: [{ title: 'List Item' }],
            title: 'Promotions'
          }
        ],
        title: '나의 타이틀',
        footer: '나의 Footer'
      }
    }
  },
  created () {
    this.subscribe()
  },
  methods: {
    subscribe () {
      console.log('this.site', this.site)
      this.$firebase.database().ref().child('site').on('value', (sn) => {
        const v = sn.val()
        if (!v) {
          this.$firebase.database().ref().child('site').set(this.site)
          return
        }
        this.site = v
      }, (e) => {
        console.log(e.message)
      })
    }
  }
}
</script>
