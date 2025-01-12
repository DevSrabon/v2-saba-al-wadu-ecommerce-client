// src/store/slices/currencySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CurrencyState = {
	code: string;
	rate: number;
};

// Get the initial currency from localStorage or use a default
const LOCAL_STORAGE_KEY = 'selectedCurrency';
const initialState: CurrencyState = (() => {
	const savedCurrency =
		typeof window !== 'undefined'
			? localStorage.getItem(LOCAL_STORAGE_KEY)
			: null;
	return savedCurrency ? JSON.parse(savedCurrency) : { code: '', rate: null }; // Default currency
})();

const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {
		setCurrency(state, action: PayloadAction<CurrencyState>) {
			const { code, rate } = action.payload;
			state.code = code;
			state.rate = rate;

			// Save to localStorage
			if (typeof window !== 'undefined') {
				localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
			}
		},
	},
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
