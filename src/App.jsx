

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ComingSoonPage from './pages/ComingSoonPage'; // Unlinked - keeping file intact
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';
import Event15Page from './pages/Event15Page';
import Event16Page from './pages/Event16Page';
import Event17Page from './pages/Event17Page';
import Event15ENPage from './pages/Event15ENPage';  // <-- Aici

export default function App() {
  console.log("App loaded!"); 
  return (
    <Router>
      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Josefin+Sans:wght@300;400&display=swap');

        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Josefin Sans', sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }

        @keyframes gentleSway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes dance {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translate(20px, -30px);
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translate(-15px, 20px);
            opacity: 0;
          }
        }

        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-sway { animation: gentleSway 6s ease-in-out infinite; }
        .animate-breathe { animation: breathe 4s ease-in-out infinite; }
        .animate-slideUp { animation: slideUp 1s ease-out forwards; }
        .animate-slideIn { animation: slideIn 1s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 1.5s ease-out forwards; }
        .animate-dance { animation: dance 8s ease-in-out infinite; }

        .shimmer-btn {
          background: linear-gradient(90deg, #8b7355 0%, #c9a961 25%, #8b7355 50%, #c9a961 75%, #8b7355 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        .text-shadow-soft { text-shadow: 0 2px 10px rgba(139, 115, 85, 0.3); }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <Routes>
        {/* Public Routes - Main Site & Events */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/15-ianuarie" element={<Event15Page />} />
        <Route path="/16-ianuarie" element={<Event16Page />} />
        <Route path="/17-ianuarie" element={<Event17Page />} />
        <Route path="/en/january-15" element={<Event15ENPage />} />

        {/* Hidden Routes - Will be enabled when needed */}
        {/* <Route path="/coming-soon" element={<ComingSoonPage />} /> */}
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
  
}
