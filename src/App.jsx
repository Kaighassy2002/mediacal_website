import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Awareness } from './components/Awareness';
import { BookingForm } from './components/BookingForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Awareness />
      <BookingForm />
      <Contact />
      <Footer />
    </div>
  );
}

