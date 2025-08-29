
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import { Star, Shield, Truck, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredProducts = [
    {
      title: "Premium Transparent Table Cover - 1.5mm",
      price: "₹1,499",
      originalPrice: "₹1,899",
      image: "/api/placeholder/300/300",
      rating: 5,
      reviews: 124,
      isNew: true,
    },
    {
      title: "Heavy Duty Table Protection - 2mm",
      price: "₹2,299",
      image: "/api/placeholder/300/300",
      rating: 5,
      reviews: 89,
    },
    {
      title: "Frosted Finish Table Cover - 3mm",
      price: "₹2,999",
      originalPrice: "₹3,499", 
      image: "/api/placeholder/300/300",
      rating: 4,
      reviews: 156,
    },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely love my QlarityCover! The quality is exceptional and it's protected my dining table from scratches and spills perfectly.",
      verified: true,
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Best table cover I've ever owned. Crystal clear transparency preserves the beauty of my wooden table while providing excellent protection.",
      verified: true,
    },
    {
      name: "Emma Davis",
      rating: 5,
      comment: "Premium quality at an affordable price. The custom size fit perfectly and the thickness is just right for daily use.",
      verified: true,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-display mb-4 animate-fade-in">
              Featured <span className="text-gradient-primary">Products</span>
            </h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
              Discover our most popular table covers, engineered for ultimate protection and clarity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop" className="btn-primary">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-display mb-4 animate-fade-in">
              Why Choose <span className="text-gradient-gold">QlarityCovers</span>
            </h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
              Experience the perfect blend of protection, style, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Superior Protection",
                description: "Heat-resistant, waterproof, and scratch-proof protection for your valuable dining table.",
              },
              {
                icon: Star,
                title: "Crystal Clear Quality",
                description: "100% transparent premium PVC material that maintains your table's natural beauty.",
              },
              {
                icon: Truck,
                title: "Fast & Free Shipping",
                description: "Free shipping on all orders over ₹2000 with express delivery options available.",
              },
              {
                icon: Award,
                title: "Custom Sizing",
                description: "Perfect fit guaranteed with our custom measurement and cutting service.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-display mb-4 animate-fade-in">
              What Our <span className="text-gradient-primary">Customers</span> Say
            </h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
              Join thousands of satisfied customers who trust QlarityCovers for their table protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="glass-card p-6 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-current" />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">"{review.comment}"</p>
                
                <div className="font-medium text-sm">{review.name}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact" className="btn-ghost">
              Share Your Review
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-display mb-4 animate-fade-in">
            Ready to Protect Your Table?
          </h2>
          <p className="text-body-large mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in delay-200">
            Experience premium protection with our award-winning table covers. 
            Shop now and get free shipping on orders over ₹2000.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
            <Link to="/shop" className="btn-secondary">
              Shop Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            
            <Link to="/gallery" className="text-white hover:text-gold transition-colors font-medium">
              View Gallery →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
