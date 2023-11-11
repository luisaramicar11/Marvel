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
    navMore: "Más",
    navShop: "COMERCIO",
    navSinglePage: "Única página",
    navMultiPage: "Multi página",
    homelatestComics: "LAS ÚLTIMAS HISTORIETAS",
    homelatestTrailer: "ÚLTIMOS TRÁILER, CLIPS Y MÁS",
    homeMoreDetails: "Más detalles",
    footerCopy: "&copy; 2023 @inroute. Hecho con fines educativos.",
    comicsbutton: "Ver Más",
    btnGoBack: "Regresar",
  },
  en: {
    welcome:
      "Hello! It is a pleasure to show you our final project. Thanks to the BE-ME initiative for this wonderful experience",
    navHome: "HOME",
    navCharacters: "CHARACTERS",
    navEvents: "EVENTS",
    navComics: "COMICS",
    navStories: "STORIES",
    navMore: "More",
    navShop: "SHOP",
    navSinglePage: "Single Page",
    navMultiPage: "Multi Page",
    homelatestComics: "THE LATEST COMICS",
    homelatestTrailer: "LATEST TRAILERS, CLIPS & MORE",
    homeMoreDetails: "More details",
    footerCopy: "&copy; 2023 @inroute. Made for educational purposes.",
    comicsbutton: "see more",
    btnGoBack: "Go Back",
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
