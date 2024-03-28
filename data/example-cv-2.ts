import { Cv, LEVELS } from '~/types/cvfy';

export const cvSettingTemplate2: Cv = {
  jobTitle: 'Informático, matemático y filósofo',
  name: 'Alan ',
  photo: require('@/assets/photos/cv2.webp'),
  lastName: 'Turing',
  email: 'contacto@tecsify.com',
  location: 'Londres, Reino Unido',
  phoneNumber: '2020100111',
  aboutme:
    "Soy Alan Turing, un matemático, informático y filósofo británico del siglo XX, conocido por ser uno de los pioneros en el campo de la informática. Fui fundamental en el desarrollo de la máquina de Turing, un precursor de los modernos ordenadores",
  jobSkills: ['Criptografía', 'Inteligencia Artificial', 'Tecsify'],
  softSkills: ['Innovación', 'Creatividad', 'Lógica'],
  languages: [{ lang: 'Inglés', level: LEVELS[4] }],
  linkedin: '',
  twitter: '',
  github: '',
  website: 'www.Tecsify.com',
  education: [
    {
      title: 'Licenciado en matemáticas',
      location: 'Universidad de Cambridge',
      from: new Date(1930, 9, 1),
      to: new Date(1934, 4, 1),
      current: false,
      summary: 'Obtuve mi licenciatura en matemáticas en la Universidad de Cambridge, donde comencé a destacar en el campo de la lógica y las matemáticas aplicadas.',
    },
    {
      title: 'Doctorado (PhD)',
      location: 'Universidad de Princeton, en Nueva Jersey',
      from: new Date(1936, 9, 1),
      to: new Date(1938, 4, 1),
      current: false,
      summary: 'Continué mis estudios en matemáticas y lógica en la Universidad de Princeton, donde desarrollé aún más mis habilidades en el campo de la teoría de la computación.',
    },
  ],
  work: [
    {
      title: 'Criptólogo',
      location: 'Ejército británico, Bletchley Park',
      from: new Date(1939, 1, 1),
      to: new Date(1945, 1, 1),
      current: false,
      summary: 'Durante la Segunda Guerra Mundial, trabajé como criptólogo en Bletchley Park, donde desempeñé un papel crucial en la decodificación de los códigos enemigos, contribuyendo significativamente a la victoria aliada.',
    },
  ],
  projects: [
    {
      title: 'Máquina de Turing',
      location: 'Londres, Inglaterra',
      from: new Date(1936, 1, 1),
      to: new Date(1937, 1, 1),
      current: true,
      summary: 'Desarrollé la máquina de Turing, un dispositivo teórico que formalizó el concepto de algoritmo y computación. Esta máquina sentó las bases de la informática moderna.',
    },
    {
      title: 'Máquina Bombe',
      location: 'Londres, Inglaterra',
      from: new Date(1939, 1, 1),
      to: new Date(1940, 1, 1),
      current: true,
      summary: 'Dirigí el proyecto para desarrollar la Máquina Bombe en Bletchley Park, una máquina electromecánica utilizada para descifrar códigos alemanes durante la Segunda Guerra Mundial.',
    },
  ],
  displayEducation: true,
  displayProjects: true, // Cambiamos esto a true para que se muestren los proyectos
  activeColor: '#065F46',
  nameFontSize: "235",
  photoStyle: "25",
  photoBorder: false,
  photoBnW: false,
};

