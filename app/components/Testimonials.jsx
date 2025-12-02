
// 'use client';

// import Image from 'next/image';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       product: 'TestoBites',
//       image: '/testobites.png',
//       rating: 5,
//       // Using JSX with <br/> to force exact line breaks as requested
//       review: (
//         <>
//           TestoBites has been a<br />
//           game changer when it<br />
//           comes to my stamina and<br />
//           energy levels. I can truly<br />
//           feel a difference in my sex<br />
//           drive and virility as well.<br />
//           Highly recommended.
//         </>
//       ),
//       author: 'Ryan R.',
//     },
//     {
//       id: 2,
//       product: 'Vita Renew',
//       image: '/dermacare.png',
//       rating: 5,
//       review: (
//         <>
//           My pain therapist<br />
//           recommended this product<br />
//           to me and I was surprised<br />
//           by how well it worked. I can<br />
//           see a marked improvement<br />
//           in my Skin Care.
//         </>
//       ),
//       author: 'Jamie Fields',
//     },
//     {
//       id: 3,
//       product: 'Nerve Freedom',
//       image: '/nervefreedom.png',
//       rating: 5,
//       review: (
//         <>
//           I have been an RN for 20<br />
//           years and love helping<br />
//           people find solutions to their<br />
//           health issues.NF Product is<br />
//           the best natural product for<br />
//           neuropathy pain hands<br />
//           down.
//         </>
//       ),
//       author: 'Anonymous',
//     },
//   ];

//   return (
//     <section className="py-12 lg:py-12 bg-white">
//       {/* Container max-width adjusted to fit 3 cards + gaps */}
//       <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="text-center mb-24">
//           <h2 className="text-[48px] font-bold text-black leading-tight">
//             Verified Customer Testimonials
//           </h2>
//         </div>

//         {/* Flex Container with Gap
//            - justify-center: Centers the row
//            - flex-wrap: Stacks on mobile
//            - gap-10: Creates the specific white space (approx 40px) between cards
//         */}
//         <div className="flex flex-wrap justify-center gap-10">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="relative bg-[#E8F4F8] p-8 pt-12 flex flex-col mt-16 flex-shrink-0"
//               style={{
//                 width: '443px',
//                 minHeight: '389px',
//                 borderRadius: '12px',
//               }}
//             >
//               {/* Product Image - Pop out top-left */}
//               <div className="absolute -top-14 -left-6 w-36 h-36 flex-shrink-0 z-10">
//                 <Image
//                   src={testimonial.image}
//                   alt={testimonial.product}
//                   fill
//                   className="object-contain drop-shadow-xl"
//                 />
//               </div>

//               {/* Header: Title and Stars 
//                   ml-24 pushes this content to the right to clear the bottle image 
//               */}
//               <div className="ml-24 mb-6">
//                 <h3 className="text-[24px] font-bold text-black mb-2">
//                   {testimonial.product}
//                 </h3>
                
//                 {/* Rating Stars */}
//                 <div className="flex gap-1">
//                   {[...Array(testimonial.rating)].map((_, index) => (
//                     <svg
//                       key={index}
//                       className="w-5 h-5 fill-[#FFA500]"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                     </svg>
//                   ))}
//                 </div>
//               </div>

//               {/* Review Text */}
//               <p className="text-[16px] text-gray-700 leading-relaxed mb-6 flex-grow font-normal">
//                 {testimonial.review}
//               </p>

//               {/* Author */}
//               <p className="text-[16px] font-medium text-black">
//                 - {testimonial.author}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
'use client';

import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      product: 'TestoBites',
      image: '/testobites.png',
      rating: 5,
      review: (
        <>
          TestoBites has been a<br />
          game changer when it<br />
          comes to my stamina and<br />
          energy levels. I can truly<br />
          feel a difference in my sex<br />
          drive and virility as well.<br />
          Highly recommended.
        </>
      ),
      author: 'Ryan R.',
    },
    {
      id: 2,
      product: 'DermaCare 360',
      image: '/dermacare.png',
      rating: 5,
      review: (
        <>
          My pain therapist<br />
          recommended this product<br />
          to me and I was surprised<br />
          by how well it worked. I can<br />
          see a marked improvement<br />
          in my Skin Care.
        </>
      ),
      author: 'Jamie Fields',
    },
    {
      id: 3,
      product: 'Nerve Freedom',
      image: '/nervefreedom.png',
      rating: 5,
      review: (
        <>
          I have been an RN for 20<br />
          years and love helping<br />
          people find solutions to their<br />
          health issues.NF Product is<br />
          the best natural product for<br />
          neuropathy pain hands<br />
          down.
        </>
      ),
      author: 'Anonymous',
    },
  ];

  return (
    <section className="py-12 lg:py-12 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-[48px] font-bold text-black leading-tight">
            Verified Customer Testimonials
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-[#E8F4F8] p-8 pt-12 flex flex-col mt-16 flex-shrink-0"
              style={{
                width: '443px',
                minHeight: '389px',
                borderRadius: '12px',
              }}
            >
              {/* Product Image */}
              <div className="absolute -top-14 -left-6 w-36 h-36 flex-shrink-0 z-10">
                <Image
                  src={testimonial.image}
                  alt={testimonial.product}
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>

              {/* Header: Title and Stars */}
              <div className="ml-24 mb-6">
                <h3 className="text-[24px] font-bold text-black mb-2">
                  {testimonial.product}
                </h3>
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 fill-[#FFA500]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Review Text 
                  ADDED: 'text-center' to center the review text 
              */}
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6 flex-grow font-normal text-center">
                {testimonial.review}
              </p>

              {/* Author 
                  KEPT: 'text-left' (default) to keep the name on the left side
              */}
              <p className="text-[16px] font-medium text-black text-left">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;