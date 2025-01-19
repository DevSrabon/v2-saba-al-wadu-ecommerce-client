'use client';
import { Minus, Plus } from 'lucide-react';
import React from 'react';

export function AddToCart() {
	return (
		<div className="flex items-center flex-wrap gap-4">
			<div className="border border-gray-200 rounded-[50rem] py-2 px-4 flex items-center">
				<button
					type="button"
					className="quantity__minus p-1 text-gray-700 hover-text-main-600 flex items-center justify-center"
				>
					<Minus className="w-4 h-4" />
				</button>
				<input
					type="number"
					className="quantity__input border-0 text-center w-8 focus:border-none focus:ring-0 focus:outline-none"
					value="1"
				/>
				<button
					type="button"
					className="quantity__plus p-1 text-gray-700 hover-text-main-600 flex items-center justify-center"
				>
					<Plus className="w-4 h-4" />
				</button>
			</div>
			<a
				href="index.html"
				className="btn btn-main rounded-[50rem] flex items-center inline-flex gap-2 px-3"
			>
				<i className="ph ph-shopping-cart"></i> Add To Cart
			</a>
		</div>
	);
}
