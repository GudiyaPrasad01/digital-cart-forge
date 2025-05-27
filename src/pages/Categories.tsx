
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Categories = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Latest gadgets and tech accessories",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
      itemCount: 245
    },
    {
      id: 2,
      name: "Fashion",
      description: "Trendy clothing and accessories",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      itemCount: 189
    },
    {
      id: 3,
      name: "Home & Garden",
      description: "Everything for your home and garden",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      itemCount: 156
    },
    {
      id: 4,
      name: "Sports & Outdoors",
      description: "Gear for active lifestyles",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      itemCount: 198
    },
    {
      id: 5,
      name: "Books & Media",
      description: "Books, movies, and entertainment",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      itemCount: 167
    },
    {
      id: 6,
      name: "Health & Beauty",
      description: "Personal care and wellness products",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
      itemCount: 134
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onCartClick={() => setIsCartOpen(true)} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of product categories and find exactly what you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {category.itemCount} items
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Browse {category.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Categories;
