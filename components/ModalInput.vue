<template>
<div>
    <div v-if="showModalInput" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
    <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h5 class="text-2xl font-semibold">
            {{ titulo }}
            </h5>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModalInput()">
            <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
            </span>
            </button>
        </div>
        <!--body-->
        <div class="relative p-6 flex-auto">
            <p class="" style="padding-top:1rem;">
              Mi nombre es <input name='nombre' class='form__control' style='max-width: 10rem !important;margin-left: 0.5rem;margin-right: 0.5rem;' type="text" :value='nombre'> 
              y me gustaría trabajar como <input class='form__control' style='max-width: 10rem !important;margin-left: 0.5rem;margin-right: 0.5rem;' type="text" name="profesion" >,
              actualmente tengo  <input class='form__control' style='max-width: 4rem !important;margin-left: 0.5rem;margin-right: 0.5rem;' type="number"> 
              años de experiencia principalmente como <input name='expi' class='form__control' style='max-width: 10rem !important;margin-left: 0.5rem;margin-right: 0.5rem;' type="text" > 
              <br>
              <br>
              <span style="font-weight: bold;">Mi experiencia laboral incluye:</span>
              <ul class="list-outside hover:list-inside">
      <li v-for="exp in experience" :key="exp.id">- {{ exp.title }}</li>
    </ul>
    <br>
    <span style="font-weight: bold;">Mi educación incluye:</span>
    <ul>
      <li v-for="edu in education" :key="edu.id">- {{ edu.title }}</li>
    </ul>
            </p>
        </div>
        <!--footer-->
        <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
          <button class="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="enviarDataAlEndpoint()">
    Enviar Datos
  </button>  
          <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModalInput()">
            Close
            </button>
        </div>
        </div>
    </div>
    </div>
    <div v-if="showModalInput" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</div>

</template>






  <script>
  import axios from 'axios'; // Importa la librería Axios
  export default {
    name: "large-modal",
    data() {
      return {
        showModalInput: false
      }
    },
    methods: {
      toggleModalInput: function(){

        this.showModalInput = !this.showModalInput;
      },
      enviarDataAlEndpoint() {
      // Define los datos que deseas enviar al servidor
      const data = {
        nombre: this.nombre,
        profesion: this.profesion,
        experiencia: this.experiencia,
        // Otras propiedades que desees enviar al servidor
      };

      // Realiza la solicitud POST al endpoint correspondiente
      axios.post('/tu/endpoint', data)
        .then(response => {
          // Maneja la respuesta del servidor aquí
          console.log('Solicitud exitosa', response);
          // Puedes realizar acciones adicionales o mostrar un mensaje de éxito
        })
        .catch(error => {
          // Maneja errores aquí
          console.error('Error al enviar datos', error);
          // Puedes mostrar un mensaje de error o tomar otras medidas según sea necesario
        });
      },
    },

    props: {
    titulo: String,
    nombre: String,
    education: String,
    experience: String
  },


  }


  


</script>