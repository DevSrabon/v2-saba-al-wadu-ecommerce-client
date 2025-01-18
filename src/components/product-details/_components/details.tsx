import { IProduct } from '@/types';
import React from 'react';

export function Details({ product }: { product: IProduct }) {
	return (
		<div className="2xl:w-6/12 flex-grow-0 flex-shrink-0 basis-auto">
			<div className="product-details__content">
				<h5 className="mb-3">{product.p_name_en}</h5>
				<div className="flex items-center flex-wrap gap-3">
					<div className="flex items-center gap-3 flex-wrap">
						<div className="flex items-center gap-2">
							<span className="text-15 font-[500] text-warning-600 flex">
								<i className="ph-fill ph-star"></i>
							</span>
							<span className="text-15 font-[500] text-warning-600 flex">
								<i className="ph-fill ph-star"></i>
							</span>
							<span className="text-15 font-[500] text-warning-600 flex">
								<i className="ph-fill ph-star"></i>
							</span>
							<span className="text-15 font-[500] text-warning-600 flex">
								<i className="ph-fill ph-star"></i>
							</span>
							<span className="text-15 font-[500] text-warning-600 flex">
								<i className="ph-fill ph-star"></i>
							</span>
						</div>
						<span className="text-sm font-[500] text-neutral-600">
							4.7 Star Rating
						</span>
						<span className="text-sm font-[500] text-gray-500">(21,671)</span>
					</div>
					<span className="text-sm font-[500] text-gray-500">|</span>
					<span className="text-gray-900">
						<span className="text-gray-400">SKU:</span>EB4DRP
					</span>
				</div>
				<span className="mt-8 pt-8 text-gray-700 border-t border-gray-200 block"></span>
				<p className="text-gray-700">
					Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
					malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
				</p>
				<div className="mt-8 flex items-center flex-wrap gap-32">
					<div className="flex items-center gap-2">
						<h4 className="mb-0">$25.00</h4>
						<span className="text-md text-gray-500">$38.00</span>
					</div>
					<a href="index.html" className="btn btn-main rounded-[50rem]">
						Order on What'sApp
					</a>
				</div>
				<span className="mt-8 pt-8 text-gray-700 border-t border-gray-200 block"></span>
				<div className="flex items-center flex-wrap gap-4 bg-main-50 rounded-lg py-4 px-6">
					<div className="flex items-center gap-4">
						<span className="text-main-600 text-sm">Special Offer:</span>
					</div>
					<div className="countdown" id="countdown11">
						<ul className="countdown-list flex items-center flex-wrap">
							<li className="countdown-list__item text-heading gap-4 text-xs font-[500] w-7 h-7 rounded-md border border-main-600 !p-0 flex items-center justify-center">
								<span className="days">10</span>
							</li>
							<li className="countdown-list__item text-heading gap-4 text-xs font-[500] w-7 h-7 rounded-md border border-main-600 !p-0 flex items-center justify-center">
								<span className="hours">6</span>
							</li>
							<li className="countdown-list__item text-heading gap-4 text-xs font-[500] w-7 h-7 rounded-md border border-main-600 !p-0 flex items-center justify-center">
								<span className="minutes">5</span>
							</li>
							<li className="countdown-list__item text-heading gap-4 text-xs font-[500] w-7 h-7 rounded-md border border-main-600 !p-0 flex items-center justify-center">
								<span className="seconds">a</span>
							</li>
						</ul>
					</div>
					<span className="text-gray-900 text-xs">
						Remains untill the end of the offer
					</span>
				</div>

				<div className="-between gap-4 flex-wrap mt-4">
					<div className="flex items-center flex-wrap gap-4">
						<div className="border border-gray-200 rounded-[50rem] py-2 px-4 flex items-center">
							<button
								type="button"
								className="quantity__minus p-1 text-gray-700 hover-text-main-600 flex items-center justify-center"
							>
								<i className="ph ph-minus"></i>
							</button>
							<input
								type="number"
								className="quantity__input border-0 text-center w-32"
								value="1"
							/>
							<button
								type="button"
								className="quantity__plus p-4 text-gray-700 hover-text-main-600 flex items-center justify-center"
							>
								<i className="ph ph-plus"></i>
							</button>
						</div>
						<a
							href="index.html"
							className="btn btn-main rounded-[50rem] flex items-center inline-flex gap-2 px-3"
						>
							<i className="ph ph-shopping-cart"></i> Add To Cart
						</a>
					</div>
					<div className="flex items-center gap-3">
						<a
							href="index.html"
							className="w-13 h-13 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex items-center justify-center rounded-[50%]"
						>
							<i className="ph ph-heart"></i>
						</a>
						<a
							href="index.html"
							className="w-13 h-13 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex items-center justify-center rounded-[50%]"
						>
							<i className="ph ph-shuffle"></i>
						</a>
						<a
							href="index.html"
							className="w-13 h-13 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex items-center justify-center rounded-[50%]"
						>
							<i className="ph ph-share-network"></i>
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
