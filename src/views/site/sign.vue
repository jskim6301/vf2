<template>
    <v-menu offset-y>
        <template v-slot:activator="{on}">
            <v-btn icon v-on="on"><v-icon>mdi-account</v-icon></v-btn>
        </template>
        <v-card>
            <v-card-title>로그인</v-card-title>
            <v-divider />
            <v-card-actions>
                <v-btn color="red" dark><v-icon left>mdi-google</v-icon>구글로 로그인</v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>



<script setup>

</script>

<style lang="scss" scoped>

</style>