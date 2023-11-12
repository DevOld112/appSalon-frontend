<script setup>
import { ref } from 'vue';
import VueTailwindDatePicker from 'vue-tailwind-datepicker'
import DetailsItem from '../../components/DetailsItem.vue';
import { useAppointmentsStore } from '../../stores/appointments';
import { formatCurrency } from '../../helpers';

const store = useAppointmentsStore()

const formatter = ref({
    date: 'DD/MM/YYYY',
    month: 'MMM'
})

const disableDate = (date) => {
    const today = new Date()
    return date < today || date.getMonth() > today.getMonth() + 1 || [0,6].includes( date.getDay() )
}

</script>

<template>
    <h2 class="text-4xl font-extrabold mt-10">Detalles de la cita</h2>

    <div
    class="mt-5 font-semibold min-h-screen flex items-center justify-center text-2xl"
    v-if="store.detailApp.length === 0"
    >
    <p>No hay Servicios Seleccionados para esta cita</p>
    </div>

    <div 
    v-else
    class="grid grid-cols-2 gap-5 mt-5">
        <DetailsItem
        v-for="appointment in store.detailApp"
        :key="appointment._id"
        :appointment="appointment"
        />
    </div>

    <div
    v-if="store.detailApp.length > 0"
    class="mt-10 flex justify-end font-bold text-2xl"
    >
        Total a pagar: {{ formatCurrency(store.totalAmount) }}
    </div>

    <div 
    class="space-y-8 mt-10"
    v-if="store.detailApp.length > 0"
    >
        <h3 class="text-3xl font-extrabold text-center">Fecha y Hora</h3>

        <div class="flex gap-3">
            <div class="w-2/3 lg:w-96 bg-white flex justify-center rounded-lg">
                <VueTailwindDatePicker
                :disable-date="disableDate"
                i18n="es-Mx"
                as-single
                no-input=""
                :formatter="formatter"
                v-model="store.date"
                />
            </div>

            <div
            class="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-5 mt-10 lg:mt-0 "
            v-if="store.isDateSelected"
            >
                <button
                @click="store.time = hour"
                class="block  font-bold rounded-lg text-xl p-3 disabled:opacity-50"
                :class="store.time === hour ? 'bg-blue-500 text-white' : 'text-blue-500 bg-white'"
                v-for="hour in store.hours"
                :disabled="store.disableTime(hour) ? true : false"
                >
                {{ hour }}
                </button>
            </div>
        </div>
    </div>
    
    <div
    v-if="store.isValidReservation"
    class="flex justify-end">
        <button
        @click="store.saveAppointment"
        class="w-full md:w-auto bg-blue-500 p-3 rounded-lg uppercase font-black mt-10 text-white"
        >
        Confirmar Reservacion
        </button>
    </div>

</template>