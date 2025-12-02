
'use client';

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    // Added py-12 lg:py-20 to create the white spacing AROUND the box, similar to the image
    <section className="bg-white w-full flex justify-center items-center py-12 lg:py-20">
      
      {/* INNER CONTAINER: 
        - Removed 'height: calc(100vh...)' so it doesn't stretch
        - Set a fixed minHeight to match the aspect ratio in the image
      */}
      <div 
        className="bg-[#F2F4F7] relative flex flex-col lg:flex-row items-center overflow-hidden shadow-sm"
        style={{
          width: '100%',
          maxWidth: '1311px', 
          minHeight: '500px',
        }}
      >
        
        {/* Left Content (Text) */}
        <div className="w-full lg:w-[55%] px-8 lg:px-16 py-12 lg:py-0 z-10 flex flex-col justify-center h-full min-h-[400px] lg:min-h-[500px]">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-gray-900 leading-[1.1] mb-6">
            Health Desk Clinic:
            <br />
            <span className="block mt-1">All Natural Supplements</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
            Health Care Desk is the premier choice for those seeking wellness
            through wholesome, superfood-enriched formulas that actually work.
            Our all-natural, organic health supplements are designed to give
            your body what it needs to thrive and optimize your health each
            day!
          </p>

          <div>
            <Link
              href="/shop"
              className="inline-block bg-[#1A69BE] hover:bg-[#155a9f] text-white font-semibold text-lg px-10 py-4 rounded-full shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full lg:w-[45%] h-full relative flex items-end justify-center lg:justify-end">
          {/* Matched height to the container height so the image sits at the bottom */}
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <Image
              src="/doc.png"
              alt="Healthcare Professional"
              fill
              priority
              className="object-contain object-bottom lg:object-right-bottom"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
