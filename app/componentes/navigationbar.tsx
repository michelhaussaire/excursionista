'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NavigationBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú móvil
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-4">
      <div className="hidden md:block">
        <Image
          alt="Logo"
          src="/imagenes/logo.png"
          width={55}
          height={55}
        />
      </div>

      <div className="hidden md:flex gap-8 font-semibold text-lg mx-8">
        <Link href="/">Home</Link>
        <Link href="/servicios">Servicios</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/contacto">Contacto</Link>
      </div>

      <div className="md:hidden">
        <Image
          alt="Logo"
          src="/imagenes/logo.png"
          width={55}
          height={55}
        />
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center font-semibold text-lg gap-2">
          <Link href="/" onClick={toggleMobileMenu}>Home</Link>
          <Link href="/servicios" onClick={toggleMobileMenu}>Servicios</Link>
          <Link href="/nosotros" onClick={toggleMobileMenu}>Nosotros</Link>
          <Link href="/contacto" onClick={toggleMobileMenu}>Contacto</Link>
        </div>
      </div>

      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <svg
          className={`w-6 h-6 ${isMobileMenuOpen ? 'text-black-500' : 'text-black'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
          />
        </svg>
      </button>
    </nav>
  );
};

export default NavigationBar;
