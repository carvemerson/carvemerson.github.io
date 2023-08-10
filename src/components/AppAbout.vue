<template>
    <v-container id="about">
        <v-row justify="center">
            <v-card class="pa-5" elevation="0" width="1500">
                <v-row>
                    <v-col cols="12" sm="6" class="order-0 order-sm-1" align-self="center">
                        <div class="text-h6 text-sm-h5  text-md-h4 font-weight-bold mb-5">
                            About me
                        </div>
                        <div class="text-body-1 my-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies mauris sed diam placerat, quis ornare massa dapibus. Vivamus eu cursus nulla. Mauris congue magna mauris, sit amet rutrum mi placerat quis. Donec sed quam et lectus auctor tincidunt vel in erat. Donec nec ullamcorper sem, sed faucibus nunc. Donec.
                        </div>
                        <div class="text-body-1 my-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies mauris sed diam placerat, quis ornare massa dapibus. Vivamus eu cursus nulla.
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

                        <v-row class="mt-3">
                            <v-col v-for="about in aboutInfo" cols="12" md="6">
                                <v-card
                                    class="mx-auto"
                                    :prepend-icon="about.icon"
                                >
                                    <template v-slot:title>
                                        {{ about.title }}
                                    </template>

                                    <v-card-text>
                                        {{ about.text }}
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="12" sm="6" class="order-1 order-sm-0">
                        <v-img
                            max-width="500"
                            src="/images/person.png"
                        />
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
                    text: "Cycling, Games, Movies",
                    icon: "mdi-gamepad-variant",
                },
            ]
        };
    }
}
</script>
