import React, { useState, useEffect, useRef } from 'react';
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
  Droplet,
  Waves,
  Anchor,
  Factory,
  Ship,
  ChevronLeft,
  RefreshCw
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { companyInfo } from '../data';
import emailjs from '@emailjs/browser';
import {
  RiverWaterIcon,
  LakeWaterIcon,
  DamWaterIcon,
  IndustrialWaterIcon,
  SeaWaterIcon
} from '../components/SectorIcons';

export default function Home() {
  const [activeTab, setActiveTab] = useState('engineering'); // project management tab
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '', productName: '', captcha: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);

  // Simple math captcha generation (prevents bots)
  const generateCaptcha = () => {
    const ops = ['+', '-', '×'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a = Math.floor(Math.random() * 9) + 1;
    let b = Math.floor(Math.random() * 9) + 1;
    if (op === '-' && a < b) [a, b] = [b, a];
    const answer = op === '+' ? a + b : op === '-' ? a - b : a * b;
    return { a, b, op, answer };
  };

  const [captcha, setCaptcha] = useState(generateCaptcha);
  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setContactForm(prev => ({ ...prev, captcha: '' }));
    setCaptchaError(false);
  };
  const location = useLocation();
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const getSectorIcon = (iconName) => {
    switch (iconName) {
      case 'Waves': return <RiverWaterIcon className="w-full h-full" />;
      case 'Droplet': return <LakeWaterIcon className="w-full h-full" />;
      case 'Anchor': return <DamWaterIcon className="w-full h-full" />;
      case 'Factory': return <IndustrialWaterIcon className="w-full h-full" />;
      case 'Ship': return <SeaWaterIcon className="w-full h-full" />;
      default: return <LakeWaterIcon className="w-full h-full" />;
    }
  };

  useEffect(() => {
    if (location.state?.product) {
      setContactForm(prev => ({
        ...prev,
        productName: location.state.product
      }));
    }
  }, [location.state?.product]);

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    // CAPTCHA verification before submission
    if (parseInt(contactForm.captcha, 10) !== captcha.answer) {
      // Visual error state: red highlight + shake + inline message
      setCaptchaError(true);
      setShakeKey(k => k + 1);
      setCaptcha(generateCaptcha());
      setContactForm(prev => ({ ...prev, captcha: '' }));
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        user_name: contactForm.name,
        user_email: contactForm.email,
        user_phone: contactForm.phone,
        message: contactForm.message,
        product_name: contactForm.productName || 'General Inquiry'
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setContactSubmitted(true);
      setContactForm({ name: '', email: '', phone: '', message: '', productName: '', captcha: '' });
      refreshCaptcha();
      setTimeout(() => {
        setContactSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send the message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center text-white py-20 px-4 overflow-hidden">
        {/* Background image + dark overlay layers */}
        <div className="absolute inset-0 bg-slate-950">
          <img
            src="/assets/Banner.jpg"
            alt="Hero Banner"
            className="w-full h-full object-cover object-[65%_center] opacity-70"
          />

          {/* Base darkening */}
          {/* <div className="absolute inset-0 bg-slate-950/45"></div> */}

          {/* Left-to-right gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/10 to-transparent"></div>

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/85"></div>
        </div>

        {/* Left-aligned content */}
        <div className="max-w-8xl mx-auto w-full relative z-10 ml-20">
          <div className="max-w-3xl text-left space-y-4">

            <div className="inline-flex items-center gap-2 bg-slate-950/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/25 text-xs font-semibold tracking-wide text-orange-300 uppercase shadow-inner drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              <Award className="w-4 h-4" />
              Over 16 Years of Engineering Precision
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)]">
              Precision Engineering for the{" "}
              <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-200 to-orange-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Future of Water Filtration
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-100 max-w-2xl font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              We address global water filtration challenges and honor our environmental responsibility through custom-engineered, high-performance systems.
            </p>

            <div className="flex flex-wrap justify-start gap-4 pt-4">
              <a
                href="#products"
                className="px-8 py-3.5 bg-gradient-to-r from-amr-orange to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-lg shadow-lg shadow-black/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Products
              </a>

              <a
                href="#about"
                className="px-8 py-3.5 bg-slate-950/40 hover:bg-slate-950/60 text-white border border-white/40 backdrop-blur-md font-semibold rounded-lg shadow-lg shadow-black/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Get to Know Us
              </a>
            </div>

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
                  <div className="text-4xl font-extrabold text-amr-orange">16+</div>
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
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amr-orange to-amber-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition cursor-default"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Now: {companyInfo.phone1}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Sectors Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold tracking-widest text-amr-orange uppercase">Applications</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Sectors We Serve
            </h2>
          </div>

          <div className="relative group">

            {/* Slider Container */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16 px-4">
              {companyInfo.sectors.map((sector, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon area — same height for every sector */}
                  <div className="w-full h-40 md:h-48 flex items-center justify-center mb-8">
                    <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                      {getSectorIcon(sector.icon)}
                    </div>
                  </div>

                  {/* Title area — same starting position */}
                  <div className="min-h-[56px] flex items-start justify-center">
                    <h3 className="text-lg md:text-xl font-extrabold text-amr-navy tracking-tight leading-tight">
                      {sector.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
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

      {/* Water Treatment Objectives */}
      <section id="objectives" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold tracking-widest text-amr-orange uppercase">Water Treatment</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Treatment Objectives
            </h2>
            <p className="text-slate-500 text-sm">
              A complete, safe water treatment solution depends on a clear set of purification objectives tailored to your source water and end use.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyInfo.waterTreatmentObjectives.map((objective, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm hover:shadow-md hover:border-amr-orange/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-amr-orange font-bold">
                  {i + 1}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{objective}</p>
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
                    <img src={p.image} alt={p.brand} className="w-full h-full object-contain group-hover:scale-105 transition duration-500" />
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
                <form onSubmit={handleContactSubmit} className="space-y-2">
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
                    <label className="text-xs font-semibold text-slate-600">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-amr-orange focus:ring-1 focus:ring-amr-orange rounded-lg focus:outline-none text-slate-900 transition"
                    />
                  </div>
                  {contactForm.productName && (
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-600">Product Inquiry</label>
                      <input
                        type="text"
                        readOnly
                        value={contactForm.productName}
                        className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 cursor-not-allowed"
                      />
                    </div>
                  )}
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
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-600">Security Check</label>
                    <div
                      key={shakeKey}
                      className={`flex items-center gap-3 flex-wrap p-3 rounded-xl border transition-colors ${captchaError ? 'border-red-300 bg-red-50 animate-shake' : 'border-transparent'
                        }`}
                    >
                      <div className={`px-4 py-3 border rounded-lg text-lg font-bold select-none tracking-wider transition-colors ${captchaError ? 'bg-red-100 border-red-300 text-red-700' : 'bg-slate-100 border-slate-200 text-slate-800'
                        }`}>
                        {captcha.a} {captcha.op} {captcha.b} = ?
                      </div>
                      <input
                        type="text"
                        inputMode="numeric"
                        required
                        aria-invalid={captchaError}
                        value={contactForm.captcha}
                        onChange={(e) => {
                          setContactForm({ ...contactForm, captcha: e.target.value });
                          if (captchaError) setCaptchaError(false);
                        }}
                        placeholder="Answer"
                        className={`w-28 px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-1 transition ${captchaError
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-500 text-red-900'
                          : 'border-slate-200 focus:border-amr-orange focus:ring-amr-orange text-slate-900'
                          }`}
                      />
                      <button
                        type="button"
                        onClick={refreshCaptcha}
                        title="New question"
                        className="p-3 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-500 transition"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>
                    {captchaError ? (
                      <p className="text-xs font-semibold text-red-500 flex items-center gap-1.5">
                        <span aria-hidden="true">✕</span>
                        Incorrect security answer — a new question has been generated. Please try again.
                      </p>
                    ) : (
                      <p className="text-xs text-slate-400">Solve the simple math question to prove you're human.</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-amr-orange to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-lg shadow-lg uppercase tracking-wider text-xs transition disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
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
