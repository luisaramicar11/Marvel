import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "en";
const translations = {
  es: {
    welcome:
      "Hola! Es un placer mostrarles nuestro proyecto final. Gracias a la iniciativa BE-ME por esta maravillosa experiencia",
    navHome: "INICIO",
    navCharacters: "PERSONAJES",
    navEvents: "EVENTOS",
    navComics: "HISTORIETAS",
    navStories: "HISTORIAS",
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
    homeFunko: "Funko Pop! Marvel: Los vengadores Juego",
    searchSuperhero: "Buscar Súper Héroe",
    homeSpiderman: "Figura de acción de Spiderman ",
    homeIronman: "Figura de accion de Iron man",
    homeLamp: "Lámpara 3D Marvel Spiderman",
    homeWatch: "Reloj Inteligente Marvel Spiderman",
    homeGame: "Juego De Mesa Marvel ",
    homeFigure: "Figura de acción de Spiderman ",
    homeJoin: "ÚNETE A MARVEL",
    homeRegister:
      "¡Regístrate GRATIS para acceder a contenido y actividades exclusivas para miembros, leer cómics GRATIS de MARVEL STUDIOS y recibir alertas y acceso anticipado a productos exclusivos de MARVEL Shop!",

    homeSignUp: "REGÍSTRATE AHORA",
    storiesTitle: "CUENTOS",
    paginationPrevious: "Anterior",
    paginationNext: "Siguiente",
    comicsTitle: "Historietas",
    productsTitle: "Tienda Marvel",
    checkoutTitle: "PAGAR",
    shippingAddress: "Dirección de envío",
    shoppingCart: "Carrito de compras",
    btnBack: "REGRESAR",
    btnNext: "SIGUIENTE",
    clearCart: "VACIAR CARRITO",
    checkout: "PAGAR",
    totalItems: "Total items: ",
    totalPrice: "Total a pagar: ",
    paymentDetails: "Detalles de pago",
    useAddress: "Usar esta dirección para los detalles de pago",
    messageSuccesfull:
      "Su pago fue exitoso. Recibirá un correo electrónico con los detalles de su pedido.",
    messageUnsuccesfull: "Su pago no fue exitoso. Por favor intente de nuevo.",
    thankyou: "Gracias por su compra",
    btnStore: "Ir a la tienda",
    noFound: "PÁGINA NO ENCONTRADA",
    formTitle: "CONTÁCTANOS",
    formName: "El campo 'Nombre' es requerido",
    price: "Precio: ",
    quantity: "Cantidad: ",
    total: "Total: ",
    paymentMethod: "Método de pago",
    orderSummary: "Resumen de la orden",
    welcomeBack: "¡Bienvenido de nuevo!",
    enterEmail: "Ingrese su correo electrónico",
    emailAddress: "Correo electrónico",
    password: "Contraseña",
    forgotPassword: "¿Olvidaste tu contraseña?",
    noAccount: "¿No tienes una cuenta?",
    specialOffer: "Quiero recibir noticias y ofertas especiales.",
    yesAccount: "¿Ya tienes una cuenta?",
    msgError404:
      "¡La página que buscas parece haber desaparecido! Es posible que se haya eliminado, cambiado o que no esté disponible temporalmente, pero no te preocupes, tenemos a nuestros mejores hombres en ello. Mientras tanto... A continuación hay algunas sugerencias para ayudarte a encontrar lo que buscas: Asegúrate de haber escrito correctamente la dirección de la página en la barra de direcciones.",
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
    navSignOut: "SIGN UP",
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
    homeFunko: "Funko Pop! Marvel: Avengers Game",
    searchSuperhero: "Search Superhero",
    homeSpiderman: "Spiderman Action Figure",
    homeIronman: "Ironman Action Figure",
    homeLamp: "3D Marvel Spiderman Lamp",
    homeWatch: "Marvel Spiderman Smart Watch",
    homeGame: "Marvel Game",
    homeFigure: "Spiderman Action Figure",
    homeJoin: "JOIN MARVEL",
    homeRegister:
      "Register for FREE to access member-exclusive content and activities,read FREE comics from MARVEL STUDIOS, and get alerts and early access to exclusive products from MARVEL Shop!",
    homeSignUp: "SIGN UP NOW",
    storiesTitle: "STORIES",
    paginationPrevious: "Previous",
    paginationNext: "Next",
    comicsTitle: "Comics",
    productsTitle: "Marvel Shop",
    checkoutTitle: "CHECKOUT",
    shippingAddress: "Shipping Address",
    shoppingCart: "Shopping Cart",
    btnBack: "BACK",
    btnNext: "NEXT",
    clearCart: "CLEAR CART",
    checkout: "CHECKOUT",
    totalItems: "Total items: ",
    totalPrice: "Total to pay: ",
    paymentDetails: "Payment Details",
    useAddress: "Use this address for payment details",
    messageSuccesfull:
      "Your payment was successful. You will receive an email with your order details.",
    messageUnsuccesfull: "Your payment was not successful. Please try again.",
    thankyou: "Thank you for your order.",
    btnStore: "Go to Store",
    noFound: "PAGE NOT FOUND",
    price: "Price: ",
    quantity: "Quantity: ",
    msgError404:
      "The page you're looking for appears to have gone missing! It's possible that it has been removed, changed or might be temporarily unavailable, but fear not, we've got our best guys on it. In the mean time... Below are some suggestions to help you find what you're looking for: Make sure you typed in the page address correctly within the Address bar.",
    formTitle: "CONTACT US",
    formName: "The 'Name' field is required",
    total: "Total: ",
    paymentMethod: "Payment Method",
    orderSummary: "Order Summary",
    welcomeBack: "Welcome back!",
    enterEmail: "Enter your email address and password to access admin panel.",
    emailAddress: "Email Address",
    password: "Password",
    forgotPassword: "Forgot Password?",
    noAccount: "Don't have an account?",
    specialOffer: "I want to receive news and special offers.",
    yesAccount: "Already have an account?",
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
