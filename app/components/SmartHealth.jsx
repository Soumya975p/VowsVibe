'use client';

import Image from 'next/image';
import Link from 'next/link';

const SmartHealth = () => {
  return (
    <section className="py-12 lg:py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[48px] font-bold text-black mb-2 leading-tight">
            Health Care Desk
          </h2>
          <p className="text-[48px] font-bold text-black leading-tight">
            The Future Of Smart Health
          </p>
        </div>

        {/* Description */}
        <div className="text-center mb-16 mx-auto" style={{ width: '1116.855224609375px', height: '94px', opacity: 1 }}>
          <p 
            className="text-gray-700"
            style={{
              fontFamily: 'Inter',
              fontWeight: 300,
              fontSize: '21.59px',
              lineHeight: '31.19px',
              letterSpacing: '0.6px',
              opacity: 1
            }}
          >
            At Health Care Desk, we are committed to producing supplements that harness the power of all-natural superfoods. Our products help support the body's natural processes, improving our customers' quality of life.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative bg-[#F5F7F9] overflow-hidden flex items-center justify-center p-6" style={{ width: '465px', height: '414.46px', opacity: 1 }}>
            <div className="relative w-full h-full">
              <Image
                src="/components.jpg"
                alt="Natural Components"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h3 className="text-[36px] font-bold text-black leading-tight">
              100% Natural Components
            </h3>
            <p className="text-[20px] font-semibold text-gray-800">
              Nature-Powered Wellness You Can Trust
            </p>
            <p 
              className="text-gray-700"
              style={{
                fontFamily: 'Inter',
                fontWeight: 300,
                fontSize: '21.59px',
                lineHeight: '31.19px',
                letterSpacing: '0.6px',
                opacity: 1
              }}
            >
              We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center text-[#1A69BE] hover:bg-[#1A69BE] hover:text-white transition-all duration-300"
                style={{
                  width: '239.93px',
                  height: '52.78px',
                  border: '1.2px solid #1A69BE',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '21.59px',
                  lineHeight: '50.38px',
                  opacity: 1
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

export default SmartHealth;
