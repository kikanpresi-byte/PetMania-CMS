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
      
      {/* CSS for flying bugs */}
      <style>{`
        @keyframes flutter-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          25% { transform: translate(30px, -20px) scale(1.2); }
          50% { transform: translate(15px, 25px) scale(0.8); }
          75% { transform: translate(-25px, 10px) scale(1.1); }
        }
        @keyframes flutter-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(-20px, 25px) scale(0.9); }
          50% { transform: translate(30px, -5px) scale(1.2); }
          75% { transform: translate(10px, -25px) scale(0.7); }
        }
        @keyframes flutter-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.9; }
          25% { transform: translate(20px, 15px) scale(1.1); }
          50% { transform: translate(-30px, -15px) scale(0.8); }
          75% { transform: translate(15px, -30px) scale(1.3); }
        }
      `}</style>

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
          <div className="relative flex flex-col items-center w-full mt-8">
            {/* Light Beam (Cone) */}
            <div 
              className={`absolute top-[120px] w-[350px] h-[350px] pointer-events-none transition-opacity duration-700 ${isLampOn ? 'opacity-100' : 'opacity-0'}`} 
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 70%, rgba(255,255,255,0) 100%)',
                clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0 100%)'
              }} 
            />

            {/* Soft Ambient Glow */}
            <div className={`absolute top-10 w-80 h-80 bg-[#fff5d6]/20 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 ${isLampOn ? 'opacity-100' : 'opacity-0'}`} />

            {/* Lamp Shade Container */}
            <div className="relative z-20 flex flex-col items-center">
              {/* Main Shade Body */}
              <div className={`w-64 h-32 rounded-t-[128px] relative transition-all duration-700 overflow-hidden ${isLampOn ? 'bg-gradient-to-b from-[#ffffff] to-[#e8e8e8] shadow-[0_-10px_40px_rgba(255,255,255,0.15)]' : 'bg-gradient-to-b from-[#2a2a2a] to-[#151515] shadow-none'}`}>
                {/* Curved reflection on the shade */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full transition-opacity duration-700 ${isLampOn ? 'opacity-100' : 'opacity-0'}`} />
              </div>
              
              {/* Bottom Rim (Opening) */}
              <div className={`w-64 h-8 -mt-4 rounded-[100%] relative z-10 transition-all duration-700 flex items-center justify-center ${isLampOn ? 'bg-[#f4f4f4] border-b-2 border-white shadow-[inset_0_10px_20px_rgba(0,0,0,0.1)]' : 'bg-[#0a0a0a] shadow-[inset_0_5px_15px_rgba(0,0,0,0.8)] border-b-2 border-[#222]'}`}>
                {/* Light Bulb */}
                <div className={`w-14 h-6 rounded-b-full transition-all duration-700 mt-2 ${isLampOn ? 'bg-[#fff5d6] shadow-[0_10px_30px_#fff5d6,0_0_15px_#fff] blur-[1px]' : 'bg-[#222] shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)]'}`} />
                
                {/* Flying Bugs (Only visible when lamp is on) */}
                <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 pointer-events-none transition-opacity duration-300 ${isLampOn ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#fff8e7] rounded-full shadow-[0_0_4px_#fff]" style={{ animation: 'flutter-1 4s infinite ease-in-out' }} />
                  <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-[#fff8e7] rounded-full shadow-[0_0_3px_#fff]" style={{ animation: 'flutter-2 5s infinite ease-in-out 1s' }} />
                  <div className="absolute top-2/3 left-3/4 w-1 h-1 bg-[#fff8e7] rounded-full shadow-[0_0_5px_#fff]" style={{ animation: 'flutter-3 3.5s infinite ease-in-out 0.5s' }} />
                  <div className="absolute top-1/4 left-3/4 w-0.5 h-0.5 bg-[#fff8e7] rounded-full shadow-[0_0_2px_#fff]" style={{ animation: 'flutter-1 4.5s infinite ease-in-out 2s' }} />
                  <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-[#fff8e7] rounded-full shadow-[0_0_6px_#fff]" style={{ animation: 'flutter-2 6s infinite ease-in-out 0.2s' }} />
                </div>
              </div>

              {/* Cord - Clickable */}
              <div 
                onClick={() => setIsLampOn(!isLampOn)}
                className="absolute right-12 top-28 cursor-pointer group z-30 p-4 -m-4"
                title="Toggle Lamp"
              >
                <div className={`w-[2px] mx-auto group-active:translate-y-3 transition-all duration-300 relative ${isLampOn ? 'bg-gradient-to-b from-[#888] to-[#666] h-[5rem]' : 'bg-gradient-to-b from-[#444] to-[#222] h-[5rem]'}`}>
                  <div className={`absolute -bottom-3 -left-2 w-[18px] h-[18px] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.4)] transition-colors duration-700 ${isLampOn ? 'bg-gradient-to-br from-[#e0bc36] to-[#b38914]' : 'bg-gradient-to-br from-[#555] to-[#222]'}`}>
                     {/* small highlight on the ball */}
                     <div className="absolute top-1 left-1 w-2 h-2 bg-white/40 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lamp Pole Joint */}
            <div className={`w-6 h-3 -mt-1 relative z-10 rounded-full transition-colors duration-700 ${isLampOn ? 'bg-gradient-to-r from-[#ccc] via-[#fff] to-[#aaa]' : 'bg-gradient-to-r from-[#222] via-[#444] to-[#111]'}`} />

            {/* Lamp Pole */}
            <div className={`w-4 h-56 relative z-10 transition-colors duration-700 ${isLampOn ? 'bg-gradient-to-r from-[#d0d0d0] via-[#ffffff] to-[#b0b0b0]' : 'bg-gradient-to-r from-[#111] via-[#2a2a2a] to-[#0a0a0a]'}`} />
            
            {/* Lamp Base Container */}
            <div className="relative z-10 flex flex-col items-center -mt-2">
              {/* Base Top (Ellipse) */}
              <div className={`w-48 h-12 rounded-[100%] absolute top-0 z-20 transition-colors duration-700 ${isLampOn ? 'bg-gradient-to-b from-[#fdfdfd] to-[#e5e5e5] border border-white/50' : 'bg-gradient-to-b from-[#2a2a2a] to-[#151515] border border-white/5'}`} />
              {/* Base Body (Cylinder depth) */}
              <div className={`w-48 h-8 mt-6 rounded-b-[100%] z-10 transition-colors duration-700 ${isLampOn ? 'bg-[#cccccc] shadow-[0_20px_40px_rgba(0,0,0,0.6)]' : 'bg-[#0a0a0a] shadow-[0_20px_40px_rgba(0,0,0,0.9)]'}`} />
            </div>
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
