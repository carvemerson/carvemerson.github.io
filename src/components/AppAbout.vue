<template>
    <v-container id="about">
        <v-row justify="center">
            <v-card
                class="pa-5 mt-5"
                elevation="0"
                width="1500"
            >
                <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        align-self="center"
                    >
                        <div class="text-h6 text-sm-h5  text-md-h4 font-weight-bold mb-5">
                            About me
                        </div>
                        <div class="text-body-1 my-4">
                            I'm a developer with more than 5 years of experience in web development.
                            I have a bachelor degree in Computer Science and a master degree on Computer Systems.
                            During my academic life, one of my hobbies was participating in programming competitions and
                            solving computational problems.
                            My end course project was with focus on multi objective optimization and algorithms
                            optimization
                        </div>
                        <div class="text-body-1 my-4">
                            I have worked with many technologies, such as PHP, Java, Javascript, Typescript, HTML, CSS,
                            MySQL, C/C++ and more.
                            Currently I'm focused on web development using Vue.js and Laravel.
                        </div>
                        <v-btn
                            size="small"
                            variant="tonal"
                            color="red-darken-1"
                            href="https://www.linkedin.com/in/emerson-bezerra-de-carvalho-76065ab4/"
                            target="_blank"
                        >
                            Contact me
                        </v-btn>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-row class="mt-3">
                            <v-col
                                v-for="about in aboutInfo"
                                :key="about.title"
                                cols="12"
                                md="6"
                            >
                                <v-hover>
                                    <template #default="{ isHovering, props }">
                                        <v-card
                                            class="mx-auto"
                                            v-bind="props"
                                            :prepend-icon="about.icon"
                                            :elevation="isHovering ? 10 : 2"
                                        >
                                            <template #title>
                                                {{ about.title }}
                                            </template>

                                            <v-card-text>
                                                {{ about.text }}
                                            </v-card-text>
                                        </v-card>
                                    </template>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'AppHome',

    data() {
        return {
            aboutInfo: [
                {
                    title: "E-mail",
                    text: "carvemerson@gmail.com",
                    icon: "mdi-email",
                },
                {
                    title: "Location",
                    text: "São José de Mipibu, RN, Brazil",
                    icon: "mdi-map-marker",
                },
                {
                    title: "Languages",
                    text: "Brazilian Portuguese, English",
                    icon: "mdi-translate",
                },
                {
                    title: "Hobbies",
                    text: "Ride a bike and play with my kids",
                    icon: "mdi-gamepad-variant",
                },
            ],
        };
    },
};
</script>
