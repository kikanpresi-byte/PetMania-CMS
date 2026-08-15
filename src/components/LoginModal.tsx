import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function LoginModal({ onClose, onSuccess }: { onClose: () => void, onSuccess: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLampOn, setIsLampOn] = useState(true);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      onSuccess();
    } else {
      setError('Incorrect password.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1f1e1b] overflow-hidden animate-in fade-in duration-300">
      
      {/* Subtle background glow effect for the whole screen */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] pointer-events-none transition-opacity duration-700 ${isLampOn ? 'from-[#3a3832]/20 via-transparent to-transparent opacity-100' : 'opacity-0'}`} />

      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 text-[#888] hover:text-white transition-colors z-50 bg-[#2a2926] p-3 rounded-full shadow-lg"
      >
        <X size={20} strokeWidth={2.5} />
      </button>

      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-32 relative z-10 px-4">
        
        {/* Left Side - Lamp Illustration */}
        <div className="hidden md:flex w-full max-w-sm flex-col items-center justify-center relative">
          <div className="relative flex flex-col items-center w-full">
            {/* Soft Glow */}
            <div className={`absolute top-10 w-80 h-80 bg-white/20 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 ${isLampOn ? 'opacity-100' : 'opacity-0'}`} />
            
            {/* Lamp Shade */}
            <div className={`w-64 h-32 rounded-t-[128px] relative z-20 transition-all duration-700 ${isLampOn ? 'bg-[#f8f8f8] shadow-[0_-5px_30px_rgba(255,255,255,0.1)]' : 'bg-[#1a1a1a] shadow-none'}`}>
              {/* Cord - Clickable */}
              <div 
                onClick={() => setIsLampOn(!isLampOn)}
                className="absolute right-16 top-32 cursor-pointer group z-30 p-2 -m-2"
                title="Toggle Lamp"
              >
                <div className="h-[4.5rem] w-[2px] bg-[#555] mx-auto group-active:translate-y-2 transition-transform duration-150 relative">
                  <div className="absolute -bottom-3 -left-1.5 w-[14px] h-[14px] bg-[#b58b66] rounded-full shadow-sm" />
                </div>
              </div>
            </div>
            
            {/* Lamp Pole */}
            <div className={`w-5 h-56 relative z-10 transition-colors duration-700 ${isLampOn ? 'bg-[#ededed]' : 'bg-[#151515]'}`} />
            
            {/* Lamp Base */}
            <div className={`w-48 h-5 rounded-full relative z-10 transition-colors duration-700 ${isLampOn ? 'bg-[#f8f8f8] shadow-[0_10px_20px_rgba(0,0,0,0.5)]' : 'bg-[#1a1a1a] shadow-[0_10px_20px_rgba(0,0,0,0.8)]'}`} />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className={`w-full max-w-[400px] transition-all duration-700 ${isLampOn ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
          <div className="bg-[#242424] border border-[#333] rounded-[2.5rem] p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="text-center mb-10">
              <h2 className="text-[28px] font-bold text-white tracking-wide">Welcome</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="block text-[13px] font-semibold text-[#888] tracking-wide">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  className="w-full p-4 bg-[#141414] text-white rounded-xl focus:outline-none focus:ring-1 focus:ring-[#555] transition-all placeholder:text-[#555] border border-transparent focus:border-[#333]"
                  autoFocus
                />
                {error && <p className="text-[#ff6b6b] text-sm mt-2">{error}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#f0c571] hover:bg-[#e8bb60] text-[#1a1a1a] font-bold py-4 rounded-[14px] transition-colors text-[15px] active:scale-[0.98] shadow-lg"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}
