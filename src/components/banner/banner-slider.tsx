'use client';
import useEmblaCarousel from 'embla-carousel-react';
import '../card/cardSlider.css';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { getImageLink } from '@/lib/utils';
import { IBanner } from '@/types';
import { MotionShow } from '@/lib';
import { useParams } from 'next/navigation';
import TextAnimation from '@/lib/motion/text-animation';

export const BannerSlider = ({ banner }: { banner: IBanner[] }) => {
	const params = useParams();
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		duration: 1000,
	});
	return (
		<div className="embla relative z-10" ref={emblaRef}>
			<div className="embla__container">
				{banner?.map((banner, index) => (
					<div className="embla__slide px-4" key={index}>
						<MotionShow once={false} key={index}>
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 items-center relative z-10 select-none">
								<div className="space-y-4 md:space-y-6">
									<TextAnimation
										text={
											params?.locale === 'en'
												? banner.banner_en
												: banner.banner_ar
										}
										variants={{
											hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
											visible: {
												filter: 'blur(0px)',
												opacity: 1,
												y: 0,
												transition: { ease: 'linear' },
											},
										}}
										classname="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
									/>
									<TextAnimation
										as="p"
										text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Consequatur commodi molestiae laborum quo quaerat, debitis
										quidem veniam ullam quasi ratione quis dolorum
										exercitationem unde porro aperiam ducimus? Omnis quae quidem
										obcaecati. Laboriosam labore`}
										variants={{
											hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
											visible: {
												filter: 'blur(0px)',
												opacity: 1,
												y: 0,
												transition: { ease: 'linear' },
											},
										}}
										classname="text-lg sm:text-xl md:text-2xl"
									/>

									<button
										// onClick={data[0].banner_en}
										className="inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-purple-600 shadow-sm hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
									>
										Purchase Now
										<ArrowRight
											className="ml-2 -mr-1 h-5 w-5"
											aria-hidden="true"
										/>
									</button>
								</div>
								<div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
									<MotionShow once={false} key={index}>
										<Image
											src={getImageLink(banner.image)}
											alt="Featured product"
											fill
											style={{ objectFit: 'cover' }}
											className="rounded-lg shadow-xl select-none"
										/>
									</MotionShow>

									{/* <Image
										src={getImageLink(banner.image)}
										alt="Featured product"
										fill
										style={{ objectFit: 'cover' }}
										className="rounded-lg shadow-xl select-none"
									/> */}
								</div>
							</div>
						</MotionShow>
					</div>
				))}
			</div>
		</div>
	);
};
