"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useState } from "react";

const images: string[] = [
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
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1); // Lightbox active image index
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand",
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

  const closeLightbox = () => setLightboxIndex(-1);

  const showPrevImage = () =>
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const showNextImage = () =>
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section id="gallery" className="py-24 bg-gray-100 shadow-inner">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Projects & Accomplishments
        </h2>
        {/* Slider */}
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <div
                className="relative w-full h-80 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setLightboxIndex(index)} // Open lightbox on click
              >
                <Image
                  src={src}
                  alt={`Project ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src =
                      "/images/placeholder.png")
                  }
                  className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-bold text-lg">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== -1 && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-3xl font-bold"
            onClick={showPrevImage}
          >
            &larr;
          </button>
          <button
            className="absolute right-4 text-white text-3xl font-bold"
            onClick={showNextImage}
          >
            &rarr;
          </button>
          <Image
            src={images[lightboxIndex]}
            alt={`Project ${lightboxIndex + 1}`}
            width={1200}
            height={800}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
