<template>
    <v-container id="about">
        <v-row justify="center">
            <v-card class="pa-5">
                <v-row>
                    <v-col>
                        <h1 class="display-1">Skills</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <div class="text-button"> html </div>
                        <v-progress-linear color="red-darken-1" model-value="80" :height="12"/>
                    </v-col>
                    <v-col>
                        <div class="text-button"> css </div>
                        <v-progress-linear color="red-darken-1" model-value="75" :height="12"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <div class="text-button"> php </div>
                        <v-progress-linear color="red-darken-1" model-value="95" :height="12"/>
                    </v-col>
                    <v-col>
                        <div class="text-button"> javascript </div>
                        <v-progress-linear color="red-darken-1" model-value="90" :height="12"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <div class="text-button"> Typescript </div>
                        <v-progress-linear color="red-darken-1" model-value="75" :height="12"/>
                    </v-col>
                    <v-col>
                        <div class="text-button"> mysql </div>
                        <v-progress-linear color="red-darken-1" model-value="70" :height="12"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <div class="text-button"> c/c++ </div>
                        <v-progress-linear color="red-darken-1" model-value="80" :height="12"/>
                    </v-col>
                    <v-col>
                        <div class="text-button"> dart </div>
                        <v-progress-linear color="red-darken-1" model-value="85" :height="12"/>
                    </v-col>
                </v-row>
            </v-card>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'AppHome'
}
</script>
