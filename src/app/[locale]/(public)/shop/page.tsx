import CategoriesSectionItem from '@/components/category/categoryItems';
import {
	categories,
	RecursiveCategoryList,
} from '@/components/category/cateogory-item-02';
import Filters from '@/components/filters';
import MobileFilters from '@/components/filters/MobileFilters';
import { ProductCard01 } from '@/components/product-cards';
import { Checkbox } from '@/components/ui/checkbox';
import { getFetch, MotionItem } from '@/lib';
import { formatQueryParams } from '@/lib/utils';
import { IProduct } from '@/types';
import { ICategories } from '@/types/commonTypes';
import { getLocale } from 'next-intl/server';
import React from 'react';
interface Props {
	searchParams: Promise<{
		category: string;
		page: string;
		sort_by: 'most-popular' | 'high-price' | 'low-price';
		minPrice: string;
		maxPrice: string;
		color?: string;
		size?: string;
	}>;
}
export default async function ShopCategoryPage({ searchParams }: Props) {
	const query = await searchParams;
	const { sort_by, category, maxPrice, minPrice, color, size } = query;

	const attributeValues = [color, size]
		.filter(Boolean)
		.filter((item) => Number(item));
	const TOP_SELLING = sort_by === 'most-popular' ? true : undefined;

	const SORT_OPTIONS = {
		'high-price': { sortBy: 'ep_sale_price', order: 'desc' },
		'low-price': { sortBy: 'ep_sale_price', order: 'asc' },
		'most-popular': { sortBy: undefined, order: undefined },
	};

	const { sortBy: SORT_BY_PRICE, order: SERIAL_BY } =
		SORT_OPTIONS[sort_by] || {};

	const currentPage = Number(query.page || 1) || 1;
	const skip = (currentPage - 1) * 10;

	const formate_query = formatQueryParams({
		category,
		skip,
		limit: 10,
		serialBy: SERIAL_BY,
		shortBy: SORT_BY_PRICE,
		topSelling: TOP_SELLING,
		maxPrice,
		minPrice,
		attributeValues: String(attributeValues.join(',')),
	});

	const { data }: { data: ICategories[] } = await getFetch({
		url: 'ecomm/categories?according_order=asc',
	});

	const products: { data: IProduct[] } = await getFetch({
		url: 'ecomm/product?' + formate_query,
	});
	const total = 100;
	const totalPages = Math.ceil(total / 10);
	const locale = await getLocale();

	console.log(products, 'asdads');
	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="container mx-auto flex flex-col lg:flex-row gap-6">
				{/* Sidebar */}
				<aside className="w-full lg:w-1/4 space-y-4">
					<div className="bg-white rounded-xl shadow-sm p-6">
						<h3 className="text-xl font-bold mb-4 border-b pb-2 relative before:absolute before:w-20 before:h-1 before:bg-primary-500 before:-bottom-[2px]  before:left-0">
							Category
						</h3>
						<MobileFilters />
						<Filters />
						{/* <CategoriesSectionItem categories={data} /> */}

						{/* <RecursiveCategoryList categories={categories} /> */}
					</div>
					<div className="bg-white rounded-xl shadow-sm p-6">
						<h3 className="text-xl font-bold mb-4 border-b pb-2 relative before:absolute before:w-20 before:h-1 before:bg-primary-500 before:-bottom-[2px]  before:left-0">
							Fill by price
						</h3>
						{/* Price Range Slider */}
						<div className="mb-6">
							<h3 className="text-lg font-medium mb-2">Price Range</h3>
							<div className="flex items-center gap-2">
								<input type="range" min="0" max="1000" className="w-full" />
								<span className="text-gray-700">$1000</span>
							</div>
						</div>
					</div>
					<div className="bg-white rounded-xl shadow-sm p-6">
						<h3 className="text-xl font-bold mb-4 border-b pb-2 relative before:absolute before:w-20 before:h-1 before:bg-primary-500 before:-bottom-[2px]  before:left-0">
							Category
						</h3>
						{/* Price Range Slider */}
						{/* Color Filter */}
						<div className="mb-6">
							<h3 className="text-lg font-medium mb-2">Color</h3>
							<div className="flex gap-3">
								<button className="w-8 h-8 rounded-full bg-red-500 border border-gray-300"></button>
								<button className="w-8 h-8 rounded-full bg-blue-500 border border-gray-300"></button>
								<button className="w-8 h-8 rounded-full bg-green-500 border border-gray-300"></button>
								<button className="w-8 h-8 rounded-full bg-yellow-500 border border-gray-300"></button>
							</div>
						</div>
					</div>
				</aside>

				{/* Main Product Section */}
				<main className="w-full lg:w-3/4">
					<div className="grid grid-cols-1   md:grid-cols-2   xl:grid-cols-4 gap-4">
						{products?.data?.map((product, i) => (
							<MotionItem
								once={false}
								i={i}
								key={product?.p_id}
								className="relative  flex w-full max-w-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md"
							>
								<ProductCard01
									locale={locale}
									key={product?.p_id}
									product={product}
								/>
							</MotionItem>
						))}
					</div>
				</main>
			</div>
		</div>
	);
}
