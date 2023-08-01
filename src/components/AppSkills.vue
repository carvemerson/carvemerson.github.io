<template>
    <v-container id="skills" class="d-flex justify-center">
        <v-card class="pa-5" width="1500" color="grey-lighten-4">
            <v-row>
                <v-col>
                    <h1 class="display-1">Skills</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="skill in outstandingSkills" cols="12" md="6">
                    <CardSkill
                        :title="skill.title"
                        :image="skill.image"
                        :value="skill.value"
                        :width="500"
                        :image-width="100"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col  v-for="skill in skills" cols="12" sm="6" md="3">
                    <CardSkill
                        :title="skill.title"
                        :image="skill.image"
                        :value="skill.value"
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
                {title: "laravel", image: "/images/frameworks/laravel.png", value: 95},
                {title: "vue", image: "/images/frameworks/vuejs.png", value: 95},
            ],
            skills: [
                {title: "php", image: "/images/frameworks/php.png", value: 95},
                {title: "javascript", image: "/images/frameworks/javascript.png", value: 90},
                {title: "HTML", image: "/images/frameworks/html.png", value: 80},
                {title: "css", image: "/images/frameworks/css.png", value: 75},
                {title: "bootstrap", image: "/images/frameworks/bootstrap.png", value: 80},
                {title: "vuetify", image: "/images/frameworks/vuetify.png", value: 70},
                {title: "mysql", image: "/images/frameworks/mysql.png", value: 75},
                {title: "typescript", image: "/images/frameworks/typescript.png", value: 70},
                {title: "c/c++", image: "/images/frameworks/c-plus-plus.png", value: 75},
                {title: "dart", image: "/images/frameworks/dart.png", value: 75},
                {title: "flutter", image: "/images/frameworks/flutter.png", value: 80},
                {title: "angular", image: "/images/frameworks/angular.png", value: 75},
                {title: "vitejs", image: "/images/frameworks/vitejs.png", value: 65},
                {title: "docker", image: "/images/frameworks/docker.webp", value: 60},
            ],
        };
    },
}
</script>
