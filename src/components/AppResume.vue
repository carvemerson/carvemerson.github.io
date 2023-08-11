<template>
    <v-container id="resume">
        <v-row justify="center">
            <v-card elevation="0" width="1500">
                <v-row>
                    <v-col cols="12" md="6">
                        <div class="font-weight-bold text-h4 ml-2">Education</div>

                        <v-hover v-for="education in educationInfo">
                            <template v-slot:default="{ isHovering, props }">
                                <v-card
                                    v-bind="props"
                                    class="ma-5"
                                    :elevation="isHovering ? 10 : 2"
                                >
                                    <v-card-item>
                                        <v-card-title>
                                            <v-chip
                                                class="ma-2"
                                                color="red"
                                                text-color="white"
                                            >
                                                {{ education.date }}
                                            </v-chip>


                                        </v-card-title>

                                        <v-card-text>
                                            <div class="text-h6 ">
                                                {{ education.title }}
                                            </div>
                                            {{ education.subtitle }}
                                        </v-card-text>
                                    </v-card-item>
                                </v-card>
                            </template>
                        </v-hover>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="font-weight-bold text-h4 ml-2">Experience</div>


                        <v-hover v-for="experience in experienceInfo">
                            <template v-slot:default="{ isHovering, props }">
                                <v-card
                                    v-bind="props"
                                    class="ma-5"
                                    :elevation="isHovering ? 10 : 2"
                                >
                                    <v-card-item>
                                        <v-card-title>
                                            <v-chip
                                                class="ma-2"
                                                color="red"
                                                text-color="white"
                                            >
                                                {{ experience.date }}
                                            </v-chip>


                                        </v-card-title>

                                        <v-card-text>
                                            <div class="text-h6 ">
                                                {{ experience.title }}
                                            </div>
                                            {{ experience.subtitle }}
                                        </v-card-text>
                                    </v-card-item>
                                </v-card>
                            </template>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-card>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'AppResume',

    data() {
        return {
            educationInfo: [
                {
                    date: "2010 - 2011",
                    title: "Metrópole Digital Programmer Training Course",
                    subtitle: "Federal University of Rio Grande do Norte",
                },
                {
                    date: "2011 - 2015",
                    title: "Bachelor of Computer Science",
                    subtitle: "Federal University of Rio Grande do Norte",
                },
                {
                    date: "2015 - 2017",
                    title: "Master's Degree in Computer Systems",
                    subtitle: "Federal University of Rio Grande do Norte",
                },
            ],

            experienceInfo: [
                {
                    date: "Jul 2017 - Set 2017",
                    title: "Synco",
                    subtitle: "Software Engineer",
                },
                {
                    date: "2017 - Present",
                    title: "Cloud Plus Plus",
                    subtitle: "Software Engineer",
                },
            ],
        }
    },
}
</script>
