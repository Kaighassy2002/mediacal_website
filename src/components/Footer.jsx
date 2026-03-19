import { Heart, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-900 py-16 text-neutral-300">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="text-xl text-white">Northgate Medical Clinic</span>
            </div>
            <p className="text-neutral-400 text-sm mb-5 leading-relaxed">
              Modern, dependable, and compassionate care for individuals and families.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
              <span className="text-neutral-400">Licensed, certified, and accredited</span>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-neutral-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-primary-400 transition-colors"></span>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#awareness" className="text-neutral-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-primary-400 transition-colors"></span>
                  Health Education
                </a>
              </li>
              <li>
                <a href="#booking" className="text-neutral-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-primary-400 transition-colors"></span>
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-primary-400 transition-colors"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400">123 Medical Center Drive<br />City, State 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@healthcareplus.com" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  info@healthcareplus.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-5">Working Hours</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex justify-between items-center pb-2 border-b border-neutral-800">
                <span>Monday - Friday</span>
                <span className="text-white">8AM - 8PM</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-neutral-800">
                <span>Saturday</span>
                <span className="text-white">9AM - 5PM</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-neutral-800">
                <span>Sunday</span>
                <span className="text-white">10AM - 3PM</span>
              </li>
              <li className="mt-4 flex items-center gap-2 text-xs bg-neutral-800 px-3 py-2 rounded-lg">
                <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
                <span className="text-secondary-400">24/7 Emergency</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © 2026 Northgate Medical Clinic. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-neutral-500">Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span className="text-neutral-500"><a 
            href="https://kaighassy.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 font-semibold transition-all duration-300 relative group"
          >
            <span className="relative z-10">Kaighassy</span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

