<template>
    <div>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    <v-list>
      <v-list-group
        v-for="(item,i) in items"
        :key="i"
        v-model="item.active"
        :prepend-icon="item.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.subItems"
          :key="subItem.title"
          :to="subItem.to"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    </div>
</template>

<script>
export default {
    data(){
        return {
            items: [
                {
                    icon:'mdi-home',
                    subItems:[
                        {
                            title:'Dashboard',
                            to:'/'
                        }
                    ],
                    title:'home',
                },
                {
                    icon:'mdi-ticket',
                    title:'about',
                    active:true,
                    subItems:[
                        {
                            title:'xxx',
                            to: '/xxx'
                        }
                    ]
                },
                {
                icon: 'mdi-ticket',
                subItems: [{ title: 'List Item' }],
                title: 'Attractions',
                },
                {
                icon: 'mdi-silverware-fork-knife',
                active: true,
                subItems: [
                    { title: 'Breakfast & brunch' },
                    { title: 'New American' },
                    { title: 'Sushi' },
                ],
                title: 'Dining',
                },
                {
                icon: 'mdi-school',
                subItems: [{ title: 'List Item' }],
                title: 'Education',
                },
                {
                icon: 'mdi-run',
                subItems: [{ title: 'List Item' }],
                title: 'Family',
                },
                {
                icon: 'mdi-bottle-tonic-plus',
                subItems: [{ title: 'List Item' }],
                title: 'Health',
                },
                {
                icon: 'mdi-content-cut',
                subItems: [{ title: 'List Item' }],
                title: 'Office',
                },
                {
                icon: 'mdi-tag',
                subItems: [{ title: 'List Item' }],
                title: 'Promotions',
                },
            ],
        }
    }
}
</script>