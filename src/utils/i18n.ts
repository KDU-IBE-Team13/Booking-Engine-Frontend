import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            footer: "All rights reserved.",
            headerTitle: "Internet Booking Engine",
            login: "Login",
            MyBookings: "MY BOOKINGS",
          },
          landingPage: {
            search: "Search",
            roomsLabel: "Rooms",
            propertyLabel: "Property name",
            propertySelectPlaceholder: "Search all properties",
            propertyFetchError: "Error fetching property rates:",
            guestsLabel: "Guests",
            adultsLabel: "Adults",
            teensLabel: "Teens",
            kidsLabel: "Kids",
            ageRangeLabel: "Ages",
            calendarLabel: "Select dates",
            calendarButton: "APPLY DATES",
            calendarDateRangeError:
              "Please select end date. Max length of stay: ",
            calendarDays: "days",
            checkIn: "Check-in",
            checkOut: "Check-out",
            loading: "Loading",
            error: "Error",
            wheelChairLabel: "I need an Accessible Room",
            priceLabel: "Minimum Price of your stay is:",
          },

          roomType: {
            COUPLE_SUITE: "Couple Suite",
            GARDEN_SUITE: "Garden Suite",
            STANDARD_SUITE: "Standard Suite",
            GRAND_DELUXE: "Grand Deluxe",
            SUPER_DELUXE: "Super Deluxe",
            FAMILY_DELUXE: "Family Deluxe",
          },

          bedType: {
            doubleBed: "doubles",
            singleBed: "Queen",
          },

          propertyAddress: {
            Kickdrum: "Kickdrum",
          },

          filter: {
            bedType: "bed Type",
            doubleBed: "doubles",
            singleBed: "Queen",
            RoomType: "Room Type",
            deluxe: "DELUXE",
            suite: "SUITE",
            price: "Price",
            selectedPriceRange: "{option}",
          },

          sort: {
            PriceLow: "price low",
            PriceHigh: "price high",
            BedsLow: "beds low",
            BedsHigh: "beds high",
            AreaLow: "area low",
            AreaHigh: "area high",
          },

          roomPage: {
            roomResults: "Room Results",
            selectRoom: "Select Room",
            showingLabel: "Showing",
            resultsLabel: "results",
            narrowYourResults: "Narrow Your Results",
            searchDates: "Search Dates",
            newProperty: "New Property",
            specialDeal: "Special Deal",
            perNight: "Per Night",
            chooseRoom: "Choose Room",
            chooseAddOn: "Choose Add-on",
            checkOut: "Check out",
            guestsLabel: "Guests",
            roomsLabelroom: "Rooms",
            bedsLabel: "Beds",
            checkInBetween: "check in between",
            checkOutBetween: "Check out between",
            checkOutLabel: "checkout",
            tripItinerary: "Your Trip Itinerary",
            promo: "Save 10% when you book 2+ nights",
          },
        },
      },

      es: {
        translation: {
          description: {
            footer: "Todos los derechos reservados.",
            headerTitle: "Motor de Reservas en Internet",
            login: "Iniciar sesión",
            MyBookings: "MIS RESERVAS",
          },
          landingPage: {
            search: "Buscar",
            roomsLabel: "Habitaciones",
            propertyLabel: "Nombre de propiedad",
            propertySelectPlaceholder: "Buscar todas las propiedades",
            propertyFetchError: "Error al obtener tarifas de propiedad:",
            guestsLabel: "Huéspedes",
            adultsLabel: "Adultos",
            teensLabel: "Adolescentes",
            kidsLabel: "Niños",
            ageRangeLabel: "Edades",
            calendarLabel: "Seleccionar fechas",
            calendarButton: "APLICAR FECHAS",
            calendarDateRangeError:
              "Por favor, selecciona fecha de fin. Duración máxima de la estancia: ",
            calendarDays: "días",
            checkIn: "Llegada",
            checkOut: "Salida",
            loading: "Cargando",
            error: "Error",
            wheelChairLabel: "Necesito una habitación accesible",
            priceLabel: "El precio mínimo de tu estadía es:",
          },

          roomType: {
            COUPLE_SUITE: "Suite para Parejas",
            GARDEN_SUITE: "Suite Jardín",
            STANDARD_SUITE: "Suite Estándar",
            GRAND_DELUXE: "Gran De Lujo",
            SUPER_DELUXE: "Súper De Lujo",
            FAMILY_DELUXE: "Suite Familiar",
          },
          propertyAddress: {
            Kickdrum: "Kickdrum",
          },

          filter: {
            bedType: "Tipo de cama",
            doubleBed: "dobles",
            singleBed: "Queen",
            RoomType: "Tipo de habitación",
            deluxe: "DE LUJO",
            suite: "SUITE",
          },

          sort: {
            PriceLow: "precio bajo",
            PriceHigh: "precio alto",
            BedsLow: "camas bajas",
            BedsHigh: "camas altas",
            AreaLow: "área baja",
            AreaHigh: "área alta",
          },

          bedType: {
            doubleBed: "Camas Dobles",
            singleBed: "Cama Queen",
          },
          roomPage: {
            roomResults: "Resultados de la Habitación",
            selectRoom: "Seleccionar Habitación",
            showingLabel: "Mostrando",
            resultsLabel: "resultados",
            narrowYourResults: "Refinar Resultados",
            searchDates: "Buscar Fechas",
            newProperty: "Nueva Propiedad",
            specialDeal: "Oferta Especial",
            perNight: "Por Noche",
            chooseRoom: "Elegir Habitación",
            chooseAddOn: "Elegir Adicional",
            checkOut: "Check-out",
            guestsLabel: "Huéspedes",
            roomsLabelroom: "Habitaciones",
            bedsLabel: "Camas",
            checkInBetween: "check in entre",
            checkOutBetween: "Check-out entre",
            checkOutLabel: "Salida",
            tripItinerary: "Su itinerario de viaje",
            promo: "Ahorra un 10% al reservar 2 noches o más",
          },
        },
      },

      fr: {
        translation: {
          description: {
            footer: "Tous droits réservés.",
            headerTitle: "Moteur de réservation en ligne",
            login: "Connexion",
            MyBookings: "MES RÉSERVATIONS",
          },
          landingPage: {
            search: "Rechercher",
            roomsLabel: "Chambres",
            propertyLabel: "Nom de la propriété",
            propertySelectPlaceholder: "Rechercher toutes les propriétés",
            propertyFetchError:
              "Erreur lors de la récupération des tarifs de la propriété :",
            guestsLabel: "Clients",
            adultsLabel: "Adultes",
            teensLabel: "Adolescents",
            kidsLabel: "Enfants",
            ageRangeLabel: "Âges",
            calendarLabel: "Sélectionner des dates",
            calendarButton: "APPLIQUER LES DATES",
            calendarDateRangeError:
              "Veuillez sélectionner la date de fin. Durée maximale du séjour : ",
            calendarDays: "jours",
            checkIn: "Arrivée",
            checkOut: "Départ",
            loading: "Chargement",
            error: "Erreur",
            wheelChairLabel: "J ai besoin d une chambre accessible",
            priceLabel: "Le prix minimum de votre séjour est:",
          },

          roomType: {
            COUPLE_SUITE: "Suite pour Couple",
            GARDEN_SUITE: "Suite Jardin",
            STANDARD_SUITE: "Suite Standard",
            GRAND_DELUXE: "Grande Suite de Luxe",
            SUPER_DELUXE: "Super Suite de Luxe",
            FAMILY_DELUXE: "Suite Familiale",
          },
          propertyAddress: {
            Kickdrum: "Kickdrum",
          },

          filter: {
            bedType: "Type de lit",
            doubleBed: "doubles",
            singleBed: "Queen",
            RoomType: "Type de chambre",
            deluxe: "DE LUXE",
            suite: "SUITE",
          },

          sort: {
            PriceLow: "prix bas",
            PriceHigh: "prix élevé",
            BedsLow: "lits bas",
            BedsHigh: "lits élevés",
            AreaLow: "surface basse",
            AreaHigh: "surface élevée",
          },

          bedType: {
            doubleBed: "Lits Doubles",
            singleBed: "Lit Queen",
          },
          roomPage: {
            roomResults: "Résultats de la Chambre",
            selectRoom: "Sélectionner une Chambre",
            showingLabel: "Affichage",
            resultsLabel: "résultats",
            narrowYourResults: "Affinez Vos Résultats",
            searchDates: "Rechercher des Dates",
            newProperty: "Nouvelle Propriété",
            specialDeal: "Offre Spéciale",
            perNight: "Par Nuit",
            chooseRoom: "Choisir une Chambre",
            chooseAddOn: "Choisir un Complément",
            checkOut: "Check-out",
            guestsLabel: "Invités",
            roomsLabelroom: "Chambres",
            bedsLabel: "Lits",
            checkInBetween: "Arrivée entre",
            checkOutBetween: "Départ entre",
            checkOutLabel: "Départ",
            tripItinerary: "Votre itinéraire de voyage",
            promo: "Économisez 10% lorsque vous réservez 2 nuits ou plus",
          },
        },
      },

      de: {
        translation: {
          description: {
            footer: "Alle Rechte vorbehalten.",
            headerTitle: "Internet-Buchungsmaschine",
            login: "Anmelden",
            MyBookings: "MEINE BUCHUNGEN",
          },
          landingPage: {
            search: "Suchen",
            roomsLabel: "Zimmer",
            propertyLabel: "Name der Unterkunft",
            propertySelectPlaceholder: "Alle Unterkünfte durchsuchen",
            propertyFetchError: "Fehler beim Abrufen der Unterkunftspreise:",
            guestsLabel: "Gäste",
            adultsLabel: "Erwachsene",
            teensLabel: "Teenager",
            kidsLabel: "Kinder",
            ageRangeLabel: "Alter",
            calendarLabel: "Termine auswählen",
            calendarButton: "TERMINE ANWENDEN",
            calendarDateRangeError:
              "Bitte wählen Sie das Enddatum aus. Maximale Aufenthaltsdauer: ",
            calendarDays: "Tage",
            checkIn: "Check-in",
            checkOut: "Check-out",
            loading: "Wird geladen",
            error: "Fehler",
            wheelChairLabel: "Ich brauche ein barrierefreies Zimmer",
            priceLabel: "Der Mindestpreis für Ihren Aufenthalt beträgt:",
          },

          roomType: {
            COUPLE_SUITE: "Pärchensuite",
            GARDEN_SUITE: "Gartensuite",
            STANDARD_SUITE: "Standard-Suite",
            GRAND_DELUXE: "Große Deluxe-Suite",
            SUPER_DELUXE: "Super Deluxe-Suite",
            FAMILY_DELUXE: "Familiensuite",
          },
          propertyAddress: {
            Kickdrum: "Kickdrum",
          },

          bedType: {
            doubleBed: "Doppelbetten",
            singleBed: "Queen",
          },

          filter: {
            bedType: "Bettart",
            doubleBed: "Doppelbetten",
            singleBed: "Queen",
            RoomType: "Zimmertyp",
            deluxe: "LUXUS",
            suite: "SUITE",
          },

          sort: {
            PriceLow: "niedriger Preis",
            PriceHigh: "hoher Preis",
            BedsLow: "wenige Betten",
            BedsHigh: "viele Betten",
            AreaLow: "niedrige Fläche",
            AreaHigh: "hohe Fläche",
          },

          roomPage: {
            roomResults: "Zimmerergebnisse",
            selectRoom: "Zimmer auswählen",
            showingLabel: "Zeigt",
            resultsLabel: "Ergebnisse",
            narrowYourResults: "Ergebnisse eingrenzen",
            searchDates: "Suchtermine",
            newProperty: "Neue Immobilie",
            specialDeal: "Sonderangebot",
            perNight: "Pro Nacht",
            chooseRoom: "Zimmer wählen",
            chooseAddOn: "Zusatzleistung wählen",
            checkOut: "Auschecken",
            guestsLabel: "Gäste",
            roomsLabelroom: "Zimmer",
            bedsLabel: "Betten",
            checkInBetween: "Check-in zwischen",
            checkOutBetween: "Check-out zwischen",
            checkOutLabel: "Auschecken",
            tripItinerary: "Ihr Reiseplan",
            promo: "Sparen Sie 10%, wenn Sie 2+ Nächte buchen",
          },
        },
      },
    },
  });

export default i18n;
