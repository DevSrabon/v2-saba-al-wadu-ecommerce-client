export const checkLocal = (local: string, en: string, ar?: string) => {
	if (local === 'ar' && ar) {
		return ar;
	} else {
		return en;
	}
};
