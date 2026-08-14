import React, { useState } from 'react';
import { Lock, X } from 'lucide-react';

export default function LoginModal({ onClose, onSuccess }: { onClose: () => void, onSuccess: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default password untuk demo
    if (password === 'admin123') {
      onSuccess();
    } else {
      setError('Password salah. Silakan coba lagi.');
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
          <X size={24} />
        </button>
        <div className="p-8">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
            <Lock size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Login Admin</h2>
          <p className="text-slate-500 mb-6 text-sm">
            Masukkan kata sandi untuk mengakses Dashboard Admin. 
            <br />
            <span className="text-xs text-blue-600 font-medium">(Password demo: admin123)</span>
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Masukkan password..."
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                autoFocus
              />
              {error && <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors shadow-md"
            >
              Masuk Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
