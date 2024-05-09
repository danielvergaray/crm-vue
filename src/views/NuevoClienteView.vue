<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";
import { FormKit } from "@formkit/vue";

defineProps({
  titulo: {
    type: String,
  },
});
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="inicio">
        <!-- to="/agregaar-cliente" -->
        Volver
      </RouterLink>
    </div>

    <Heading>Agregar Cliente</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
      <FormKit type="form">
        <FormKit
        type="text"
        label="Nombre"
        placeholder="Nombre del Cliente"
        validation="required"
        :validation-messages="{ required: 'El Nombre del Cliente es Obligatorio'}"
        />

        <FormKit
        type="text"
        label="Apellido"
        placeholder="Apellido del Cliente"
        validation="required"
        :validation-messages="{ required: 'El Apellido del Cliente es Obligatorio'}"
        />

        <FormKit
        type="email"
        label="Email"
        placeholder="Email del Cliente"
        validation="required|email"
        :validation-messages="{ required: 'El Email del Cliente es Obligatorio', email:'Coloca un Email valido'}"
        />

        <FormKit
        type="text"
        label="Telefono"
        placeholder="Telefono: XXX-XXX-XXXX"
        validation="required|email"
        :validation-messages="{ required: 'El Email del Cliente es Obligatorio', email:'Coloca un Email valido'}"
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
