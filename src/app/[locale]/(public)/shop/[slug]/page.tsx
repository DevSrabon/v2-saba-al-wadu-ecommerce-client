import {
	Slider,
	Description,
	Details,
	ReviewAndRatting,
	SidebarDetails,
} from '@/components/product-details';
import { getFetch } from '@/lib';
import { IProduct } from '@/types';
import React from 'react';

export default async function Page({ params }: { params: { slug: string } }) {
	const product: { data: IProduct } = await getFetch({
		url: `ecomm/product/${params.slug}`,
	});
	console.log(JSON.stringify(product, null, 2));
	return (
		<section className="product-details py-4">
			<div className="container container-lg">
				<div className="row g-4">
					<div className="xl:w-9/12 flex-grow-0 flex-shrink-0 basis-auto">
						<div className="row g-4">
							<Slider product={product.data} />
							<Details product={product.data} />
						</div>
					</div>
					<SidebarDetails product={product.data} />
				</div>
				<div className="pt-20">
					<div className="border rounded-2xl">
						<div className="px-4 py-3 border-b border-gray-200 flex justify-between flex-wrap gap-4">
							<ul className="flex items-center mb-3 gap-2">
								<li
									className="nav-item btn btn-main rounded-full"
									role="presentation"
								>
									<button>Description</button>
								</li>
								<li
									className="nav-item btn btn-outline rounded-full"
									role="presentation"
								>
									<button>Reviews</button>
								</li>
							</ul>
							<a
								href="index.html"
								className="btn bg-main-50 rounded-md px-3 flex items-center gap-2 text-main-600 hover-bg-main-600 hover-text-white"
							>
								<img src="/images/satisfaction-icon.png" alt="Image" /> 100%
								Satisfaction Guaranteed
							</a>
						</div>
						<div className="p-12">
							<Description product={product.data} />
							<ReviewAndRatting product={product.data} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
