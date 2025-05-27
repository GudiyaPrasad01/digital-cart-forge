
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Users, Award, Truck, Shield, HeartHandshake } from 'lucide-react';

const About = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const stats = [
    { label: "Happy Customers", value: "50,000+", icon: Users },
    { label: "Products Sold", value: "1M+", icon: Award },
    { label: "Years Experience", value: "10+", icon: Star },
    { label: "Countries Served", value: "25+", icon: Truck }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We ensure every product meets our high-quality standards before reaching you."
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Quick and reliable delivery to get your orders to you as soon as possible."
    },
    {
      icon: HeartHandshake,
      title: "Customer First",
      description: "Your satisfaction is our priority. We're here to help every step of the way."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onCartClick={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">ShopZone</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about bringing you the best products at unbeatable prices. 
            Since 2014, we've been your trusted partner for quality shopping experiences.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600">
                From humble beginnings to becoming your favorite shopping destination
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                  alt="Our story"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Building Trust Through Quality
                </h3>
                <p className="text-gray-600 mb-6">
                  What started as a small vision to make quality products accessible to everyone 
                  has grown into a thriving marketplace trusted by thousands of customers worldwide.
                </p>
                <p className="text-gray-600 mb-6">
                  We believe that everyone deserves access to great products without breaking the bank. 
                  That's why we work tirelessly to curate the best selection and negotiate the best prices for you.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Start Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default About;
