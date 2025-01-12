import { ICurrencyType, ResponseType } from '@/types';
import { apiSlice } from '../../api/apiSlice';

const api = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// get currency
		getCurrency: builder.query<ResponseType<ICurrencyType>, undefined>({
			query: () => `common/currency`,
		}),
	}),
});

export const { useGetCurrencyQuery } = api;
