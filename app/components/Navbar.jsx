
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About Us' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo - Aligned to the left */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Health Desk Clinic"
              width={180}
              height={70}
              priority
              className="w-auto h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation & Cart */}
          <div className="hidden lg:flex items-center gap-12">
            {/* Links */}
            <div className="flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-800 hover:text-[#1A69BE] font-medium text-[17px] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Shopping Cart Icon */}
            <Link
              href="/cart"
              className="hover:opacity-80 transition-opacity duration-200 ml-4"
              aria-label="Shopping Cart"
            >
              <Image
                src="/cart.png"
                alt="Shopping Cart"
                width={28}
                height={28}
                className="w-7 h-7 object-contain opacity-70 hover:opacity-100"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-4">
             <Link
              href="/cart"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src="/cart.png"
                alt="Shopping Cart"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1A69BE]"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full left-0 top-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-[#1A69BE] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;