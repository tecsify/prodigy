import { useContext, reactive, toRefs } from '@nuxtjs/composition-api';
import {
  cvSettingsEmptyTemplate,
  cvSettingTemplate,
} from './example-cv-settings';

import {
  cvSettingTemplate2,
} from './example-cv-2';

import {
  cvSettingTemplate3,
} from './example-cv-3';

import {
  cvSettingTemplate4,
} from './example-cv-4';

import {
  cvSettingTemplate5,
} from './example-cv-5';

import {
  cvSettingTemplate6,
} from './example-cv-6';

import { Cv, CvEvent, defaultSkill, languagesSkill } from '~/types/cvfy';

const state = reactive({
  formSettings: { ...cvSettingsEmptyTemplate } as Cv,
  isLoading: true,
});

import Swal from 'sweetalert2';
import CvSettings from '~/components/CvSettings.vue';


export function useCvState() {
  const context = useContext();

  function setUpCvSettings(): void {
    const locale = `cvSettings-${context.i18n.locale}`;
    const cvSettings = localStorage.getItem(locale);
    if (cvSettings == null) {
      state.formSettings = {
        ...cvSettingTemplate,
      };
    } else {
      const cvSettingsObj = JSON.parse(cvSettings);
      state.formSettings = { ...cvSettingsEmptyTemplate, ...cvSettingsObj };
    }
    localStorage.setItem(locale, JSON.stringify(state.formSettings));
    state.isLoading = false;
  }

  function addSkill(e: languagesSkill | defaultSkill): void {
    if (e.skillType === 'languages') {
      if (e.skill.lang.trim() === '') return;
      const newLang = e.skill;
      const newLangIdx = state.formSettings.languages.findIndex(
        (lang) => lang.lang === newLang.lang
      );
      if (newLangIdx < 0) {
        state.formSettings.languages = [
          ...new Set([
            ...state.formSettings.languages,
            { lang: e.skill.lang, level: `${e.skill.level}` },
          ]),
        ];
      }
    } else {
      if (e.skill.trim() === '') return;
      state.formSettings[e.skillType] = [
        ...new Set([...state.formSettings[e.skillType], e.skill]),
      ];
    }
  }

  function removeSkill(e: languagesSkill | defaultSkill): void {
    if (e.skillType === 'languages') {
      state.formSettings[e.skillType] = [
        ...state.formSettings[e.skillType].filter(
          (skill) => skill.lang !== e.skill.lang
        ),
      ];
    } else {
      state.formSettings[e.skillType] = [
        ...state.formSettings[e.skillType].filter((skill) => skill !== e.skill),
      ];
    }
  }

  function addEntry(e: { sectionName: 'education' | 'work' }) {
    state.formSettings[e.sectionName].push({
      title: '',
      location: '',
      from: new Date(),
      to: new Date(),
      current: false,
      summary: '',
    });
  }

  function removeEntry(e: {
    sectionName: 'education' | 'work';
    entry: CvEvent;
  }) {
    state.formSettings[e.sectionName] = state.formSettings[
      e.sectionName
    ].filter((entry) => entry.title !== e.entry.title);
  }

  function uploadCV(e: any): void {
    const fr = new FileReader();
    fr.onload = (e: any) => {
      const data = JSON.parse(e.target.result);
      state.formSettings = {
        ...cvSettingsEmptyTemplate,
        ...data.formSettings,
      };
    };
    fr.readAsText(e.target.files[0]);
  }

  async function enviarCVBackEnd(e: any, lengua: string): Promise<void> {
    try {
      const idiomasValidos = ['es', 'en', 'fr', 'de', 'pt'];

      if (!idiomasValidos.includes(lengua)) {
        console.error('Lenguaje no válido:', lengua);
        return; // Salir de la función si el lenguaje no es válido
      }



      const locale = `cvSettings-${context.i18n.locale}`;
      const lenguaje = context.i18n.locale;
      const cvSettings = localStorage.getItem(locale);
      if (cvSettings == null){
        console.error('No hay datos en el CV:', cvSettings);
        return;
      }

      if (lengua === lenguaje) {
        console.error('Lenguaje repetido:', lengua);
        return; // Salir de la función si el lenguaje no es válido
      }

      const parsedCvSettings = JSON.parse(cvSettings);
      const data = { source_lenguage: lenguaje, lengua: lengua, ...parsedCvSettings };
      const response = await fetch('http://localhost:5000/traducir', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Pasar un solo objeto con todos los datos
      });
  
      if (response.ok) {
        const responseData = await response.json();

        window.location.href = "/" + lengua + "/cv";
        localStorage.setItem(`cvSettings-${lengua}`, JSON.stringify(responseData));
        //localStorage.setItem(`cvSettings-${lenguaje}`, parsedCvSettings);
        //console.log(localStorage.getItem(`cvSettings-${lenguaje}`));
        //  console.log(localStorage.getItem(`cvSettings-${lengua}`));

      } else {
        console.error('Error al enviar los datos:', response.statusText);
      }
    } catch (error) {
      console.error('Error al procesar el archivo:', error);
    }
  }
  
  


  async function resetForm(): Promise<void> {

    const locale = `cvSettings-${context.i18n.locale}`;
    const cvSettings = localStorage.getItem(locale);

    // Función para realizar cambios
    const performChanges = () => {
      // Definir los índices de los templates disponibles
      const indexes = [1, 2, 3, 4, 5, 6];

      // Obtener el índice actual almacenado en localStorage, o inicializarlo a 1 si no existe
      let currentIndex = parseInt(localStorage.getItem('currentIndex') || '1');

      // Incrementar el índice actual y asegurarse de que esté dentro del rango de los índices disponibles
      currentIndex = (currentIndex % indexes.length) + 1;

      // Guardar el nuevo índice en localStorage
      localStorage.setItem('currentIndex', currentIndex.toString());

      // Obtener el template correspondiente al nuevo índice
      const selectedTemplate = currentIndex === 1 ? cvSettingTemplate :
        currentIndex === 2 ? cvSettingTemplate2 :
          currentIndex === 3 ? cvSettingTemplate3 :
            currentIndex === 4 ? cvSettingTemplate4 :
              currentIndex === 5 ? cvSettingTemplate5 :
                cvSettingTemplate6;

      // Asignar el template seleccionado a state.formSettings
      state.formSettings = { ...selectedTemplate };

      // Guardar state.formSettings en localStorage
      localStorage.setItem(`cvSettings-${context.i18n.locale}`, JSON.stringify(state.formSettings));
    };

    // Verificar si cvSettings es null
    if (cvSettings !== null  ) {

    const parsedCvSettings = JSON.parse(cvSettings);
    const propertiesToCheck = ['jobTitle', 'name', 'email'];

    // Verificar si alguna propiedad de tipo cadena está vacía
    const isEmpty = propertiesToCheck.some(property => {
      const value = parsedCvSettings[property];
      return typeof value === 'string' && value.trim() === '';
    });
    if (isEmpty){
      // Si es null, realizar cambios
      performChanges();
    }else {
      // Si cvSettings no es null, mostrar el cuadro de diálogo
      const result = await Swal.fire({
        title: 'Ver un ejemplo',
        html: '<strong>Esta acción borrará la información actual</strong><br>Te recomendamos guardar tus ajustes ya que esta acción no se puede deshacer<br>¿deseas continuar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
      });

      if (result.isConfirmed) {
        // Realizar cambios si se confirma
        performChanges();
      }
    }

    } 
  }




  async function clearForm(): Promise<void> {

    // Función para realizar cambios
    const performChanges = () => {
      state.formSettings = {
        ...cvSettingsEmptyTemplate,
        ...cvSettingsEmptyTemplate,
      }; localStorage.removeItem(`cvSettings-${context.i18n.locale}`);
    };
    // Obtener el objeto completo guardado en localStorage
    const cvSettings = localStorage.getItem(`cvSettings-${context.i18n.locale}`);

    // Verificar si cvSettings no es null y si alguna propiedad no está vacía
    if (cvSettings !== null) {
      // Convertir la cadena JSON en un objeto JavaScript
      const parsedCvSettings = JSON.parse(cvSettings);
      const propertiesToCheck = ['jobTitle', 'name', 'email'];

      // Verificar si alguna propiedad de tipo cadena está vacía
      const isEmpty = propertiesToCheck.some(property => {
        const value = parsedCvSettings[property];
        return typeof value === 'string' && value.trim() === '';
      });
      if (isEmpty) {
        performChanges();
      } else {
        // Si cvSettings no es null, mostrar el cuadro de diálogo
        const result = await Swal.fire({
          title: 'Limpiar CV:',
          html: '<strong>Esta acción borrará la información actual</strong><br>Te recomendamos guardar tus ajustes ya que esta acción no se puede deshacer<br>¿deseas continuar?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí',
          cancelButtonText: 'No'
        });

        if (result.isConfirmed) {
          // Realizar cambios si se confirma
          performChanges();
        }
      }
    } else {
      performChanges();
    }


    /*     const locale = `cvSettings-${context.i18n.locale}`;
        const cvSettings = localStorage.getItem(locale);
    
        // Función para realizar cambios
        const performChanges = () => {
          state.formSettings = cvSettingsEmptyTemplate;
          localStorage.removeItem(`cvSettings-${context.i18n.locale}`);
        };
    
        // Verificar si cvSettings es null
        if (cvSettings === null) {
          // Si es null, realizar cambios directamente
          performChanges();
        } else {
    
          // Si cvSettings no es null, mostrar el cuadro de diálogo
          const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción no se puede deshacer',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'No'
          });
    
          if (result.isConfirmed) {
            // Realizar cambios si se confirma
            performChanges();
          }
        } */
  }


  function changeDisplaySection(e: {
    sectionName: string;
    status: boolean;
  }): void {
    const propName = `display${e.sectionName
      .slice(0, 1)
      .toUpperCase()}${e.sectionName.slice(1)}` as
      | 'displayEducation'
      | 'displayProjects';
    state.formSettings[propName] = e.status;
  }
  
  return {
    ...toRefs(state),
    setUpCvSettings,
    addSkill,
    removeSkill,
    addEntry,
    removeEntry,
    uploadCV,
    resetForm,
    clearForm,
    changeDisplaySection,
    enviarCVBackEnd,
  };
}


