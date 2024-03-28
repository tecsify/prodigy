import { Cv, LEVELS } from '~/types/cvfy';


export const cvSettingTemplate: Cv = {
  jobTitle: 'Matemática e inventora',
  name: 'Ada',
  photo: require('@/assets/photos/cv1.webp'),
  lastName: 'Lovelace',
  email: 'contacto@tecsify.com',
  location: 'Reino Unido',
  phoneNumber: '+44 11010011001',
  aboutme:
    'Soy Ada Lovelace, una matemática y escritora británica del siglo XIX. Soy conocida por ser la primera programadora de la historia y por mi colaboración con Charles Babbage en la creación de la Máquina Analítica, un precursor de los ordenadores modernos.',
  jobSkills: ['Programación', 'Matemáticas', 'Escritura técnica'],
  softSkills: ['Creatividad', 'Razonamiento lógico', 'Resolución de problemas'],
  languages: [{ lang: 'Inglés', level: LEVELS[4] }, { lang: 'Francés', level: LEVELS[2] }],
  linkedin: '',
  twitter: '',
  github: '',
  website: 'www.Tecsify.com',

  education: [
    {
      title: 'Estudios Avanzados en Matemáticas',
      location: 'Universidad de Londres',
      from: new Date(1830, 1, 1),
      to: new Date(1833, 1, 1),
      current: false,
      summary: 'Realicé mis estudios en matemáticas en la Universidad de Londres, donde profundicé mis conocimientos en álgebra y cálculo.',
    },
  ],
  work: [
    {
      title: 'Colaboración con Charles Babbage',
      location: 'Reino Unido',
      from: new Date(1833, 1, 1),
      to: new Date(1852, 1, 1),
      current: false,
      summary: 'Colaboré estrechamente con Charles Babbage en el desarrollo de la Máquina Analítica, donde escribí el primer algoritmo destinado a ser procesado por una máquina, lo que me convierte en la primera programadora de la historia.',
    },
    {
      title: 'Investigación Independiente',
      location: 'Reino Unido',
      from: new Date(1852, 1, 1),
      to: new Date(1852, 12, 31),
      current: false,
      summary: 'Realicé investigaciones independientes en el campo de las matemáticas y la ciencia, explorando nuevas teorías y conceptos innovadores.',
    },
  ],
  projects: [
    {
      title: 'Algoritmo para la Máquina Analítica',
      location: 'Reino Unido',
      from: new Date(1843, 1, 1),
      to: new Date(1843, 1, 1),
      current: false,
      summary: 'Escribí el primer algoritmo destinado a ser procesado por una máquina, sentando las bases de la programación informática moderna.',
    },
    {
      title: 'Investigación en Números Bernoulli',
      location: 'Reino Unido',
      from: new Date(1850, 1, 1),
      to: new Date(1850, 12, 31),
      current: false,
      summary: 'Realicé investigaciones en números Bernoulli, explorando sus propiedades y aplicaciones en matemáticas y ciencia de la computación.',
    },
  ],
  displayEducation: true,
  displayProjects: true,
  activeColor: '#030399',
  nameFontSize: "230",
  photoStyle: "15",
  photoBorder: false,
  photoBnW: false,
};





export const cvSettingsEmptyTemplate: Cv = {
  jobTitle: '',
  photo: '',
  name: '',
  lastName: '',
  email: '',
  location: '',
  phoneNumber: '',
  aboutme: '',
  jobSkills: [],
  softSkills: [],
  languages: [],
  linkedin: '',
  twitter: '',
  github: '',
  website: '',
  education: [],
  work: [],
  projects: [],
  displayEducation: true,
  displayProjects: false,
  activeColor: '#030399',
  nameFontSize: '195',
  photoStyle: "15",
  photoBorder: true,
  photoBnW: true,
};
