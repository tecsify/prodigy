<template>
  <div>
    <div v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="traduccion-swal-modal relative w-auto my-6 mx-auto max-w-3xl traduccion-swal-modal">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--body-->
          <div class="relative p-6 flex-auto">
            <div class="mt-4 mb-8">
              <h5 class="text-2xl font-semibold text-center ">
                {{ $t('traducir-a') }}
              </h5>
            </div>
            <div class="container mx-auto flex justify-center flex-wrap mt-5">



              <div class="text-center zoom-menos-menos mx-4 mb-4">
                <button @click.prevent="enviarCVBackEnd(null, 'es')">
                  <img src="@/assets/flags/gt.webp" :alt="$t('es-name')" class="h-16">
                  <div class="font-medium text-base mt-1">
                    <span>{{ $t('es-name') }}</span>
                  </div>
                </button>
              </div>
              <div class="text-center zoom-menos-menos mx-4 mb-4">
                <button @click.prevent="enviarCVBackEnd(null, 'en')">
                  <img src="@/assets/flags/en.webp" :alt="$t('en-name')" class="h-16">
                  <div class="text-base mt-1">
                    <span>{{ $t('en-name') }}</span>
                  </div>
                </button>
              </div>
              <div class="text-center zoom-menos-menos mx-4 mb-4"">

      <button  @click.prevent=" enviarCVBackEnd(null, 'fr')">
                <img src="@/assets/flags/fr.webp" :alt="$t('fr-name')" class="h-16">
                <div class="text-base mt-1">
                  <span>{{ $t('fr-name') }}</span>
                </div>
                </button>
              </div>
              <div class="text-center zoom-menos-menos mx-4 mb-4">
                <button @click.prevent="enviarCVBackEnd(null, 'de')">
                  <img src="@/assets/flags/de.webp" :alt="$t('de-name')" class="h-16">
                  <div class="text-base mt-1">
                    <span>{{ $t('de-name') }}</span>
                  </div>
                </button>
              </div>
              <div class="text-center zoom-menos-menos mx-4 mb-4">
                <button @click.prevent="enviarCVBackEnd(null, 'pt')">
                  <img src="@/assets/flags/pt.webp" :alt="$t('pt-name')" class="h-16">
                  <div class="text-base mt-1">
                    <span>{{ $t('pt-name') }}</span>
                  </div>
                </button>
              </div>
              <div class="text-center my-3">
                <small class="text-xs">
                  {{ $t('traduccion-disclaimer') }}</small>

              </div>
            </div>
          </div>
          <!--footer-->
          <div class="form__section flex flex-col px-8 mx-4 pb-4">
            <button type="button" class="form__btn flex flex-col justify-center " style="background-color:rgb(178, 174, 183); color:black" @click="toggleModal">{{ $t('cancelar') }}</button>
                </div>
  
          </div>
      </div>
      </div>
      <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black">
          </div>
        </div>
</template>





<script>
import { useCvState } from '~/data/useCvState';
export default {
  name: "traduccion-modal",
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal: function () {

      this.showModal = !this.showModal;
    },
    async enviarAlBackend(ev, lang) {
      try {
        await this.$options.setup().enviarCVBackEnd(ev, lang);
      } catch (error) {
        console.error('Error al enviar CV al backend:', error);
      }
    }
  },

  setup() {
    const { enviarCVBackEnd } = useCvState();
    return {
      enviarCVBackEnd
    };
  }
}





</script>