import { BookOpen, Heart, Play } from 'lucide-react';

const healthTopics = [
  {
    title: 'Understanding Diabetes',
    description: 'Learn about diabetes management, prevention strategies, and healthy lifestyle choices.',
    videoId: 'wZAjVQWbMlE',
    thumbnail: 'https://img.youtube.com/vi/wZAjVQWbMlE/maxresdefault.jpg',
    category: 'Chronic Disease',
    duration: '12 min'
  },
  {
    title: 'Heart Health Tips',
    description: 'Essential tips for maintaining a healthy heart and preventing cardiovascular diseases.',
    videoId: 'XfD_61YqDqg',
    thumbnail: 'https://img.youtube.com/vi/XfD_61YqDqg/maxresdefault.jpg',
    category: 'Cardiology',
    duration: '8 min'
  },
  {
    title: 'Mental Wellness Guide',
    description: 'Practical approaches to managing stress, anxiety, and maintaining mental health.',
    videoId: 'rkZl2gsLUp4',
    thumbnail: 'https://img.youtube.com/vi/rkZl2gsLUp4/maxresdefault.jpg',
    category: 'Mental Health',
    duration: '15 min'
  }
];

const healthTips = [
  { icon: '💧', title: 'Stay Hydrated', tip: 'Drink 8-10 glasses of water daily' },
  { icon: '🏃', title: 'Regular Exercise', tip: '30 minutes of activity, 5 days/week' },
  { icon: '🥗', title: 'Balanced Diet', tip: 'Include fruits, vegetables, whole grains' },
  { icon: '😴', title: 'Quality Sleep', tip: '7-9 hours each night for recovery' }
];

export function Awareness() {
  return (
    <section id="awareness" className="relative bg-white py-24 md:py-28">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-secondary-200 bg-secondary-50 px-4 py-2 text-sm text-secondary-700">
            Patient Education
          </div>
          <h2 className="mb-5">Evidence-based resources for informed health decisions</h2>
          <p className="text-lg text-neutral-600">
            Clear guidance from trusted medical sources to help you understand symptoms, prevention, and treatment options.
          </p>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-7 md:grid-cols-3">
          {healthTopics.map((topic, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-200 hover:border-primary-300 hover:shadow-xl"
            >
              <div className="relative aspect-video bg-neutral-100 overflow-hidden">
                <img
                  src={topic.thumbnail}
                  alt={topic.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-200 group-hover:scale-105">
                    <Play className="ml-0.5 h-6 w-6 text-primary-600" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="rounded-full border border-neutral-200 bg-white/95 px-3 py-1.5 text-xs backdrop-blur-sm">
                    {topic.category}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4">
                  <span className="rounded bg-black/80 px-2 py-1 text-xs text-white">
                    {topic.duration}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 transition-colors group-hover:text-primary-700">{topic.title}</h3>
                <p className="mb-4 text-sm text-neutral-600">
                  {topic.description}
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${topic.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary-700 transition-colors hover:text-primary-800"
                >
                  Watch resource
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-primary-200 bg-gradient-to-br from-primary-50 to-secondary-50 p-8 md:p-12">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary-200 bg-white">
                <Heart className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="mb-1">Daily Health Tips</h3>
                <p className="text-sm text-neutral-600">Simple habits that protect long-term health</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {healthTips.map((item, index) => (
                <div key={index} className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-5 transition-all duration-200 hover:border-primary-300 hover:shadow-md">
                  <div className="flex-shrink-0 text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-600">{item.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

