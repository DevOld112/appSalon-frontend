<script setup>
import { FormKit } from '@formkit/vue';
import { reset } from '@formkit/core';
import { onMounted, inject  } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import AuthAPI from '../../api/AuthAPI';

const toast = inject('toast')
const route = useRoute()
const router = useRouter()
const { token } = route.params

onMounted( async() => {
    try {
        const { data } = await AuthAPI.verifyPasswordResetToken(token)
        console.log(data)
    } catch (error) {
        toast.open({
            message: error.response.data.msg,
            type: 'error'
        })

        setTimeout(() => {
            router.push({name: 'login'})
        }, 1000)
    }
})

const handleSubmit = async({password}) => {
    try {
        const { data } = await AuthAPI.updatePassword(token, {password})
        console.log(data)
        toast.open({
            message: data.msg,
            type: 'success'
        })

        reset('newPasswordForm')

        setTimeout(() => {
            router.push({name: 'login'})
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
    <h1 class="text-6xl font-extrabold text-center mt-10">Nuevo Password</h1>
    <p class="text-2xl text-center my-5">Coloca Tu nuevo Password</p>

    <FormKit
        id="newPasswordForm"
        type="form"
        :actions="false"
        @submit="handleSubmit"
    >

        <FormKit 
            type="password"
            label="Password"
            name="password"
            placeholder="Password de usuario - Min 8 Caracteres"
            validation="required|length:8"
                :validation-messages="{
                password: 'El password debe Contener al menos 8 caracteres'
                }"
        />



        <FormKit type="submit">Guardar Password</FormKit>

    </FormKit>
</template>