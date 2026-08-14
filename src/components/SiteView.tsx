import React from 'react';
import { useContent } from '../store';
import { Heart, Search, ShoppingBag, Menu, Star, CheckCircle2, ChevronRight, Dog, Cat, Scissors, Home, GraduationCap, Stethoscope, Sun } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Sun: <Sun size={32} strokeWidth={1.5} />,
  Dog: <Dog size={32} strokeWidth={1.5} />,
  Scissors: <Scissors size={32} strokeWidth={1.5} />,
  Home: <Home size={32} strokeWidth={1.5} />,
  GraduationCap: <GraduationCap size={32} strokeWidth={1.5} />,
  Stethoscope: <Stethoscope size={32} strokeWidth={1.5} />,
};

export default function SiteView() {
  const { content } = useContent();

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans overflow-x-hidden text-slate-800 selection:bg-blue-200">
      
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Dog size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">{content.brandName}</span>
          </div>
          
          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-4 text-sm font-bold text-slate-600">
            {content.navLinks?.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.href} 
                  className="block px-5 py-2.5 bg-gradient-to-b from-white to-slate-50 border border-slate-200 shadow-[0_4px_0_0_#cbd5e1] rounded-xl hover:-translate-y-1 active:translate-y-[4px] active:shadow-none transition-all text-slate-600 hover:text-blue-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden md:block font-medium text-sm">{content.phoneNumber}</span>
          <div className="hidden sm:flex items-center gap-4">
            <button className="w-10 h-10 rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200 shadow-[0_4px_0_0_#cbd5e1] active:translate-y-[4px] active:shadow-none text-slate-600 flex items-center justify-center hover:brightness-95 transition-all">
              <Heart size={18} />
            </button>
            <a href="#contact" className="bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-400 shadow-[0_4px_0_0_#1e3a8a] active:translate-y-[4px] active:shadow-none hover:brightness-110 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all">
              Book now
            </a>
          </div>
          <button className="lg:hidden text-slate-900">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl z-10">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 whitespace-pre-line tracking-tight">
              {content.heroHeadline}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <a href="#about" className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 shadow-[0_4px_0_0_#0f172a] active:translate-y-[4px] active:shadow-none hover:brightness-110 text-white px-8 py-3.5 rounded-xl text-sm font-bold transition-all inline-block">
                Learn more
              </a>
              <a href="#contact" className="bg-gradient-to-b from-white to-slate-50 border-2 border-slate-200 shadow-[0_4px_0_0_#cbd5e1] active:translate-y-[4px] active:shadow-none hover:brightness-95 text-slate-900 px-8 py-3.5 rounded-xl text-sm font-bold transition-all inline-block">
                Make a reservation
              </a>
            </div>
            
            <div className="space-y-4 max-w-sm">
              <p className="text-sm font-medium text-slate-600 leading-relaxed whitespace-pre-line">
                {content.heroSubtext}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                4.9 <span className="font-medium text-slate-500 font-normal">Yelp reviews</span>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] z-0 [perspective:1000px] group">
             {/* Abstract background shapes */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
             
             <img 
              src={content.heroImage} 
              alt="Happy dogs" 
              className="w-full h-full object-cover object-center rounded-[2rem] shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.3),-10px_-10px_20px_-10px_rgba(255,255,255,1)] z-10 relative border-4 border-white transition-transform duration-700 group-hover:[transform:rotateX(5deg)_rotateY(-5deg)_scale(1.02)]"
            />
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Promise / About Section */}
      <section id="about" className="bg-white py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image */}
            <div className="relative max-w-lg mx-auto lg:mx-0 [perspective:1000px] group">
               <div className="absolute inset-0 bg-[#f0f4f8] rounded-[3rem] transform -translate-x-8 translate-y-8 -z-10 shadow-inner"></div>
               <img 
                src={content.promiseImage} 
                alt="Woman holding dog" 
                className="w-full h-auto rounded-[3rem] shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.3),-10px_-10px_20px_-10px_rgba(255,255,255,1)] relative z-10 transition-transform duration-700 group-hover:[transform:rotateX(5deg)_rotateY(5deg)_scale(1.02)] border-4 border-white"
              />
              <svg className="absolute -top-8 -left-8 w-16 h-16 text-blue-600 z-20" viewBox="0 0 100 100" fill="currentColor">
                <path d="M20,10 L30,40 L10,50 Z" />
                <path d="M40,0 L45,25 L25,30 Z" />
              </svg>
            </div>

            {/* Right Content */}
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-slate-300 w-12"></div>
                <span className="text-sm font-bold uppercase tracking-wider text-slate-500">Our promise to you...</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-8 whitespace-pre-line tracking-tight">
                {content.promiseHeadline}
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed whitespace-pre-line text-lg mb-10">
                {content.promiseText}
              </div>
              <a href="#services" className="bg-gradient-to-b from-white to-slate-50 border-2 border-slate-200 shadow-[0_4px_0_0_#cbd5e1] active:translate-y-[4px] active:shadow-none hover:brightness-95 text-slate-900 px-6 py-3 rounded-xl text-sm font-bold transition-all inline-flex items-center gap-2">
                Learn more <ChevronRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-24 lg:py-32 bg-[#f8f9fa] relative text-center">
        <div className="container mx-auto px-6">
          
          <div className="inline-flex items-center justify-center gap-4 mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              We are best in:
            </h2>
            <svg className="w-8 h-8 text-blue-600 absolute -right-12 top-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {content.services.map((service, index) => {
              // Cycle through subtle background colors for icons
              const bgColors = ['from-blue-100 to-blue-50', 'from-slate-100 to-white', 'from-indigo-100 to-indigo-50', 'from-sky-100 to-sky-50', 'from-blue-200 to-blue-100', 'from-slate-100 to-slate-50'];
              const bgColor = bgColors[index % bgColors.length];
              
              return (
                <div key={service.id} className="flex flex-col items-center gap-4 group cursor-pointer p-6 bg-white rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border-b-4 border-slate-200 hover:border-blue-400 hover:-translate-y-2 active:translate-y-0 active:border-b-0 active:mt-1 transition-all duration-300">
                  <div className={`w-20 h-20 rounded-[1.5rem] bg-gradient-to-br ${bgColor} flex items-center justify-center text-blue-600 group-hover:scale-110 shadow-inner border border-white/60 transition-transform duration-300`}>
                    {iconMap[service.iconName] || <CheckCircle2 size={32} />}
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors text-center">
                    {service.title}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>
      
      {/* Decorative footer snippet */}
      <footer id="contact" className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} {content.brandName}. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
