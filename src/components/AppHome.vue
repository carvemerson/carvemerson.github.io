<template>
    <v-container id="home">
        <v-row justify="center">
            <v-card class="pa-5" color="grey-lighten-4">
                <v-row>
                    <v-col class="ms-auto text-end" align-self="center">
                        <span class="text-caption">HELLO</span>
                        <div class="text-h6 text-sm-h5  text-md-h4 font-weight-bold">I'm <span
                            class="text-red">Emerson</span> Carvalho!!
                        </div>
                        <div class="text-caption">WEB DEVELOPER</div>
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
<script setup>
</script>
