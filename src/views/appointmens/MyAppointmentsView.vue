<script setup>
import Appointment from '../../components/Appointment.vue';
import { useUserStore } from '../../stores/user';

const user = useUserStore()
console.log(user.userAppointments)


</script>

<template>
    <h1 class="text-4xl font-extrabold text-center mt-10">Mis Citas</h1>
    <p class="text-xl text-center my-5">Por favor, gestiona tus citas</p>

    <p v-if="user.loading" class="text-2xl text-center mt-5"> Cargando...</p>

    <div v-else>
        <p v-if="user.noAppointments" class="text-2xl text-center mt-5">No tienes Proximas Citas</p> 

        <div v-else class="grid grid-cols-1 gap-5 mt-10">

            <Appointment 
            v-for="appointment in user.userAppointments"
            :key="appointment._id"
            :appointment="appointment"
            />
        </div>

    </div>
    
    
</template>