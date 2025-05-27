
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Discover Amazing
              <span className="text-blue-600"> Products</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Shop the latest trends and find everything you need in one place. 
              Quality products, great prices, and fast shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Categories
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg"></div>
                  <div className="h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg"></div>
                  <div className="h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-lg"></div>
                  <div className="h-32 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
