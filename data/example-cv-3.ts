import { Cv, LEVELS } from '~/types/cvfy';

export const cvSettingTemplate3: Cv = {
  jobTitle: 'Físico teórico',
  name: 'Albert',
  photo: require('@/assets/photos/cv3.webp'),
  lastName: 'Einstein',
  email: 'contacto@tecsify.com',
  location: 'Alemania',
  phoneNumber: '3010011001',
  aboutme:
    "Soy Albert Einstein, un físico teórico alemán conocido por desarrollar la teoría de la relatividad, una de las dos pilares de la física moderna (junto con la mecánica cuántica). Además de mi trabajo científico, también soy conocido por mi compromiso con causas sociales y políticas, así como por mi habilidad para comunicar conceptos científicos de manera accesible.",
  jobSkills: ['Física teórica', 'Matemáticas avanzadas', 'Pensamiento abstracto'],
  softSkills: ['Creatividad', 'Pensamiento crítico', 'Resolución de problemas'],
  languages: [{ lang: 'Alemán', level: LEVELS[4] }, { lang: 'Inglés', level: LEVELS[3] }],
  linkedin: '',
  twitter: '',
  github: '',
  website: 'www.Tecsify.com',
  education: [
    {
      title: 'Doctorado en Física',
      location: 'Universidad de Zúrich',
      from: new Date(1905, 1, 1),
      to: new Date(1908, 1, 1),
      current: false,
      summary: 'Mi formación académica en física sentó las bases para mis futuras investigaciones y descubrimientos científicos.',
    },
  ],
  work: [
    {
      title: 'Científico en la Oficina de Patentes Suiza',
      location: 'Bern, Suiza',
      from: new Date(1902, 1, 1),
      to: new Date(1909, 1, 1),
      current: false,
      summary: 'Trabajé como examinador de patentes mientras desarrollaba mis investigaciones científicas en mi tiempo libre.',
    },
    {
      title: 'Profesor de Física Teórica',
      location: 'Universidad de Berlín',
      from: new Date(1914, 1, 1),
      to: new Date(1933, 1, 1),
      current: false,
      summary: 'Durante mi tiempo como profesor, continué investigando y publicando trabajos que tuvieron un impacto significativo en la física teórica.',
    },
  ],
  projects: [
    {
      title: 'Teoría de la Relatividad General',
      location: 'Berlín, Alemania',
      from: new Date(1915, 1, 1),
      to: new Date(1916, 1, 1),
      current: true,
      summary: 'Mi trabajo en la teoría de la relatividad general revolucionó nuestra comprensión del espacio, el tiempo y la gravedad.',
    },
    {
      title: 'Desarrollo de la Ecuación E=mc^2',
      location: 'Zúrich, Suiza',
      from: new Date(1905, 1, 1),
      to: new Date(1905, 1, 1),
      current: true,
      summary: 'Mi famosa ecuación E=mc^2 es un resultado fundamental de mi teoría de la relatividad especial y tiene importantes implicaciones en la física nuclear y la energía.',
    },
  ],
  displayEducation: true,
  displayProjects: true,
  activeColor: '#000',
  nameFontSize: "250",
  photoStyle: "10",
  photoBorder: false,
  photoBnW: true,
};
