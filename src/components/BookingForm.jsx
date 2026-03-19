import { useState } from 'react';
import { Calendar, User, Phone, Mail, Clock, FileText, CheckCircle, Check } from 'lucide-react';

// Define time slots with availability status
const timeSlots = [
  { time: '9:00 AM', available: true },
  { time: '10:00 AM', available: true },
  { time: '11:00 AM', available: false },
  { time: '12:00 PM', available: true },
  { time: '1:00 PM', available: false },
  { time: '2:00 PM', available: true },
  { time: '3:00 PM', available: true },
  { time: '4:00 PM', available: false },
  { time: '5:00 PM', available: true },
  { time: '6:00 PM', available: true },
];

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTimeSelect = (time) => {
    setFormData({
      ...formData,
      time: time
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        service: '',
        notes: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="bg-neutral-50 py-24 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-3xl border border-secondary-200 bg-white p-12 text-center shadow-xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary-500 shadow-lg shadow-secondary-500/30">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="mb-4 text-secondary-700">Appointment Confirmed!</h2>
              <p className="text-lg text-neutral-600 mb-4">
                Thank you for booking with us. We'll contact you shortly to confirm your appointment details.
              </p>
              <p className="text-neutral-500">
                Payment will be collected at the clinic during your visit.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="relative overflow-hidden bg-neutral-50 py-24 md:py-28">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm text-primary-700">
            Appointment Booking
          </div>
          <h2 className="mb-5">Book an appointment in less than two minutes</h2>
          <p className="mb-6 text-lg text-neutral-600">
            Select your service, preferred date, and available time. Our team confirms all requests promptly.
          </p>
          <div className="inline-flex items-center gap-2 rounded-xl border border-primary-200 bg-white px-5 py-3 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-secondary-500 animate-pulse"></div>
            <span className="text-sm text-neutral-700">Payment at clinic only. No advance fees.</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl md:p-12">
            <div className="mb-10">
              <h3 className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm text-white">1</div>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 mb-3 text-sm text-neutral-700">
                    <User className="w-4 h-4 text-primary-600" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 transition-colors focus:border-primary-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="flex items-center gap-2 mb-3 text-sm text-neutral-700">
                    <Phone className="w-4 h-4 text-primary-600" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 transition-colors focus:border-primary-500 focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="email" className="flex items-center gap-2 mb-3 text-sm text-neutral-700">
                    <Mail className="w-4 h-4 text-primary-600" />
                    <span>Email Address (Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 transition-colors focus:border-primary-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mb-10 border-t border-neutral-200 pt-10">
              <h3 className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm text-white">2</div>
                Appointment Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="flex items-center gap-2 mb-3 text-sm text-neutral-700">
                    <FileText className="w-4 h-4 text-primary-600" />
                    <span>Service Type *</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full cursor-pointer appearance-none rounded-xl border border-neutral-300 bg-white px-4 py-3.5 transition-colors focus:border-primary-500 focus:outline-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%2352525b' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Consultation</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="diagnostics">Diagnostics</option>
                    <option value="family">Family Medicine</option>
                    <option value="emergency">Emergency Care</option>
                    <option value="preventive">Preventive Care</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="flex items-center gap-2 mb-3 text-sm text-neutral-700">
                    <Calendar className="w-4 h-4 text-primary-600" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 transition-colors focus:border-primary-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mb-10 border-t border-neutral-200 pt-10">
              <h3 className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm text-white">3</div>
                Select Time Slot *
              </h3>

              <div className="mb-6 flex flex-wrap gap-6 border-b border-neutral-200 pb-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-5 w-5 rounded-lg border border-primary-500 bg-primary-100"></div>
                  <span className="text-neutral-600">Available</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-5 w-5 rounded-lg border border-neutral-300 bg-neutral-100"></div>
                  <span className="text-neutral-600">Unavailable</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-5 w-5 rounded-lg border border-secondary-600 bg-secondary-500"></div>
                  <span className="text-neutral-600">Selected</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {timeSlots.map((slot) => {
                  const isSelected = formData.time === slot.time;
                  const isAvailable = slot.available;
                  
                  return (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => isAvailable && handleTimeSelect(slot.time)}
                      disabled={!isAvailable}
                      className={`
                        relative min-h-[64px] touch-manipulation rounded-xl border px-4 py-4 transition-all duration-200
                        ${isAvailable 
                          ? isSelected
                            ? 'scale-105 border-secondary-600 bg-secondary-500 text-white shadow-lg shadow-secondary-500/30'
                            : 'border-primary-500 bg-primary-50 text-primary-700 hover:scale-105 hover:bg-primary-100 hover:shadow-md active:scale-95'
                          : 'cursor-not-allowed border-neutral-300 bg-neutral-100 text-neutral-400 opacity-50'
                        }
                      `}
                    >
                      {isSelected && (
                        <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-secondary-600 bg-white shadow-lg">
                          <Check className="w-4 h-4 text-secondary-600" strokeWidth={3} />
                        </div>
                      )}

                      <div className="flex flex-col items-center justify-center">
                        <Clock className={`w-5 h-5 mb-1 ${isSelected ? 'text-white' : isAvailable ? 'text-primary-600' : 'text-neutral-400'}`} />
                        <span className={`text-sm ${isSelected ? 'font-bold' : 'font-semibold'}`}>
                          {slot.time}
                        </span>
                        {!isAvailable && (
                          <span className="text-xs mt-1">Booked</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <input type="hidden" name="time" value={formData.time} required />

              {formData.time && (
                <div className="mt-6 flex items-center gap-3 rounded-xl border border-secondary-200 bg-secondary-50 px-5 py-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary-500">
                    <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-600">Time Slot Selected</div>
                    <div className="text-secondary-700">{formData.time}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-10 border-t border-neutral-200 pt-10">
              <label htmlFor="notes" className="flex items-center gap-2 mb-3 text-sm text-neutral-700">
                <FileText className="w-4 h-4 text-primary-600" />
                <span>Additional Notes (Optional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your symptoms or any specific concerns..."
                className="w-full resize-none rounded-xl border border-neutral-300 bg-white px-4 py-3.5 transition-colors focus:border-primary-500 focus:outline-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-primary-600 py-5 text-white shadow-lg shadow-primary-600/20 transition-colors duration-200 hover:bg-primary-700"
              >
                <Calendar className="w-5 h-5" />
                <span className="text-lg">Confirm Appointment</span>
                <Check className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <p className="mt-4 text-center text-sm text-neutral-500">
                We'll confirm your appointment within 24 hours via phone or email
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

