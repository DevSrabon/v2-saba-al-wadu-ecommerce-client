export const calculatePrice = (
  priceInBaseCurrency: number, // Product price in the base currency (e.g., AED)
  exchangeRate: number // Exchange rate of the selected currency
): number => {
  return parseFloat((priceInBaseCurrency * exchangeRate).toFixed(2)); // Calculate and round to 2 decimal places
};

/*
	// Example  Calculation
	const basePrice = 100; // Base
	const convertedPrice = calculatePrice(basePrice, selectedCurrency.rate);
	console.log(selectedCurrency);
*/
