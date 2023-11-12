<script setup>
import { FormKit, reset } from '@formkit/vue';
import { inject } from 'vue';
import AuthAPI from '../../api/AuthAPI'
import { useRouter } from 'vue-router';

const router = useRouter()
const toast = inject('toast')

const handleSubmit = async(formData) =>{
    try {
        const { data } = await AuthAPI.login(formData)
        toast.open({
            message: data.msg,
            type: 'success'
        })

        const save = data.token
        localStorage.setItem('AUTH_TOKEN', save)

        console.log(save)

        setTimeout(() => {
            router.push({name:'my-appointments'})
        }, 3000)
    } catch (error) {
        toast.open({
            message: error.response.data.msg,
            type: 'error'
        })
    }
}

</script>

<template>
    <h1 class="text-6xl font-extrabold text-center mt-10">Iniciar Sesion</h1>
    <p class="text-2xl text-center my-5">Loguea con tu cuenta</p>

    <FormKit
    id="loginForm"
    type="form"
    :actions="false"
    @submit="handleSubmit"
    >
        <FormKit
            type="email"
            label="Correo Electronico"
            name="email"
            placeholder="Correo@gmail.com"
            validation="required|email"
            :validation-messages="{
            required:'El Email es Obligatorio',
            email: 'Email No Valido'
            }"
        />

        <FormKit 
            type="password"
            label="Password"
            name="password"
            placeholder="Password de usuario"
            validation="required|length:8"
            :validation-messages="{
            required:'El Password es Obligatorio'
            }"
        />

        <FormKit type="submit">Iniciar Sesion</FormKit>

    </FormKit>
</template>