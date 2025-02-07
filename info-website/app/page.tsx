"use client";
import { useState, useEffect } from 'react';
import Bilder from './content/bilder';
import Inhalt from './content/inhalt';
import Kontakt from './content/kontakt';
import Rechtliches from './content/rechtliches';
import Footer from './content/footer';

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12 gap-24">
      <h2 className="mainHeadline text-5xl tracking-[10px] font-semibold font-mono text-[#AE003C]">SchirmerRinke Software Info-Radgeber</h2>

      <div className="flex flex-col gap-20 bg-[#434656] py-10 px-20 rounded w-[80vw] items-center">
        <p className="text-2xl leading-6">In diesem kurzen Infobeitrag erfährst du alles, was du über deine Website wissen musst.</p>
        <div>
          <ol className="landingOL text-2xl text-center tracking-[8px] flex flex-col gap-5">
            <li><a href="#Inhalt">Inhalt</a></li>
            <li><a href="#Bilder">Bilder</a></li>
            <li><a href="#Rechtliches">Rechtliches</a></li>
            <li><a href="#Kontakt">Kontakt</a></li>
          </ol>
        </div>
      </div>
      
      <Inhalt />
      <Bilder />
      <Rechtliches />
      <Kontakt />
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-[#AE003C] text-white p-3 rounded-full shadow-lg hover:bg-[#AC003A] transition duration-300 text-[32px]"
        >
          &nbsp;↑&nbsp;
        </button>
      )}
    </main>
  );
}
