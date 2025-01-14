import { getFetch } from '@/lib';
import CategoriesSectionItem from './CategoriesSectionItem';
import { ICategories } from '@/types/commonTypes';

const CategoriesSection = async () => {
	const response = await getFetch({ url: 'ecomm/categories' });
	const categories: ICategories[] = response?.data;
	return <CategoriesSectionItem categories={categories} />;
};

export default CategoriesSection;
