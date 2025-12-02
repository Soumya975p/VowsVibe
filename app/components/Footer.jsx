
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Send, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Top Section with Logo and Social */}
      {/* Reduced py-10 to py-5 to bring it closer to the Testimonials section above */}
      <div className="py-5 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            
            {/* LOGO SECTION */}
            <div className="relative mb-0 p-0">
              <Image
                src="/Health.png"
                alt="Health Desk Clinic"
                width={350} 
                height={166}
                className="object-contain"
                style={{ width: '350px', height: 'auto' }}
                priority
              />
            </div>

            {/* Follow Us Button */}
            <Link
              href="#"
              className="flex items-center justify-center hover:bg-[#1A69BE] hover:text-white font-semibold transition-all duration-300 mb-4 mt-2"
              style={{
                width: '203.94px',
                height: '43.19px',
                border: '1.2px solid #1A69BE',
                background: '#FFFFFF',
                color: '#1A69BE',
                borderRadius: '0' 
              }}
            >
              <span style={{ 
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%'
              }}>
                Follow Us
              </span>
            </Link>

            {/* Social Icons - Single Image */}
            <div className="flex justify-center">
              <Image
                src="/social.png"
                alt="Social Media Icons"
                width={208}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Info Cards */}
      <div className="w-full bg-[#F2F3F5]" style={{ minHeight: '457px' }}>
        <div className="max-w-[1440px] mx-auto py-20 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-8 lg:px-[87px] w-full">
            
            {/* Have a Question */}
            <div className="flex flex-col items-start">
              <h3 
                className="text-black mb-6 font-medium"
                style={{ fontSize: '28.79px', lineHeight: '35.99px', letterSpacing: '0.6px' }}
              >
                Have a Question?
              </h3>
              <p 
                className="text-gray-700 mb-8 font-light"
                style={{ fontSize: '21.59px', lineHeight: '31.19px', letterSpacing: '0.6px', maxWidth: '308px' }}
              >
                Check out our FAQs where we answer the most commonly asked questions
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center text-[#1A69BE] hover:bg-[#1A69BE] hover:text-white font-normal transition-all duration-300"
                style={{ 
                  width: '203.94px',
                  height: '43.19px',
                  border: '1.2px solid #1A69BE',
                  fontSize: '19.19px',
                }}
              >
                Read FAQs
              </Link>
            </div>

            {/* Connect With Us */}
            <div className="flex flex-col items-start md:pl-12">
              <h3 
                className="text-black mb-6 font-medium"
                style={{ fontSize: '28.79px', lineHeight: '35.99px', letterSpacing: '0.6px' }}
              >
                Connect With Us
              </h3>
              <p 
                className="text-gray-700 mb-6 font-light"
                style={{ fontSize: '21.59px', lineHeight: '31.19px', letterSpacing: '0.6px' }}
              >
                Enjoy free shipping for all orders.
              </p>
              <a
                href="tel:1-800-822-7777"
                className="text-black hover:text-[#1A69BE] transition-colors duration-300 font-bold"
                style={{ fontSize: '28.79px', lineHeight: '35.99px' }}
              >
                1-800-822-7777
              </a>
            </div>

            {/* We're Social */}
            <div className="flex flex-col items-start md:pl-12">
              <h3 
                className="text-black mb-4 font-medium"
                style={{ fontSize: '28.79px', lineHeight: '35.99px', letterSpacing: '0.6px' }}
              >
                We're Social
              </h3>
              <p 
                className="text-gray-700 font-light"
                style={{ fontSize: '21.59px', lineHeight: '31.19px', letterSpacing: '0.6px' }}
              >
                Like us, love us, follow us!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full bg-[#1A69BE]" style={{ height: '121px' }}>
        <div className="max-w-[1170px] mx-auto h-full flex items-center justify-between px-4">
          <div style={{ maxWidth: '561px' }}>
            <h3 className="text-[32px] font-bold text-white leading-tight">
              Let's Grow Together
            </h3>
            <p className="text-[16px] text-white mt-1">
              We'll keep it simple. Only the news and updates you need.
            </p>
          </div>

          <div className="flex w-full max-w-[585px] h-[54px]">
            <input
              type="email"
              placeholder="Please Enter Your Email"
              className="flex-1 px-6 text-white placeholder-white bg-transparent border border-white focus:outline-none h-full"
              style={{ borderRadius: '0' }}
            />
            <button
              className="bg-white text-black font-bold px-8 transition-colors duration-300 h-full"
              style={{ borderRadius: '0' }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="py-12 bg-white border-t border-[#1A69BE]">
        <div className="max-w-[1435px] mx-auto px-4 flex flex-col md:flex-row gap-12">
          
          {/* Address Block */}
          <div className="flex-shrink-0 w-full md:w-[280px]">
            <div className="mb-6">
              <Image
                src="/healthcare.png"
                alt="Health Desk Clinic"
                width={120}
                height={48}
                className="w-auto h-12"
              />
            </div>
            <div className="text-[14px] text-[#5C5C5C] leading-[1.6] space-y-1 font-normal">
              <p>Address: 7823 Red Oak Trail, Austin,</p>
              <p>TX, 78745, United States</p>
              <p>Phone: (512) 555-2376</p>
              <p>Email: Ereforce@outlook.com</p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1px] bg-black self-stretch"></div>

          {/* Product Links Grid */}
          <div className="flex-1 pt-2">
            <h4 className="text-[18px] font-bold text-[#1A69BE] mb-6">Our Products</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
              <ul className="space-y-3 text-[14px] text-gray-700">
                <li><Link href="#" className="hover:text-[#1A69BE]">Vita Renew</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">Testobites</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">Audizen</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">Nerve Flow</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">Uro flow</Link></li>
              </ul>
              <ul className="space-y-3 text-[14px] text-gray-700">
                <li><Link href="#" className="hover:text-[#1A69BE]">Vita Renew</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">Testobites</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">Audizen</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">Nerve Flow</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">Memof</Link></li>
              </ul>
              <ul className="space-y-3 text-[14px] text-gray-700">
                <li><Link href="#" className="hover:text-[#1A69BE]">Vita Renew</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">Testobites</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">Audizen</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">Nerve Flow</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">TestoZen</Link></li>
              </ul>
              <ul className="space-y-3 text-[14px] text-gray-700">
                <li><Link href="#" className="hover:text-[#1A69BE]">Vita Renew</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">Testobites</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">Audizen</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">Nerve Flow</Link></li>
                <li><Link href="#" className="hover:text-[#1A69BE]">True Fem</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="py-[25px] bg-[#E7E6E6]">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <p className="text-[14px] text-gray-600 mb-2">
            These statements have not been evaluated by the Food and Drug Administration.
          </p>
          <p className="text-[14px] text-gray-600 mb-6">
            These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.
          </p>
          
          <div className="flex justify-center gap-3 mb-8">
            <Image src="/payment.png" alt="Payment Methods" width={250} height={40} className="h-10 w-auto" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-300 pt-6">
            <p className="text-[14px] text-gray-600">
              © 2025, Health Desk Clinic. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-[14px] text-gray-600">
              <Link href="#" className="hover:text-[#1A69BE]">Terms And Conditions</Link>
              <Link href="#" className="hover:text-[#1A69BE]">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#1A69BE]">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;