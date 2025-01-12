'use client';
import { useTranslations } from 'next-intl';
import React from 'react';

export function BestSellingHeader() {
	const t = useTranslations('BasicText');
	return <h2 className="text-2xl font-bold"> {t('bestSelling')}</h2>;
}
