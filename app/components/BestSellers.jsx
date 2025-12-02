
'use client';

import Image from 'next/image';
import Link from 'next/link';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: 'Dent Pure',
      image: '/dentpure.png',
      rating: 5,
    },
    {
      id: 2,
      name: 'True Fem',
      image: '/truefem.png',
      rating: 5,
    },
    {
      id: 3,
      name: 'Vita Renew',
      image: '/vitarenew (2).png',
      rating: 5,
    },
    {
      id: 4,
      name: 'ProstaZen',
      image: '/protazen.png',
      rating: 5,
    },
    {
      id: 5,
      name: 'Nerve Freedom',
      image: '/nervefreedom.png',
      rating: 5,
    },
  ];

  const features = ['Results-Driven', 'All-Natural', 'Non-GMO', 'Cruelty-Free'];

  return (
    <section className="py-12 lg:py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-[48px] font-bold text-black mb-6">
            Our Best Sellers
          </h2>
          <p className="text-[18px] text-gray-800 mb-8 leading-relaxed">
            Formulated with science-backed all-natural ingredients, our unique supplements support holistic health, healing & wellness.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-12 justify-center">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <span className="text-[20px] font-bold text-black">{feature}</span>
                {index < features.length - 1 && (
                  <span className="ml-6 w-px h-8 bg-gray-400"></span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 flex flex-col items-center transition-transform hover:scale-105 duration-300 shadow-sm hover:shadow-md"
            >
              {/* Product Image */}
              <div className="w-full h-[280px] relative mb-6 flex items-center justify-center bg-[#F5F7F9] rounded-xl">
                <div className="relative w-[200px] h-[240px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Product Name */}
              <h3 className="text-[24px] font-bold text-black mb-3 text-center">
                {product.name}
              </h3>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(product.rating)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 fill-[#FFA500]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Shop Now Button - Removed rounded corners */}
              <Link
                href={`/product/${product.id}`}
                className="w-full text-center border-2 border-[#1A69BE] text-[#1A69BE] hover:bg-[#1A69BE] hover:text-white font-semibold text-[16px] py-3 px-6 rounded-none transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;