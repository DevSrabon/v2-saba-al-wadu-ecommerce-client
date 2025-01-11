import { getFetch } from '@/lib';
import { ICategoryHome } from '@/types/homeProducts';
import ProductCard from './ProductCard';
import { ProductCard01 } from '../product-cards';

const Products = async ({ locale }: { locale: string }) => {
	const { data }: { data: ICategoryHome[] } = await getFetch({
		url: 'ecomm/product/home?limit=10&skip=0',
	});

	return (
		<div className="mx-5 my-5">
			{data?.map((category) => (
				<div key={category?.cate_id} className="mb-10">
					{/* Display the category title */}
					<h2 className="text-2xl font-bold mb-5">
						{locale === 'en' ? category?.cate_name_en : category?.cate_name_ar}
					</h2>

					{/* Display the products */}
					<div className="flex flex-wrap gap-5">
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
					</div>
					<div className="grid grid-cols-6 gap-4">
						{category?.products.map((product) => (
							<ProductCard01 />
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Products;
