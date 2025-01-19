import { checkLocal } from '@/i18n';
import { IProduct } from '@/types';
import { getLocale } from 'next-intl/server';
import React from 'react';

export async function Description({ product }: { product: IProduct }) {
	const locale = await getLocale();

	return (
		<>
			<div className="mb-10">
				<h6 className="mb-6 text-2xl">Product Description</h6>
				<div
					dangerouslySetInnerHTML={{
						__html: checkLocal(
							locale,
							product?.p_details_en,
							product?.p_details_ar
						),
					}}
				></div>
			</div>
		</>
	);
}
