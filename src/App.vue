<template>
    <v-app>
        <AppHeader/>

        <v-main>
            <AppHome/>
            <AppAbout/>
            <AppSkills/>
        </v-main>

        <AppFooter/>
    </v-app>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppHome from "./components/AppHome.vue";
import AppAbout from "./components/AppAbout.vue";
import AppSkills from "./components/AppSkills.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
