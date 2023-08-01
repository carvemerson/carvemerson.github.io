<template>
    <v-app-bar elevation="0">
        <v-container>
            <v-toolbar-title>
                <div class="d-flex justify-center">
                    <v-btn
                        v-for="link in links"
                        :href="link.href"
                        :color="selected === link.href ? 'red-darken-1' : ''"
                        :variant="selected === link.href ? 'tonal' : 'text'"
                        size="small"
                        @click="clickHandler(link)"
                    >
                        {{link.name}}

                    </v-btn>
                </div>
            </v-toolbar-title>
        </v-container>
    </v-app-bar>
</template>
<script>
import {computed} from "vue";

export default {

    data() {
        return {
            selected: null,
            links: [
                {name: "Home", href: "#home"},
                {name: "About", href: "#about"},
                // {name: "Resume", href: "#resume"},
                // {name: "Contact", href: "#contact"},
            ]
        };
    },

    created() {
        this.selected = window.location.hash || "#home";
    },

    methods: {
        clickHandler(link) {
            this.selected = link.href;
        }
    }
}

</script>
