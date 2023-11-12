<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute()

</script>

<template>

    <nav class="my-5 flex gap-3">
        <RouterLink
        :to="{name: 'new-appointment'}"
        class="flex-1 text-center p-3 uppercase font-extrabold text-white bg-blue-600 hover:bg-blue-700 rounded lg"
        :class="route.name === 'new-appointment' ? 'bg-blue-400 text-white' : 'text-white bg-blue-600'"
        >
            Servicios
        </RouterLink>

        <RouterLink
        :to="{name: 'appointment-details'}"
        class="flex-1 text-center p-3 uppercase font-extrabold text-white bg-blue-600 hover:bg-blue-700 rounded lg"
        :class="route.name === 'appointment-details' ? 'bg-blue-400 text-white' : 'text-white bg-blue-600'"
        >
            Cita y Resumen
        </RouterLink>

    </nav>

    <RouterView />
</template>