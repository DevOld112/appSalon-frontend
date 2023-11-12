<script setup>
import { useServicesStore } from '../../stores/services';
import { useAppointmentsStore } from '../../stores/appointments';
import ServicesItem from '../../components/ServicesItem.vue'

const store = useServicesStore()
const app = useAppointmentsStore()

</script>

<template>
    <div
    v-if="app.message.length > 0"
    class="bg-red-500 p-3 rounded-md text-center text-white font-bold"
    >
        <p>{{ app.message }}</p>
    </div>

    <div
    v-if="app.success.length > 0"
    class="bg-green-500 p-3 rounded-md text-center text-white font-bold w-full"
    >
        <p>{{ app.success }}</p>
    </div>

    <h2 class="text-4xl font-extrabold mt-10">Servicios</h2>
    <p class="text-lg mt-5">A continuacion elige al menos un servicio para tu cita:</p>

    <div class="grid grid-cols-2 gap-5 mt-5">
        <ServicesItem 
        v-for="service in store.services"
        :key="service._id"
        :service="service"
        />
    </div>

</template>