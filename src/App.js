import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import ContactPage from "./pages/ContactPage";
import ThankyouPage from "./pages/ThankyouPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/aboutpage":
        title = "";
        metaDescription = "";
        break;
      case "/featurespage":
        title = "";
        metaDescription = "";
        break;
      case "/contactpage":
        title = "";
        metaDescription = "";
        break;
      case "/thankyoupage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/aboutpage" element={<AboutPage />} />
      <Route path="/featurespage" element={<FeaturesPage />} />
      <Route path="/contactpage" element={<ContactPage />} />
      <Route path="/thankyoupage" element={<ThankyouPage />} />
    </Routes>
  );
}
export default App;
