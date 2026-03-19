import { ArrowRight, Calendar, Clock3, PhoneCall, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-primary-100/80 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-secondary-100/70 blur-3xl" />

      <div className="container mx-auto px-4 pt-6 relative z-10">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white/85 px-5 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-neutral-900">Northgate Medical Clinic</div>
              <div className="text-xs text-neutral-500">Primary and Specialist Care</div>
            </div>
          </div>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-2.5 text-sm text-white transition-colors hover:bg-primary-700"
          >
            <Calendar className="h-4 w-4" />
            Book Visit
          </a>
        </header>
      </div>

      <div className="container mx-auto px-4 pb-20 pt-10 relative z-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm text-primary-700">
              <ShieldCheck className="h-4 w-4" />
              Trusted by families since 2014
            </div>

            <h1 className="mb-6 max-w-2xl">
              Professional healthcare with a
              {" "}
              <span className="text-gradient">human touch</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg text-neutral-600">
              Same-week appointments, experienced clinicians, and clear treatment plans for every stage of life.
            </p>

            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-white shadow-lg shadow-primary-600/20 transition-all duration-200 hover:bg-primary-700"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-8 py-4 text-neutral-900 transition-colors hover:bg-neutral-50"
              >
                Contact Clinic
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-neutral-200 pt-8 sm:grid-cols-3">
              <div>
                <div className="text-3xl text-primary-700">12k+</div>
                <div className="text-sm text-neutral-600">Patients served</div>
              </div>
              <div>
                <div className="text-3xl text-primary-700">35+</div>
                <div className="text-sm text-neutral-600">Medical specialists</div>
              </div>
              <div>
                <div className="text-3xl text-primary-700">4.9/5</div>
                <div className="text-sm text-neutral-600">Patient satisfaction</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl shadow-neutral-200/40">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="mb-1">Today&apos;s availability</h3>
                <p className="text-sm text-neutral-500">Updated in real-time</p>
              </div>
              <span className="rounded-lg bg-secondary-100 px-3 py-1 text-sm text-secondary-700">Open</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <Clock3 className="h-4 w-4 text-primary-700" />
                  General Consultation
                </div>
                <span className="text-sm text-neutral-500">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <Clock3 className="h-4 w-4 text-primary-700" />
                  Diagnostics
                </div>
                <span className="text-sm text-neutral-500">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <PhoneCall className="h-4 w-4 text-red-600" />
                  Emergency Line
                </div>
                <span className="text-sm text-red-600">24/7</span>
              </div>
            </div>

            <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm text-primary-700 hover:text-primary-800">
              View full clinic info
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

