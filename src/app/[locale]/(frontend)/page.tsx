import { Banner } from '@/components/banner';
import Products from '@/components/card/Products';
import { Header1, TopHeader } from '@/components/header';
import { Loader01 } from '@/components/loader';
import { getFetch } from '@/lib';
import { getLocale } from 'next-intl/server';
import { Suspense } from 'react';
export default async function Home() {
	const data = await getFetch({ url: 'ecomm/product/banner?limit=10&skip=0' });
	const locale = await getLocale();
	return (
		<>
			<TopHeader />
			<Header1 />
			<Banner />

			<Suspense
				fallback={
					<div className="my-5 grid grid-cols-6 gap-4">
						{Array.from({ length: 18 }).map((_, i) => (
							<Loader01 key={i} />
						))}
					</div>
				}
			>
				<Products locale={locale} />
			</Suspense>
		</>
	);
}
