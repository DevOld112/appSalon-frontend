<script setup>
import { useUserStore } from '../../stores/user';
import AdminAppointments from '../../components/AdminAppointment.vue'

const user = useUserStore()

</script>

<template>
    <p class="text-lg mt-5">
        A continuacion podras administrar tus proximas citas
    </p>

    <p
        class="text-2xl text-center mt-5"
        v-if="user.loading">
        Cargando...
    </p>

    <div v-else>

        <div
            class="grid grid-cols-1 gap-5 mt-10"
        >
        <AdminAppointments
        v-for="appointment in user.userAppointments"
        :appointment="appointment"
        :key="user._id"
        />
        </div>
    </div>
</template>