<template>
    <v-app>
        <app-header />

        <v-main>
            <app-home />
            <app-about />
            <app-resume />
            <app-skills />
            <app-footer />
        </v-main>
    </v-app>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppHome from "./components/AppHome.vue";
import AppAbout from "./components/AppAbout.vue";
import AppSkills from "./components/AppSkills.vue";
import AppFooter from "./components/AppFooter.vue";
import AppResume from "./components/AppResume.vue";
</script>
