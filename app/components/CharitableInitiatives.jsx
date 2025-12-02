
'use client';

import Image from 'next/image';

const CharitableInitiatives = () => {
  const charities = [
    {
      id: 1,
      image: '/prostratecancer.png',
      alt: 'Prostate Cancer Foundation',
    },
    {
      id: 2,
      image: '/americantintus.png',
      alt: 'American Tinnitus Association',
    },
    {
      id: 3,
      image: '/uspain.png',
      alt: 'U.S. Pain Foundation',
    },
    {
      id: 4,
      image: '/americandiabetes.png',
      alt: 'American Diabetes Association',
    },
    {
      id: 5,
      image: '/americanheart.png',
      alt: 'American Heart Association',
    },
  ];

  return (
    <section className="w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/charitable.png"
          alt="Charitable Initiatives Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay - Color kept as per request */}
        <div className="absolute inset-0 bg-[#4A90C8]/90"></div>
      </div>

      <div className="relative z-10 py-12 lg:py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            {/* Grouped Headings */}
            <div className="mb-6">
              <h2 className="text-[32px] md:text-[42px] font-bold text-white leading-[1.2]">
                Our Charitable Initiatives
              </h2>
              <p className="text-[32px] md:text-[42px] font-bold text-white leading-[1.2] mt-1">
                Health Care Desk Gives Back
              </p>
            </div>
            
            {/* Description Text */}
            <p className="text-[16px] md:text-[18px] text-white/90 max-w-4xl mx-auto leading-relaxed font-normal">
              At Health Care Desk, a portion of our profits are committed to supporting charities and global health research initiatives.
            </p>
          </div>

          {/* Charities Logos - Layout matched to image row */}
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 lg:gap-8 mt-16 w-full">
            {charities.map((charity) => (
              <div
                key={charity.id}
                className="relative h-16 w-40 md:h-20 md:w-48 lg:w-56 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={charity.image}
                  alt={charity.alt}
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CharitableInitiatives;