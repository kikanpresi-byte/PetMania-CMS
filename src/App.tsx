import React, { useState } from 'react';
import { ContentProvider } from './store';
import SiteView from './components/SiteView';
import AdminDashboard from './components/AdminDashboard';
import LoginModal from './components/LoginModal';
import { Settings2 } from 'lucide-react';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAdminClick = () => {
    if (isAuthenticated) {
      setIsAdminOpen(true);
    } else {
      setShowLogin(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowLogin(false);
    setIsAdminOpen(true);
  };

  return (
    <ContentProvider>
      <div className="relative min-h-screen">
        <SiteView />
        
        {/* Floating Admin Toggle Button */}
        <button
          onClick={handleAdminClick}
          className="fixed bottom-6 right-6 bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 z-40 group"
          aria-label="Open Admin Dashboard"
        >
          <Settings2 size={24} className="group-hover:rotate-45 transition-transform duration-300" />
          <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {isAuthenticated ? 'Buka Admin' : 'Login Admin'}
          </span>
        </button>

        {/* Login Modal Overlay */}
        {showLogin && (
          <LoginModal 
            onClose={() => setShowLogin(false)} 
            onSuccess={handleLoginSuccess} 
          />
        )}

        {/* Admin Dashboard Overlay */}
        {isAdminOpen && (
          <AdminDashboard onClose={() => setIsAdminOpen(false)} />
        )}
      </div>
    </ContentProvider>
  );
}

