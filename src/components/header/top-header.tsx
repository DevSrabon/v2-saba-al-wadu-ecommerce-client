import React from 'react';
import { LanguageSwitcher } from './language-switcher';
import { CurrencySwitcher } from './currency-switcher';
import { TopPromo } from './top-promo';

export function TopHeader() {
	return (
		<div className="mx-auto max-w-full px-2 py-2 lg:px-6 flex justify-between items-center bg-lime-600">
			<div className="flex-shrink-0 text-white ">
				<a className="hover:underline sr-only lg:not-sr-only" href="#">
					contact@gmail.com
				</a>
			</div>
			<div className="flex-shrink-0 text-white ">
				<TopPromo />
			</div>
			<div className="flex-shrink-0 text-white flex items-center gap-1">
				<LanguageSwitcher />
				<CurrencySwitcher />
			</div>
		</div>
	);
}
