<template>
    <v-navigation-drawer v-model="drawer" :permanent="permanent">
        <v-list>
            <v-list-item>
                <v-avatar size="7rem">
                    <v-img
                        src="images/person-avatar.svg"
                        alt="John"
                    ></v-img>
                </v-avatar>
                <div class="text-h6"> Emerson Carvalho</div>
                <div class="text-subtitle-1"> carvemerson@gmail.com </div>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list>
            <v-list-subheader>NAVIGATION</v-list-subheader>

            <v-list-item
                v-for="link in links"
                :key="link.name"
                :href="link.href"
                @click="autoClose()"
            >
                <v-list-item-title>{{link.name}}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title><strong>Emerson Carvalho</strong></v-app-bar-title>
    </v-app-bar>
</template>

<script>
export default {

    data() {
        return {
            drawer: null,
            selected: null,
            links: [
                {name: "Home", href: "#home"},
                {name: "About", href: "#about"},
                {name: "Skills", href: "#skills"},
                // {name: "Resume", href: "#resume"},
                // {name: "Contact", href: "#contact"},
            ]
        };
    },

    computed: {
        permanent() {
            return !this.$vuetify.display.mobile;
        }
    },

    methods: {
        autoClose() {
            if (!this.permanent) {
                this.drawer = false;
            }
        }
    }
}

</script>
