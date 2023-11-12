<script setup>
import { useAppointmentsStore } from '../stores/appointments'
import { formatCurrency } from '../helpers/index'

const appointments = useAppointmentsStore()

defineProps({
    service:{
        type: Object
    }
})

</script>

<template>


    <div class="flex item  flex-wrap sm:p-6 flex-col gap-2 border border-black bg-white rounded-lg font-bold p-4 ">


        <h1 class="text-2xl">{{ service.name }}</h1>
        <h1 class="text-xl mt-2 text-blue-600 font-black">{{ formatCurrency(service.price) }}</h1>

        <div
            class="p-2 space-y-5 rounded-lg cursor-pointer bg-blue-200 text-center hover:bg-blue-500"
            @click="appointments.onServiceSelected(service)"
        >
        Agregar Servicio
        </div>

    </div>
</template>