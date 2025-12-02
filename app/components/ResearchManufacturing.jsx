'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const ResearchManufacturing = () => {
  // Define exact styles to match the provided specifications
  const styles = {
    heading: {
      fontFamily: 'var(--font-inter), sans-serif',
      fontWeight: 700,
      fontStyle: 'normal', // "Bold" usually implies normal style
      fontSize: '33.59px',
      lineHeight: '45.59px',
      letterSpacing: '0px',
    },
    subHeadingLarge: {
      // Used for "Formulated with..." and "Sustainable from..."
      fontFamily: 'var(--font-inter), sans-serif',
      fontWeight: 500,
      fontStyle: 'normal', // "Medium"
      fontSize: '23.99px',
      lineHeight: '31.19px',
      letterSpacing: '0.6px',
    },
    // subHeadingSmall is no longer needed
    paragraph: {
      fontFamily: 'var(--font-inter), sans-serif',
      fontWeight: 300,
      fontStyle: 'normal', // "Light"
      fontSize: '21.59px',
      lineHeight: '31.19px',
      letterSpacing: '0.6px',
    },
    button: {
      fontFamily: 'var(--font-inter), sans-serif',
      fontWeight: 400,
      fontSize: '21.59px',
      lineHeight: '50.38px',
    },
  };

  return (
    <section className={`py-12 lg:py-12 bg-white ${inter.variable}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* SECTION 1: Research-Backed Formulations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Left */}
          <div>
            <h3 className="text-black mb-4" style={styles.heading}>
              Research-Backed Formulations
            </h3>
            <p className="text-gray-800 mb-6" style={styles.subHeadingLarge}>
              Formulated with Clinically Tested Ingredients
            </p>
            <p className="text-gray-700 mb-8" style={styles.paragraph}>
              We combine the expertise of our physicians with the latest health
              data and medical research, ensuring every supplement is
              thoughtfully formulated for maximum benefit.
            </p>
            <div className="pt-2">
              <Link
                href="/research"
                className="inline-flex items-center justify-center text-[#1A69BE] hover:bg-[#1A69BE] hover:text-white transition-all duration-300"
                style={{
                  ...styles.button,
                  width: '239.93px',
                  height: '52.78px',
                  border: '1.2px solid #1A69BE',
                }}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image Right */}
          <div className="relative h-[400px] lg:h-[450px] w-full bg-[#F5F7F9] flex items-center justify-center p-8">
            <div className="relative w-full h-full">
              <Image
                src="/researchformulation.jpg"
                alt="Research-Backed Formulations"
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: Eco-Conscious Manufacturing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Left */}
          <div className="relative h-[400px] lg:h-[450px] w-full flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full h-full bg-white shadow-sm rounded-sm">
              <Image
                src="/ecoconsious.jpg"
                alt="Eco-Conscious Manufacturing"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Content Right */}
          <div className="order-1 lg:order-2">
            <h3 className="text-black mb-4" style={styles.heading}>
              Eco-Conscious Manufacturing
            </h3>
            <p className="text-gray-800 mb-6" style={styles.subHeadingLarge}>
              Sustainable from Source to Shelf
            </p>
            <p className="text-gray-700 mb-8" style={styles.paragraph}>
              Our supplements are crafted in certified facilities that meet and
              exceed industry standards — ensuring exceptional quality while
              minimizing environmental impact. Through eco-friendly processes
              and a commitment to reducing our carbon footprint, we create
              wellness solutions that are as good for the planet as they are for
              you.
            </p>
            <div className="pt-2">
              <Link
                href="/manufacturing"
                className="inline-flex items-center justify-center text-[#1A69BE] hover:bg-[#1A69BE] hover:text-white transition-all duration-300"
                style={{
                  ...styles.button,
                  width: '239.93px',
                  height: '52.78px',
                  border: '1.2px solid #1A69BE',
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResearchManufacturing;
