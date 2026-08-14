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
  navLinks: [
    { id: '1', label: 'Services', href: '#services' },
    { id: '2', label: 'About', href: '#about' },
    { id: '3', label: 'Locations', href: '#contact' },
    { id: '4', label: 'Contact', href: '#contact' },
  ],
  services: [
    { id: '1', title: 'Daycare', iconName: 'Sun' },
    { id: '2', title: 'Dog Walking', iconName: 'Dog' },
    { id: '3', title: 'Grooming', iconName: 'Scissors' },
    { id: '4', title: 'Boarding', iconName: 'Home' },
    { id: '5', title: 'Training', iconName: 'GraduationCap' },
    { id: '6', title: 'Veterinary Care', iconName: 'Stethoscope' },
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
        return {
          ...defaultContent,
          ...parsed,
          navLinks: parsed.navLinks || defaultContent.navLinks
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
