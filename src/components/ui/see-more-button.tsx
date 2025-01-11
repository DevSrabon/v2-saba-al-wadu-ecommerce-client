'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

export function SeeMoreButton({ href }: { href: string }) {
	const t = useTranslations('BasicText');

	return (
		<Link
			className="px-4 flex-shrink-0  py-2 bg-white border border-green-600 text-green-600 rounded-full text-sm hover:bg-green-50 transition"
			href={href}
		>
			{t('seeMore')}
		</Link>
	);
}
