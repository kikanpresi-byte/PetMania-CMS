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
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <li><a href="#services" className="text-blue-600 hover:text-blue-700 transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Locations</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden md:block font-medium text-sm">{content.phoneNumber}</span>
          <div className="hidden sm:flex items-center gap-4">
            <button className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors">
              <Heart size={18} />
            </button>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md">
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
              <a href="#about" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-lg text-sm font-bold transition-all hover:shadow-lg inline-block">
                Learn more
              </a>
              <a href="#contact" className="border-2 border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50 px-8 py-3.5 rounded-lg text-sm font-bold transition-all hover:shadow-sm inline-block">
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
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] z-0">
             {/* Abstract background shapes */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
             
             <img 
              src={content.heroImage} 
              alt="Happy dogs" 
              className="w-full h-full object-cover object-center rounded-[2rem] shadow-2xl z-10 relative border-4 border-white"
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
            <div className="relative max-w-lg mx-auto lg:mx-0">
               <div className="absolute inset-0 bg-[#f0f4f8] rounded-full transform -translate-x-8 translate-y-8 -z-10"></div>
               <img 
                src={content.promiseImage} 
                alt="Woman holding dog" 
                className="w-full h-auto rounded-[3rem] shadow-xl relative z-10"
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
              <a href="#services" className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors inline-flex items-center gap-2">
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
              const bgColors = ['bg-blue-50', 'bg-slate-100', 'bg-indigo-50', 'bg-sky-50', 'bg-blue-100', 'bg-slate-50'];
              const bgColor = bgColors[index % bgColors.length];
              
              return (
                <div key={service.id} className="flex flex-col items-center gap-4 group cursor-pointer">
                  <div className={`w-24 h-24 rounded-[2rem] ${bgColor} flex items-center justify-center text-slate-700 group-hover:scale-105 group-hover:shadow-md transition-all duration-300`}>
                    {iconMap[service.iconName] || <CheckCircle2 size={32} />}
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
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
