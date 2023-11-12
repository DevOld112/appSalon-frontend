<script setup>
import { displayDate } from '../helpers/date'
import { formatCurrency }from '../helpers/index'
import es from 'date-fns/locale/es'
import { RouterLink } from 'vue-router';
import { useAppointmentsStore } from '../stores/appointments'

const appointments = useAppointmentsStore()

defineProps({
    appointment: {
        type: Object
    }
})

</script>

<template>
    <div class="bg-white p-5 space-y-3 rounded-lg border border-black">
        <p class="font-black text-xl">
            Fecha: <span class="font-light">{{ displayDate(appointment.date) }} </span>
            Hora: <span class="font-light">{{ appointment.time }} </span>
        </p>

        <p class="text-lg font-black">Servicios Solicitados en la cita</p>
        <div v-for="service in appointment.services">
            <p class="text-xl font-bold mb-3">{{ service.name }}</p>
            <p class="text-2xl font-black text-blue-500"> {{ formatCurrency(service.price) }} </p>
        </div>

        <p class="text-2xl font-black text-right">
            Total a Pagar: <span class="text-blue-600">{{ formatCurrency(appointment.totalAmount)  }}</span>
        </p>
        
        <div class="flex gap-2 items-center">
            <RouterLink
            :to="{name: 'edit-appointment', params: {id : appointment._id }}"
            class="font-black bg-blue-500 rounded-lg text-white text-sm uppercase flex-1 md:flex-none p-3">
                Editar Cita
            </RouterLink>

            <button 
            @click="appointments.cancelAppointment(appointment._id)"
            class="font-black bg-red-600 rounded-lg text-white text-sm uppercase flex-1 md:flex-none p-3">
                Cancelar Cita
            </button>
        </div>
    </div>
</template>