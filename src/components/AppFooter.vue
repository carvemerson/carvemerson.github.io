<template>
    <v-footer
        class="bg-red-lighten-2 text-center d-flex flex-column"
    >
        <div>
            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                :icon="icon"
                variant="text"
            />
        </div>

        <v-divider />

        <div>
            {{ new Date().getFullYear() }} — <strong>EBC Software Development</strong>
        </div>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
};
</script>
