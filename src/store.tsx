import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent } from './types';

const defaultContent: SiteContent = {
  brandName: "PetMania",
  phoneNumber: "+1-800-356-8933",
  heroHeadline: "Your pet,\nour priority",
  heroSubtext: "Dog Walking & Pet Sitting Services\nThroughout New York City",
  heroImage: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800",
  promiseHeadline: "Happy pets,\nhappy humans",
  promiseText: "Come see how we're styling these final days of summer with bright palettes and pops of color that will dazzle your wardrobe year round.\n\nHow I'm styling these final days of summer with bright palettes and pops of color that will dazzle your wardrobe year round.",
  promiseImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600",
  locationsHeadline: "Visit Our Locations",
  locationsText: "Find the nearest PetMania center. We have multiple facilities equipped with the best amenities for your furry friends.",
  locations: [
    { id: '1', name: 'Downtown Center', address: '123 Pet Avenue, City Center, 10001', hours: 'Mon - Sun: 8:00 AM - 8:00 PM' },
    { id: '2', name: 'Westside Campus', address: '456 Park Boulevard, Westside, 10002', hours: 'Mon - Sat: 9:00 AM - 7:00 PM' }
  ],
  navLinks: [
    { id: '0', label: 'Home', href: '#home' },
    { id: '1', label: 'Services', href: '#services' },
    { id: '2', label: 'About', href: '#about' },
    { id: '3', label: 'Locations', href: '#locations' },
    { id: '4', label: 'Contact', href: '#contact' },
  ],
  services: [
    { id: '1', title: 'Daycare', iconName: 'Sun', description: 'Lingkungan yang aman dan menyenangkan untuk hewan peliharaan Anda bermain dan bersosialisasi sepanjang hari. Dilengkapi dengan staf profesional.' },
    { id: '2', title: 'Dog Walking', iconName: 'Dog', description: 'Layanan jalan-jalan rutin untuk menjaga kesehatan fisik dan mental anjing Anda. Rute aman dan dapat disesuaikan.' },
    { id: '3', title: 'Grooming', iconName: 'Scissors', description: 'Perawatan menyeluruh mulai dari mandi, potong kuku, hingga penataan bulu dengan produk berkualitas tinggi.' },
    { id: '4', title: 'Boarding', iconName: 'Home', description: 'Penginapan eksklusif dan nyaman saat Anda bepergian. Mendapatkan perhatian penuh kasih sayang dari tim kami.' },
    { id: '5', title: 'Training', iconName: 'GraduationCap', description: 'Kelas kepatuhan dan pelatihan perilaku oleh pelatih bersertifikat untuk anak anjing hingga anjing dewasa.' },
    { id: '6', title: 'Veterinary Care', iconName: 'Stethoscope', description: 'Pemeriksaan kesehatan rutin, vaksinasi, dan penanganan medis oleh dokter hewan berpengalaman.' },
  ]
};

interface ContentContextType {
  content: SiteContent;
  updateContent: (newContent: Partial<SiteContent>) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('petmania-content');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Ensure that array properties exist, even for older localStorage values
        const mergedServices = (parsed.services || defaultContent.services).map((s: any) => ({
          ...s,
          description: s.description || defaultContent.services.find(ds => ds.id === s.id)?.description || ''
        }));

        // Safely map old localStorage navLinks to the new ones, or preserve custom labels if they exist
        const mergedNavLinks = defaultContent.navLinks.map((defaultLink, index) => {
          // Check if user had a link at this index
          const savedLink = parsed.navLinks && parsed.navLinks[index];
          if (savedLink) {
             // If user saved a custom label, keep it, but use the new secure href structure
             return { ...defaultLink, label: savedLink.label };
          }
          return defaultLink;
        });

        // if user had exactly 4 old links (Services, About, Locations, Contact) we remap them to the new default 4 links but keep their labels
        let finalNavLinks = mergedNavLinks;
        if (parsed.navLinks && parsed.navLinks.length === 4 && parsed.navLinks[0].href === '#services') {
            // Old format detected:
            // 0: Services, 1: About, 2: Locations, 3: Contact
            finalNavLinks = [
               { id: '0', label: parsed.navLinks[0].label || 'Services', href: '#services' },
               { id: '1', label: parsed.navLinks[1].label || 'About', href: '#about' },
               { id: '2', label: parsed.navLinks[2].label || 'Locations', href: '#locations' },
               { id: '3', label: parsed.navLinks[3].label || 'Contact', href: '#contact' },
            ];
        }

        return {
          ...defaultContent,
          ...parsed,
          locationsHeadline: parsed.locationsHeadline || defaultContent.locationsHeadline,
          locationsText: parsed.locationsText || defaultContent.locationsText,
          locations: parsed.locations || defaultContent.locations,
          navLinks: finalNavLinks,
          services: mergedServices
        };
      } catch (e) {
        console.error("Failed to parse saved content", e);
      }
    }
    return defaultContent;
  });

  useEffect(() => {
    localStorage.setItem('petmania-content', JSON.stringify(content));
  }, [content]);

  const updateContent = (newContent: Partial<SiteContent>) => {
    setContent(prev => ({ ...prev, ...newContent }));
  };

  const resetContent = () => {
    setContent(defaultContent);
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
