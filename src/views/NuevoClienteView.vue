<script setup>
import axios from "../lib/axios";
import { FormKit } from "@formkit/vue";
import { useRouter} from "vue-router";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";


const router = useRouter()

defineProps({
  titulo: {
    type: String,
  },
});

const handleSubmit = (data) => { /*  data es la informacion que se guarda de lo ingresado por los usuarios en los inputs */
  axios.post('/clientes', data)
      .then(respuesta => {
        //Redireccionado al usuario
        router.push({name: 'listado-clientes'})
      })
      .catch(error => console.log (error))
}
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="listado-clientes">
        <!-- to="/agregaar-cliente" -->
        Volver
      </RouterLink>
    </div>

    <Heading>Agregar Cliente</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
      <FormKit type="form"
      submit-label="Agregar Cliente"
      incomplete-message="No se pudo agregar Cliente, intente nuevamente"
      @submit="handleSubmit" 
      > <!-- handleSubmit permite que se guarde la informacion ingresada por los usuaris  -->
        <FormKit
        type="text"
        label="Nombre"
        name="nombre"
        placeholder="Nombre del Cliente"
        validation="required"
        :validation-messages="{ required: 'El Nombre del Cliente es Obligatorio'}"
        />

        <FormKit
        type="text"
        label="Apellido"
        name="apellido"
        placeholder="Apellido del Cliente"
        validation="required"
        :validation-messages="{ required: 'El Apellido del Cliente es Obligatorio'}"
        />

        <FormKit
        type="email"
        label="Email"
        name="email"
        placeholder="Email del Cliente"
        validation="required|email"
        :validation-messages="{ required: 'El Email del Cliente es Obligatorio', email:'Coloca un Email valido'}"
        />

        <FormKit
        type="text"
        label="Empresa"
        name="empresa"
        placeholder="Empresa de Cliente"
        />

        <FormKit
        type="text"
        label="Puesto"
        name="puesto"
        placeholder="Puesto de Cliente"
        />

        <FormKit
        type="text"
        label="Telefono"
        name="telefono"
        placeholder="Telefono: XXX-XXX-XXXX"
        validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/ "
        :validation-messages="{ matches: 'El Formato no es válido'}"
        />
        
      
      </FormKit>
    </div>
    </div>
  </div>
</template>

<style>
  .formkit-wrapper{
    max-width: 100%;
  }
</style>
