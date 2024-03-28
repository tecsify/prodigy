<template>
  <div id="cv" ref="cvTemplate" class="font-normal relative flex justify-center w-full bg-white" style="overflow: auto !important;">
    <div tabindex="0" aria-label="CV preview" :class="['cv', 'bg-white', { blur: isLoading }]">
      <div class="cv__side w-1/3 cv__color-selected">
        <div class="container">

          <img :class="['cv__job-photo center-cropped', {'photo-border': formSettings.photoBorder, 'grayscale': formSettings.photoBnW }]" alt="Foto de perfil" id="photocv" :src="formSettings.photo"  :style="{ borderRadius: (parseInt(formSettings.photoStyle) +'%')}" />
        </div>
        <br>
        <h2 class="cv__name" :style="{ fontSize: (parseInt(formSettings.nameFontSize) / 100) +'rem', lineHeight: (parseInt(formSettings.nameFontSize) / 95) + 'rem'} ">
          {{ formSettings.name }} {{ formSettings.lastName }}
        </h2>

        <br />

        <h3 class="cv__job-title">{{ formSettings.jobTitle }}</h3>


        <!-- CONTACT -->
        <section class="cv__section">
          <h4 class="cv__section-title">{{ $t('contact') }}</h4>
          <div class="flex flex-col">
            <div v-if="formSettings.phoneNumber" class="cv__icon-wrapper">
              <svg class="cv__icon">
                <use href="@/assets/sprite.svg#phone"></use>
              </svg>
              <a :href="phoneNumberHref" rel="noopener">{{
      formSettings.phoneNumber
    }}</a>
            </div>
            <div v-if="formSettings.email" class="cv__icon-wrapper">
              <svg class="cv__icon">
                <use href="@/assets/sprite.svg#email"></use>
              </svg>
              <a :href="emailHref" rel="noopener">{{ formSettings.email }}</a>
            </div>
            <div v-if="formSettings.location" class="cv__icon-wrapper">
              <svg class="cv__icon">
                <use href="@/assets/sprite.svg#location"></use>
              </svg>
              <span tabindex="0">{{ formSettings.location }}</span>
            </div>
          </div>
        </section>
        <!-- //CONTACT -->
        <!-- PROFESIONAL SKILLS -->
        <section class="cv__section">
          <h4 class="cv__section-title">{{ $t('professional-skills') }}</h4>
          <ul class="cv__tags">
            <li v-for="skill in formSettings.jobSkills" :key="`preview${skill}`" class="cv__tag">{{ skill }}</li>
          </ul>
        </section>
        <!-- //PROFESIONAL SKILLS -->
        <!-- SOFT SKILLS -->
        <section class="cv__section">
          <h4 class="cv__section-title">{{ $t('soft-skills') }}</h4>
          <ul class="cv__list">
            <li v-for="skill in formSettings.softSkills" :key="`preview${skill}`">
             {{ skill }}
            </li>
          </ul>
        </section>
        <!-- // SOFT SKILLS -->
        <!-- LANGUAGES -->
        <section class="cv__section">
          <h4 class="cv__section-title">
            {{ $t("languages") }}
          </h4>
          <ul>
            <li
              v-for="lang in formSettings.languages"
              :key="`preview${lang.lang}`"
              class="flex justify-between pr-4"
            >
              <span>{{ lang.lang }}</span>
              <span class="font-light">{{ $t(lang.level) }}</span>
            </li>
          </ul>
        </section>




        <!-- // LANGUAGES -->
        <!-- SOCIAL -->
        <section class="cv__section">
          <h4 class="cv__section-title">{{ $t('social') }}</h4>
          <div class="flex flex-col">
            <div v-if="formSettings.linkedin" class="cv__icon-wrapper">
              <svg class="cv__icon">
                <use href="@/assets/sprite.svg#linkedin-color"></use>
              </svg>
              <a target="_blank" rel="noopener" :href="`https://linkedin.com/in/${formSettings.linkedin}`">{{
      `linkedin.com/in/${formSettings.linkedin}` }}</a>
            </div>
            <div v-if="formSettings.twitter" class="cv__icon-wrapper">
              <svg class="cv__icon">
                <use href="@/assets/sprite.svg#twitter-color"></use>
              </svg>
              <a target="_blank" rel="noopener" :href="`https://twitter.com/${formSettings.twitter}`">{{
      `twitter.com/${formSettings.twitter}` }}</a>
            </div>
            <div v-if="formSettings.github" class="cv__icon-wrapper">
              <svg class="cv__icon">
                <use href="@/assets/sprite.svg#github-color"></use>
              </svg>
              <a target="_blank" rel="noopener" :href="`https://github.com/${formSettings.github}`">{{
      `github.com/${formSettings.github}` }}</a>
            </div>
            <div v-if="formSettings.website" class="cv__icon-wrapper">
              <svg class="cv__icon">
                <use href="@/assets/sprite.svg#website"></use>
              </svg>
              <a target="_blank" rel="noopener" :href="'https://' + formSettings.website">{{
      formSettings.website
    }}</a>
            </div>
          </div>
        </section>
        <!-- // SOCIAL -->
      </div>
      <div class="cv__main w-2/3">
        <!-- ABOUT ME -->
        <section class="cv__section cv__section--main w-full">
          <h4 class="cv__section-title cv__section-title--main">
            {{ $t('about-me') }}
          </h4>
          <p class="font-light">
            <!-- Avoids unnecessary spaces at the begging while still allowing break lines -->
            <span class="whitespace-pre-wrap">{{ formSettings.aboutme }}</span>
          </p>
        </section>
        <!-- // ABOUT ME -->

        <hr class="cv__bar" />

        <!-- EXPERIENCE -->
        <section class="cv__section cv__section--main w-full">
          <h4 class="cv__section-title cv__section-title--main">
            {{ $t('experience') }}
          </h4>
          <ul class="cv__event mt-3">
            <li v-for="job in work" :key="job.title" class="cv__event-elem">
              <h5 class="cv__section-title cv__section-title--sm">
                {{ job.title }}
              </h5>
              <div>
                <span>{{ job.location }} | </span>
                <span>
                  {{ formatDate(job.from) }} -
                  <template v-if="job.current">{{ $t('current') }}</template>
                  <template v-else>{{ formatDate(job.to) }}</template>
                </span>
              </div>
              <ul v-if="job.summaryArr.length > 1" class="cv__list">
                <li v-for="(line, index) in job.summaryArr" :key="index">
                  {{ line }}
                </li>
              </ul>
              <p v-else class="font-light">
                {{ job.summaryArr[0] }}
              </p>
            </li>
          </ul>
        </section>
        <!-- // EXPERIENCE -->

        <hr v-if="formSettings.displayEducation" class="cv__bar" />

        <!-- EDUCATION -->
        <section v-if="formSettings.displayEducation" class="cv__section cv__section--main w-full">
          <h4 class="cv__section-title cv__section-title--main">
            {{ $t('education') }}
          </h4>
          <ul class="cv__event mt-3">
            <li v-for="edu in education" :key="edu.title" class="cv__event-elem">
              <h5 class="cv__section-title cv__section-title--sm">
                {{ edu.title }}
              </h5>
              <div>
                <span>{{ edu.location }} | </span>
                <span>
                  {{ formatDate(edu.from) }} -
                  <template v-if="edu.current">{{ $t('current') }}</template>
                  <template v-else>{{ formatDate(edu.to) }}</template>
                </span>
              </div>
              <ul v-if="edu.summaryArr.length > 1" class="cv__list">
                <li v-for="(line, index) in edu.summaryArr" :key="index">
                  {{ line }}
                </li>
              </ul>
              <p v-else class="font-light">
                {{ edu.summaryArr[0] }}
              </p>
            </li>
          </ul>
        </section>
        <!-- // EDUCATION -->

        <hr v-if="formSettings.displayProjects" class="cv__bar" />

        <!-- PROJECTS -->
        <section v-if="formSettings.displayProjects" class="cv__section cv__section--main w-full">
          <h4 class="cv__section-title cv__section-title--main">
            {{ $t('projects') }}
          </h4>
          <ul class="cv__event mt-3">
            <li v-for="project in projects" :key="project.title" class="cv__event-elem">
              <h5 class="cv__section-title cv__section-title--sm">
                {{ project.title }}
              </h5>
              <div>
                <span>{{ project.location }} | </span>
                <span>
                  {{ formatDate(project.from) }} -
                  <template v-if="project.current">{{
      $t('current')
    }}</template>
                  <template v-else>{{ formatDate(project.to) }}</template>
                </span>
              </div>
              <ul v-if="project.summaryArr.length > 1" class="cv__list">
                <li v-for="(line, index) in project.summaryArr" :key="index">
                  {{ line }}
                </li>
              </ul>
              <p v-else class="font-light">
                {{ project.summaryArr[0] }}
              </p>
            </li>
          </ul>
        </section>
        <!-- // PROJECTS -->

      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useContext, computed } from '@nuxtjs/composition-api';
