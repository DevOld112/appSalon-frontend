<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../../stores/user';
import { inject } from 'vue';

const toast = inject('toast')
const user = useUserStore()

const buttonLogout = () => {
    toast.open({
        message: 'Sesion Cerrada Correctamente',
        type: 'success'
    })

    setTimeout(() => {
        user.logout()
    }, 3000)
}

</script>

<template>
    <div class="flex justify-between">
    <h1 class="text-2xl lg:text-6xl font-black">AppSalon</h1>

        <div class="flex flex-col space-y-5">
            <div class="flex gap-2 items-center">
                <p class="font-bold italic">Hola: {{ user.getUserName }}</p>

                <button
                type="button"
                class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase rounded-lg font-bold italic text-xs"
                @click="buttonLogout"
                >Cerrar Sesion
            
                </button>
            </div>

            <nav class="flex gap-2 justify-end items-center">
                <RouterLink
                type="button"
                class="p-3 text-gray-200 bg-blue-600 uppercase text-xs font-bold rounded-lg"
                :to="{name: 'my-appointments'}"
                >
                    Mis Citas
            
                </RouterLink>

                <RouterLink
                class="p-3 text-gray-200 bg-blue-600 uppercase text-xs font-bold rounded-lg"
                :to="{name: 'new-appointment'}"
                >
                    Nueva Cita
                </RouterLink>
            </nav>

        </div>

    </div>
    <main>
        <RouterView />
    </main>
</template>