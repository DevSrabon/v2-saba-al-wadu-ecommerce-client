'use client';
import { DollarSign } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useGetCurrencyQuery } from './currency-api-slice';
import { SpinnerLoader } from '@/components/loader';
import { useAppDispatch, useAppSelector } from '@/store';
import { setCurrency } from './currency-reducer-slice';
import { useEffect } from 'react';

export function CurrencySwitcher() {
	const dispatch = useAppDispatch();
	const selectedCurrency = useAppSelector((state) => state.currency);
	const { data, isError, isLoading } = useGetCurrencyQuery(undefined);

	useEffect(() => {
		// check error data and window
		if (isLoading || isError || !data || typeof window === 'undefined') return;

		// check localStorage
		const savedCurrency = localStorage.getItem('selectedCurrency');

		if (savedCurrency) {
			// If currency exists in localStorage, update its rate from API
			const parsedCurrency: { code: 'USD' | 'GBP' | 'AED'; rate: number } =
				JSON.parse(savedCurrency);

			// Check if the currency code exists in the API response
			const updatedRate = parseFloat(
				data?.data[parsedCurrency.code.toLowerCase() as 'usd' | 'gbp' | 'aed']
			);

			// Update the rate in the state
			dispatch(
				setCurrency({
					code: parsedCurrency.code,
					rate: updatedRate || parsedCurrency.rate, // Use the rate from API, or fallback to the stored rate
				})
			);
		} else {
			// If no currency in localStorage, select the first one from API
			const firstCurrencyCode = 'aed';

			// Check if the currency code exists in the API response
			const firstCurrencyRate = parseFloat(
				data?.data[firstCurrencyCode as 'usd' | 'gbp' | 'aed']
			);

			// Update the rate in the state
			dispatch(
				setCurrency({
					code: firstCurrencyCode.toUpperCase(),
					rate: firstCurrencyRate,
				})
			);

			// Save the selected currency to localStorage
			localStorage.setItem(
				'selectedCurrency',
				JSON.stringify({
					code: firstCurrencyCode.toUpperCase(),
					rate: firstCurrencyRate,
				})
			);
		}
	}, [data, isLoading, isError, dispatch]);

	if (isError || !data?.data) {
		return null;
	}

	if (isLoading) {
		return <SpinnerLoader className="h-4 w-4 border-2" />;
	}

	// Available currencies
	const currencies = [
		{ code: 'AED', label: 'UAE Dirham', rate: parseFloat(data.data.aed) },
		{ code: 'USD', label: 'US Dollar', rate: parseFloat(data.data.usd) },
		{ code: 'GBP', label: 'British Pound', rate: parseFloat(data.data.gbp) },
	];

	// currency selection handler
	const handleCurrencyChange = (currencyCode: string, rate: number) => {
		dispatch(setCurrency({ code: currencyCode, rate }));
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="flex items-center gap-2">
					<DollarSign />
					{selectedCurrency?.code && <span>{selectedCurrency.code}</span>}
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Select Currency</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{currencies.map((currency) => (
					<DropdownMenuItem
						key={currency.code}
						onClick={() => handleCurrencyChange(currency.code, currency.rate)}
					>
						{currency.label} ({currency.code})
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
