<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';
import appointmentAPI from '../../api/appointmentAPI' 
import { useAppointmentsStore } from '../../stores/appointments';

const appointments = useAppointmentsStore()

const route = useRoute()
const router = useRouter()

const { id } = route.params

onMounted(async () => {
    try {
       const { data } = await appointmentAPI.getById(id)
       appointments.setSelectedAppointment(data)
    } catch (error) {
        router.push({name:'my-appointments'})
    }
})

</script>

<template>


    <nav class="my-5 flex gap-3">
        <RouterLink
        :to="{name: 'edit-appointment'}"
        class="flex-1 text-center p-3 uppercase font-extrabold text-white bg-blue-600 hover:bg-blue-700 rounded lg"
        :class="route.name === 'new-appointment' ? 'bg-blue-400 text-white' : 'text-white bg-blue-600'"
        >
            Servicios
        </RouterLink>

        <RouterLink
        :to="{name: 'edit-appointment-details'}"
        class="flex-1 text-center p-3 uppercase font-extrabold text-white bg-blue-600 hover:bg-blue-700 rounded lg"
        :class="route.name === 'appointment-details' ? 'bg-blue-400 text-white' : 'text-white bg-blue-600'"
        >
            Cita y Resumen
        </RouterLink>

    </nav>

    <RouterView />
</template>