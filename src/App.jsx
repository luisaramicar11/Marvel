import "./App.css";
import { Products } from "./components/store/Products";
import { CheckoutPage } from "./components/store/CheckoutPage.jsx";
import { Signin } from "./components/store/Signin";
import { Signup } from "./components/store/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Comics from "./components/Comics";
import { Menu } from "./components/Menu";
import { Home } from "./components/Home";
import { Characters } from "./components/Characters";
import { Character } from "./components/Character";
import Events from "./components/Events";
import { EventsDetail } from "./components/EventsDetail";
import Footer from "./components/Footer";
import { Stories } from "./components/Stories";
import { Error404 } from "./components/Error404";
import { LanguageProvider } from "./components/context/LanguageContext";
import { useEffect } from "react";
import { auth } from "./components/store/Firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { actionTypes } from "./components/store/Reducer.jsx";
import { useStateValue } from "./components/store/StateProvider.jsx";
import { AddressForm } from "./components/store/AddressForm.jsx";
import { PaymentForm } from "./components/store/PaymentForm.jsx";
import { Review } from "./components/store/Review.jsx";
import { CheckoutForm } from "./components/store/CheckoutForm.jsx";
import Series from "./components/Series";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("The user is >>> ", authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <LanguageProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<Character />} />
            <Route path="/comics" element={<Comics />} />
            <Route path="/comic1" element={<Navigate to="/comics" />} />
            <Route path="/comic2" element={<Navigate to="/comics" />} />
            <Route path="/comic3" element={<Navigate to="/comics" />} />
            <Route path="/comic4" element={<Navigate to="/comics" />} />
            <Route path="/events" element={<Events />} />
            <Route path="/series" element={<Series />} />
            <Route path="/events/:id" element={<EventsDetail />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addressForm" element={<AddressForm />} />
            <Route path="/paymentForm" element={<PaymentForm />} />
            <Route path="/review" element={<Review />} />
            <Route path="/checkoutForm" element={<CheckoutForm />} />
            <Route path="/ContactForm" element={<ContactForm />} />
            <Route path="*" element={<Error404 />}></Route>
          </Routes>

          <Footer />
        </LanguageProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
