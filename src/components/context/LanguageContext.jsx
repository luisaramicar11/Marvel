import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "en";
const translations = {
  es: {
    welcome:
      "Hola! Es un placer mostrarles nuestro proyecto final. Gracias a la iniciativa BE-ME por esta maravillosa experiencia",
    navHome: "INICIO",
    navCharacters: "CARACTERES",
    navEvents: "EVENTOS",
    navComics: "HISTORIETAS",
    navStories: "CUENTOS",
    navMore: "MÁS",
    navShop: "COMERCIO",
    navSignIn: "INICIAR SESIÓN",
    navSignOut: "CERRAR SESIÓN",
    homelatestComics: "LAS ÚLTIMAS HISTORIETAS",
    homelatestTrailer: "ÚLTIMOS TRÁILER, CLIPS Y MÁS",
    homeMoreDetails: "Más detalles",
    footerCopy: `2023 @inroute. Hecho con fines educativos.`,
    comicsbutton: "Ver Más",
    btnGoBack: "Regresar",
    homeTitleLoki: "Trailer Loki: Temporada 2, episodio 6",
    homeTextLoki:
      "El episodio final de la segunda temporada de Loki se juega como un final de serie, y tiene algunas ideas grandiosas.",
    homeSubtitleLoki: "Disponible ahora en Disney+",
    homeProducts: "NUEVOS Y POPULARES PRODUCTOS",
    homeProductHeroes:
      "Juego De 5 Héroes Marvel Figuras De Acción Spiderman Hulk...",
    homeProductHeadphones: "Audífonos tipo diadema con micrófono ",
  },
  en: {
    welcome:
      "Hello! It is a pleasure to show you our final project. Thanks to the BE-ME initiative for this wonderful experience",
    navHome: "HOME",
    navCharacters: "CHARACTERS",
    navEvents: "EVENTS",
    navComics: "COMICS",
    navStories: "STORIES",
    navMore: "MORE",
    navShop: "SHOP",
    navSignIn: "SIGN IN",
    navSignOut: "SIGN OUT",
    homelatestComics: "THE LATEST COMICS",
    homelatestTrailer: "LATEST TRAILERS, CLIPS & MORE",
    homeMoreDetails: "More details",
    footerCopy: `2023 @inroute. Made for educational purposes.`,
    comicsbutton: "see more",
    btnGoBack: "Go Back",
    homeTitleLoki: "Loki Trailer: Season 2, Episode 6",
    homeTextLoki:
      "The final episode of Loki’s second season plays like a series finale, and it has some grand ideas.",
    homeSubtitleLoki: "Available Now on Disney+",
    homeProducts: "NEW & TRENDING PRODUCTS",
    homeProductHeroes:
      "Marvel Heroes 5 Figure Action Figure Set Spiderman Hulk...",
    homeProductHeadphones: "Headphones with Microphone",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  const data = { texts, handleLanguage };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
