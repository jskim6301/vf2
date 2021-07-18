<template>
    <v-toolbar-title>{{title}}</v-toolbar-title>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            required:true,
            default: 'TITLE'
        }
    }
}
</script>