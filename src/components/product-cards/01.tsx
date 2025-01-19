import { IProduct } from '@/types';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { ShadCNCarousel } from '../card/CartSlider';
import ProductPrice from './_components/price';

export function ProductCard01({
	product,
	locale,
}: {
	product: IProduct;
	locale: string;
}) {
	const filledStars = Math.floor(Number(product.avg_rating));
	const discount =
		Number(product.base_price) - Number(product.base_special_price);
	let discountPercentage = (discount / Number(product.base_price)) * 100;

	discountPercentage =
		discountPercentage % 1 === 0
			? parseFloat(discountPercentage.toFixed(0))
			: parseFloat(discountPercentage.toFixed(2));

	return (
		<>
			<Link
				className="relative mx-3 mt-3 flex h-72 overflow-hidden rounded-xl  "
				href={`/shop/${product.p_slug}`}
			>
				{/* <EmblaCarousel images={product.all_images} /> */}
				<ShadCNCarousel images={product.all_images} />
				{/* <Image
          className="object-cover w-full"
          layout="fill"
          src={imageURL + product.all_images[0]}
          alt="product image"
        /> */}
				{discountPercentage && discountPercentage > 0 ? (
					<span className="absolute top-0 left-0 m-2 rounded-full bg-primary-500 px-2 text-center text-sm font-medium text-white">
						${discountPercentage}% OFF
					</span>
				) : null}
			</Link>
			<div className="mt-4 px-5 pb-14">
				<Link href={`/shop/${product.p_slug}`}>
					<h5 className="text-lg tracking-wide font-bold uppercase text-slate-900  hover:text-primary-500 transition-all duration-300">
						{locale === 'en' ? product.p_name_en : product.p_name_ar}
					</h5>
				</Link>
				<div className="mt-2 mb-2 flex items-start justify-between flex-col">
					<ProductPrice product={product} />

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
							<span className="mr-2 ml-0.5  text-slate-400  text-xs font-light">
								({product.rating_count})
							</span>
						)}
					</div>
				</div>

				{/* add to cart  */}
				<div className="absolute bottom-4 left-4 right-4 ">
					<Link
						href="#"
						className="flex items-center justify-center rounded-md bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
					>
						<ShoppingCart className="mr-2" />
						{locale === 'en' ? 'Add To Cart' : 'أضف إلى السلة'}
					</Link>
				</div>
			</div>
		</>
	);
}
