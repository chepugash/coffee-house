import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import Menu from './components/sections/Menu';
import About from './components/sections/About';
import Contacts from './components/sections/Contacts';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Menu />
      <About />
      <Contacts />
    </main>
  );
}
