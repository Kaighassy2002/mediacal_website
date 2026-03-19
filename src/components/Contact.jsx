import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm text-primary-700">
            Contact and Access
          </div>
          <h2 className="mb-5">Speak with our team whenever you need support</h2>
          <p className="text-lg text-neutral-600">
            Our reception and patient support teams are available across phone, chat, and email.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <h3 className="mb-8">Contact Information</h3>

            <div className="group flex gap-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-200 hover:border-primary-300 hover:bg-primary-50">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-600 transition-transform group-hover:scale-105">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2">Visit Us</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  123 Medical Center Drive<br />
                  Suite 100, Healthcare District<br />
                  City, State 12345
                </p>
              </div>
            </div>

            <div className="group flex gap-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-200 hover:border-primary-300 hover:bg-primary-50">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-600 transition-transform group-hover:scale-105">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2">Call Us</h4>
                <a href="tel:+11234567890" className="text-primary-600 hover:text-primary-700 transition-colors">
                  +1 (123) 456-7890
                </a>
                <p className="text-neutral-500 text-sm mt-1">Available 24/7</p>
              </div>
            </div>

            <div className="group flex gap-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-200 hover:border-primary-300 hover:bg-primary-50">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-600 transition-transform group-hover:scale-105">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2">Email Us</h4>
                <a href="mailto:info@healthcareplus.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                  info@healthcareplus.com
                </a>
                <p className="text-neutral-500 text-sm mt-1">Response within 24 hours</p>
              </div>
            </div>

            <div className="flex gap-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-700">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2">Working Hours</h4>
                <div className="text-neutral-600 text-sm space-y-1">
                  <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: 10:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-8">Quick Access</h3>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href="https://wa.me/11234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-gradient-to-br from-secondary-600 to-secondary-700 p-6 text-white transition-all duration-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 transition-colors group-hover:bg-white/30">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-white mb-1">WhatsApp</h4>
                  <p className="text-sm text-secondary-100">Chat with reception</p>
                </div>
              </a>

              <a
                href="tel:+11234567890"
                className="group flex items-center gap-4 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-6 text-white transition-all duration-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 transition-colors group-hover:bg-white/30">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="mb-1 text-white">Call Clinic</h4>
                  <p className="text-sm text-primary-100">Talk to our care team</p>
                </div>
              </a>

              <a
                href="mailto:info@healthcareplus.com"
                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:border-primary-300 hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-100 transition-colors group-hover:bg-primary-50">
                  <Mail className="h-7 w-7 text-primary-700" />
                </div>
                <div>
                  <h4 className="mb-1">Email Support</h4>
                  <p className="text-sm text-neutral-600">Questions, reports, and follow-up</p>
                </div>
              </a>

              <a
                href="#booking"
                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:border-primary-300 hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-100 transition-colors group-hover:bg-primary-50">
                  <Send className="h-7 w-7 text-primary-700" />
                </div>
                <div>
                  <h4 className="mb-1">Book Appointment</h4>
                  <p className="text-sm text-neutral-600">Choose a time online</p>
                </div>
              </a>
            </div>

            <div className="rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-600">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-red-900 mb-2">Medical Emergency?</h4>
                  <p className="text-red-700 mb-3 text-sm">
                    For life-threatening emergencies, call 911 immediately or visit the nearest emergency room.
                  </p>
                  <a 
                    href="tel:+11234567890" 
                    className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm text-white transition-colors hover:bg-red-700"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Emergency Line</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

