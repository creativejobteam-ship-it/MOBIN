import React from 'react';
import { Layers, Zap, Search } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Find design patterns in seconds.</h2>
          <div className="flex justify-center gap-2 mt-8">
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg">Screens</button>
            <button className="bg-white text-gray-600 px-5 py-2 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-400 transition-colors">UI Elements</button>
            <button className="bg-white text-gray-600 px-5 py-2 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-400 transition-colors">Flows</button>
          </div>
        </div>

        {/* Feature Grid: UI Elements simulation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 opacity-80 hover:opacity-100 transition-opacity">
           {['Card', 'Button', 'Toast', 'Tab bar', 'Bottom Sheet', 'Dropdown', 'Indicator', 'Sidebar'].map((item, idx) => (
             <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow cursor-pointer group">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <Layers size={24} className="text-gray-400 group-hover:text-blue-500" />
                </div>
                <span className="font-medium text-gray-700">{item}</span>
             </div>
           ))}
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10">Explore entire user journeys with flows.</h2>
          <div className="grid md:grid-cols-2 gap-8">
             {/* Video Card */}
             <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
               <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-6 relative group">
                  <video 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                     <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                     </div>
                  </div>
               </div>
               <h3 className="text-xl font-bold mb-2">Videos</h3>
               <p className="text-gray-500">Experience flows the way they were meant to be experienced, complete with transitions, micro-interactions, and animations.</p>
             </div>

             {/* Prototype Card */}
             <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
               <div className="aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden mb-6 relative p-8 flex items-center justify-center">
                  <div className="relative w-[180px] bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 border-4 border-gray-800">
                     <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" alt="UI" className="w-full h-auto" />
                     <div className="absolute top-1/2 left-1/2 w-8 h-8 -mt-4 -ml-4 bg-blue-500/30 rounded-full animate-ping"></div>
                     <div className="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 bg-blue-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="absolute top-8 right-8 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-medium border border-white/20">
                    Interactive
                  </div>
               </div>
               <h3 className="text-xl font-bold mb-2">Prototype mode</h3>
               <p className="text-gray-500">Walk through flows, step by step, by using the interactive hotspots at your own preferred pace.</p>
             </div>
          </div>
        </div>

        <div className="text-center py-16 bg-black rounded-3xl text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 max-w-2xl mx-auto px-4">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">From inspiration to creation.</h2>
             <p className="text-gray-400 text-lg mb-8">Save hours of UI & UX research with our massive library.</p>
             <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors">
               Start browsing for free
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};