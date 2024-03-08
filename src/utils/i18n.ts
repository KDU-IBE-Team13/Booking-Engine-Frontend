import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: {
          description: {
            footer: 'All rights reserved.',
            headerTitle: 'Internet Booking Engine',
            login: 'Login'
          }
        }
      },
      es: {
        translation: {
          description: {
            footer: 'Todos los derechos reservados.',
            headerTitle: 'Motor de Reservas en Internet',
            login: 'Iniciar sesión'
          }
        }
      },
      fr: {
        translation: {
          description: {
            footer: 'Tous droits réservés.',
            headerTitle: 'Moteur de réservation en ligne',
            login: 'Connexion'
          }
        }
      },
      de: {
        translation: {
          description: {
            footer: 'Alle Rechte vorbehalten.',
            headerTitle: 'Internet-Buchungsmaschine',
            login: 'Anmelden'
          }
        }
      }
    }
  });

export default i18n;