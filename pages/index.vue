<template class="main">
  <div class="bg-gray-100 " style="font-family: 'Poppins', sans-serif !important;">

    <div class="container mx-auto max-w-screen-lg">
      <NavBar></NavBar>

</div>



    <section id="seccionbusqueda" class="bg-gray-100 py-4 ">
      
      <div class="container mx-auto px-4 lg:px-2 py-8 lg:py-16 max-w-screen-lg">
                <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 order-2 lg:order-1 mb-8 lg:mb-0 flex justify-center lg:justify-start" id="mainmundo">
        <div id="particles-js"></div>
        <!-- Image -->
        <img :src="require('@/assets/resume.svg')" class="img-inicio w-full mx-auto lg:mx-0 lg:ml-auto" alt="...">

</div>

<!-- Elemento a la derecha -->
<div class="lg:w-2/3 lg:ml-12 order-1 lg:order-2 flex flex-col justify-center mx-auto lg:mx-0 text-center">
    <!-- Heading -->
    <img :src="require('@/assets/resume.svg')"  class="w-2/3 mx-auto lg:hidden" id="worldmobile" style="display: none;" alt="...">
    <br>
    <br class='brsalto'>
    <h2 class="text-4xl mt-4">
        {{ $t('welcome-msg') }}
    </h2>
    <br>
    <p class="text-1xl mt-2">{{ $t('home-description') }}</p>
    <hr class="my-4">
    <!-- Barra de navegación con banderas -->
    <nav class="py-2">
        <div class="container mx-auto flex justify-center flex-wrap py-2">
            <small class="text-sm "> 
                {{ $t('lenguage-select')}}
            </small>
        </div>
        <br>
        <div class="container mx-auto flex justify-center flex-wrap">
            <a href="/es/cv" class="zoom-menos"> <button class="mx-2 mb-4"><img :src="require('@/assets/flags/gt.webp')" :alt="$t('es-name')" class="h-16">
                <span class="block text-center">  {{ $t('es-name')}}</span>
            </button></a>
            <a href="/en/cv" class="zoom-menos"> <button class="mx-2 mb-4"><img :src="require('@/assets/flags/en.webp')" :alt="$t('en-name')"class="h-16">
                <span class="block text-center">{{ $t('en-name')}}</span>
            </button></a>
            <a href="/fr/cv" class="zoom-menos"><button class="mx-2 mb-4"><img :src="require('@/assets/flags/fr.webp')" :alt="$t('fr-name')"class="h-16">
                <span class="block text-center">{{ $t('fr-name')}}</span>
            </button></a>
            <a href="/de/cv" class="zoom-menos"><button class="mx-2 mb-4"><img :src="require('@/assets/flags/de.webp')" :alt="$t('de-name')" class="h-16">
                <span class="block text-center">{{ $t('de-name')}}</span>
            </button></a>
            <a href="/pt/cv" class="zoom-menos"><button class="mx-2 mb-4"><img :src="require('@/assets/flags/pt.webp')" :alt="$t('pt-name')" class="h-16">
                <span class="block text-center">{{ $t('pt-name')}}</span>
            </button></a>
        </div>
    </nav>
    <hr class="my-4">
</div>

        </div>
        <!-- / .row -->
    </div>
    <!-- / .container -->
</section>

  </div>
  
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Index Page',
  components: { NavBar },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: this.$t('title-tag'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('description'),
        },
        {
          hid: 'viewport',
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        },

      ],
    };
  },
}
</script>
<style lang="postcss" scoped>
@media screen and (min-width: 1024px) {
  .main {
    @apply flex h-full;
  }

  .settings {
    @apply overflow-y-auto w-5/12;
  }
}
</style>

<style scoped>
/* Estilos específicos del componente pueden ir aquí */
@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(10deg); }
}

/* .animate-spin-slow {
  animation: spin-slow 3s linear infinite;
} */

</style>


<style>
.efecto_certi {
    transition: 0.30s all ease-in-out;

}

.efecto_certi:hover {
    transform: scale(0.935);
    box-shadow: 0 0 11px rgba(3, 3, 153, 0.3);
    border: rgba(3, 3, 153, 0.8)
}

.sombra {
    transition: 0.10s all ease-in-out;
}

.zoom-image {
    transition: 0.20s all ease-in-out;
}

.zoom-menos {
    transition: 0.30s all ease-in-out;
}

.img-inicio {
	animation: beat 1s infinite alternate;
	transform-origin: center;
}

/* Heart beat animation */
@keyframes beat{
	to { transform: scale(0.985); }
}


.zoom-menos:hover {
    transform: scale(0.885);
}

.sombra:hover {
    transform: scale(1.005);
    box-shadow: 0 0 11px rgba(3, 3, 153, 0.3);
    border: rgba(3, 3, 153, 0.8)
}

.sombra:hover .zoom-image {
    transform: rotate(-0.5deg) scale(1.05);
}

.brsalto {
    margin-bottom: 0.01rem;
}

.main {
    width: 22.3rem;
    height: 22.3rem;
    position: absolute;
    top: 2.1rem;
    bottom: 0;
    left: -0.3rem;
    right: 0;
    margin: auto;
    border-radius: 100%;
}


.main:before {
    position: absolute;
    content: '';
    height: calc(100%);
    width: calc(100%);
    border: 0.40rem dashed #030399;
    border-radius: inherit;
    animation: spin 60s linear infinite;
}

@keyframes spin {
    100% {
        transform: rotateZ(-360deg);
    }
}


@media only screen and (max-width: 900px) {
    .brsalto {
        margin-bottom: 2rem;
    }

    #blog-card-3,
    #blog-card-4,
    #blog-card-5,
    #mainmundo {
        display: none;
    }

    .centerMobile {
        text-align: center !important;
    }

    .display-4 {
        font-size: calc(1.4rem + 3.9vw) !important;
        line-height: 3.4rem !important;
    }

    .textoup {
        font-size: 1.15rem !important;
        padding-top: 0.5rem;
        padding-bottom: 1rem;
    }

    #worldmobile {
        display: initial !important;
    }



}
</style>
