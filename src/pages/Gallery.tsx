
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Heart, ShoppingCart, Eye } from 'lucide-react';

// Import demo images
import whiteLinen from '@/assets/table-cover-white-linen.jpg';
import navyBlue from '@/assets/table-cover-navy-blue.jpg';
import burgundy from '@/assets/table-cover-burgundy.jpg';
import gray from '@/assets/table-cover-gray.jpg';
import beigeLeather from '@/assets/table-cover-beige-leather.jpg';
import emerald from '@/assets/table-cover-emerald.jpg';

const products = [
  {
    id: 1,
    name: "Classic White Linen",
    price: "₹2,499",
    image: whiteLinen,
    category: "Premium",
    isNew: true
  },
  {
    id: 2,
    name: "Navy Blue Waterproof",
    price: "₹2,799",
    image: navyBlue,
    category: "Waterproof",
    isNew: false
  },
  {
    id: 3,
    name: "Burgundy Luxury",
    price: "₹3,299",
    image: burgundy,
    category: "Luxury",
    isNew: false
  },
  {
    id: 4,
    name: "Modern Gray",
    price: "₹2,699",
    image: gray,
    category: "Modern",
    isNew: true
  },
  {
    id: 5,
    name: "Beige Leather Look",
    price: "₹3,999",
    image: beigeLeather,
    category: "Premium",
    isNew: false
  },
  {
    id: 6,
    name: "Emerald Green",
    price: "₹3,599",
    image: emerald,
    category: "Luxury",
    isNew: true
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-display mb-4">Product Gallery</h1>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Explore our complete collection of premium table covers designed to protect and enhance your dining experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            {products.map((product) => (
              <Card key={product.id} className="group product-card overflow-hidden border-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {product.isNew && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground">
                      New
                    </Badge>
                  )}
                  
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="icon" variant="secondary" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                    
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="w-full btn-primary">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <span className="text-lg font-bold text-gradient-primary">
                      {product.price}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    Premium quality table cover with superior protection and style
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
