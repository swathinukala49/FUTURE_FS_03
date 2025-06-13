'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  User, 
  Menu, 
  X, 
  ArrowRight,
  Star,
  Truck,
  Shield,
  Sparkles,
  TrendingUp,
  Award,
  Zap,
  Crown,
  Gift,
  Shirt,
  Watch,
  Footprints,
  Glasses
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    {
      name: 'Women\'s Fashion',
      description: 'Trendy & Elegant',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
      icon: Shirt,
      count: '2.5K+ Items'
    },
    {
      name: 'Men\'s Collection',
      description: 'Bold & Sophisticated',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      icon: Watch,
      count: '1.8K+ Items'
    },
    {
      name: 'Footwear',
      description: 'Step in Style',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      icon: Footprints,
      count: '900+ Items'
    },
    {
      name: 'Accessories',
      description: 'Complete Your Look',
      image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg',
      icon: Glasses,
      count: '650+ Items'
    }
  ];

  const featuredProducts = [
    {
      name: 'Designer Silk Dress',
      brand: 'Luxury Label',
      price: '₹4,999',
      originalPrice: '₹8,999',
      discount: '44% OFF',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
      rating: 4.8,
      reviews: 234,
      badge: 'Trending',
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1']
    },
    {
      name: 'Premium Leather Jacket',
      brand: 'Urban Edge',
      price: '₹7,499',
      originalPrice: '₹12,999',
      discount: '42% OFF',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      rating: 4.9,
      reviews: 189,
      badge: 'Best Seller',
      colors: ['#2C3E50', '#8B4513', '#000000']
    },
    {
      name: 'Athletic Sneakers',
      brand: 'SportMax',
      price: '₹3,299',
      originalPrice: '₹5,999',
      discount: '45% OFF',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      rating: 4.7,
      reviews: 456,
      badge: 'New Arrival',
      colors: ['#FFFFFF', '#FF6B35', '#1A1A1A']
    },
    {
      name: 'Designer Sunglasses',
      brand: 'Optic Luxury',
      price: '₹2,199',
      originalPrice: '₹4,499',
      discount: '51% OFF',
      image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg',
      rating: 4.6,
      reviews: 123,
      badge: 'Limited Edition',
      colors: ['#000000', '#8B4513', '#FFD700']
    },
    {
      name: 'Casual Cotton Shirt',
      brand: 'Comfort Wear',
      price: '₹1,799',
      originalPrice: '₹2,999',
      discount: '40% OFF',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      rating: 4.5,
      reviews: 567,
      badge: 'Popular',
      colors: ['#87CEEB', '#FFFFFF', '#FFB6C1']
    },
    {
      name: 'Evening Gown',
      brand: 'Glamour House',
      price: '₹9,999',
      originalPrice: '₹18,999',
      discount: '47% OFF',
      image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg',
      rating: 4.9,
      reviews: 89,
      badge: 'Exclusive',
      colors: ['#8B008B', '#000080', '#DC143C']
    }
  ];

  const brands = [
    { name: 'Zara', logo: 'Z', color: 'from-gray-800 to-black' },
    { name: 'H&M', logo: 'H&M', color: 'from-red-500 to-red-700' },
    { name: 'Nike', logo: 'N', color: 'from-orange-500 to-red-500' },
    { name: 'Adidas', logo: 'A', color: 'from-blue-500 to-blue-700' },
    { name: 'Puma', logo: 'P', color: 'from-yellow-500 to-orange-500' },
    { name: 'Levi\'s', logo: 'L', color: 'from-indigo-500 to-purple-600' }
  ];

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders above ₹1,999'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% secure transactions'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Premium quality guarantee'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Express delivery available'
    }
  ];

  const heroSlides = [
    {
      title: 'Fashion Forward',
      subtitle: 'Future Ready',
      description: 'Discover the latest trends in sustainable fashion',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
      cta: 'Shop Women\'s'
    },
    {
      title: 'Bold & Sophisticated',
      subtitle: 'Men\'s Collection',
      description: 'Elevate your style with premium menswear',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      cta: 'Shop Men\'s'
    },
    {
      title: 'Step in Style',
      subtitle: 'Footwear Collection',
      description: 'From casual to formal, find your perfect pair',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      cta: 'Shop Shoes'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 fashion-gradient rounded-xl flex items-center justify-center brand-shadow">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-2xl font-bold gradient-text font-playfair">AJIO</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Women</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Men</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Kids</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Beauty</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Brands</a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <Button variant="ghost" size="sm" className="p-2">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </Button>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">Women</a>
              <a href="#" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">Men</a>
              <a href="#" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">Kids</a>
              <a href="#" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">Beauty</a>
              <a href="#" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">Home</a>
              <a href="#" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">Brands</a>
              <div className="flex items-center space-x-4 pt-4 border-t">
                <Button variant="ghost" size="sm" className="p-2">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>
          ))}
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 left-20 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-yellow-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 text-left px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in font-playfair">
              {heroSlides[currentSlide].title}
              <span className="block gradient-text text-shadow">
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-xl animate-slide-up">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <Button size="lg" className="fashion-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold rounded-full brand-shadow">
                {heroSlides[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full">
                Explore Trends
              </Button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 text-center md:text-left justify-center md:justify-start">
                <div className="w-10 h-10 fashion-gradient rounded-full flex items-center justify-center">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our curated collections designed for every style and occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg category-hover cursor-pointer">
                <div className="relative h-80">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                    <p className="text-white/80 text-sm mb-2">{category.description}</p>
                    <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                      {category.count}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              Trending Now
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked favorites from our latest collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg product-hover cursor-pointer">
                <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="fashion-gradient text-white border-0">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button variant="ghost" size="sm" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30">
                      <Heart className="h-4 w-4 text-white" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-red-500 text-white border-0">
                      {product.discount}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                      <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      {product.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-6 h-6 rounded-full border-2 border-gray-200"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>
                  
                  <Button className="w-full fashion-gradient text-white rounded-full">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold rounded-full border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              Premium Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shop from the world's most coveted fashion brands
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${brand.color} rounded-2xl flex items-center justify-center brand-shadow group-hover:scale-110 transition-transform`}>
                  <span className="text-white font-bold text-lg">{brand.logo}</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 fashion-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Crown className="h-16 w-16 text-white mx-auto mb-4 animate-float" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-playfair">
            Join the Fashion Elite
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be the first to know about exclusive collections, special offers, and fashion insights. 
            Join over 100K+ fashion enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
              Subscribe
              <Gift className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            *Get 20% off on your first purchase. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 fashion-gradient rounded-xl flex items-center justify-center brand-shadow">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-2xl font-bold gradient-text font-playfair">AJIO</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Fashion Forward, Future Ready. Discover the latest trends in sustainable fashion 
                with our curated collection of premium brands.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                  <span className="text-sm">ig</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Shop</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Women's Fashion</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Men's Collection</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kids Wear</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Footwear</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beauty</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Customer Care</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About AJIO</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investor Relations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Affiliate Program</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2024 AJIO Fashion. All rights reserved. | Privacy Policy | Terms of Service
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">Secure payments powered by</span>
                <div className="flex space-x-2">
                  <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">V</span>
                  </div>
                  <div className="w-8 h-6 bg-red-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <div className="w-8 h-6 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}