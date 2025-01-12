https://m360ict-ecommerce.s3.ap-south-1.amazonaws.com/me-mart/

https://github.com/DevSrabon/v2-saba-al-wadu-ecommerce-client.git

https://planetary-comet-283334.postman.co/workspace/Team-Workspace~70e5e508-f453-446c-86be-558d7f05d5f3/collection/34421296-3556f409-c243-41c4-9ea8-79935f3547f9?action=share&creator=34421296

https://v2-saba-al-wadu-ecommerce-client.vercel.app/en

```tsx
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
Carousel,
CarouselContent,
CarouselItem,
CarouselNext,
CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const data = [
{
name: "Cox's Bazar",
image: '/offer/domestic/cox.jpg',
stats: { tours: 16, departures: 60, guests: 250 },
},
{
name: 'Sundarbans',
image: '/offer/domestic/sundarban.jpg',
stats: { tours: 18, departures: 14, guests: 450 },
},
{
name: 'Bandarban',
image: '/offer/domestic/bandarban.jpg',
stats: { tours: 41, departures: 25, guests: 600 },
},
{
name: 'Sylhet',
image: '/offer/domestic/sylhet.jpg',
stats: { tours: 30, departures: 60, guests: 400 },
},
{
name: 'Europe',
image:
'https://img.veenaworld.com/group-tours/world/europe/eubq/thb-baku-eubq-20102023.png',
stats: { tours: 25, departures: 40, guests: 500 },
},
{
name: 'South East Asia',
image:
'https://img.veenaworld.com/group-tours/world/south-east-asia/astl/asja-thb.jpg',
stats: { tours: 14, departures: 20, guests: 100 },
},
{
name: 'Australia New Zealand',
image:
'https://img.veenaworld.com/group-tours/world/australia-new-zealand/ausm/ausm-thb.jpg',
stats: { tours: 35, departures: 12, guests: 200 },
},
{
name: 'Dubai Egypt',
image:
'https://img.veenaworld.com/group-tours/world/dubai-egypt-israel/mede/mede-thb-mede-2962024.jpg',
stats: { tours: 41, departures: 40, guests: 360 },
},
];

const ads = ['/ads_1.jpg', '/ads_2.jpg'];

const Destinations = () => {
const controls = useAnimation();
const sectionRef = useRef(null);

useEffect(() => {
const observer = new IntersectionObserver(
([entry]) => {
if (entry.isIntersecting) {
controls.start('visible');
} else {
controls.start('hidden');
}
},
{ threshold: 0.1 }
);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };

}, [controls]);

const [api, setApi] = useState<any>();
const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

useEffect(() => {
if (!api) return;
api.on('select', () => {
autoplay.current.reset();
});
}, [api]);

return (
<section ref={sectionRef} className='w-full mx-auto bg-background'>
<div className='text-center mb-8'>
<h2 className='text-2xl font-bold text-foreground mb-4'>
Popular Destinations
</h2>
<p className='text-muted-foreground max-w-2xl mx-auto'>
Explore our handpicked selection of premium travel experiences across
the globe. Each destination offers unique adventures and unforgettable
memories.
</p>
</div>

      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4'
      >
        <div className='row-span-2 col-span-2'>
          <Carousel
            setApi={setApi}
            className='w-full h-full relative'
            plugins={[autoplay.current]}
          >
            <CarouselContent>
              {ads.map((img, index) => (
                <CarouselItem key={index}>
                  <Card className='w-full h-full'>
                    <CardContent className='flex items-center justify-center aspect-square p-0'>
                      <img
                        src={img}
                        alt={Slide ${index + 1}}
                        className='w-full h-full object-cover overflow-hidden rounded-xl'
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='left-5' />
            <CarouselNext className='right-5' />
          </Carousel>
        </div>
        {data.map((destination, idx) => (
          <DestinationCard key={idx} destination={destination} />
        ))}
      </motion.div>
    </section>

);
};

export default Destinations;

const cardVariants = {
hidden: { opacity: 0, y: 20 },
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.5,
ease: 'easeOut',
},
},
};

const DestinationCard = ({ destination, index }: any) => {
return (
<motion.div variants={cardVariants}>
<Card className='overflow-hidden  hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group'>
<CardHeader className='p-0'>
<div className='relative h-[205px] overflow-hidden'>
<Image
// width={500}
// height={500}
fill
src={destination.image}
alt={destination.name}
className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
/>
<div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/60' />
<CardTitle className='absolute bottom-4 left-4 text-white text-base'>
{destination.name}
</CardTitle>
</div>
</CardHeader>
</Card>
</motion.div>
  );
};
```
