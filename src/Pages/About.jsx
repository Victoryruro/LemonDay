import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import image from '../assets/shop.jpg';

export default function About() {
   const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [location.hash]);
  return (
    <div className="bg-primary-50 min-h-screen">   {/* Light cream background */}

    {/* Simple & Elegant About Section with Image */}
    <section className="py-20 mt-4" id='about'>
    <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div className="relative">
            <img 
            src={image} 
            alt="Lemon Day Shop" 
            className="w-full rounded-3xl shadow-lg object-cover h-[520px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-md p-6 max-w-[220px]">
            <p className="text-sm text-gray-500">Our little shop</p>
            <p className="font-medium text-gray-900">Downtown • Since 2024</p>
            </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-8">
            <div>
            <span className="text-primary-600 font-medium">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-2 leading-tight">
                Lemon Day
            </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-[17px] leading-relaxed">
            <p>
                We started Lemon Day with one simple mission: to bring fresh, 
                real lemonade to your doorstep.
            </p>
            <p>
                Every glass is made daily using real lemons, natural ingredients, 
                and a whole lot of care. No artificial flavors, no shortcuts — 
                just honest, refreshing lemonade.
            </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
            <p className="text-sm uppercase tracking-widest text-gray-500">Est. 2024</p>
            </div>
        </div>
        </div>
    </div>
    </section>
      {/* Shop Locations */}
      <section className="py-20" id="shop">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Locations</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location 1 */}
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="text-lime-700" size={32} />
                <div>
                  <h3 className="text-2xl font-semibold">Downtown Store</h3>
                  <p className="text-gray-600">123 Lemon Street, Downtown</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center gap-3">
                  <Clock size={20} className="text-lime-700" /> 
                  Mon–Sun: 8:00 AM - 10:00 PM
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={20} className="text-lime-700" /> 
                  (555) 123-4567
                </p>
              </div>
            </motion.div>

            {/* Location 2 */}
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="text-lime-700" size={32} />
                <div>
                  <h3 className="text-2xl font-semibold">Westside Branch</h3>
                  <p className="text-gray-600">456 Citrus Avenue, Westside</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center gap-3">
                  <Clock size={20} className="text-lime-700" /> 
                  Mon–Sun: 9:00 AM - 9:00 PM
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={20} className="text-lime-700" /> 
                  (+234) 987-6543
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-lime-700 text-white py-20" id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-green-100 mb-10">We'd love to hear from you!</p>

          <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-10 text-left">
              <div className="flex items-start gap-4">
                <Mail className="text-primary-500 mt-1" size={28} />
                <div>
                  <p className="font-medium text-lg">Email Us</p>
                  <a href="mailto:hello@lemonday.com" className="text-primary-500 hover:underline">hello@lemonday.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary-500 mt-1" size={28} />
                <div>
                  <p className="font-medium text-lg">Call Us</p>
                  <p className="text-primary-500">(+234) 987-6543</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none text-white placeholder:text-white/60" 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none text-white placeholder:text-white/60" 
              />
              <textarea 
                placeholder="Your Message" 
                rows="5" 
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none text-white placeholder:text-white/60"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-black font-semibold py-4 rounded-2xl transition-all active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}