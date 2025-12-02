
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const NutritionSolutions = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const solutions = [
    {
      id: 1,
      icon: '/healthcare.png',
      title: 'Memory',
      description: 'Discover memory support products that help enhance focus, clarity, and cognitive performance',
    },
    {
      id: 2,
      icon: '/healthcare.png',
      title: 'Weight Loss',
      description: 'Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you',
    },
    {
      id: 3,
      icon: '/healthcare.png',
      title: 'Nerve Pain',
      description: 'Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function',
    },
    {
      id: 4,
      icon: '/healthcare.png',
      title: 'Skin Care',
      description: 'Explore premium skincare products that nourish, protect, and enhance your natural glow',
    },
    {
      id: 5,
      icon: '/healthcare.png',
      title: "Men's Health",
      description: "Discover men's health products designed to boost energy, strength, and overall well-being",
    },
    {
      id: 6,
      icon: '/healthcare.png',
      title: "Women's Health",
      description: "Explore women's health products that support hormonal balance, vitality, and overall wellness",
    },
    {
      id: 7,
      icon: '/healthcare.png',
      title: 'Dental',
      description: 'Shop dental care products that keep your smile bright, healthy, and confident',
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = scrollContainer.scrollLeft;
    const scrollSpeed = 1;

    let animationFrameId;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;

        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
            scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <section className="py-12 lg:py-12 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[48px] font-bold text-black mb-2 leading-tight">
            Nutrition Solutions
          </h2>
          <p className="text-[48px] font-bold text-black leading-tight">
            for Your Complete Well-Being
          </p>
        </div>

        {/* Scrolling Cards Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden pt-4 pb-12 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Duplicate cards for infinite loop */}
          {[...solutions, ...solutions, ...solutions, ...solutions].map((solution, index) => (
            <div
              key={`${solution.id}-${index}`}
              className="
                flex-shrink-0 w-[300px] rounded-[28px] p-7 
                flex flex-col items-start
                transition-all duration-300 ease-out 
                hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]
                cursor-pointer bg-[#EDF9F6] border border-transparent hover:border-blue-100 hover:bg-white
              "
            >
              {/* Icon - Aligned to Start (Left) */}
              <div className="mb-6">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-50" 
                  style={{ background: 'rgba(174, 203, 250, 0.3)' }}
                >
                  <div className="w-10 h-10 relative">
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Title - Left Aligned */}
              <h3 className="text-[24px] font-bold text-black mb-3 text-left leading-tight">
                {solution.title}
              </h3>

              {/* Description - Left Aligned */}
              <p className="text-[14px] text-left mb-7 leading-relaxed min-h-[70px]" style={{ color: '#7B9DB0' }}>
                {solution.description}
              </p>

              {/* Button */}
              <button 
                className="w-full text-white font-semibold text-[16px] py-3.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
                style={{ background: 'linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)' }}
              >
                Buy now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default NutritionSolutions;