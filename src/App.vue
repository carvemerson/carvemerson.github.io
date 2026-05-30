<template>
    <a
        class="skip-link"
        href="#main"
    >Skip to content</a>

    <div
        class="atmos"
        aria-hidden="true"
    >
        <div class="atmos__grain" />
        <div class="atmos__baseline" />
        <div class="atmos__vignette" />
    </div>

    <folio-rule />
    <app-nav />

    <main
        id="main"
        class="page"
        tabindex="-1"
    >
        <app-hero />
        <app-about />
        <app-work />
        <app-experience />
        <app-skills />
        <app-algorithms />
        <app-contact />
    </main>

    <app-footer />
</template>

<script setup>
import FolioRule from './components/FolioRule.vue';
import AppNav from './components/AppNav.vue';
import AppHero from './components/AppHero.vue';
import AppAbout from './components/AppAbout.vue';
import AppWork from './components/AppWork.vue';
import AppExperience from './components/AppExperience.vue';
import AppSkills from './components/AppSkills.vue';
import AppAlgorithms from './components/AppAlgorithms.vue';
import AppContact from './components/AppContact.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style scoped>
#main:focus-visible { outline: none; }
</style>
