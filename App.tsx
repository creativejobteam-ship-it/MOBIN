import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AppGrid } from './components/AppGrid';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AppGrid />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;