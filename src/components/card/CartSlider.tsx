"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { imageURL } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

interface ShadCNCarouselProps {
  images: string[];
}

export const ShadCNCarousel = ({ images }: ShadCNCarouselProps) => {
  const [autoplay, setAutoplay] = React.useState(false);

  const plugin = React.useRef(
    Autoplay({
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      playOnInit: false,
      delay: 800,
    })
  );

  React.useEffect(() => {
    if (autoplay) {
      plugin.current.play();
    } else {
      plugin.current.stop();
    }
  }, [autoplay]);

  const handleMouseEnter = () => {
    setAutoplay(true);
  };

  const handleMouseLeave = () => {
    setAutoplay(false);
  };

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="w-full relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index + image} className="relative h-80">
            <Image
              src={imageURL + image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full"
              fill
              sizes="calc(100vw - 50px)"
              priority
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
