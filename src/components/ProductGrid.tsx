
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 89
    },
    {
      id: 2,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1527142879-bfb37a1c92de?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 3,
      name: "Coffee Mug",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop",
      rating: 4.3,
      reviews: 73
    },
    {
      id: 4,
      name: "Desk Organizer",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 124
    },
    {
      id: 5,
      name: "Phone Case",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 98
    },
    {
      id: 6,
      name: "Water Bottle",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 201
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Products</h2>
            <p className="text-lg text-gray-600">Browse our complete collection</p>
          </div>
          <Button variant="outline">
            View All Categories
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-200 overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200"></div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">
                    ${product.price}
                  </span>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
