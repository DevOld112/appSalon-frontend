<script setup>
import { displayDate } from '../helpers/date'
import { formatCurrency }from '../helpers/index'

const props = defineProps({
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

        <p class="text-lg font-light">
            Nombre de Cliente: <span class="font-bold italic">{{ props.appointment.user.name }}</span>
            Email: <span class="font-bold italic">{{ props.appointment.user.email }}</span>
        </p>

        <p class="text-lg font-black">Servicios Solicitados en la cita</p>
        <div v-for="service in appointment.services">
            <p class="text-xl font-bold mb-3">{{ service.name }}</p>
            <p class="text-2xl font-black text-blue-500"> {{ formatCurrency(service.price) }} </p>
        </div>

        <p class="text-2xl font-black text-right">
            Total a Pagar: <span class="text-blue-600">{{ formatCurrency(appointment.totalAmount)  }}</span>
        </p>
      
    </div>
</template>