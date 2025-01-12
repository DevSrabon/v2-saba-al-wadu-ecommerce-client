import { getFetch } from '@/lib';
import { IBanner } from '@/types';
import React from 'react';
import { BannerSlider } from './banner-slider';

export const Banner = async () => {
	const { data }: { data: IBanner[] } = await getFetch({
		url: 'ecomm/product/banner?limit=10&skip=0',
	});

	return (
		<div className="relative overflow-hidden bg-gradient-to-r from-green-100 to-green-200 text-white">
			<div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
				{/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 items-center relative z-10">

					<div className="space-y-4 md:space-y-6">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
							{data[0].banner_en}
						</h2>
						<p className="text-lg sm:text-xl md:text-2xl">
							{data[0].banner_en}
						</p>
						<button
							// onClick={data[0].banner_en}
							className="inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-purple-600 shadow-sm hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
						>
							{data[0].banner_en}
							<ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
						</button>
					</div>
					<div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
						<Image
							src={getImageLink(data[0].image)}
							alt="Featured product"
							fill
							style={{ objectFit: 'cover' }}
							className="rounded-lg shadow-xl"
						/>
					</div>
				</div> */}
				<BannerSlider banner={data} />
			</div>
			<div
				className="absolute inset-0 bg-gradient-to-r from-blue-400 to-yellow-100 opacity-75 mix-blend-multiply"
				aria-hidden="true"
			></div>
		</div>
	);
};
