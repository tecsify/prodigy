<template>
  <div>
    <div v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative my-6 mx-auto  max-w-3xl">
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div class="relative p-4 flex-auto">
            
            <div id="animation-carousel" class="relative w-full" data-carousel="static">
              <div v-for="(color, index) in colores" :key="index" class="swiper-slide">
                <div class="p-5 max-w-md h-96 rounded-lg shadow flex items-center justify-center"
                  :style="{ backgroundColor: color.codigo }"
                  :class="{ 'block': activeSlide === index, 'hidden': activeSlide !== index }">
                  <div class="text-white text-center">
                    <h4 class="mb-4 text-2xl font-semibold">{{ color.nombre }}</h4>
                    <p class="text-base" v-html="color.descripcion"></p>

                  </div>
                </div>

              </div>
            </div>
          </div>
          <!--footer-->
          <div class="flex items-center justify-between p-4 mb-3 rounded-b">
  <button type="button" @click="prevSlide"
  class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none">
    ←
  </button>
  <button type="button" @click="toggleModal"
  class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none">
    Cerrar
  </button>
  <button type="button" @click="nextSlide"
    class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none">
    →
  </button>
</div>

        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showModal: false,
      activeSlide: 0,
      colores: [
  {
    nombre: 'Azul Profundo',
    codigo: '#030399',
    descripcion: '¡Sumérgete en el Azul Profundo y comunica confianza, estabilidad y profesionalismo! <br> Este color también emana calma y serenidad.<br><br> Ideal para roles corporativos, financieros o de liderazgo, donde la confianza y la integridad son clave. Además, es perfecto para profesiones relacionadas con la tecnología y la comunicación.<br><br>Personalidad: Serio, confiable, enfocado.'
  },
  {
    nombre: 'Rosa',
    codigo: '#9d174d',
    descripcion: '¡Deja que el Rosa despierte tu pasión, creatividad y energía! Este color sugiere un enfoque moderno y distintivo. <br><br>Adecuado para roles en industrias creativas como diseño gráfico, moda, arte y publicidad. También es perfecto para roles en recursos humanos o servicios sociales, donde las habilidades interpersonales y la empatía son fundamentales.<br><br>Personalidad: Creativo, compasivo, enérgico.'
  },
  {
    nombre: 'Rojo Oscuro',
    codigo: '#770b0e',
    descripcion: '¡Hazte notar con el Rojo Oscuro, el color del poder, la energía y la determinación! Este tono evoca emociones fuertes y una actitud audaz. <br><br>Perfecto para roles en ventas, marketing o negocios, donde una personalidad enérgica y persuasiva es esencial. También es apropiado para roles de liderazgo o gestión, donde la toma de decisiones rápidas y firmes es clave.<br><br>Personalidad: Audaz, dinámico, directo.'
  },
  {
    nombre: 'Gris',
    codigo: '#535252',
    descripcion: 'El Gris es sinónimo de neutralidad, estabilidad y profesionalismo, también transmite sofisticación y pragmatismo. <br><br>Adecuado para una amplia gama de roles, especialmente en entornos corporativos o financieros donde la formalidad y la discreción son fundamentales. Además, es perfecto para roles analíticos o técnicos que requieren precisión y atención al detalle.<br><br>Personalidad: Metódico, equilibrado, fiable.'
  },
  {
    nombre: 'Verde Profundo',
    codigo: '#064e3b',
    descripcion: 'El Verde Profundo conecta con la naturaleza, la salud y la armonía, este color transmite frescura, vitalidad y crecimiento. <br><br>Perfecto para roles en áreas relacionadas con la salud, la sostenibilidad y el bienestar, como ecologista, nutricionista, entrenador personal, profesor de educación física, terapeuta ocupacional y director de programas de bienestar.<br><br>Personalidad: Tranquilo, amigable, compasivo.'
  },
  {
    nombre: 'Negro',
    codigo: '#111827',
    descripcion: '¡Abraza la elegancia y el misterio con el Negro! Este color sofisticado transmite poder y autoridad. <br><br>Adecuado para roles creativos y profesionales donde se valora la elegancia y el estilo, como diseñador de interiores, arquitecto, fotógrafo, director de arte, escritor creativo y programador de videojuegos.<br><br>Personalidad: Sofisticado, misterioso, autoritario.'
  }
]



    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    nextSlide() {
      // Increment the active slide number
      this.activeSlide = (this.activeSlide + 1) % this.colores.length; // Assuming 3 slides, change the number accordingly
    },
    prevSlide() {
      // Decrement the active slide number
      this.activeSlide = (this.activeSlide - 1 + this.colores.length) % this.colores.length; // Assuming 3 slides, change the number accordingly
    }
  }
};
</script>
