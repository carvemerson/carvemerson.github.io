<template>
    <v-container id="skills" class="d-flex justify-center">
        <v-card class="pa-5" width="1500" color="grey-lighten-4">
            <v-row>
                <v-col>
                    <h1 class="display-1">Coding Skills</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="skill in outstandingSkills" cols="6" sm="12" md="6">
                    <CardSkill
                        :title="skill.title"
                        :image="skill.image"
                        :width="500"
                        :image-width="100"
                        :href="skill.href"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col  v-for="skill in skills" cols="4" sm="6" md="3" lg="2">
                    <CardSkill
                        :title="skill.title"
                        :image="skill.image"
                        :href="skill.href"
                    />
                </v-col>
            </v-row>
        </v-card>

    </v-container>
</template>
<script>
import CardSkill from "./CardSkill.vue";
import {sk} from "vuetify/locale";

export default {
    name: 'AppHome',
    computed: {
        sk() {
            return sk
        }
    },
    components: {CardSkill},

    data: () => {
        return {
            outstandingSkills:[
                {title: "laravel", image: "/images/frameworks/laravel.png", href: "https://laravel.com/"},
                {title: "vue", image: "/images/frameworks/vuejs.png", href: "https://vuejs.org/"},
            ],
            skills: [
                {title: "php", image: "/images/frameworks/php.png", href: "https://www.php.net/"},
                {title: "javascript", image: "/images/frameworks/javascript.png", href: "https://www.javascript.com/"},
                {title: "HTML", image: "/images/frameworks/html.png", href: "https://developer.mozilla.org/en-US/docs/Web/HTML"},
                {title: "css", image: "/images/frameworks/css.png", href: "https://developer.mozilla.org/en-US/docs/Web/CSS"},
                {title: "bootstrap", image: "/images/frameworks/bootstrap.png", href: "https://getbootstrap.com/"},
                {title: "vuetify", image: "/images/frameworks/vuetify.png", href: "https://vuetifyjs.com/"},
                {title: "mysql", image: "/images/frameworks/mysql.png", href: "https://www.mysql.com/"},
                {title: "typescript", image: "/images/frameworks/typescript.png", href: "https://www.typescriptlang.org/"},
                {title: "c/c++", image: "/images/frameworks/c-plus-plus.png", href: "https://www.cplusplus.com/"},
                {title: "dart", image: "/images/frameworks/dart.png", href: "https://dart.dev/"},
                {title: "flutter", image: "/images/frameworks/flutter.png", href: "https://flutter.dev/"},
                {title: "angular", image: "/images/frameworks/angular.png", href: "https://angular.io/"},
                {title: "vitejs", image: "/images/frameworks/vitejs.png", href: "https://vitejs.dev/"},
                {title: "git", image: "/images/frameworks/git.png", href: "https://git-scm.com/"},
                {title: "github", image: "/images/frameworks/github.png", href: "https://github.com/"},
                {title: 'firebase', image: "/images/frameworks/firebase.png", href: "https://firebase.google.com/"},
                {title: "docker", image: "/images/frameworks/docker.webp", href: "https://www.docker.com/"},
            ],
        };
    },
}
</script>
