import { getImageLink } from '@/lib/utils';
import { IProduct } from '@/types';
import React from 'react';

export function Slider({ product }: { product: IProduct }) {
	return (
		<div className="2xl:w-6/12 flex-grow-0 flex-shrink-0 basis-auto">
			<div className="product-details__left">
				<div className="p-5  border border-gray-200 rounded-2xl">
					<div className="">
						<div className="max-h-[550px] flex items-center justify-center w-full h-full">
							<img
								src={getImageLink(product.p_images[0].image)}
								alt="Image"
								className="max-h-[550px] rounded-xl w-full h-full object-cover"
							/>
						</div>
					</div>
					{/* <div className="">
											<div className="product-details__thumb flex items-center justify-center h-full">
												<img
													src={getImageLink(product.p_images[0].image)}
													alt="Image"
												/>
											</div>
										</div>
										<div className="">
											<div className="product-details__thumb flex items-center justify-center h-full">
												<img
													src={getImageLink(product.p_images[0].image)}
													alt="Image"
												/>
											</div>
										</div>
										<div className="">
											<div className="product-details__thumb flex items-center justify-center h-full">
												<img
													src={getImageLink(product.p_images[0].image)}
													alt="Image"
												/>
											</div>
										</div>
										<div className="">
											<div className="product-details__thumb flex items-center justify-center h-full">
												<img
													src={getImageLink(product.p_images[0].image)}
													alt="Image"
												/>
											</div>
										</div> */}
				</div>
				<div className="mt-6">
					<div className="flex gap-4">
						<div className="flex-1">
							<div className="max-w-[120px] max-h-[120px] w-full h-full flex items-center justify-center border border-gray-200 rounded-2xl p-2">
								<img
									className="rounded-[10px] object-cover w-full h-full"
									src={getImageLink(product.p_images[0].image)}
									alt="Image"
								/>
							</div>
						</div>
						<div className="flex-1">
							<div className="max-w-[120px] max-h-[120px] w-full h-full flex items-center justify-center border border-gray-200 rounded-2xl p-2">
								<img
									className="rounded-[10px] object-cover w-full h-full"
									src={getImageLink(product.p_images[0].image)}
									alt="Image"
								/>
							</div>
						</div>
						<div className="flex-1">
							<div className="max-w-[120px] max-h-[120px] w-full h-full flex items-center justify-center border border-gray-200 rounded-2xl p-2">
								<img
									className="rounded-[10px] object-cover w-full h-full"
									src={getImageLink(product.p_images[0].image)}
									alt="Image"
								/>
							</div>
						</div>
						<div className="flex-1">
							<div className="max-w-[120px] max-h-[120px] w-full h-full flex items-center justify-center border border-gray-200 rounded-2xl p-2">
								<img
									className="rounded-[10px] object-cover w-full h-full"
									src={getImageLink(product.p_images[0].image)}
									alt="Image"
								/>
							</div>
						</div>
						<div className="flex-1">
							<div className="max-w-[120px] max-h-[120px] w-full h-full flex items-center justify-center border border-gray-200 rounded-2xl p-2">
								<img
									className="rounded-[10px] object-cover w-full h-full"
									src={getImageLink(product.p_images[0].image)}
									alt="Image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
