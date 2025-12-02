
'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const BrandTrust = () => {
  const features = [
    {
      id: 1,
      icon: '/allnatural.png',
      title: 'All Natural',
    },
    {
      id: 2,
      icon: '/crueltyfree.png',
      title: 'Cruelty-Free',
    },
    {
      id: 3,
      icon: '/moneyback.png',
      title: 'Money-back Guarantee',
    },
    {
      id: 4,
      icon: '/givingback.png',
      title: 'Giving back',
    },
    {
      id: 5,
      icon: '/nongmo.png',
      title: 'Non-GMO',
    },
  ];

  // Define exact styles for the subtitle
  const subtitleStyle = {
    fontFamily: 'var(--font-inter), sans-serif',
    fontWeight: 400, // Regular
    fontSize: '21.59px',
    lineHeight: '32.39px',
    letterSpacing: '0.6px',
    color: '#374151', // Reverted back to dark gray for light background
  };

  return (
    <section className={`py-12 lg:py-12 bg-white ${inter.variable}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Banner Container */}
        <div className="relative w-full overflow-hidden bg-[#F0F8FF]" style={{ minHeight: '400px' }}>
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/brandbg.jpg"
              alt="Brand Trust Background"
              fill
              className="object-cover"
              priority
              style={{ objectPosition: 'center' }}
            />
          </div>
          
          {/* Overlay - Changed back to white with very low opacity (10%) so the image is very visible and has more "weight" */}
          <div className="absolute inset-0 z-0 bg-white/10"></div>
          
          {/* Content Wrapper */}
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center py-16 px-4">
            
            {/* Section Header */}
            <div className="text-center mb-16 px-4">
              {/* Reverted main text color to black */}
              <h2 className="text-[42px] font-bold text-black mb-4 leading-tight font-sans">
                A Brand That You Can Trust
              </h2>
              {/* Applied specific typography styles here */}
              <p className="text-center max-w-4xl mx-auto" style={subtitleStyle}>
                Our results-driven supplements are made with premium & safe ingredients
              </p>
            </div>

            {/* Features Grid */}
            <div className="w-full max-w-[1200px] grid grid-cols-2 md:grid-cols-5 gap-8 items-start justify-items-center">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex flex-col items-center justify-start group cursor-default w-full"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 relative mb-5 transition-transform duration-300 group-hover:-translate-y-2">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Title - Reverted back to blue */}
                  <h3 className="text-[16px] font-bold text-[#1A69BE] text-center leading-tight font-sans">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandTrust;