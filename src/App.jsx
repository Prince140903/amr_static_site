import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Award,
  FileText,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  Droplet,
  Shield,
  Settings,
  Wrench,
  Search,
  Filter,
  Check,
  Send,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { companyInfo } from './data';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productFilter, setProductFilter] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [activeTab, setActiveTab] = useState('engineering'); // project management tab
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Extract unique product categories for filter options
  const categories = ['All', ...new Set(companyInfo.products.map(p => p.category))];

  const filteredProducts = productFilter === 'All'
    ? companyInfo.products
    : companyInfo.products.filter(p => p.category === productFilter);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 5000);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">

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
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amr-orange to-amber-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-amr-orange transition-colors">
                AMR <span className="text-slate-500 font-medium">ENGINEERING</span>
              </span>
              <span className="block text-[10px] tracking-widest text-slate-400 font-bold uppercase">Works</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-semibold text-slate-900 hover:text-amr-orange transition">Home</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">About Us</a>
            <a href="#objectives" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Water Treatment</a>
            <a href="#products" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Products & Services</a>
            <a href="#lifecycle" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Project Stages</a>
            <a href="#insights" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Insights</a>
            <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-amr-orange hover:bg-orange-600 rounded-lg shadow transition-colors">
              Contact Us
            </a>
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
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-semibold text-slate-900 hover:bg-slate-50">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">About Us</a>
            <a href="#objectives" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Water Treatment</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Products & Services</a>
            <a href="#lifecycle" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Project Stages</a>
            <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Insights</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center px-3 py-3 rounded-md text-base font-medium text-white bg-amr-orange hover:bg-orange-600 shadow">
              Contact Us
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-hero-pattern min-h-[85vh] flex items-center justify-center text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8 z-10">

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold tracking-wide text-orange-300 uppercase shadow-inner">
            <Award className="w-4 h-4" />
            Over 16 Years of Engineering Precision
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Precision Engineering for the <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Future of Water Filtration
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            To overcome global challenges in the field of <strong className="text-white font-medium">WATER FILTRATION</strong>, meet our responsibility to the environment. Custom engineered high-performance systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#products" className="px-8 py-3.5 bg-gradient-to-r from-amr-orange to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              Explore Products
            </a>
            <a href="#about" className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              Get to Know Us
            </a>
          </div>
        </div>

        {/* Ambient background elements */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div> */}
      </section>

      {/* About Us ("Get to Know Us") */}
      <section id="about" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial Engineering facility"
                  className="w-full object-cover aspect-[4/3] sm:aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amr-navy/80 via-transparent to-transparent"></div>

                {/* Years badge overlay */}
                <div className="absolute bottom-6 right-6 bg-gradient-to-br from-amr-navy to-slate-900 border border-slate-800 text-white p-5 rounded-xl shadow-xl flex items-center gap-4">
                  <div className="text-4xl font-extrabold text-amr-orange">20+</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Years of Combined<br />Expertise
                  </div>
                </div>
              </div>

              {/* Absolute background accent */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-3xl -z-10"></div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold tracking-widest text-amr-orange uppercase">Get to Know Us</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                AMR Engineering Works – Your partner for customized industrial and mechanical solutions
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {companyInfo.aboutLong}
              </p>
              <p className="text-slate-600 leading-relaxed font-semibold italic border-l-4 border-amr-orange pl-4">
                {companyInfo.aboutSecondary}
              </p>

              {/* Technologies Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">Our Core Technologies</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amr-orange shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 text-sm">AMR-Tech</strong>
                      <p className="text-xs text-slate-500">Automated Cleaning & Processing Systems</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amr-orange shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 text-sm">Pro-Filter</strong>
                      <p className="text-xs text-slate-500">Advanced Fluid & Hydraulic Technology</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amr-orange shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 text-sm">Customised</strong>
                      <p className="text-xs text-slate-500">Turnkey Engineering & Plant Layout Solutions</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Call to action phone banner */}
              <div className="pt-4">
                <a
                  href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amr-orange to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Now: {companyInfo.phone1}
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Corporate Vision & Commitments */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Vision segment */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-amr-orange">Corporate Vision</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">{companyInfo.vision}</h3>
          </div>

          <div className="border-t border-slate-800 my-8"></div>

          {/* Commitments Grid */}
          <div className="space-y-6">
            <h4 className="text-center text-xs font-bold uppercase tracking-widest text-amr-orange">Our Core Commitments</h4>
            <div className="grid md:grid-cols-3 gap-8">
              {companyInfo.commitments.map((c, i) => (
                <div key={i} className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-xl space-y-3 hover:border-amr-orange/50 transition duration-300">
                  <div className="w-10 h-10 rounded-lg bg-amr-orange/10 flex items-center justify-center text-amr-orange font-bold text-lg">
                    0{i + 1}
                  </div>
                  <h5 className="text-xl font-bold">{c.title}</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Water Treatment Section */}
      <section id="objectives" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold tracking-widest text-amr-orange uppercase">Business Segments</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                High-Performance Water Treatment Plants
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Filtration is a critical process that removes particles from suspension in water via mechanisms like straining, flocculation, sedimentation, and surface capture. Our water filtration systems are designed to be highly efficient, cost-effective, and require minimum maintenance.
              </p>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amr-orange" />
                  Quality Policy Commitment
                </h4>
                <p className="text-sm text-slate-600">{companyInfo.qualityPolicy.statement1}</p>
                <p className="text-sm text-slate-600 font-medium text-slate-800">{companyInfo.qualityPolicy.statement2}</p>
              </div>
            </div>

            {/* Right List of Objectives */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide">
                Objectives of Our Water Treatment Process
              </h3>
              <div className="grid sm:grid-cols-1 gap-3">
                {companyInfo.waterTreatmentObjectives.map((obj, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-amr-orange/30 transition">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-amr-orange shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products & Services */}
      <section id="products" className="py-24 bg-white border-t border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold tracking-widest text-amr-orange uppercase">Featured Products</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Engineered systems built for the toughest plants
            </h2>
            <p className="text-slate-500 text-sm">
              Explore our comprehensive range of high-rate settlement, automatic self-cleaning, and chemical adsorption media solutions.
            </p>
          </div>

          {/* Filtering control */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-slate-100 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setProductFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition ${productFilter === cat
                  ? 'bg-amr-orange text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group flex flex-col justify-between bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-amr-orange/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6 space-y-4">
                  <span className="inline-block px-2.5 py-1 bg-orange-50 text-amr-orange text-[10px] font-bold uppercase rounded tracking-wider">
                    {p.category}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amr-orange transition-colors">
                      {p.brand}
                    </h3>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Series</p>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-4">
                    {p.description}
                  </p>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProduct(p)}
                    className="text-xs font-bold text-amr-orange hover:text-orange-600 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                  >
                    Read Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Project Management Lifecycle Stage */}
      <section id="lifecycle" className="py-24 bg-slate-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="text-xs font-bold tracking-widest text-amr-orange uppercase">Our Methodology</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Project Management Lifecycle</h2>
            <p className="text-slate-400 text-sm">
              We provide end-to-end management for all our water treatment projects to ensure operating efficiency, reliability, availability, increased profitability, and reduced risk.
            </p>
          </div>

          {/* Interactive tabs */}
          <div className="grid lg:grid-cols-12 gap-8 items-start pt-6">

            {/* Tab buttons */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {companyInfo.projectManagementLifecycle.map((stage) => {
                const isActive = activeTab === stage.phase.toLowerCase();
                return (
                  <button
                    key={stage.phase}
                    onClick={() => setActiveTab(stage.phase.toLowerCase())}
                    className={`text-left px-5 py-4 rounded-xl font-bold tracking-wide transition flex items-center justify-between border ${isActive
                      ? 'bg-gradient-to-r from-amr-orange to-amber-500 border-none text-white shadow-lg'
                      : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800 text-slate-300'
                      }`}
                  >
                    {stage.phase}
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  </button>
                );
              })}
            </div>

            {/* Tab contents */}
            <div className="lg:col-span-8 bg-slate-800/40 border border-slate-700/50 p-8 sm:p-10 rounded-2xl min-h-[220px] flex flex-col justify-center">
              {companyInfo.projectManagementLifecycle.map((stage) => {
                const isActive = activeTab === stage.phase.toLowerCase();
                if (!isActive) return null;
                return (
                  <div key={stage.phase} className="space-y-4 animate-fadeIn">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-amr-orange">
                      Stage / Scope
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {stage.phase}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-base">
                      {stage.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* Health, Safety & Environment (HSEQ) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold tracking-widest text-amr-orange uppercase">Quality & HSE</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Quality, Health, & Safety Commitment
            </h2>
            <p className="text-slate-500 text-sm">
              We view safety as an integral part of efficient management and corporate responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-amr-orange">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Environmental Policy</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{companyInfo.hseq.environmental}</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-amr-orange">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Process & Execution</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{companyInfo.hseq.processes}</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-amr-orange">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Health & Safety</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{companyInfo.hseq.safety}</p>
            </div>
          </div>

        </div>
      </section>

      {/* Blog & News / Insights Section */}
      <section id="insights" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold tracking-widest text-amr-orange uppercase">Our Blog / Insights</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Latest articles, news & company updates
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyInfo.news.map((item, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow flex flex-col justify-between">
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-amr-navy text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-xs text-slate-400 font-semibold">{item.date}</span>
                    <h3 className="text-lg font-bold text-slate-900 hover:text-amr-orange transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.summary}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a href="#insights" className="text-xs font-bold text-amr-orange inline-flex items-center gap-1 hover:gap-1.5 transition-all">
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Newsletter Block */}
      <section className="bg-gradient-to-r from-amr-navy to-slate-950 text-white py-12 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amr-orange">Stay With Us</span>
              <h3 className="text-2xl font-extrabold">Get the Latest Updates & Exclusive Industry Insights</h3>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 hover:bg-white/15 focus:bg-white text-white focus:text-slate-900 border border-white/20 focus:border-white rounded-lg focus:outline-none placeholder-slate-400 transition"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amr-orange hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg uppercase tracking-wider text-xs whitespace-nowrap transition"
              >
                {newsletterSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-amr-orange uppercase">Get in Touch</span>
                <h2 className="text-3xl font-extrabold text-slate-900">Have an upcoming plant layout or filtration project?</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our specialist team of engineers is available 24/7 to design, erect, test, and run your industrial wastewater treatment setups.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-amr-orange shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Our Location</h4>
                    <p className="text-xs text-slate-600 mt-1">{companyInfo.location}</p>
                    <p className="text-xs text-slate-400">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-amr-orange shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Direct Phone</h4>
                    <p className="text-xs text-slate-600 mt-1">{companyInfo.phone1}</p>
                    {/* <p className="text-xs text-slate-600">{companyInfo.phone2}</p> */}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-amr-orange shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Email Inquiries</h4>
                    <p className="text-xs text-slate-600 mt-1">{companyInfo.email}</p>
                    <p className="text-xs text-slate-600">{companyInfo.salesEmail}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-inner">
              {contactSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-600 max-w-sm">
                    Thank you for reaching out to AMR Engineering Works. A representative will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900">Send us a direct message</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-600">Full Name</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-amr-orange focus:ring-1 focus:ring-amr-orange rounded-lg focus:outline-none text-slate-900 transition"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-600">Email Address</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-amr-orange focus:ring-1 focus:ring-amr-orange rounded-lg focus:outline-none text-slate-900 transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-600">Project / Request Summary</label>
                    <textarea
                      rows="4"
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Describe your plant filtration requirements or engineering questions..."
                      className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-amr-orange focus:ring-1 focus:ring-amr-orange rounded-lg focus:outline-none text-slate-900 transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-amr-orange to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-lg shadow-lg uppercase tracking-wider text-xs transition"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amr-orange flex items-center justify-center">
                <Droplet className="w-5 h-5 text-white" />
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#objectives" className="hover:text-white transition">Water Treatment Plants</a></li>
              <li><a href="#products" className="hover:text-white transition">Products & Services</a></li>
              <li><a href="#lifecycle" className="hover:text-white transition">Project Management</a></li>
            </ul>
          </div>

          {/* Contact Details */}
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

          {/* Business Hours / Extra */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Support Hours</h4>
            <p className="leading-relaxed">
              We provide persistent engineering supervision and round-the-clock O&M support to guarantee maximum system availability.
            </p>
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300">
              <span className="block font-bold text-[10px] uppercase text-amr-orange tracking-widest mb-1">
                Emergency Support
              </span>
              <p className="font-semibold text-sm">24 Hours / 7 Days</p>
            </div>
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

      {/* Modal Popup for Product Detail */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden animate-slideUp">

            <div className="relative bg-gradient-to-r from-amr-navy to-slate-900 text-white p-6">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
              <span className="text-[10px] bg-amr-orange text-white font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                {selectedProduct.category}
              </span>
              <h3 className="text-2xl font-bold mt-2">{selectedProduct.brand}</h3>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mt-0.5">Filter / Device Series</p>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Functionality & Details</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Certifications & Standards
                </span>
                <p className="text-xs text-slate-600">
                  Fully compliant with AMR Quality Assurance and {companyInfo.iso} specifications.
                </p>
              </div>

              <div className="flex gap-2">
                <a
                  href="#contact"
                  onClick={() => {
                    setSelectedProduct(null);
                  }}
                  className="flex-1 text-center py-3 bg-amr-orange hover:bg-orange-600 text-white font-bold rounded-lg shadow-md uppercase tracking-wider text-xs transition"
                >
                  Request Technical Quotation
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-3 border border-slate-300 hover:border-slate-400 text-slate-700 font-bold rounded-lg uppercase tracking-wider text-xs transition"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;
