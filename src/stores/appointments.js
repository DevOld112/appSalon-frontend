import { defineStore } from "pinia";
import { ref, computed, onMounted, inject, watch } from "vue";
import appointmentAPI from "../api/appointmentAPI";
import { convertToIso, convertToDDMMYYYY } from "../helpers/date";
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'


export const useAppointmentsStore = defineStore('appointments', () => {

    const appointmentId = ref('')
    const detailApp = ref([])
    const date = ref('')
    const hours = ref([])
    const time = ref('')
    const message = ref('')
    const success = ref('')
    const isSelected = ref(false)
    const appointmentsByDate = ref([])

    const toast = inject('toast')
    const router = useRouter()
    const user = useUserStore()
    

    onMounted(() => {
        const startHour = 9
        const endHour = 20

        for(let hour = startHour; hour <= endHour; hour++){
            hours.value.push(hour + ':00')
        }
    })

    watch(date, async() => {
        time.value = ''
        //Obtenemos las citas

        const { data } = await appointmentAPI.getByDate(date.value)
        
        if(appointmentId.value){
            appointmentsByDate.value = data.filter(appointment => appointment._id !== appointmentId.value)
            time.value = data.filter(appointment => appointment._id === appointmentId.value)[0].time
        } else{
            appointmentsByDate.value = data
        }
    })


    function onServiceSelected(service) {

        if(detailApp.value.length < 2){
            detailApp.value.push(service)   
            if(detailApp.value[0] === detailApp.value[1]){
                message.value = 'No puedes repetir el mismo Servicio para una cita'
                setTimeout( () => {
                    message.value = ''
                    }, 5000)
                detailApp.value.splice(1)
                return
            }
            
        } else {
            message.value = 'Has alcanzado el maximo de Servicios posibles para una cita.'
            setTimeout( () => {
            message.value = ''
            }, 5000)
            return
        }

        success.value = 'Servicio Agregado Correctamente a la cita'
            setTimeout( () => {
            success.value = ''
            }, 5000)
        
    }

    function setSelectedAppointment(appointment){
        console.log(appointment)

        detailApp.value = appointment.services
        console.log(detailApp.value)
        date.value = convertToDDMMYYYY(appointment.date)
        time.value = appointment.time
        appointmentId.value = appointment._id
        
        console.log(appointmentId.value)
    }

    function onServiceEliminated(service){
        let indice = detailApp.value.indexOf(service)
        detailApp.value.splice(indice, 1)
        
    }

    const totalAmount = computed(() => {
        return detailApp.value.reduce((total, service) => total + service.price, 0)
    })

    const isValidReservation = computed(() => {
        return detailApp.value.length && date.value.length && time.value.length
    })

    const isDateSelected = computed(() => {
        return date.value ? true : false
    })

    const disableTime = computed(() => {
        return (hour) => {
            return appointmentsByDate.value.find(appointment => appointment.time === hour)
        }
    })

    async function saveAppointment() {
        const appointment = {
            services: detailApp.value.map(service => service._id),
            date: convertToIso(date.value),
            time: time.value,
            totalAmount: totalAmount.value
        }

        if(appointmentId.value){
            const { data } = await appointmentAPI.updateAppointment(appointmentId.value, appointment)
            toast.open({
                message: data.msg,
                type: 'success'
            })
            setTimeout(() => {
                router.push({name: 'my-appointments'})
            }, 1000)
    
            clearAppointmentData()
        } else {
        const { data } = await appointmentAPI.create(appointment)
        toast.open({
            message: data.msg,
            type: 'success'
        })

        user.getUserAppointments()

        setTimeout(() => {
            router.push({name: 'my-appointments'})
        }, 1000)

        clearAppointmentData()
        }
    }

    function clearAppointmentData() {
        appointmentId.value = ''
        detailApp.value = []
        date.value = ''
        time.value = ''
    }

    async function cancelAppointment(id){

        if(confirm('¿Deseas Cancelar esta cita?')){
            try {
                const { data } = await appointmentAPI.deleteAppointment(id)
                console.log(data)
                toast.open({
                    message: data.msg,
                    type: 'success'
                })

                user.getUserAppointments()
            } catch (error) {
                console.log(error)
                toast.open({
                    message: error.msg,
                    type: 'error'
                })
            }
        }

        
        
       
    }

    return {
        detailApp,
        date,
        hours,
        time,
        message,
        success,
        isSelected,
        setSelectedAppointment,
        onServiceSelected,
        onServiceEliminated,
        totalAmount,
        isValidReservation,
        isDateSelected,
        disableTime,
        saveAppointment,
        cancelAppointment
        
    }
})