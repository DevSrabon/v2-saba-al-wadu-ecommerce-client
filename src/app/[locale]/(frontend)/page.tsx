import { Banner } from '@/components/banner';
import Products from '@/components/card/Products';
import Footer from '@/components/footer/footer';
import { Header, TopHeader } from '@/components/header';
import { BestSellingHeader } from '@/components/header/best-selling-header';
import { HomePageProductsLoader } from '@/components/loader';
import { ProductCard01 } from '@/components/product-cards';
import { getFetch, MotionItem } from '@/lib';
import { IProduct } from '@/types';
import { getLocale } from 'next-intl/server';
import { Suspense } from 'react';
export default async function Home() {
	const { data }: { data: IProduct[] } = await getFetch({
		url: 'ecomm/product?bestSelling=1',
	});

	const locale = await getLocale();
	return (
		<>
			<TopHeader />
			<Header />
			<Banner />

			<Suspense fallback={<HomePageProductsLoader />}>
				<Products locale={locale} />
			</Suspense>

			<Suspense fallback={<HomePageProductsLoader />}>
				<div className="mx-5 my-5">
					<div className="mb-5">
						<BestSellingHeader />
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
						{data?.map((product, i) => (
							<MotionItem
								once={false}
								i={i}
								key={product?.p_id}
								className="relative  flex w-full max-w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
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
			</Suspense>

			<Footer />
		</>
	);
}
