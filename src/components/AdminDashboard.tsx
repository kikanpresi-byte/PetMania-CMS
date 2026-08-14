import React, { useState } from 'react';
import { useContent } from '../store';
import { LayoutDashboard, Save, RotateCcw, X, Edit3, Type, Image as ImageIcon } from 'lucide-react';

export default function AdminDashboard({ onClose }: { onClose: () => void }) {
  const { content, updateContent, resetContent } = useContent();
  const [formData, setFormData] = useState(content);
  const [activeTab, setActiveTab] = useState<'general' | 'hero' | 'about' | 'services'>('hero');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateContent(formData);
    // Optional: show a toast notification here
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset to default content?")) {
      resetContent();
      setFormData(content); // Re-sync local form state (ideally from updated context, but this needs to trigger after render. Better to just close or rely on useEffect)
    }
  };

  return (
    <div className="fixed inset-0 bg-[#f1f5f9] z-50 flex flex-col md:flex-row overflow-hidden font-sans text-slate-800">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white text-slate-800 flex flex-col h-full border-r border-slate-200">
        <div className="p-6 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <LayoutDashboard size={18} />
            </div>
            <span>Admin</span>
          </div>
          <button onClick={onClose} className="md:hidden text-slate-400 hover:text-slate-600">
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-3">
            <li>
              <button 
                onClick={() => setActiveTab('general')}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors flex items-center gap-3 ${activeTab === 'general' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <Edit3 size={18} /> General
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('hero')}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors flex items-center gap-3 ${activeTab === 'hero' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <ImageIcon size={18} /> Hero Section
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('about')}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors flex items-center gap-3 ${activeTab === 'about' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <Type size={18} /> About Section
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('services')}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors flex items-center gap-3 ${activeTab === 'services' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <LayoutDashboard size={18} /> Services
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-slate-100 flex gap-2">
          <button 
            onClick={onClose}
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 rounded-lg text-sm transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full bg-[#f1f5f9] overflow-hidden">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm z-10">
          <h1 className="text-xl font-semibold text-slate-800 capitalize">{activeTab} Settings</h1>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleReset}
              className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors px-3 py-2 text-sm font-medium"
            >
              <RotateCcw size={16} />
              <span className="hidden sm:inline">Reset Defaults</span>
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors font-bold shadow-md"
            >
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
            
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Brand Name</label>
                  <input 
                    type="text" 
                    name="brandName" 
                    value={formData.brandName} 
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input 
                    type="text" 
                    name="phoneNumber" 
                    value={formData.phoneNumber} 
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                  />
                </div>
              </div>
            )}

            {activeTab === 'hero' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Headline (Supports newlines)</label>
                  <textarea 
                    name="heroHeadline" 
                    value={formData.heroHeadline} 
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Subtext (Supports newlines)</label>
                  <textarea 
                    name="heroSubtext" 
                    value={formData.heroSubtext} 
                    onChange={handleChange}
                    rows={2}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Hero Image URL</label>
                  <input 
                    type="text" 
                    name="heroImage" 
                    value={formData.heroImage} 
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all mb-3"
                  />
                  {formData.heroImage && (
                    <div className="relative h-48 w-full rounded-lg overflow-hidden border border-slate-200">
                      <img src={formData.heroImage} alt="Hero preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Headline (Supports newlines)</label>
                  <textarea 
                    name="promiseHeadline" 
                    value={formData.promiseHeadline} 
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Description (Supports newlines)</label>
                  <textarea 
                    name="promiseText" 
                    value={formData.promiseText} 
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
                  <input 
                    type="text" 
                    name="promiseImage" 
                    value={formData.promiseImage} 
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all mb-3"
                  />
                  {formData.promiseImage && (
                    <div className="relative h-48 w-full rounded-lg overflow-hidden border border-slate-200">
                      <img src={formData.promiseImage} alt="Promise preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="space-y-6">
                <p className="text-sm text-slate-500 mb-2">Edit the services offered. Icons use Lucide names (e.g., Sun, Dog, Scissors, Home, GraduationCap, Stethoscope).</p>
                <div className="grid gap-4">
                  {formData.services.map((service, index) => (
                    <div key={service.id} className="flex gap-4 items-start p-4 border border-slate-200 rounded-lg bg-slate-50">
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-slate-700 mb-1">Service Title</label>
                        <input 
                          type="text" 
                          value={service.title} 
                          onChange={(e) => {
                            const newServices = [...formData.services];
                            newServices[index].title = e.target.value;
                            setFormData(prev => ({ ...prev, services: newServices }));
                          }}
                          className="w-full p-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none bg-white"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-slate-700 mb-1">Icon Name</label>
                        <input 
                          type="text" 
                          value={service.iconName} 
                          onChange={(e) => {
                            const newServices = [...formData.services];
                            newServices[index].iconName = e.target.value;
                            setFormData(prev => ({ ...prev, services: newServices }));
                          }}
                          className="w-full p-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none bg-white"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}
