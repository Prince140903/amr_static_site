import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Award,
  FileText,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Shield,
  Settings,
  Wrench,
  Check,
  Droplet
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { companyInfo } from '../data';

export default function Home() {
  const [activeTab, setActiveTab] = useState('engineering'); // project management tab
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white py-20 px-4">
        <div className="absolute inset-0 bg-slate-900 overflow-hidden">
          <img src="/assets/Banner.jpg" alt="Hero Banner" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>
        <div className="max-w-5xl mx-auto text-center space-y-8 z-10 relative">
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
      </section>

      {/* About Us ("Get to Know Us") */}
      <section id="about" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/assets/about_us.png"
                  alt="Industrial Engineering facility"
                  className="w-full object-cover aspect-[4/3] sm:aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amr-navy/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-gradient-to-br from-amr-navy to-slate-900 border border-slate-800 text-white p-5 rounded-xl shadow-xl flex items-center gap-4">
                  <div className="text-4xl font-extrabold text-amr-orange">20+</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Years of Combined<br />Expertise
                  </div>
                </div>
              </div>
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
                </ul>
              </div>

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

      {/* New Sectors Section (from DOCX) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold tracking-widest text-amr-orange uppercase">Applications</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Sectors We Serve
            </h2>
            <p className="text-slate-500 text-sm">
              Delivering high-performance filtration solutions across multiple industries.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {companyInfo.sectors.map((sector, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-amr-orange/40 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-amr-orange mb-4">
                  <Droplet className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{sector.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Core Values Section (from DOCX) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-amr-orange">Our Principles</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">6 Core Values</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyInfo.coreValues.map((value, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl hover:border-amr-orange/50 transition duration-300">
                <h5 className="text-lg font-bold text-amr-orange mb-2">{i + 1}. {value.title}</h5>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
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

          {/* Products Grid (No Sub Navigation Filter) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.products.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group flex flex-col justify-between bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-amr-orange/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 w-full overflow-hidden bg-slate-100">
                  {p.image ? (
                    <img src={p.image} alt={p.brand} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">No Image</div>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <span className="inline-block px-2.5 py-1 bg-orange-50 text-amr-orange text-[10px] font-bold uppercase rounded tracking-wider">
                    {p.category}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amr-orange transition-colors">
                      {p.brand}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amr-orange inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    Read Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Steps to protecting environment (from DOCX) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold tracking-widest text-amr-orange uppercase">Environmental Commitment</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              7 Steps to Protecting the Environment
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.environmentSteps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                  {i + 1}
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
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

          <div className="grid lg:grid-cols-12 gap-8 items-start pt-6">
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

      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
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
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-amr-orange shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Email Inquiries</h4>
                    <p className="text-xs text-slate-600 mt-1">{companyInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

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
    </>
  );
}
