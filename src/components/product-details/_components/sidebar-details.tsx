import { IProduct } from '@/types';
import React from 'react';

export function SidebarDetails({ product }: { product: IProduct }) {
	return (
		<div className="xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto">
			<div className="product-details__sidebar product-details__sidebar-c border border-gray-200 rounded-16 overflow-hidden">
				<div className="p-6">
					<div className="justify-between flex bg-main-600 rounded-[50rem] p-2 items-center">
						<div className="flex items-center gap-2">
							<span className="w-11 h-11 bg-white rounded-[50%] flex items-center justify-center text-2xl">
								<i className="ph ph-storefront"></i>
							</span>
							<span className="text-white">by Marketpro</span>
						</div>
						<a
							href="shop.html"
							className="btn bg-white px-4 py-2 rounded-[50rem] text-[#212529] text-uppercase"
						>
							View Store
						</a>
					</div>
				</div>
				<div className="p-6 bg-main-50 flex items-start gap-6 border-b border-gray-200">
					<span className="w-11 h-11 bg-white text-main-600 rounded-[50%] flex items-center justify-center text-2xl flex-shrink-0">
						<i className="ph-fill ph-truck"></i>
					</span>
					<div className="">
						<h6 className="text-sm mb-2">Fast Delivery</h6>
						<p className="text-gray-700">
							Lightning-fast shipping, guaranteed.
						</p>
					</div>
				</div>
				<div className="p-6 bg-main-50 flex items-start gap-6 border-b border-gray-200">
					<span className="w-11 h-11 bg-white text-main-600 rounded-[50%] flex items-center justify-center text-2xl flex-shrink-0">
						<i className="ph-fill ph-arrow-u-up-left"></i>
					</span>
					<div className="">
						<h6 className="text-sm mb-2">Free 90-day returns</h6>
						<p className="text-gray-700">Shop risk-free with easy returns.</p>
					</div>
				</div>
				<div className="p-6 bg-main-50 flex items-start gap-6 border-b border-gray-200">
					<span className="w-11 h-11 bg-white text-main-600 rounded-[50%] flex items-center justify-center text-2xl flex-shrink-0">
						<i className="ph-fill ph-check-circle"></i>
					</span>
					<div className="">
						<h6 className="text-sm mb-2">Pickup available at Shop location</h6>
						<p className="text-gray-700">Usually ready in 24 hours</p>
					</div>
				</div>
				<div className="p-6 bg-main-50 flex items-start gap-6 border-b border-gray-200">
					<span className="w-11 h-11 bg-white text-main-600 rounded-[50%] flex items-center justify-center text-2xl flex-shrink-0">
						<i className="ph-fill ph-credit-card"></i>
					</span>
					<div className="">
						<h6 className="text-sm mb-2">Payment</h6>
						<p className="text-gray-700">
							Payment upon receipt of goods, Payment by card in the department,
							Google Pay, Online card.
						</p>
					</div>
				</div>
				<div className="p-6 bg-main-50 flex items-start gap-6 border-b border-gray-200">
					<span className="w-11 h-11 bg-white text-main-600 rounded-[50%] flex items-center justify-center text-2xl flex-shrink-0">
						<i className="ph-fill ph-check-circle"></i>
					</span>
					<div className="">
						<h6 className="text-sm mb-2">Warranty</h6>
						<p className="text-gray-700">
							The Consumer Protection Act does not provide for the return of
							this product of proper quality.
						</p>
					</div>
				</div>
				<div className="p-6 bg-main-50 flex items-start gap-6 border-b border-gray-200">
					<span className="w-11 h-11 bg-white text-main-600 rounded-[50%] flex items-center justify-center text-2xl flex-shrink-0">
						<i className="ph-fill ph-package"></i>
					</span>
					<div className="">
						<h6 className="text-sm mb-2">Packaging</h6>
						<p className="text-gray-700">
							Research & development value proposition graphical user interface
							investor.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
