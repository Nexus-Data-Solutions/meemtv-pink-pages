import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/e4e3c38f-40b3-444c-83de-4b379364c6e2.png" 
              alt="MEEM TV Logo" 
              className="h-16 w-auto"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              MEEM TV is Hyderabad's leading news channel, delivering accurate and timely news 
              from across Telangana, India, and the world.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Live TV</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Breaking News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Sports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Entertainment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Weather</a></li>
            </ul>
          </div>

          {/* News Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">News Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Hyderabad News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Telangana News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">National News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">International</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Technology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Business</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  MEEM TV Headquarters<br />
                  HITEC City, Hyderabad<br />
                  Telangana, India
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 40 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">contact@meemtv.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MEEM TV. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Advertise</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;