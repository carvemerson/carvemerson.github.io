<template>
    <v-navigation-drawer v-model="drawer" :permanent="permanent">
        <v-list>
            <v-list-item>
                <v-avatar size="6rem">
                    <v-img
                        src="images/photo.jpg"
                        alt="John"
                    />
                </v-avatar>
                <div class="text-h6">
                    Emerson Carvalho
                </div>
                <div class="text-subtitle-1">
                    carvemerson@gmail.com
                </div>
            </v-list-item>
        </v-list>

        <v-divider />
        <v-list>
            <v-list-subheader>NAVIGATION</v-list-subheader>

            <v-list-item
                v-for="link in links"
                :key="link.name"
                :href="link.href"
                :prepend-icon="link.icon"
                @click="autoClose()"
            >
                <v-list-item-title>{{ link.name }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-app-bar-title>
            <v-avatar color="red-darken-1" class="me-3">
                EC
            </v-avatar>
        </v-app-bar-title>
    </v-app-bar>
</template>

<script>
export default {

    data() {
        return {
            drawer: null,
            selected: null,
            links: [
                {name: "Home", href: "#home", icon: "mdi-home-outline"},
                {name: "About", href: "#about", icon: "mdi-account-outline"},
                {name: "Resume", href: "#resume", icon: "mdi-file-document-outline"},
                {name: "Coding Skills", href: "#skills", icon: "mdi-code-braces"},
                // {name: "Contact", href: "#contact"},
            ],
        };
    },

    computed: {
        permanent() {
            return !this.$vuetify.display.mobile;
        },
    },

    methods: {
        autoClose() {
            if (!this.permanent) {
                this.drawer = false;
            }
        },
    },
};

</script>
