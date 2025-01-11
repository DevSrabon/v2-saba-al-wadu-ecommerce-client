"use client";
import { imageURL } from "@/constants";
import useEmblaCarousel from "embla-carousel-react";
import "./cardSlider.css";

interface EmblaCarouselProps {
  images: string[];
}

export const EmblaCarousel = ({ images }: EmblaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  return (
    <div className="embla relative" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image, index) => (
          <div className="embla__slide" key={index}>
            <img
              src={imageURL + image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* <div className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-opacity">
        <button
          aria-label="Previous"
          onClick={() => emblaApi?.scrollPrev()}
          className="text-xl text-gray-800"
        >
          ←
        </button>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-opacity">
        <button
          aria-label="Next"
          onClick={() => emblaApi?.scrollNext()}
          className="text-xl text-gray-800"
        >
          →
        </button>
      </div> */}
    </div>
  );
};
