import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Award,
  FileText,
  Menu,
  X,
  Droplet
} from 'lucide-react';
import { companyInfo } from './data';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <ScrollToTop />
      {/* Top Banner (ISO & MSME Certifications) */}
      <div className="bg-gradient-to-r from-amr-navy via-slate-900 to-amr-navy text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              <Award className="w-3.5 h-3.5 text-amr-orange" />
              {companyInfo.iso}
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <FileText className="w-3.5 h-3.5 text-amr-orange" />
              Registered: {companyInfo.udyam}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`} className="flex items-center gap-1 text-slate-300 hover:text-white transition">
              <Phone className="w-3 h-3 text-amr-orange" />
              {companyInfo.phone1}
            </a>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-1 text-slate-300 hover:text-white transition">
              <Mail className="w-3 h-3 text-amr-orange" />
              {companyInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">

          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-40 h-20 flex items-center justify-center bg-white rounded-lg p-1 shadow-sm">
              <img src="/assets/logo.png" alt="AMR Logo" className="w-full h-full object-contain" />
            </div>
            {/* <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-amr-orange transition-colors">
                AMR <span className="text-slate-500 font-medium">ENGINEERING</span>
              </span>
              <span className="block text-[10px] tracking-widest text-slate-400 font-bold uppercase">Works</span>
            </div> */}
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold text-slate-900 hover:text-amr-orange transition">Home</Link>
            <Link to="/#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">About Us</Link>
            <Link to="/#objectives" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Water Treatment</Link>

            <div className="relative group py-2">
              <span className="text-sm font-medium text-slate-600 hover:text-slate-900 transition cursor-pointer">Products</span>
              <div className="absolute top-full left-0 w-48 bg-white border border-slate-200 shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {companyInfo.products.map(p => (
                  <Link key={p.id} to={`/product/${p.id}`} className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-amr-orange">
                    {p.brand}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group py-2">
              <span className="text-sm font-medium text-slate-600 hover:text-slate-900 transition cursor-pointer">Operations</span>
              <div className="absolute top-full left-0 w-48 bg-white border border-slate-200 shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <a href="#" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-amr-orange">
                  AMC
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile Hamburger menu */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-6 space-y-3 shadow-inner">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-semibold text-slate-900 hover:bg-slate-50">Home</Link>
            <Link to="/#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">About Us</Link>
            <Link to="/#products" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Products & Services</Link>
            <Link to="/#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center px-3 py-3 rounded-md text-base font-medium text-white bg-amr-orange hover:bg-orange-600 shadow">
              Contact Us
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg p-1">
                <img src="/assets/logo.png" alt="AMR Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                AMR ENGINEERING
              </span>
            </div>
            <p className="leading-relaxed">
              {companyInfo.aboutShort}
            </p>
            <div className="flex gap-4">
              <span className="text-[10px] bg-slate-900 text-slate-300 font-bold border border-slate-800 px-2 py-1 rounded">
                ISO 9001:2015
              </span>
              <span className="text-[10px] bg-slate-900 text-slate-300 font-bold border border-slate-800 px-2 py-1 rounded">
                MSME Registered
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/#about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/#products" className="hover:text-white transition">Products & Services</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amr-orange shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amr-orange shrink-0" />
                <span>{companyInfo.phone1}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amr-orange shrink-0" />
                <span>{companyInfo.email}</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Support Hours</h4>
            <p className="leading-relaxed">
              We provide persistent engineering supervision and round-the-clock O&M support to guarantee maximum system availability.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-900 max-w-7xl mx-auto my-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600">
          <p>© {new Date().getFullYear()} AMR Engineering Works. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
