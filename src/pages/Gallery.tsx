
import React from 'react';

const Gallery = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-display mb-4">Product Gallery</h1>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Explore our complete collection of premium phone covers
          </p>
        </div>
        
        <div className="glass-card p-12 text-center">
          <h2 className="text-heading mb-4 text-gradient-primary">Coming Soon</h2>
          <p className="text-muted-foreground">
            Our interactive product gallery is currently under development. 
            Check back soon for the full experience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
