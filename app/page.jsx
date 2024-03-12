'use client'
import About from './About/page';
import Home from './Home/page'
import Portfolio from './Portfolio/page';
import Skills from './Skills/page';
import Cv from './Cv/page'
import Contact from './Contact/page'
import Footer from './Footer/page';
import Service from './Service/page';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    {
    }
  }, [])

  return (
    <>
      <main>
        <section id="Home">
          <Home />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Portfolio">
          <Portfolio />
        </section>
        <section id="Cv">
          <Cv />
        </section>
        <section id="Contact">
          <Contact />
        </section>
        <section id="Service">
          <Service />
        </section>
        <section id="Footer">
          <Footer />
        </section>
      </main>
    </>
  );
}