import { CvEvent } from '~/types/cvfy';
import { useCvState } from '~/data/useCvState';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import cv from '~/pages/cv.vue';


export default Vue.extend({
  name: 'CvPreview',
  setup() {
    const { formSettings, isLoading } = useCvState();
    const context = useContext();

    const phoneNumberHref = computed(function getPhoneNumberHref() {
      return `tel:${formSettings.value.phoneNumber}`;
    });
    const emailHref = computed(function getEmailHref() {
      return `mailto:${formSettings.value.email}`;
    });
    const work = computed(function getWork() {
      return orderEvents(formSettings.value.work);
    });
    const education = computed(function getEducation() {
      return orderEvents(formSettings.value.education);
    });
    const projects = computed(function getProjects() {
      return orderEvents(formSettings.value.projects);
    });

    function orderEvents(arr: CvEvent[]): CvEvent[] {
      return arr
        .map((event) => {
          event.summaryArr = getSummaryLines(event.summary);
          return event;
        })
        .sort(
          (a, b) => new Date(b.from).getTime() - new Date(a.from).getTime()
        );
    }

    function getSummaryLines(summary: string): string[] {
      const lines = summary.split('\n').map((line) => {
        if (line[0] === '-') {
          line = line.slice(1).trim();
        }
        return line;
      });
      return lines;
    }

    function formatDate(date: Date): string {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
      };
      const dateObj = new Date(date);
      return dateObj.toLocaleDateString(context.app.i18n.locale, options);
    }
    

    return {
      formSettings,
      isLoading,
      phoneNumberHref,
      emailHref,
      work,
      education,
      projects,
      formatDate,
    };
  },


  methods: {
    calculateFontSize(text: any) {
      // Aquí definimos la lógica para calcular el tamaño del texto
      const baseFontSize = 2.1; // Tamaño de fuente base
      var calculatedSize = baseFontSize; // Longitud máxima del texto antes de reducir el tamaño
      const textLength = text.length;
      if (textLength < 13){
        calculatedSize = baseFontSize * 1.01 // Ajusta según tus necesidades
      }else{
        calculatedSize = baseFontSize - (textLength * 0.009); // Ajusta según tus necesidades
      }
      return `${calculatedSize}rem`; // Devolvemos el tamaño de fuente calculado como una cadena con "px"
    }
  }

 /*  mounted() {
    const doc = new jsPDF({
    orientation: 'portrait', // O 'landscape' si prefieres
    unit: 'px',
    format: 'a4' // Cambia al tamaño de página que necesites
  });
  
  // Selecciona el elemento .cv
  const cvf = document.querySelector('.cv');
  
  cvf.style.marginTop = "0";

  cvf.style.marginRight = "0";
  cvf.style.padding = "0";
  cvf.style.width = "100%";
  cvf.style.border = "none";
  cvf.style.marginLeft = "-199px";
  cvf.style.boxShadow = 'none'; // Cambio aquí a boxShadow
  cvf.style.scale = '0.8025'; // Cambio aquí a boxShadow
  const scaleFactor = 0.98  ; 
   // Escala las fuentes dentro del elemento .cv
  const textElements = cvf.querySelectorAll('p, h1, h4, h5, h6, div, section, span, hr, br, li'); // Selección de elementos de texto
  textElements.forEach(element => {
    if (element.tagName === 'LI'){
      console.log("ASDASD")
    element.style.fontSize = `${scaleFactor * 100}%`; 
      element.style.paddingTop = "0px";
    }else{
    element.style.fontSize = `${scaleFactor * 100}%`; 
    element.style.letterSpacing = '0.042em'; // Escala el tamaño de las fuentes
    element.style.lineHeight = '1.9em'; // Escala el tamaño de las fuentes
  }
  });
  // Agrega el contenido del documento al PDF
  doc.html(cvf, {
    callback: function(pdf) {
      pdf.save('cv.pdf');
    }
  });
} */

});
</script>
<style lang="postcss" scoped>
p {
  @apply leading-relaxed;
}

