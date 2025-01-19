import { IProduct } from '@/types';
import React from 'react';

export function ReviewAndRatting({ product }: { product: IProduct }) {
	return (
		<div className="row g-4">
			<div className="xl:w-6/12 flex-grow-0 flex-shrink-0 basis-auto">
				<h6 className="mb-6">Product Description</h6>
				<div className="flex items-start gap-6 pb-11 border-b border-gray-200 mb-11">
					<img
						src="/images/comment-img1.png"
						alt="Image"
						className="w-13 h-13 object-fit-cover rounded-[50%] flex-shrink-0"
					/>
					<div className="flex-grow">
						<div className="-between items-start gap-2">
							<div className="">
								<h6 className="mb-3 text-md">Nicolas cage</h6>
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
							</div>
							<span className="text-gray-800 text-xs">3 Days ago</span>
						</div>
						<h6 className="mb-3 text-md mt-6">Greate Product</h6>
						<p className="text-gray-700">
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour
						</p>
						<div className="flex items-center gap-20 mt-11">
							<button className="flex items-center gap-3 text-gray-700 hover-text-main-600">
								<i className="ph-bold ph-thumbs-up"></i> Like
							</button>
							<a
								href="#comment-form"
								className="flex items-center gap-3 text-gray-700 hover-text-main-600"
							>
								<i className="ph-bold ph-arrow-bend-up-left"></i>
								Replay
							</a>
						</div>
					</div>
				</div>
				<div className="flex items-start gap-6">
					<img
						src="/images/comment-img1.png"
						alt="Image"
						className="w-13 h-13 object-fit-cover rounded-[50%] flex-shrink-0"
					/>
					<div className="flex-grow">
						<div className="-between items-start gap-2">
							<div className="">
								<h6 className="mb-3 text-md">Nicolas cage</h6>
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
							</div>
							<span className="text-gray-800 text-xs">3 Days ago</span>
						</div>
						<h6 className="mb-3 text-md mt-6">Greate Product</h6>
						<p className="text-gray-700">
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour
						</p>
						<div className="flex items-center gap-20 mt-11">
							<button className="flex items-center gap-3 text-gray-700 hover-text-main-600">
								<i className="ph-bold ph-thumbs-up"></i> Like
							</button>
							<a
								href="#comment-form"
								className="flex items-center gap-3 text-gray-700 hover-text-main-600"
							>
								<i className="ph-bold ph-arrow-bend-up-left"></i>
								Replay
							</a>
						</div>
					</div>
				</div>
				<div className="mt-14">
					<div className="">
						<h6 className="mb-6">Write a Review</h6>
						<span className="text-heading mb-8">
							What is it like to Product?
						</span>
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
					</div>
					<div className="mt-8">
						<form action="#">
							<div className="mb-8">
								<label htmlFor="title" className="text-neutral-600 mb-8">
									Review Title
								</label>
								<input
									className="common-input rounded-lg"
									id="title"
									placeholder="Great Products"
								/>
							</div>
							<div className="mb-8">
								<label htmlFor="desc" className="text-neutral-600 mb-8">
									Review Content
								</label>
								<textarea className="common-input rounded-lg" id="desc">
									It is a long established fact that a reader will be distracted
									by the readable content of a page when looking at its layout.
									The point of using Lorem Ipsum is that it has a more-or-less
									normal distribution of letters, as opposed to using 'Content
									here, content here', making it look like readable English.
								</textarea>
							</div>
							<button
								type="submit"
								className="btn btn-main rounded-[50rem] mt-12"
							>
								Submit Review
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className="xl:w-6/12 flex-grow-0 flex-shrink-0 basis-auto">
				<div className="ms-xxl-5">
					<h6 className="mb-6">Customers Feedback</h6>
					<div className="flex flex-wrap gap-11">
						<div className="border border-gray-200 rounded-lg px-10 py-13 flex items-center justify-center flex-col flex-shrink-0 text-center">
							<h2 className="mb-6 text-main-600">4.8</h2>
							<div className="flex items-center justify-center gap-2">
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
							<span className="mt-16 text-gray-500">
								Average Product Rating
							</span>
						</div>
						<div className="border border-gray-200 rounded-lg px-2 py-10 flex-grow">
							<div className="flex items-center gap-2 mb-5">
								<span className="text-gray-900 flex-shrink-0">5</span>
								<div className="progress w-full bg-gray-100 rounded-[50rem] h-8">
									<div
										className="progress-bar bg-main-600 rounded-[50rem]"
										style={{ width: '70%' }}
									></div>
								</div>
								<div className="flex items-center gap-4">
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
								</div>
								<span className="text-gray-900 flex-shrink-0">124</span>
							</div>
							<div className="flex items-center gap-2 mb-5">
								<span className="text-gray-900 flex-shrink-0">4</span>
								<div className="progress w-full bg-gray-100 rounded-[50rem] h-8">
									<div
										className="progress-bar bg-main-600 rounded-[50rem]"
										style={{ width: '50%' }}
									></div>
								</div>
								<div className="flex items-center gap-4">
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
								</div>
								<span className="text-gray-900 flex-shrink-0">52</span>
							</div>
							<div className="flex items-center gap-2 mb-5">
								<span className="text-gray-900 flex-shrink-0">3</span>
								<div className="progress w-full bg-gray-100 rounded-[50rem] h-8">
									<div
										className="progress-bar bg-main-600 rounded-[50rem]"
										style={{ width: '35%' }}
									></div>
								</div>
								<div className="flex items-center gap-4">
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
								</div>
								<span className="text-gray-900 flex-shrink-0">12</span>
							</div>
							<div className="flex items-center gap-2 mb-5">
								<span className="text-gray-900 flex-shrink-0">2</span>
								<div className="progress w-full bg-gray-100 rounded-[50rem] h-8">
									<div
										className="progress-bar bg-main-600 rounded-[50rem]"
										style={{ width: '20%' }}
									></div>
								</div>
								<div className="flex items-center gap-4">
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
								</div>
								<span className="text-gray-900 flex-shrink-0">5</span>
							</div>
							<div className="flex items-center gap-2 mb-0">
								<span className="text-gray-900 flex-shrink-0">1</span>
								<div className="progress w-full bg-gray-100 rounded-[50rem] h-8">
									<div
										className="progress-bar bg-main-600 rounded-[50rem]"
										style={{ width: '5%' }}
									></div>
								</div>
								<div className="flex items-center gap-4">
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
									<span className="text-xs font-[500] text-warning-600 flex">
										<i className="ph-fill ph-star"></i>
									</span>
								</div>
								<span className="text-gray-900 flex-shrink-0">2</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
