<template class="main">
  <div class="bg-gray-100 " style="font-family: 'Poppins', sans-serif !important;">

    <div class="container mx-auto max-w-screen-lg">
      <NavBar></NavBar>

</div>



    <section id="seccionbusqueda" class="bg-gray-100 mt-4 py-4">
      
      <div class="container mx-auto px-4 lg:px-2 py-8 lg:py-16 max-w-screen-lg">
                <div class="flex flex-col lg:flex-row items-center">
                    <div class="lg:w-1/2 order-2 lg:order-1 mb-8 lg:mb-0 flex justify-center lg:justify-start relative" id="mainmundo">
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
    <h2 class="">

        <span class="text-3xl azultittle">{{ $t('welcome-msg') }} Tecsify Prodigy</span>
    </h2>
    <br>
    <p class="text-lg mt-2">{{ $t('home-description') }}</p>
    <hr class="my-4">
    <!-- Barra de navegación con banderas -->
    <nav class="py-2">
        <div class="container mx-auto flex justify-center flex-wrap py-2">
            <small class="text-xs text-gray-400/100"> 
                {{ $t('lenguage-select')}} 👇
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
  name: 'IndexPage',
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
  mounted() {
    this.loadParticlesScript().then(() => {
      this.setupParticles();
    });
  },
  methods: {
    loadParticlesScript() {
      return new Promise((resolve, reject) => {
        if (typeof window !== 'undefined' && !window.particlesJS) {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        } else {
          resolve();
        }
      });
    },
    setupParticles() {
      if (typeof window !== 'undefined' && window.particlesJS) {
        window.particlesJS('particles-js', {

            particles: {
            number: {
              value: 600,
              density: {
                enable: true,
                value_area: 3400
              }
            },
            color: {
              value: "#030399"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#030399"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 1.3,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 900,
              color: "#000",
              opacity: 0.4,
              width: 10
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "center",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 600
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 40,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 25,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
              },
              repulse: {
                distance: 300,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        
     

        });
      }
    }
  }
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


.img-inicio {
    
	animation: beat 1s infinite alternate;
	transform-origin: center;
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


#particles-js {
  width: 100%;
  height: 100%;
  position: absolute;
  left: -3rem;
  top: -5rem;

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

.azultittle{
  color: #030399;
}



</style>
