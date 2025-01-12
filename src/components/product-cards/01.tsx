import { IProduct } from '@/types';
import React from 'react';
import { EmblaCarousel } from '../card/CartSlider';
import { ShoppingCart } from 'lucide-react';
import { imageURL } from '@/constants';

export function ProductCard01({
	product,
	locale,
}: {
	product: IProduct;
	locale: string;
}) {
	const filledStars = Math.floor(Number(product.avg_rating));
	return (
		<>
			<a
				className="relative mx-3 mt-3 flex h-80 overflow-hidden rounded-xl"
				href="#"
			>
				{/* <EmblaCarousel images={product.all_images} /> */}
				<img
					className="object-cover w-full"
					src={imageURL + product.all_images[0]}
					alt="product image"
				/>
				<span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
					39% OFF
				</span>
			</a>
			<div className="mt-4 px-5 pb-14">
				<a href="#">
					<h5 className="text-xl tracking-tight text-slate-900">
						{locale === 'en' ? product.p_name_en : product.p_name_ar}
					</h5>
				</a>
				<div className="mt-2 mb-5 flex items-center justify-between flex-col">
					<p>
						<span className="text-3xl font-bold text-slate-900">
							${product.base_price}
						</span>
						<span className="text-sm text-slate-900 line-through">$699</span>
					</p>

					<div className="flex items-center">
						{/* Render filled stars */}
						{[...Array(filledStars)].map((_, index) => (
							<svg
								key={`filled-${index}`}
								aria-hidden="true"
								className="h-5 w-5 text-yellow-300"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
						))}
						{product.rating_count > 0 && (
							<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
								{product.rating_count}
							</span>
						)}
					</div>
				</div>

				{/* add to cart  */}
				<div className="absolute bottom-4 left-4 right-4 ">
					<a
						href="#"
						className="flex items-center justify-center rounded-md bg-[#b7a308] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
					>
						<ShoppingCart className="mr-2" />
						Add to cart
					</a>
				</div>
			</div>
		</>
	);
}
