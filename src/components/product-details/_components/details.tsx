import ProductPrice from '@/components/product-cards/_components/price';
import { checkLocal } from '@/i18n';
import { IProduct } from '@/types';
import { getLocale } from 'next-intl/server';
import React from 'react';
import { AddToCart } from './add-to-card';
import { Heart, Share2 } from 'lucide-react';
import { checkArray } from '@/lib/utils';

export async function Details({ product }: { product: IProduct }) {
	const locale = await getLocale();
	const filledStars = Math.floor(Number(product.avg_rating));
	return (
		<div className="2xl:w-6/12 flex-grow-0 flex-shrink-0 basis-auto">
			<div className="product-details__content">
				<h5 className="mb-3">
					{checkLocal(locale, product?.p_name_en, product?.p_name_ar)}
				</h5>
				<div className="flex items-center flex-wrap gap-3">
					<div className="flex items-center gap-3 flex-wrap">
						<div className="flex items-center">
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
						</div>
						{product.rating_count > 0 && (
							<>
								<span className="text-sm font-[500] text-neutral-600">
									({product.rating_count}) Star Rating
								</span>
								<span className="text-sm font-[500] text-gray-500">
									(21,671)
								</span>
							</>
						)}
					</div>
					<span className="text-sm font-[500] text-gray-500">|</span>
					<span className="text-gray-900">
						<span className="text-gray-400">SKU:</span>
						{product.barcode}
					</span>
				</div>
				<span className="mt-8 pt-8 text-gray-700 border-t border-gray-200 block"></span>
				{/* <p className="text-gray-700">
					Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
					malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
					{checkLocal(locale, product?.p_details_en, product?.p_details_ar)} */}
				{/* 
				</p> */}

				<div className="mt-8 flex items-center flex-wrap gap-32">
					<ProductPrice product={product} />

					<a href="tel:0123456789" className="btn btn-main rounded-full">
						Order on What'sApp
					</a>
				</div>
				<span className="mt-8 pt-8 text-gray-700 border-t border-gray-200 block"></span>
				<div className="bg-main-50 rounded-lg">
					{checkArray(product.colors) && (
						<div className="flex items-center flex-wrap gap-4 py-3 px-6">
							<div className="flex items-center gap-4">
								<span className="text-main-600 text-sm">Color:</span>
							</div>
							<div className="countdown" id="countdown11">
								<ul className="countdown-list flex items-center flex-wrap gap-1">
									{product.colors?.map((color) => (
										<li
											key={color.color_id}
											className="inline-flex gap-4 text-xs font-[500] w-fit px-2 h-7 rounded-md border border-main-600  items-center justify-center"
										>
											<span className="days">
												{checkLocal(
													locale,
													color?.color_name_en,
													color?.color_name_ar
												)}
											</span>
										</li>
									))}
								</ul>
							</div>
							<span className="text-gray-900 text-xs">
								Remains size are available
							</span>
						</div>
					)}
					{checkArray(product.sizes) && (
						<div className="flex items-center flex-wrap gap-4 py-3 px-6">
							<div className="flex items-center gap-4">
								<span className="text-main-600 text-sm">Size:</span>
							</div>
							<div className="countdown" id="countdown11">
								<ul className="countdown-list flex items-center flex-wrap gap-1">
									{product.sizes?.map((size) => (
										<li
											key={size.size_id}
											className="inline-flex gap-4 text-xs font-[500] w-fit px-2 h-7 rounded-md border border-main-600  items-center justify-center"
										>
											<span className="days">{size.size}</span>
										</li>
									))}
								</ul>
							</div>
							<span className="text-gray-900 text-xs">
								Remains size are available
							</span>
						</div>
					)}
					{checkArray(product.variants) && (
						<div className="flex items-center flex-wrap gap-4 py-3 px-6">
							<div className="flex items-center gap-4">
								<span className="text-main-600 text-sm">Fabric:</span>
							</div>
							<div className="countdown" id="countdown11">
								<ul className="countdown-list flex items-center flex-wrap gap-1">
									{product.variants?.map((fabric) => (
										<li
											key={fabric.fabric_id}
											className="inline-flex gap-4 text-xs font-[500] w-fit px-2 h-7 rounded-md border border-main-600  items-center justify-center"
										>
											<span className="days">
												{checkLocal(
													locale,
													fabric?.fabric_name_en,
													fabric?.fabric_name_ar
												)}
											</span>
										</li>
									))}
								</ul>
							</div>
							<span className="text-gray-900 text-xs">
								Fabric are available
							</span>
						</div>
					)}
				</div>

				<div className="flex justify-between gap-4 flex-wrap mt-4">
					<AddToCart />
					<div className="flex items-center gap-3">
						<a
							href="index.html"
							className="w-12 h-12 bg-main-50 text-main-600 text-xl hover:bg-main-600 hover:text-white flex items-center justify-center rounded-[50%]"
						>
							<Heart className="w-6 h-6" />
						</a>
						<a
							href="index.html"
							className="w-12 h-12 bg-main-50 text-main-600 text-xl hover:bg-main-600 hover:text-white flex items-center justify-center rounded-[50%]"
						>
							<Share2 className="w-6 h-6" />
						</a>
					</div>
				</div>
				<span className="mt-8 pt-8 text-gray-700 border-t border-gray-200 block"></span>
				<div className="justify-between flex gap-4 p-3 border border-main-two-600 border-dashed rounded-lg mb-4">
					<div className="flex items-center gap-3">
						<button
							type="button"
							className="w-18 h-18 flex items-center justify-center border border-gray-900 text-xs rounded-[50%] hover-bg-gray-100"
						>
							<i className="ph ph-plus"></i>
						</button>
						<span className="text-gray-900 font-[500] text-xs">
							Mfr. coupon. $3.00 off 5
						</span>
					</div>
					<a
						href="cart.html"
						className="text-xs font-[600] text-main-two-600 text-decoration-underline hover-text-main-two-700"
					>
						View Details
					</a>
				</div>
				<ul className="list-inside ms-12">
					<li className="text-gray-900 text-sm mb-2">Buy 1, Get 1 FREE</li>
					<li className="text-gray-900 text-sm mb-0">Buy 1, Get 1 FREE</li>
				</ul>
			</div>
		</div>
	);
}
