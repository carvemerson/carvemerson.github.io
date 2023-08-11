<template>
    <v-container id="home">
        <v-row justify="center">
            <v-hover>
                <template #default="{ isHovering, props }">
                    <v-card
                        v-bind="props"
                        class="pa-5 mt-5"
                        color="grey-lighten-4"
                        :elevation="isHovering ? 12 : 2"
                        width="1500"
                    >
                        <v-row align="center">
                            <v-col class="ms-auto text-end" align-self="center">
                                <span class="text-h6 text-sm-h5 text-md-h4">HELLO</span>
                                <div class="text-h4 text-sm-h3 text-md-h2 font-weight-bold">
                                    I'm <span class="text-red">Emerson</span> Carvalho!!
                                </div>
                                <div class="text-h6 text-sm-h5 text-md-h4">
                                    WEB DEVELOPER
                                </div>
                                <v-btn
                                    size="small"
                                    variant="tonal"
                                    color="red-darken-1"
                                    href="https://www.linkedin.com/in/emerson-bezerra-de-carvalho-76065ab4/"
                                    target="_blank"
                                >
                                    Download CV
                                </v-btn>
                            </v-col>

                            <v-col>
                                <v-card
                                    class="mx-auto"
                                    max-width="400"
                                >
                                    <v-img
                                        src="/images/photo.jpg"
                                        cover="true"
                                    />
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </template>
            </v-hover>
        </v-row>
    </v-container>
</template>
<script setup>
</script>
