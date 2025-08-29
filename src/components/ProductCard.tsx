
import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating?: number;
  reviews?: number;
  isNew?: boolean;
  onAddToCart?: () => void;
  onToggleFavorite?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  originalPrice,
  image,
  rating = 5,
  reviews = 0,
  isNew = false,
  onAddToCart,
  onToggleFavorite,
}) => {
  return (
    <div className="product-card group">
      {/* Image Container */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        {isNew && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-gradient-to-r from-gold to-yellow-500 text-gold-foreground px-2 py-1 rounded-md text-xs font-semibold">
              NEW
            </span>
          </div>
        )}
        
        <button
          onClick={onToggleFavorite}
          className="absolute top-3 right-3 z-10 p-2 rounded-full glass-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart className="w-4 h-4" />
        </button>

        <div className="aspect-square bg-muted rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={onAddToCart}
            className="btn-primary flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Rating */}
        {reviews > 0 && (
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < rating ? 'text-gold fill-current' : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        )}

        {/* Title */}
        <h3 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-primary">{price}</span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
