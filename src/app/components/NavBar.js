"use client";
import { useState, useEffect } from 'react';
import styles from '../page.module.css';
import Link from 'next/link';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Check the scroll position to determine whether to hide the navbar
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollY > 50); // Adjust the value as needed
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className={`${styles.navBar} ${isScrolled ? styles.scrolled : ''}`}>
      <ul>
        <li>
          <Link href={'/'}>Inicio</Link>
        </li>
        <li>
          <Link href={'/'}>Sobre Mim</Link>
        </li>
        <li>
          <Link href={'/'}>Projetos</Link>
        </li>
        <li>
          <Link href={'/'}>Contato</Link>
        </li>
      </ul>
    </main>
  );
}
