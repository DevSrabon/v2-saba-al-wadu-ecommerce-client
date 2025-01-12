import {
	Action,
	combineReducers,
	configureStore,
	ThunkAction,
} from '@reduxjs/toolkit';

import { apiSlice } from './features/api/apiSlice';
import { commonApiSlice } from './features/api/commonApiSlice';
import counterReducer from './features/counter/counterSlice';
import currencyReducer from './features/common/currency/currency-reducer-slice';

// import webReducer from './web'

// ...

const rootReducer = combineReducers({
	counter: counterReducer,
	[apiSlice.reducerPath]: apiSlice.reducer,
	[commonApiSlice.reducerPath]: commonApiSlice.reducer,
	currency: currencyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
	return configureStore({
		reducer: rootReducer,

		devTools: process.env.NODE_ENV !== 'production',

		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware()
				.concat(apiSlice.middleware)
				.concat(commonApiSlice.middleware);
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>;
