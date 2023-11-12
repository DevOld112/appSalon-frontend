<script setup>
import { useAppointmentsStore } from '../stores/appointments'
import { formatCurrency } from '../helpers';

const store = useAppointmentsStore()


defineProps({
    appointment:{
        type: Object
    }
})

</script>

<template>
    <div
    class="flex item  flex-wrap sm:p-6 flex-col gap-2 border border-black bg-white rounded-lg font-bold p-4">
        <h1 class="text-2xl">{{ appointment.name }}</h1>
        <h1 class="text-xl mt-2 text-blue-600 font-black">Precio - {{ formatCurrency(appointment.price) }}</h1>
        
        <button
        class="bg-red-300 hover:bg-red-500 rounded-lg text-white p-2"
        type="button"
        @click="store.onServiceEliminated(appointment)"
        >
        Eliminar Servicio
        </button>
    </div>


</template>