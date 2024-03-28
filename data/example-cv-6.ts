
import { Cv, LEVELS } from '~/types/cvfy';

export const cvSettingTemplate6: Cv = {
  jobTitle: 'Ingeniero eléctrico, inventor & genio',
  name: 'Nikola',
  photo: require('@/assets/photos/cv6.webp'),
  lastName: 'Tesla',
  email: 'contacto@tecsify.com',
  location: 'Estados Unidos',
  phoneNumber: '8201011001',
  aboutme:
    'Soy Nikola Tesla, un ingeniero eléctrico e inventor serbio-estadounidense conocido por mis numerosas contribuciones a la ciencia y la tecnología. Mis inventos revolucionaron el mundo moderno y sentaron las bases para el desarrollo de sistemas de energía eléctrica y tecnologías inalámbricas. Mi pasión por la innovación y el avance tecnológico me llevó a ser un pionero en campos como la electricidad, la electromagnética y la energía inalámbrica.',
  jobSkills: ['Ingeniería eléctrica', 'Energía inalámbrica'],
  softSkills: ['Creatividad', 'Visión'],
  languages: [{ lang: 'Inglés', level: LEVELS[3] }, { lang: 'Serbio', level: LEVELS[4] }],
  linkedin: '',
  twitter: '',
  github: '',
  website: 'www.Tecsify.com',
  education: [
    {
      title: 'Ingeniería Eléctrica',
      location: 'Universidad Técnica de Graz, Austria',
      from: new Date(1875, 1, 1),
      to: new Date(1879, 1, 1),
      current: false,
      summary: 'Me gradué de la Universidad Técnica de Graz con una especialización en ingeniería eléctrica, donde comencé a explorar mi interés por la electricidad y la tecnología.',
    },
  ],
  work: [
    {
      title: 'Inventor e Ingeniero Independiente',
      location: 'Estados Unidos',
      from: new Date(1884, 1, 1),
      to: new Date(1943, 1, 1),
      current: false,
      summary: 'Trabajé como inventor e ingeniero independiente en los Estados Unidos, donde desarrollé numerosos inventos y contribuciones a la ciencia y la tecnología, incluidos sistemas de corriente alterna, motores eléctricos, y tecnologías inalámbricas.',
    },
  ],
  projects: [
    {
      title: 'Sistema de Corriente Alterna',
      location: 'Estados Unidos',
      from: new Date(1886, 1, 1),
      to: new Date(1895, 1, 1),
      current: false,
      summary: 'Desarrollé un sistema de corriente alterna (AC) que permitió la transmisión eficiente de energía eléctrica a largas distancias, lo que revolucionó la industria eléctrica y facilitó el desarrollo de redes eléctricas modernas.',
    },
    {
      title: 'Torre Wardenclyffe',
      location: 'Nueva York, Estados Unidos',
      from: new Date(1901, 1, 1),
      to: new Date(1917, 1, 1),
      current: false,
      summary: 'Diseñé la Torre Wardenclyffe, una estructura destinada a transmitir energía eléctrica de forma inalámbrica a larga distancia. Aunque el proyecto no se completó como se había planeado, sentó las bases para el desarrollo futuro de la energía inalámbrica y las comunicaciones.',
    },
  ],
  displayEducation: true,
  displayProjects: true,
  activeColor: '#770B0E',
  nameFontSize: "250",
  photoStyle: "3",
  photoBorder: false,
  photoBnW: true,
};


