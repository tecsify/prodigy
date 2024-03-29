<script lang="ts">
import Vue from 'vue';

import {
  computed,
  onMounted,
  useContext,
  watch,
} from '@nuxtjs/composition-api';
import CvDynamicSection from '~/components/CvDynamicSection.vue';
import CvDisplayCheckbox from '~/components/CvDisplayCheckbox.vue';
import CvInputTags from '~/components/CvInputTags.vue';
import ExpansionPanel from '~/components/ExpansionPanel.vue';
import Modal from '~/components/Modal.vue';
import ModalInput from '~/components/ModalInput.vue';
import { useCvState } from '~/data/useCvState';
import CropperComponent from '~/components/CvCropper.vue';
import ModalCropper from '~/components/ModalCropper.vue';
import ModalColores from '~/components/ModalColores.vue';
import Swal from 'sweetalert2';
import ModalTraduccion from '~/components/ModalTraduccion.vue';



export default Vue.extend({
  name: 'CvSettings',
  components: {
    CvDynamicSection,
    CvDisplayCheckbox,
    CvInputTags,
    ExpansionPanel,
    Modal,
    ModalInput,
    CropperComponent,
    ModalCropper,
    ModalColores,
    ModalTraduccion,
  },
  data() {
    return {
      t1: 'Ejemplo de datos personales y presentación',
      d1: 'Aquí debes proporcionar tus datos personales y una breve descripción de tus habilidades profesionales destacadas, logros relevantes y cualidades personales que te convierten en un candidato ideal para el puesto',
      nombre: 'test',
      titulo: 'tes',
      education: null,
      experience: null,
      photo: "",
      chosenImage: null,
    }
  },

  methods: {

    toggleModalTraduccion: function () {
      if (this.$refs.ModalTraduccion instanceof Vue) {
        // Accede a la propiedad showModalInput si es una instancia de Vue
        (this.$refs.ModalTraduccion as any).showModal = !(this.$refs.ModalTraduccion as any).showModal;
      } else {
        console.error("modal no está definido en $refs");
      }
    },

    toggleModalColores: function (t: any) {
      this.t1 = this.$i18n.t('personal-details').toString();
      this.d1 = this.$i18n.t('personal-details-example').toString();

      if (this.$refs.ModalColores instanceof Vue) {
        // Accede a la propiedad showModalInput si es una instancia de Vue
        (this.$refs.ModalColores as any).showModal = !(this.$refs.ModalColores as any).showModal;
      } else {
        console.error("modal no está definido en $refs");
      }
    },
    toggleModalInput: function (formSettings: any) {
      this.titulo = formSettings.lastName;
      this.nombre = formSettings.name + " " + formSettings.lastName;
      this.education = formSettings.education;
      this.experience = formSettings.work;


      // Verifica si this.$refs.ModalInput es una instancia de Vue
      if (this.$refs.ModalInput instanceof Vue) {
        // Accede a la propiedad showModalInput si es una instancia de Vue
        (this.$refs.ModalInput as any).showModalInput = !(this.$refs.ModalInput as any).showModalInput;
      } else {
        console.error("ModalInput no está definido en $refs");
      }
    },


    toggleModal: function (t: any) {
      this.t1 = this.$i18n.t('personal-details').toString();
      this.d1 = this.$i18n.t('personal-details-example').toString();

      if (this.$refs.modal instanceof Vue) {
        // Accede a la propiedad showModalInput si es una instancia de Vue
        (this.$refs.modal as any).showModal = !(this.$refs.modal as any).showModal;
      } else {
        console.error("modal no está definido en $refs");
      }
    },


    handlePhotoChange(formSettings: any, event: Event) {
      const input = event.target as HTMLInputElement;
      const file = input.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          let photoElement = document.getElementById('photocv');


          if (this.$refs.ModalCropper instanceof Vue) {
            // Accede a la propiedad showModalInput si es una instancia de Vue
            (this.$refs.ModalCropper as any).toggleModalCropper();
            (this.$refs.ModalCropper as any).launchCropper(file);
            formSettings.photo = (this.$refs.ModalCropper as any).sendImageToParent();


          }


          // Verificar si el elemento existe
          if (photoElement) {
            // Si existe, establecer su estilo a 'display: none'
            photoElement.style.display = 'block';
          }
        };
      }
    },
    updateFormSettingsPhoto(formSettings: any, newImage: any) {
      formSettings.photo = newImage;
    },

    borrarFoto(formSettings: any) {
      formSettings.photo = ""
      let photoElement = document.getElementById('photocv');
      // Verificar si el elemento existe
      if (photoElement) {
        // Si existe, establecer su estilo a 'display: none'
        photoElement.style.display = 'none';
      }
    },


    // getCroppedImage(cropper: any) {
    //   // Obtener la imagen recortada como una URL de datos
    //   this.croppedImage = this.cropper.getCroppedCanvas().toDataURL();
    // }
  },


  setup() {
    const config = {
      colors: [
        { name: 'purple', color: '#030399', darker: '#030363' },
        { name: 'pink', color: '#9D174D', darker: '#831843' },
        { name: 'red', color: '#770B0E', darker: '#770B0E' },
        { name: 'grey', color: '#535252', darker: '#535252' },
        { name: 'green', color: '#065F46', darker: '#064E3B' },
        { name: 'black', color: '#000', darker: '#000' },
      ],
      languages: [
        { name: 'es-name', code: 'es' },
        { name: 'en-name', code: 'en' },
        { name: 'id-name', code: 'id' },
      ],
    };

    const { formSettings, uploadCV, clearForm, resetForm, setUpCvSettings, enviarCVBackEnd } =
      useCvState();
    const context = useContext();

    onMounted(setUpCvSettings);

    watch(
      () => formSettings.value,
      (newValue, oldValue) => {
        localStorage.setItem(
          `cvSettings-${context.i18n.locale}`,
          JSON.stringify(newValue)
        );
        if (newValue.activeColor !== oldValue.activeColor) {
          const newColor = getCurrentColor(newValue.activeColor);
          changeColor(newColor.color, newColor.darker);
        }
      },
      { deep: true }
    );

    const formSettingsHref = computed(function getFormSettingsHref() {
      return `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify({ formSettings: formSettings.value })
      )}`;
    });

    const availableLocales = computed(function getAvailableLocales() {
      return context.i18n.localeCodes.filter(
        (locale: any) => !locale.includes('-')
      );
    });

    function showAlert(): void {
      Swal.fire({
        title: '¡Hola!',
        text: '¡Esto es SweetAlert en Vue 2 con TypeScript!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }



    function downloadPdf(): void {
      const oldTitle = document.title;
      document.title = `CV_${formSettings.value.name}_${formSettings.value.lastName}_${context.app.i18n.locale}`;
      window.print();
      document.title = oldTitle;
    }

    function changeColor(color: string, darker: string): void {
      formSettings.value.activeColor = color;
      document.documentElement.style.setProperty('--primary', color);
      document.documentElement.style.setProperty('--primary-darker', darker);
    }



    function getCurrentColor(colorValue: string): {
      color: string;
      darker: string;
    } {
      return (
        config.colors.find((color) => color.color === colorValue) ||
        config.colors[1]
      );
    }

    return {
      ...config,
      showAlert,
      downloadPdf,
      changeColor,
      formSettings,
      formSettingsHref,
      availableLocales,
      uploadCV,
      clearForm,
      resetForm,
      enviarCVBackEnd,
    };
  },
});
</script>
<template>
  <div class="bg-gray-100 bg-opacity-100 shadow-lg font-bold z-10">
    <br />
    <div class="container max-w-screen-lg mx-auto flex justify-center">
      <img src="https://tecsify.com/blog/wp-content/uploads/2021/05/bluenew.png" alt="Tecsify Logo"
        style="width: 10rem !important">
    </div>
    <div style="text-align:center;" class="py-4 mb-4">
      <p class="text-xs font-medium py-3"> {{ $t('welcome-msg') }}</p>
      <span
        class="text-lg inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 font-bold text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Tecsify
        Prodigy</span>

    </div>

    <div class="container mb-6 max-w-screen-lg mx-auto flex justify-center">

      <a href="/">
        <p class="text-xs" style="text-align:center;font-weight:600;color: #030399 !important;"><span class="">←</span>
          {{ $t('back-msg') }}</p>
      </a>
    </div>

    <div class="container max-w-screen-lg mx-auto flex justify-center">
      <small>{{ $t('color-theme') }}</small>
    </div>
    <form class="form mb-10" autocomplete="on">

      <!-- COLOR THEME -->
      <fieldset class="container max-w-screen-lg mx-auto flex justify-center">
        <div class="flex flex-wrap gap-2 justify-start">
          <label v-for="color in colors" :key="color.color" tabindex="0" :class="[
        'form__btn',
        'form__btn--color-theme',
        `form__btn--${color.name}`,
        `fondito--${color.name}`,
        'capitalize',
        {
          'form__btn--color-selected':
            color.color === formSettings.activeColor,
        },
      ]" style="border-radius:100%; width:1.5rem; height:1.5rem; border:1px solid ${color.name} "
            @keydown.enter="changeColor(color.color, color.darker)">
            <input v-model="formSettings.activeColor" type="radio" class="sr-only" :value="color.color"
              @change="changeColor(color.color, color.darker)" />
          </label>

        </div>
      </fieldset>

      <div v-if="$i18n.locale == 'es'" class="mt-2 container max-w-screen-lg mx-auto flex justify-center">
        <small> <span @click="toggleModalColores">¿No sabes que color elegir? <span
              style="color:#030399; font-weight: 500;">¡Mira esta guía!</span></span>
        </small>
      </div>
      <!-- COLOR THEME -->

      <br>
      <ModalTraduccion ref="ModalTraduccion"></ModalTraduccion>
      <modal :titulo="t1" :description="d1" ref="modal"></modal>
      <ModalColores :titulo="t1" :description="d1" ref="ModalColores"></ModalColores>


      <ModalCropper ref="ModalCropper" :titulo="$t('photo-profile')"
        @update-avatar-image="updateFormSettingsPhoto(formSettings, $event)">
      </ModalCropper>

      <ModalInput :titulo="titulo" :nombre="nombre" :education="education" :experience="experience" ref="ModalInput">
      </ModalInput>
      <div class="container max-w-screen-lg mx-auto flex justify-center mb-4 mx-4">
        <button
          class="form__btn form__btn--ghost"
          type="button"
          @click="resetForm"
        >
          {{ $t("see-example") }}
        </button>
        <button
          class="form__btn form__btn--ghost"
          type="button"
          @click="clearForm"
        >
          {{ $t("clear-settings") }}
        </button>
      </div>

      <!-- PHOTO -->
      <fieldset class="form__section grid gap-3">
        <expansion-panel :panel-name="$t('photo-profile')">
          <template v-slot:title>
            <legend class="form__legend">📸 {{ $t('photo-profile') }}</legend>
          </template>
          <template v-slot:content>
            <div class="grid grid-cols-2 gap-x-3 gap-y-10">
              <div class="form__group col-span-full">
                <small>{{ $t('photo-info') }}
                </small>
              </div>

              <div class="form__group col-span-full">
                <label class="form__label" for="photo">📷 {{ $t('photo-profile') }}</label>
                <input id="photo" class="form__control" type="file" ref="filePickerField" accept="image/*"
                  @change="handlePhotoChange(formSettings, $event)" />
                <label style="color:#030399; font-weight: 600;margin-top:1rem;" class="form__label"
                  @click="borrarFoto(formSettings)"> ❌ {{ $t('delete-photo') }}</label>

              </div>
              <div class="form__group col-span-full">
                <label class="form__label" for="photoStyle">👤 {{ $t('photo-style-label') }}
                </label>
                <input id="photoStyle" type="range" v-model="formSettings.photoStyle" min="0" max="55"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">

              </div>
              <div class="form__group col-span-full">
                <label class="checkbox__label">

                  <input class="checkbox__input" type="checkbox" v-model="formSettings.photoBorder"
                    :checked="formSettings.photoBorder" />
                  <span class="checkbox__text"> {{ $t('photo-border-label') }} </span>

                </label>
              </div>

              <div class="form__group col-span-full">
                <label class="checkbox__label">

                  <input class="checkbox__input" type="checkbox" v-model="formSettings.photoBnW"
                    :checked="formSettings.photoBnW" />
                  <span class="checkbox__text"> {{ $t('photo-bw-label') }} </span>
                  <br />
                  <small>{{ $t('photo-bw-text') }}
                  </small>
                </label>
              </div>
            </div>
          </template>
        </expansion-panel>
      </fieldset>
      <!-- PHOTO -->

      <!-- PERSONAL DETAILS -->
      <fieldset class="form__section">
        <expansion-panel :panel-name="$t('personal-details')">
          <template v-slot:title>
            <legend class="form__legend">👤 {{ $t('personal-details') }}</legend>
          </template>
          <template v-slot:content>
            <div class="grid grid-cols-2 gap-x-3 gap-y-10">
              <div class="form__group col-span-full">
                <small>{{ $t('personal-data-instruction') }}
                  <span style="color:#030399; font-weight: 600;" @click="toggleModal(1)">{{ $t('see-example') }}</span>

                </small>
              </div>
              <div class="form__group">
                <label class="form__label" for="first-name">👤 {{ $t('first-name') }}</label>
                <input id="first-name" v-model="formSettings.name" class="form__control" type="text" />
              </div>
              <div class="form__group">
                <label class="form__label" for="last-name">👤 {{ $t('last-name') }}</label>
                <input id="last-name" v-model="formSettings.lastName" class="form__control" type="text" />
              </div>
              <div class="form__group col-span-full">
                <label for="nameFontSize" class="form__label">📏
                  {{ $t('nameFontSize-label') }}
                </label>
                <input id="nameFontSize" type="range" v-model="formSettings.nameFontSize" min="105" max="250"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
              </div>



              <div class="form__group col-span-full">
                <label class="form__label" for="job-pos">💼 {{ $t('job-title') }}</label>
                <input id="job-pos" v-model="formSettings.jobTitle" class="form__control" type="text" />
              </div>

              <div class="form__group col-span-full">
                <label class="form__label" for="email">✉️ {{ $t('email') }}</label>
                <input id="email" v-model="formSettings.email" class="form__control" type="email" />
              </div>
              <div class="form__group">
                <label class="form__label" for="location">📍 {{ $t('location') }}</label>
                <input id="location" v-model="formSettings.location" class="form__control" type="text" />
              </div>
              <div class="form__group">
                <label class="form__label" for="phone">📱 {{ $t('phone-number') }}</label>
                <input id="phone" v-model="formSettings.phoneNumber" class="form__control" type="tel" />
              </div>
              <div class="form__group col-span-full">
                <label class="form__label" for="aboutme">🌟 {{ $t('about-me') }}</label>
                <textarea id="aboutme" v-model="formSettings.aboutme" class="form__control" name="aboutme" cols="30"
                  rows="10"></textarea>
              </div>
            </div>
          </template>
        </expansion-panel>
      </fieldset>
      <!-- PERSONAL DETAILS -->

      <!-- SKILLS -->
      <fieldset class="form__section grid gap-3">
        <expansion-panel :panel-name="$t('skills')">
          <template v-slot:title>
            <legend class="form__legend">🛠️ {{ $t('skills') }}</legend>
          </template>
          <template v-slot:content>
            <div>
              <cv-input-tags tag-list-name="jobSkills" :tag-list-label="`🛠 ${$t('technical-skills')}`"
                :tag-list="formSettings.jobSkills" @addTag="addSkill($event)"
                @removeTag="removeSkill($event)"></cv-input-tags>
              <cv-input-tags tag-list-name="softSkills" :tag-list-label="`🧸 ${$t('soft-skills')}`"
                :tag-list="formSettings.softSkills" @addTag="addSkill($event)"
                @removeTag="removeSkill($event)"></cv-input-tags>
              <cv-input-tags tag-list-name="languages" :tag-list-label="`🌎 ${$t('languages')}`"
                :tag-list-lang="formSettings.languages" @addTag="addSkill($event)"
                @removeTag="removeSkill($event)"></cv-input-tags>
            </div>
          </template>
        </expansion-panel>
      </fieldset>
      <!-- SKILLS -->

      <!-- SOCIAL -->
      <fieldset class="form__section grid gap-3">
        <expansion-panel :panel-name="'Social'">
          <template v-slot:title>
            <legend class="form__legend">🌐 Social</legend>
          </template>
          <template v-slot:content>
            <div class="grid grid-cols-2 gap-x-3 gap-y-10">
              <div class="form__group col-span-full">
                <label class="form__label flex" for="linkedin">
                  <svg class="form__icon rounded mr-1">
                    <use href="@/assets/sprite.svg#linkedin"></use>
                  </svg>
                  Linkedin
                </label>
                <input id="linkedin" v-model="formSettings.linkedin" class="form__control" type="text" />
              </div>
              <div class="form__group col-span-full">
                <label class="form__label flex" for="twitter">
                  <svg class="form__icon rounded mr-1">
                    <use href="@/assets/sprite.svg#twitter"></use>
                  </svg>
                  Twitter
                </label>
                <input id="twitter" v-model="formSettings.twitter" class="form__control" type="text" />
              </div>
              <div class="form__group col-span-full">
                <label class="form__label flex" for="github">
                  <svg class="form__icon mr-1">
                    <use href="@/assets/sprite.svg#github"></use>
                  </svg>
                  GitHub
                </label>
                <input id="github" v-model="formSettings.github" class="form__control" type="text" />
              </div>
              <div class="form__group col-span-full">
                <label class="form__label flex" for="website">
                  <svg class="form__icon mr-1">
                    <use href="@/assets/sprite.svg#website"></use>
                  </svg>
                  Website
                </label>
                <input id="website" v-model="formSettings.website" class="form__control" type="text" />
              </div>
            </div>
          </template>
        </expansion-panel>
      </fieldset>
      <!-- SOCIAL -->

      <!-- WORK EXPERIENCE -->
      <fieldset class="form__section grid gap-3">
        <expansion-panel :panel-name="$t('experience')">
          <template v-slot:title>
            <legend class="form__legend">📊 {{ $t('experience') }}</legend>
          </template>
          <template v-slot:content>
            <cv-dynamic-section section-name="work" :entries="formSettings.work"></cv-dynamic-section>
            {{ formSettings.work }}
          </template>
        </expansion-panel>
      </fieldset>
      <!-- WORK EXPERIENCE -->

      <!-- EDUCATION -->
      <fieldset class="form__section grid gap-3">
        <expansion-panel :panel-name="$t('education')">
          <template v-slot:title>
            <legend class="form__legend">🎓 {{ $t('education') }}</legend>
          </template>
          <template v-slot:content>
            <div>
              <cv-display-checkbox class="form__display-checkbox" :display-section="formSettings.displayEducation"
                section-name="education"></cv-display-checkbox>
              <cv-dynamic-section section-name="education" :entries="formSettings.education"></cv-dynamic-section>
            </div>
          </template>
        </expansion-panel>
      </fieldset>
      <!-- EDUCATION -->

      <!-- PROJECTS -->
      <fieldset class="form__section grid gap-3">
        <expansion-panel :panel-name="$t('projects')">
          <template v-slot:title>
            <legend class="form__legend">🚀 {{ $t('projects') }}</legend>
          </template>
          <template v-slot:content>
            <div>
              <cv-display-checkbox class="form__display-checkbox" :display-section="formSettings.displayProjects"
                section-name="projects"></cv-display-checkbox>
              <cv-dynamic-section section-name="projects" :entries="formSettings.projects"></cv-dynamic-section>
            </div>
          </template>
        </expansion-panel>
      </fieldset>
      <!-- PROJECTS -->

      <!-- IA -->
      <fieldset class="form__section grid gap-3">
        <expansion-panel :panel-name="$t('ai')">
          <template v-slot:title>
            <legend class="form__legend">✨ {{ $t('ai') }}</legend>
          </template>
          <template v-slot:content>
            <div class="form__section flex flex-col">
              <button class="form__btn flex flex-col justify-center" type="button"
                @click="toggleModalInput(formSettings)">
                {{ $t('ai') }}
              </button>

              <button class="form__btn flex flex-col justify-center" type="button" @click="toggleModalTraduccion">
                Traducir
              </button>


            </div>
          </template>
        </expansion-panel>
      </fieldset>
      <!-- AI -->
      <!-- CV SETTINGS -->
      <fieldset class="form__section grid gap-3">
        <expansion-panel :panel-name="$t('cv-settings')">
          <template v-slot:title>
            <legend class="form__legend">⚙️ {{ $t('cv-settings') }}</legend>
          </template>
          <template v-slot:content>
            <div class="form__section flex flex-col">
              <label tabindex="0" class="form__btn flex flex-col justify-center">
                {{ $t("upload-cv") }}
                <input type="file" accept=".json" name="uploadCV" class="hidden" @change="uploadCV">
              </label>
              <a :href="formSettingsHref" rel="noopener"
                :download="`CV_${formSettings.name}_${formSettings.lastName}_${$i18n.locale}.json`"
                class="form__btn flex justify-center">{{ $t("download-cv-settings") }}</a>

            </div>
          </template>
        </expansion-panel>
      </fieldset>
      <!-- CV SETTINGS -->
      <!-- CTA -->



      <div class="form__section flex flex-col p-6 gap-3">
        <button type="button" class="form__btn flex flex-col justify-center" style="background-color:#030399;"
          @click="downloadPdf">
          <span>{{ $t('download-cv-pdf') }}</span>
        </button>
      </div>
      <!-- CTA -->
    </form>
  </div>


