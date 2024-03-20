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
          },
          landingPage: {
            search: 'Search',
            roomsLabel: 'Rooms',
            propertyLabel: 'Property name',
            propertySelectPlaceholder: 'Search all properties',
            propertyFetchError: 'Error fetching property rates:',
            guestsLabel: 'Guests',
            adultsLabel: 'Adults',
            adultsLabelSingular: 'Adult',
            teensLabel: 'Teens',
            teensLabelSingular: 'Teen',
            kidsLabel: 'Kids',
            kidsLabelSingular: 'Kid',
            ageRangeLabel: 'Ages',
            calendarLabel: 'Select dates',
            calendarButton: 'APPLY DATES',
            calendarDateRangeError: 'Please select end date. Max length of stay: ',
            calendarDays: 'days',
            checkIn: 'Check-in',
            checkOut: 'Check-out',
            loading: 'Loading',
            error: 'Error'
          }
        }
      },
      es: {
        translation: {
          description: {
            footer: 'Todos los derechos reservados.',
            headerTitle: 'Motor de Reservas en Internet',
            login: 'Iniciar sesión'
          },
          landingPage: {
            search: 'Buscar',
            roomsLabel: 'Habitaciones',
            propertyLabel: 'Nombre de propiedad',
            propertySelectPlaceholder: 'Buscar todas las propiedades',
            propertyFetchError: 'Error al obtener tarifas de propiedad:',
            guestsLabel: 'Huéspedes',
            adultsLabel: 'Adultos',
            teensLabel: 'Adolescentes',
            kidsLabel: 'Niños',
            ageRangeLabel: 'Edades',
            calendarLabel: 'Seleccionar fechas',
            calendarButton: 'APLICAR FECHAS',
            calendarDateRangeError: 'Por favor, selecciona fecha de fin. Duración máxima de la estancia: ',
            calendarDays: 'días',
            checkIn: 'Llegada',
            checkOut: 'Salida',
            loading: 'Cargando',
            error: 'Error'
          }
        }
      },
      fr: {
        translation: {
          description: {
            footer: 'Tous droits réservés.',
            headerTitle: 'Moteur de réservation en ligne',
            login: 'Connexion'
          },
          landingPage: {
            search: 'Rechercher',
            roomsLabel: 'Chambres',
            propertyLabel: 'Nom de la propriété',
            propertySelectPlaceholder: 'Rechercher toutes les propriétés',
            propertyFetchError: 'Erreur lors de la récupération des tarifs de la propriété :',
            guestsLabel: 'Clients',
            adultsLabel: 'Adultes',
            teensLabel: 'Adolescents',
            kidsLabel: 'Enfants',
            ageRangeLabel: 'Âges',
            calendarLabel: 'Sélectionner des dates',
            calendarButton: 'APPLIQUER LES DATES',
            calendarDateRangeError: 'Veuillez sélectionner la date de fin. Durée maximale du séjour : ',
            calendarDays: 'jours',
            checkIn: 'Arrivée',
            checkOut: 'Départ',
            loading: 'Chargement',
            error: 'Erreur'
          }
        }
      },
      de: {
        translation: {
          description: {
            footer: 'Alle Rechte vorbehalten.',
            headerTitle: 'Internet-Buchungsmaschine',
            login: 'Anmelden'
          },
          landingPage: {
            search: 'Suchen',
            roomsLabel: 'Zimmer',
            propertyLabel: 'Name der Unterkunft',
            propertySelectPlaceholder: 'Alle Unterkünfte durchsuchen',
            propertyFetchError: 'Fehler beim Abrufen der Unterkunftspreise:',
            guestsLabel: 'Gäste',
            adultsLabel: 'Erwachsene',
            teensLabel: 'Teenager',
            kidsLabel: 'Kinder',
            ageRangeLabel: 'Alter',
            calendarLabel: 'Termine auswählen',
            calendarButton: 'TERMINE ANWENDEN',
            calendarDateRangeError: 'Bitte wählen Sie das Enddatum aus. Maximale Aufenthaltsdauer: ',
            calendarDays: 'Tage',
            checkIn: 'Check-in',
            checkOut: 'Check-out',
            loading: 'Wird geladen',
            error: 'Fehler'
          }
        }
      }
    }
  });

export default i18n;
