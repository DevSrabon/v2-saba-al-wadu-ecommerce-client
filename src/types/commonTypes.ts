export interface HTTPResponse<T> {
	success: boolean;
	total?: number;
	data?: T;
	message?: string;
	token?: string;
}

export interface ISearchProduct {
	p_id: number;
	p_name_en: string;
	p_name_ar: string;
	p_slug: string;
	avg_rating: string;
	total_sold: number;
	base_price: string;
	base_special_price: string;
	image: string;
}

export interface ICategories {
	id: number;
	cate_name_en: string;
	cate_name_ar: string;
	cate_slug: string;
	cate_status: number;
	cate_image: string;
	parentId: number | null;
	children: ICategories[];
}
