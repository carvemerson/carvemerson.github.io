<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card class="pa-5" :elevation="isHovering ? 12 : 2" v-bind="props" :color="!isHovering ? 'grey-lighten-4' : ''">
            <div class="d-flex justify-space-evenly mb-3 align-center">
                <v-img
                    :max-width="imageWidth"
                    :src="image"
                ></v-img>
                <div class="text-button font-weight-bold">{{title}}</div>
            </div>
            <v-progress-linear color="red-darken-1" :model-value="value" :height="12"/>
        </v-card>
    </v-hover>
</template>
<script>
export default {
    name: 'CardSkill',

    props: {
        title: {
            type: String,
        },
        image: {
            type: String,
        },
        value: {
            type: Number,
        },
        width: {
            type: Number,
            default: 300,
        },
        imageWidth: {
            type: Number,
            default: 50,
        },
    }
}
</script>
