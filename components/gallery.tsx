"use client";

import Slider from "react-slick";

const images = [
  "/images/projects/1.jpg",
  "/images/projects/2.jpg",
  "/images/projects/3.jpg",
  "/images/projects/4.jpg",
  "/images/projects/5.jpg",
  "/images/projects/6.jpg",
  "/images/projects/7.jpg",
  "/images/projects/8.jpg",
  "/images/projects/9.jpg",
  "/images/projects/10.jpg",
  "/images/projects/11.jpg",
  "/images/projects/12.jpg",
  "/images/projects/13.jpg",
  "/images/projects/14.jpg",
  "/images/projects/15.jpg",
];

export const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="gallery" className="py-24 bg-gray-100 shadow-inner">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Projects & Accomplishments
        </h2>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <div className="relative w-full h-80 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
