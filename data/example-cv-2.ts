import { Cv } from '~/types/cvfy';

export const cvSettingTemplate: Cv = {
  jobTitle: 'Matemática, escritora e inventora',
  name: 'Ada ',
  photo: 'https://www.bbvaopenmind.com/wp-content/uploads/2015/12/Ada_Lovelace_Chalon_portrait-1-1024x1024-1-e1583406754141.jpg',
  lastName: 'Lovelace',
  email: 'contacto@tecsify.com',
  location: 'Reino Unido',
  phoneNumber: '0101010011001',
  aboutme:
"Soy Ada Lovelace, una matemática y escritora británica del siglo XIX, conocida por ser la primera programadora de la historia y por mi trabajo con Charles Babbage en la creación de la Máquina Analítica, un precursor de los ordenadores modernos, soy muy apasionada por las matemáticas y siempre he estado interesada en explorar cómo la tecnología puede mejorar nuestra vida diaria.",
  jobSkills: ['Microsoft', 'Word', 'Excel', 'Tecsify'],
  softSkills: ['Positivity', 'Leadership', 'Public Speaking'],
  languages: [{ lang: 'English', level: '100%' }],
  linkedin: '',
  twitter: '',
  github: '',
  website: 'www.Tecsify.com',
  education: [
    {
      title: 'Educada en casa por mi mamá',
      location: 'Reino Unido',
      from: new Date(1832, 9, 1),
      to: new Date(1842, 4, 1),
      current: false,
      summary: 'Mi madre (quién también fué una matemática) me educó, además, cuando tenía diecisiete años, mis habilidades matemáticas comenzaron a surgir, y mi interés por las matemáticas dominó la mayor parte de mi vida adulta',
    },
  ],
  work: [
    {
      title: 'Primera programadora de la historía',
      location: 'Reino Unido',
      from: new Date(1841, 1, 1),
      to: new Date(1861, 1, 1),
      current: true,
      summary: 'Realmente no tuve una carrera profesional tradicional en el sentido moderno, mi trabajo con la Máquina Analítica sentó las bases para el futuro desarrollo de la tecnología informática y la programación.'
    },
    {
      title: 'Inventora de la máquina analítica',
      location: 'City of Pawnee, Indiana',
      from: new Date(1841, 1, 1),
      to: new Date(1842, 1, 1),
      current: true,
      summary: 'Realmente no tuve una carrera profesional tradicional en el sentido moderno, mi trabajo con la Máquina Analítica sentó las bases para el futuro desarrollo de la tecnología informática y la programación.'
    },

  ],
  projects: [
    {
      title: 'Maquina analitica',
      location: 'Londres, Inglaterra',
      from: new Date(2009, 1, 1),
      to: new Date(2012, 1, 1),
      current: true,
      summary: `- Sed ut lorem viverra urna malesuada interdum in ut risus.
- Duis at sem non justo aliquam iaculis.
- Quisque lobortis nibh non turpis interdum ornare.
- Sed et diam nec arcu tempor suscipit sit amet at tellus.
- Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.`,
    },
  ],
  displayEducation: true,
  displayProjects: false,
  activeColor: '#030399',
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
};
