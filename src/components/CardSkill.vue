<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card
            class="pa-5"
            :elevation="isHovering ? 12 : 2"
            v-bind="props"
            :color="!isHovering ? 'grey-lighten-4' : ''"
            @click="openUrl()"
        >
            <div class="d-flex justify-space-evenly align-center">
                <v-img
                    :max-width="imageWidth"
                    :src="image"
                />
                <div class="text-button font-weight-bold d-none d-sm-inline">
                    {{ title }}
                </div>
            </div>
        </v-card>
    </v-hover>
</template>
<script>
export default {
    name: 'CardSkill',

    props: {
        title: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            required: true,
        },

        width: {
            type: Number,
            default: 300,
        },

        imageWidth: {
            type: Number,
            default: 50,
        },

        href: {
            type: String,
            default: "#",
        },
    },

    methods: {
        openUrl() {
            window.open(this.href, "_blank");
        },
    },
};
</script>
