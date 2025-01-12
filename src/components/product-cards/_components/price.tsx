'use client';
import { useAppSelector } from '@/store';
import { IProduct } from '@/types';
import React from 'react';

export default function ProductPrice({ product }: { product: IProduct }) {
	const { code, rate } = useAppSelector((state) => state.currency);
	const base_special_price = Number(product.base_special_price);
	const base_price = Number(product.base_price);
	console.log(product.base_special_price, base_price);

	return (
		<p>
			<span className="text-3xl font-bold text-slate-900">
				{code}
				{(base_special_price * rate).toFixed(2)}
			</span>

			{base_special_price !== base_price && (
				<span className="text-sm text-slate-900 line-through">
					{code}
					{(base_price * rate).toFixed(2)}
				</span>
			)}
		</p>
	);
}
