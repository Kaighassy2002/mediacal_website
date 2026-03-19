import { Activity, ArrowRight, Heart, Shield, Stethoscope, Users, Zap } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'General Consultation',
    description: 'Comprehensive assessments, diagnosis, and treatment plans with continuity of care.',
    color: 'primary'
  },
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Specialist heart care, preventive screening, and long-term cardiovascular management.',
    color: 'rose'
  },
  {
    icon: Activity,
    title: 'Diagnostics',
    description: 'On-site testing and diagnostic support for faster results and informed treatment.',
    color: 'purple'
  },
  {
    icon: Users,
    title: 'Family Medicine',
    description: 'Whole-family healthcare, from pediatric checkups to adult chronic care support.',
    color: 'secondary'
  },
  {
    icon: Zap,
    title: 'Emergency Care',
    description: 'Rapid urgent response for acute issues with clear follow-up pathways.',
    color: 'accent'
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Vaccination programs, annual screenings, and proactive risk reduction plans.',
    color: 'teal'
  }
];

const colorMap = {
  primary: { bg: 'bg-primary-50', border: 'border-primary-200', icon: 'text-primary-600', hover: 'hover:border-primary-400' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', icon: 'text-rose-600', hover: 'hover:border-rose-400' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', hover: 'hover:border-purple-400' },
  secondary: { bg: 'bg-secondary-50', border: 'border-secondary-200', icon: 'text-secondary-600', hover: 'hover:border-secondary-400' },
  accent: { bg: 'bg-accent-50', border: 'border-accent-200', icon: 'text-accent-600', hover: 'hover:border-accent-400' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-200', icon: 'text-teal-600', hover: 'hover:border-teal-400' }
};

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-neutral-50 py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-primary-200 bg-white px-4 py-2 text-sm text-primary-700">
            Clinical Services
          </div>
          <h2 className="mb-5">Healthcare services built around quality and trust</h2>
          <p className="text-lg text-neutral-600">
            We combine specialist expertise with coordinated care so every visit is efficient, clear, and patient focused.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorMap[service.color];
            return (
              <div
                key={index}
                className={`group rounded-2xl border ${colors.border} bg-white p-7 transition-all duration-200 ${colors.hover} hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className={`${colors.bg} flex h-14 w-14 items-center justify-center rounded-xl`}>
                    <Icon className={`h-7 w-7 ${colors.icon}`} />
                  </div>
                  <span className="rounded-lg bg-neutral-100 px-2.5 py-1 text-xs text-neutral-500">Specialty</span>
                </div>

                <h3 className="mb-2">{service.title}</h3>
                <p className="mb-6 text-neutral-600">{service.description}</p>

                <a href="#booking" className={`inline-flex items-center gap-2 text-sm ${colors.icon}`}>
                  Book this service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-neutral-200 bg-white px-6 py-5 text-center md:flex md:items-center md:justify-between md:text-left">
          <p className="text-neutral-600">Need specialist support not listed here?</p>
          <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 md:mt-0">
            Speak with our care coordinator
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

