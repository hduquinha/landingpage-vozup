import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SeoManager from "./components/SeoManager";
import { LANDING_PAGE_PROFILES, LEGACY_ROUTE_REDIRECTS } from "@/lib/landingPages";
import { LeadPopupProvider } from "@/context/LeadPopupContext";

/** Preserva a query string (UTM/gclid/fbclid) ao redirecionar uma rota antiga. */
const LegacyRedirect = ({ to }: { to: string }) => {
  const location = useLocation();
  return <Navigate to={`${to}${location.search}`} replace />;
};

const App = () => (
  <BrowserRouter>
    <LeadPopupProvider>
      <SeoManager />
      <Routes>
        <Route path="/" element={<Index />} />
        {LANDING_PAGE_PROFILES.map((profile) => (
          <Route
            key={profile.id}
            path={profile.route}
            element={profile.useHomeLayout ? <Index /> : <LandingPage profile={profile} />}
          />
        ))}
        {Object.entries(LEGACY_ROUTE_REDIRECTS).map(([from, to]) => (
          <Route key={from} path={from} element={<LegacyRedirect to={to} />} />
        ))}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-failure" element={<CheckoutSuccess />} />
        <Route path="/checkout-pending" element={<CheckoutSuccess />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LeadPopupProvider>
  </BrowserRouter>
);

export default App;
