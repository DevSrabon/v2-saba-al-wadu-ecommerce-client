export interface ColorImage {
	image: string;
	image_id: number;
}

export interface IColor {
	color_id: number;
	color_code: string;
	p_color_id: number;
	color_images: ColorImage[];
	color_name_ar: string;
	color_name_en: string;
}

export interface IOfferDetails {
	end_date: string;
	offer_id: number;
	offer_slug: string;
	start_date: string;
	offer_name_ar: string;
	offer_name_en: string;
	offer_discount: number;
	offer_discount_type: string;
}

export interface IProductImage {
	image: string;
	image_id: number;
}

export interface IProduct {
	p_id: number;
	p_name_en: string;
	p_name_ar: string;
	p_slug: string;
	p_tags: string;
	is_featured: number;
	stock_alert: number;
	avg_rating: string;
	p_details_en: string;
	p_details_ar: string;
	rating_count: number;
	offer_details: IOfferDetails | null;
	available_stock: number;
	total_sold: number;
	barcode: string;
	base_price: string;
	base_special_price: string;
	colors: IColor[];
	all_images: string[];
	p_images: IProductImage[];
}

export interface ICategoryHome {
	cate_id: number;
	cate_name_en: string;
	cate_name_ar: string;
	cate_slug: string;
	products: IProduct[];
}
