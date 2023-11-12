<script setup>
import { RouterLink, useRouter } from 'vue-router';
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
        <div class="space-y-8">
            <h1 class="text-2xl lg:text-6xl font-black">AppSalon</h1>
            <h2 class="text-xl lg:text-4xl font-black">Panel De Administracion</h2>
        </div>


        <div class="flex flex-col space-y-5">
            <div class="flex gap-2 items-center">
                <p class="font-bold italic">Hola: Admin {{ user.getUserName }}</p>

                <button
                type="button"
                class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase rounded-lg font-bold italic text-xs"
                @click="buttonLogout"
                >Cerrar Sesion
            
                </button>
            </div>


        </div>

    </div>
    <main class="space-y-6">
        <RouterView />
    </main>
</template>