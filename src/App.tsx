import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { MinimalFooter } from './components/ui/minimal-footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { QuoteModal } from './components/forms/QuoteModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { GlobalReachPage } from './pages/GlobalReachPage';
import { QualityPage } from './pages/QualityPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { TermsPrivacyPage } from './pages/TermsPrivacyPage';

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProductPreset, setQuoteProductPreset] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (productName?: string) => {
    setQuoteProductPreset(productName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setQuoteProductPreset(undefined);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white font-montserrat">
        <ScrollToTop />

        {/* Fixed Dark Navbar */}
        <Navbar onRequestQuote={() => handleOpenQuoteModal()} />

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/"               element={<HomePage onRequestQuote={handleOpenQuoteModal} />} />
            <Route path="/about"          element={<AboutPage onRequestQuote={() => handleOpenQuoteModal()} />} />
            <Route path="/products"       element={<ProductsPage onRequestQuote={handleOpenQuoteModal} />} />
            <Route path="/products/:slug" element={<ProductDetailPage onRequestQuote={handleOpenQuoteModal} />} />
            <Route path="/services"       element={<ServicesPage onRequestQuote={handleOpenQuoteModal} />} />
            <Route path="/global-reach"   element={<GlobalReachPage onRequestQuote={() => handleOpenQuoteModal()} />} />
            <Route path="/quality"        element={<QualityPage onRequestQuote={() => handleOpenQuoteModal()} />} />
            <Route path="/contact"        element={<ContactPage />} />
            <Route path="/quote"          element={<QuotePage />} />
            <Route path="/terms-privacy"  element={<TermsPrivacyPage />} />
            <Route path="/privacy-terms"  element={<TermsPrivacyPage />} />
            <Route path="*"               element={<HomePage onRequestQuote={handleOpenQuoteModal} />} />
          </Routes>
        </main>

        {/* MinimalFooter */}
        <MinimalFooter onRequestQuote={() => handleOpenQuoteModal()} />

        {/* Quote Modal */}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuoteModal}
          initialProduct={quoteProductPreset}
        />
      </div>
    </Router>
  );
}

export default App;
