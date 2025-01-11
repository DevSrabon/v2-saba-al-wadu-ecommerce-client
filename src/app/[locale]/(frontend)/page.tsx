import { Banner } from '@/components/banner';
import Products from '@/components/card/Products';
import { Header1, TopHeader } from '@/components/header';
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
			<div>
				<div className=""></div>
				<div>
					<Suspense fallback={<>Loading</>}>
						<Products locale={locale} />
					</Suspense>
				</div>
			</div>
		</>
	);
}