</template>





<style lang="postcss">
.azultittle {
  color: #030399;
}



.title {
  @apply flex flex-wrap text-xl pt-8 px-6 pb-6 tracking-wide uppercase;
  align-items: center;
  justify-content: space-between;

  .title__text {
    flex-shrink: 0;
  }

  .buy-me-a-coffee {
    flex-shrink: 1;

    &__image {
      width: 118px;
      height: 30px;
      font-size: 0.5rem;
    }
  }
}

.form {
  @apply font-light;

  &__section {
    @apply mb-3;
  }

  &__legend {
    @apply text-lg font-bold tracking-wide;

    &--small {
      @apply text-sm;
    }
  }

  &__group {
    @apply flex flex-col px-1;
  }

  &__label {
    @apply mb-1 font-normal text-gray-600 text-sm;

    &:focus {
      @apply text-purple-700;
    }
  }



  &__coloractivo {
    background-color: var(--primary);
  }

  &__control {
    @apply shadow rounded px-2 py-1 border border-transparent font-light w-full bg-white;
    transition: all 0.1s linear;
    outline: none;

    &:focus {
      @apply border;
      border-color: var(--primary);
    }

    &--checkbox {
      @apply mr-1;
      width: 1.25rem;
      height: 1.25rem;
      background: none;
      box-shadow: none;
    }
  }

  &__btn {
    margin: 0.5rem 0.2rem 0.25rem;
    color: #fff;
    background-color: var(--primary);
    @apply text-white p-2 rounded shadow font-light justify-center items-center text-center;
    transition: background-color 0.1s linear, color 0.1s linear;

    &+& {
      margin-top: 0.5rem;
    }

    &:hover {
      background-color: var(--primary-darker);
      cursor: pointer;
    }

    &--color-theme {
      background-color: #fff;

      &:hover {
        color: #fff;
      }
    }

    &--pink {
      color: var(--pink);
      background-color: var(--pink);

      &:hover {
        background-color: var(--pink);
      }
    }

    &--purple {
      color: var(--purple);
      background-color: var(--purple);

      &:hover {
        background-color: var(--purple);
      }
    }

    &--indigo {
      color: var(--indigo);
      background-color: var(--indigo-darker);

      &:hover {
        background-color: var(--indigo-darker);
      }
    }

    &--grey {
      color: var(--grey);
      background-color: var(--grey-darker);

      &:hover {
        background-color: var(--grey-darker);
      }
    }

    &--green {
      color: var(--green);
      background-color: var(--green-darker);

      &:hover {
        background-color: var(--green-darker);
      }
    }

    &--black {
      color: var(--black);
      background-color: var(--black-darker);

      &:hover {
        background-color: var(--black-darker);
      }
    }

    &--red {
      color: var(--red);
      background-color: var(--red);

      &:hover {
        background-color: var(--red);
      }
    }


    &--tag {
      @apply flex gap-2 py-1;
      align-items: center;

      &:hover {
        @appy bg-purple-700;
      }
    }

    &--delete {
      @apply bg-red-400;

      &:hover {
        @apply bg-red-500;
      }
    }

    &--ghost {
      @apply bg-white text-gray-700;

      &:hover {
        @apply bg-gray-700 text-white;
      }
    }


    &--active {
      @apply bg-gray-700 text-white;
      box-shadow: none;
    }
  }

  &__icon {
    fill: #fff;
    width: 1.25rem;
    height: 1.25rem;

    &:hover {
      opacity: 0.6;
    }
  }

  &__display-checkbox {
    @apply mb-6;
  }
}



.scrollbar {
  margin-left: 30px;
  float: left;
  height: 300px;
  width: 65px;
  background: #F5F5F5;
  overflow-y: scroll;
  margin-bottom: 25px;
}

/*
 *  STYLE 7
 */



/* width */
::-webkit-scrollbar {
  width: 1rem;
  height: 0rem;
}

/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #F5F5F5;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: -webkit-gradient(linear,
      left bottom,
      left top,
      color-stop(0.44, rgb(122, 153, 217)),
      color-stop(0.72, rgb(73, 125, 189)),
      color-stop(0.86, rgb(28, 58, 148)));
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  border-radius: 10px;
  background-image: -webkit-gradient(linear,
      left bottom,
      left top,
      color-stop(0.44, rgb(102, 133, 207)),
      color-stop(0.72, rgb(3, 105, 149)),
      color-stop(0.86, rgb(8, 38, 128)));
}
</style>