.cv {
  @apply flex text-gray-800 drop-shadow-2xl text-sm font-normal mt-6;
  width: 21cm;
  height: 29.69cm;
  min-width: 21cm;
  min-height: 29.69cm;
  max-width: 21cm;
  max-height: 29.69cm;
  align-self: flex-start;
  word-break: break-word;
  transform: scale(0.4);
  transform-origin: top;
  overflow-y: hidden;
  border-radius: 1.5%;

  @media screen and (min-width: 425px) {
    transform: scale(0.65);
  }

  @media screen and (min-width: 768px) {
    transform: scale(0.9);
  }

  @media screen and (min-width: 1024px) {
    transform: scale(0.7);
  }

  &__side {
    @apply px-6 py-8 bg-gray-100 bg-opacity-100;
  }

  &__job-photo {
    border-radius: 15%;
    max-height: 15rem;
    min-height: 13.4rem;
    @apply mb-2;
  }

  &__name {
    @apply uppercase font-bold leading-8;
    color: #fff;
  }

  &__job-title {
    @apply uppercase;
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  &__section {
    @apply mt-6;

    &--main {
      @apply mt-0 text-sm;
    }
  }



  &__color-selected {
    background-color: var(--primary) !important;
    color: #fff !important;
  }

  &__section-title {
    @apply text-lg uppercase mb-2 font-bold tracking-wide;

    &--sm {
      @apply text-sm;
    }

    &--main {
      color: var(--primary);
    }
  }

  &__icon-wrapper {
    @apply flex flex-row font-light;
    align-items: center;

    &+& {
      margin-top: 5px;
    }
  }

  &__icon {
    @apply flex mr-1 fill-current rounded;
    width: 1.25rem;
    height: 1.25rem;
    min-width: 1.25rem;
    align-items: center;
  }

  &__tags {
    @apply flex flex-wrap;
  }

  &__tag {
    @apply px-2 py-1 rounded text-white text-xs;
    margin: 0.5rem 0.2rem 0.25rem;
    background-color: #fff;
    font-weight: 600 !important;
    color: var(--primary) !important;
  }



  &__main {
    @apply px-8 py-8;
  }

  &__event {
    &-elem+&-elem {
      @apply mt-6;
    }
  }

  &__bar {
    @apply my-5 border-2;
  }
}

.blur {
  filter: blur(5px);
}

.photo-border{
  border: 0.25rem white solid;
}

.grayscale {
  filter: grayscale(100%); /* Aplicar efecto de blanco y negro */
}
</style>
