import { imageURL } from '@/constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getImageLink = (src?: string) => {
	return imageURL + src;
};

export function separateAttribute(attribute: any[] = [], name: any) {
	if (!attribute) return [];

	return attribute?.filter((attr) => attr.a_name === name);
}

export function formatQueryParams(params: any) {
	const searchParams = new URLSearchParams();

	Object.keys(params).forEach((key) => {
		if (params[key] !== undefined && params[key] !== null && params[key]) {
			searchParams.append(key, params[key]);
		}
	});

	return searchParams.toString();
}
