import { env } from '../env';

export default async function getFetch({ url }: { url: string }) {
	const result = await fetch(`${env.baseAPI}/api/v1/${url}`, {
		next: { revalidate: 3600 },
	});

	if (!result.ok) {
		throw new Error('Failed to fetch data');
	}
	return await result?.json();
}
