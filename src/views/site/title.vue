<template>
    <div>
        <v-toolbar-title>
            {{title}}
            <v-btn icon @click="openDialog"><v-icon>{{icons.mdiPencil}}</v-icon></v-btn>
            <v-dialog v-model="dialog" max-width="400">
                <v-card>
                    <v-card-title>
                        제목 수정
                        <v-spacer/>
                        <v-btn icon @click="save"><v-icon>{{icons.mdiContentSave }}</v-icon></v-btn>
                        <v-btn icon @click="dialog = false"><v-icon>{{icons.mdiClose}}</v-icon></v-btn>

                    </v-card-title>
                    <v-card-text>
                        <v-text-field v-model="text" outlined label="제목" @keypress.enter="save" hide-details></v-text-field>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-toolbar-title>
    </div>
</template>

<script>
import {
  mdiAccount,
  mdiPencil,
  mdiShareVariant,
  mdiClose,
  mdiContentSave
} from '@mdi/js'
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'TITLE'
    }
  },
  data () {
    return {
      icons: {
        mdiAccount,
        mdiPencil,
        mdiShareVariant,
        mdiClose,
        mdiContentSave
      },
      dialog: false,
      text: this.title
    }
  },
  methods: {
    openDialog () {
      this.dialog = true
      console.log(this.dialog)
    },
    async save () {
      try {
        await this.$firebase.database().ref().child('site').update({ title: this.text })
      } catch (e) {
        console.log(e.message)
      } finally {
        this.dialog = false
      }
    }
  }
}
</script>
