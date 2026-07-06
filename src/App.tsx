import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SeoManager from "./components/SeoManager";
import { LANDING_PAGE_PROFILES } from "@/lib/landingPages";

const App = () => (
  <BrowserRouter>
    <SeoManager />
    <Routes>
      <Route path="/" element={<Index />} />
      {LANDING_PAGE_PROFILES.map((profile) => (
        <Route
          key={profile.id}
          path={profile.route}
          element={<LandingPage profile={profile} />}
        />
      ))}
      <Route path="/blog" element={<Blog />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout-failure" element={<CheckoutSuccess />} />
      <Route path="/checkout-pending" element={<CheckoutSuccess />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
