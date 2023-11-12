<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import AuthAPI from '../../api/AuthAPI'
import { inject } from 'vue';

const route = useRoute();
const router = useRouter();
const { token } = route.params

const toast = inject('toast')


onMounted(async() => {
    try {
        const { data } = await AuthAPI.verifyAccount(token)
        console.log(data)

        toast.open({
            message: data.msg,
            type: 'success'
        })
        setTimeout(() => {
            router.push({name:'login'})
        }, 3000)
    } catch (error) {
        toast.open({
            message: error.response.data.msg,
            type: 'error'
        })
    }
})


</script>

<template>

    <div class="text-2xl text-center font-extrabold">

        <h1>Por favor, intente Iniciar Sesion nuevamente</h1>

    </div>

    
</template>