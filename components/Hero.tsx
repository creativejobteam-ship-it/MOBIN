import React from 'react';
import { ArrowRight } from 'lucide-react';

const FloatingIcon = ({ src, className, size = 48 }: { src: string; className: string; size?: number }) => (
  <div className={`absolute p-3 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center ${className}`}>
    <img src={src} alt="brand icon" width={size} height={size} className="w-full h-full object-contain" />
  </div>
);

const TrustedLogo = ({ src, name }: { src: string; name: string }) => (
  <img src={src} alt={name} className="h-6 w-auto opacity-40 hover:opacity-70 transition-opacity grayscale" />
);

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      
      {/* Floating Logos - Background Layer */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none select-none">
        {/* Top Center - Shopify (Fixed Size) */}
        <FloatingIcon 
          src="https://cdn.simpleicons.org/shopify/96bf48" 
          className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float w-16 h-16" 
          size={32}
        />
        
        {/* Left Side */}
        <FloatingIcon 
          src="https://cdn.simpleicons.org/slack/4A154B" 
          className="top-20 left-[15%] w-16 h-16 animate-float-delayed" 
          size={32}
        />
        <FloatingIcon 
          src="https://cdn.simpleicons.org/ubereats/06C167" 
          className="top-60 left-[5%] w-14 h-14 animate-float-slow" 
          size={28}
        />
        <FloatingIcon 
          src="https://cdn.simpleicons.org/loom/625DF5" 
          className="bottom-10 left-[20%] w-12 h-12 animate-float" 
          size={24}
        />

        {/* Right Side */}
        <FloatingIcon 
          src="https://cdn.simpleicons.org/notion/000000" 
          className="top-16 right-[18%] w-16 h-16 animate-float-slow" 
          size={32}
        />
        <FloatingIcon 
          src="https://cdn.simpleicons.org/airbnb/FF5A5F" 
          className="top-52 right-[8%] w-14 h-14 animate-float" 
          size={28}
        />
        <FloatingIcon 
          src="https://cdn.simpleicons.org/headspace/F47D31" 
          className="bottom-20 right-[25%] w-12 h-12 animate-float-delayed" 
          size={24}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 mb-8">
            <span className="text-xs font-semibold bg-gray-200 px-1.5 py-0.5 rounded text-gray-700">New</span>
            <span className="text-sm font-medium text-gray-600">Animations are now available on Mobbin</span>
            <ArrowRight size={14} className="text-gray-500" />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
          Discover real-world<br />
          design inspiration.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Featuring over 300,000 screens and 1,000 iOS, Android & Web apps — New content weekly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-gray-200">
            Join for free
          </button>
          <button className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group">
            See our plans
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-100">
          <p className="text-sm text-gray-400 font-medium mb-8">Trusted by design teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 px-4">
            <TrustedLogo src="https://cdn.simpleicons.org/uber/000000" name="Uber" />
            <TrustedLogo src="https://cdn.simpleicons.org/headspace/000000" name="Headspace" />
            <TrustedLogo src="https://cdn.simpleicons.org/meta/000000" name="Meta" />
            <TrustedLogo src="https://cdn.simpleicons.org/airbnb/000000" name="Airbnb" />
            <TrustedLogo src="https://cdn.simpleicons.org/revolut/000000" name="Revolut" />
            <TrustedLogo src="https://cdn.simpleicons.org/pinterest/000000" name="Pinterest" />
          </div>
        </div>
      </div>
    </section>
  );
};