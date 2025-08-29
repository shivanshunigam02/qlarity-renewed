
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium">Premium Protection Since 2020</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-hero mb-6 animate-slide-up">
            Premium <span className="text-gradient-primary">Phone Covers</span> for
            <br />
            <span className="text-gradient-gold">Ultimate Protection</span>
          </h1>

          {/* Subtitle */}
          <p className="text-body-large text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up delay-200">
            Discover our collection of ultra-durable, stylish phone covers designed to protect 
            your device while expressing your unique style. Engineered for perfection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up delay-300">
            <Link to="/shop" className="btn-primary flex items-center space-x-2">
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link to="/gallery" className="btn-ghost flex items-center space-x-2">
              <span>View Gallery</span>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-scale-in delay-500">
            <div className="glass-card p-6 text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Military Grade</h3>
              <p className="text-sm text-muted-foreground">Drop protection up to 12 feet</p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <Star className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Premium Materials</h3>
              <p className="text-sm text-muted-foreground">High-quality polycarbonate & TPU</p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xs font-bold">∞</span>
              </div>
              <h3 className="font-semibold mb-2">Lifetime Warranty</h3>
              <p className="text-sm text-muted-foreground">We stand behind our quality</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
