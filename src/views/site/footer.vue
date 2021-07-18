<template>
    <v-footer app dark absolute >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() + ' ' + footer }}<strong></strong>
      </v-col>
    </v-footer>
</template>

<script>
export default {
    props:{
        footer:{
            type: String,
            required:true,
            default: 'FOOTER'
        }
    }
}
</script>