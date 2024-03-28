import { Cv, LEVELS } from '~/types/cvfy';

export const cvSettingTemplate4: Cv = {
  jobTitle: 'Microbiólogo, científico e investigador',
  name: 'Clodomiro',
  photo: require('@/assets/photos/cv5.webp'),
  lastName: 'Picado Twight',
  email: 'contacto@tecsify.com',
  location: 'Costa Rica',
  phoneNumber: '0101010011001',
  aboutme:
    'Soy Clodomiro Picado Twight, un microbiólogo costarricense conocido por mis contribuciones pioneras al desarrollo de sueros antiofídicos. Mi trabajo en el Instituto Clodomiro Picado ha salvado innumerables vidas alrededor del mundo, y mi pasión por la ciencia y la investigación ha dejado un legado duradero en el campo de la microbiología.',
  jobSkills: ['Microbiología', 'Inmunología'],
  softSkills: ['Persistencia', 'Innovación', 'Colaboración'],
  languages: [{ lang: 'Español', level:  LEVELS[4] }],
  linkedin: '',
  twitter: '',
  github: '',
  website: 'www.Tecsify.com',
  education: [
    {
      title: 'Licenciatura en Biología',
      location: 'Universidad de Costa Rica',
      from: new Date(1918, 1, 1),
      to: new Date(1923, 1, 1),
      current: false,
      summary: 'Me gradué de la Universidad de Costa Rica con una licenciatura en biología, donde desarrollé un interés temprano en la microbiología y la investigación científica.',
    },
    {
      title: 'Doctorado en Microbiología',
      location: 'Universidad de Chicago',
      from: new Date(1924, 1, 1),
      to: new Date(1928, 1, 1),
      current: false,
      summary: 'Continué mis estudios en la Universidad de Chicago, donde obtuve mi doctorado en microbiología y profundicé mis conocimientos en el campo de la inmunología y la microbiología aplicada.',
    },
  ],
  work: [
    {
      title: 'Investigador Principal',
      location: 'Instituto Clodomiro Picado, Costa Rica',
      from: new Date(1928, 1, 1),
      to: new Date(1944, 1, 1),
      current: false,
      summary: 'Trabajé como investigador principal en el Instituto Clodomiro Picado, donde dirigí proyectos de investigación para desarrollar sueros antiofídicos y combatir las picaduras de serpientes venenosas en Costa Rica y en todo el mundo.',
    },
  ],
  projects: [
    {
      title: 'Desarrollo de Sueros Antiofídicos',
      location: 'Costa Rica',
      from: new Date(1935, 1, 1),
      to: new Date(1940, 1, 1),
      current: false,
      summary: 'Lideré equipos de investigación en el desarrollo de sueros antiofídicos efectivos para tratar las picaduras de serpientes venenosas, salvando vidas y contribuyendo al avance de la medicina tropical.',
    },
  ],
  displayEducation: true,
  displayProjects: true,
  activeColor: '#535252',
  nameFontSize: "195",
  photoStyle: "5",
  photoBorder: true,
  photoBnW: true,
};



