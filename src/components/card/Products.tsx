import { getFetch, MotionItem } from '@/lib';
import { ICategoryHome } from '@/types/homeProducts';
import ProductCard from './ProductCard';
import { ProductCard01 } from '../product-cards';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { SeeMoreButton } from '../ui/see-more-button';

const Products = async ({ locale }: { locale: string }) => {
	const { data }: { data: ICategoryHome[] } = await getFetch({
		url: 'ecomm/product/home?limit=10&skip=0',
	});

	return (
		<div className="mx-5 my-5">
			{/* if product length is greater than 0 then show the products */}
			{data?.map(
				(category) =>
					category.products.length > 0 && (
						<div key={category?.cate_id} className="mb-10">
							<div className="flex justify-between gap-2 items-center  mb-5">
								{/* Display the category title */}
								<h2 className="text-3xl font-bold">
									{locale === 'en'
										? category?.cate_name_en
										: category?.cate_name_ar}
								</h2>

								{/* see more  */}
								<SeeMoreButton href={`/category/${category?.cate_slug}`} />
							</div>

							{/* Display the products */}
							{/* <div className="flex flex-wrap gap-5">
						{category?.products.map((product) => (
							<ProductCard
								key={product?.p_id}
								name={locale === 'en' ? product.p_name_en : product.p_name_ar}
								images={product.all_images}
								price={product.base_special_price}
								rating={Number(product.avg_rating)}
								ratingCount={product.rating_count}
							/>
						))}
					</div> */}
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-4 ">
								{category?.products.map((product, i) => (
									<MotionItem
										once={false}
										i={i}
										key={product?.p_id}
										className="relative  flex w-full lg:max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
									>
										<ProductCard01
											locale={locale}
											key={product?.p_id}
											product={product}
										/>
									</MotionItem>
								))}
							</div>
						</div>
					)
			)}
		</div>
	);
};

export default Products;
