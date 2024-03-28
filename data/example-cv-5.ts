
import { Cv, LEVELS } from '~/types/cvfy';

export const cvSettingTemplate5: Cv = {
  jobTitle: 'Física, química e investigadora',
  name: 'Marie',
  photo: require('@/assets/photos/cv4.webp'),
  lastName: 'Curie',
  email: 'contacto@tecsify.com',
  location: 'Francia',
  phoneNumber: '93040404',
  aboutme:
    'Soy Marie Curie, una física y química polaca-francesa del siglo XIX y XX, conocida por ser la primera persona en recibir dos Premios Nobel en diferentes disciplinas científicas. Mi trabajo pionero en radioactividad sentó las bases para la física y la química modernas, y soy conocida por descubrir los elementos radio y polonio. Mi pasión por la ciencia y mi dedicación a la investigación han dejado un legado duradero en el campo de la ciencia.',
  jobSkills: ['Investigación', 'Radioactividad', 'Química'],
  softSkills: ['Persistencia', 'Curiosidad', 'Innovación'],
  languages: [{ lang: 'Francés', level:  LEVELS[4] }, { lang: 'Polaco', level:  LEVELS[3]  }],
  linkedin: '',
  twitter: '',
  github: '',
  website: 'www.Tecsify.com',
  education: [
    {
      title: 'Licenciatura en Física',
      location: 'Universidad de París',
      from: new Date(1891, 1, 1),
      to: new Date(1894, 1, 1),
      current: false,
      summary: 'Mi interés por la física comenzó durante mis estudios universitarios en la Universidad de París, donde me sumergí en el mundo de la investigación científica.',
    },
    {
      title: 'Doctorado en Física',
      location: 'Universidad de París',
      from: new Date(1894, 1, 1),
      to: new Date(1903, 1, 1),
      current: false,
      summary: 'Continué mis estudios en la Universidad de París, donde obtuve mi doctorado en física con una tesis sobre la radiactividad, un tema que se convertiría en el foco de mi carrera científica.',
    },
  ],
  work: [
    {
      title: 'Investigadora en Radioactividad',
      location: 'Instituto Curie, París',
      from: new Date(1906, 1, 1),
      to: new Date(1934, 7, 4),
      current: false,
      summary: 'Fundé el Instituto Curie en París, donde llevé a cabo investigaciones pioneras sobre la radioactividad junto con mi esposo, Pierre Curie. Nuestro trabajo conjunto condujo al descubrimiento de los elementos radio y polonio, así como al desarrollo de técnicas para el estudio de la radiación.',
    },
  ],
  projects: [
    {
      title: 'Descubrimiento del Radio y Polonio',
      location: 'París, Francia',
      from: new Date(1898, 1, 1),
      to: new Date(1902, 1, 1),
      current: false,
      summary: 'Durante mis investigaciones en el laboratorio, descubrí los elementos radio y polonio, sentando las bases para la ciencia moderna y revolucionando nuestra comprensión de la materia y la radiactividad.',
    },
  ],
  displayEducation: true,
  displayProjects: true,
  activeColor: '#9D174D',
  nameFontSize: "185",
  photoStyle: "50",
  photoBorder: true,
  photoBnW: true,
};


