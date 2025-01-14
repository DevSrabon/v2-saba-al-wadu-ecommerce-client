import { Checkbox } from '../ui/checkbox';

export const RecursiveCategoryList = ({
	categories,
}: {
	categories: Category[];
}) => {
	return (
		<ul className="space-y-4">
			{categories.map((category) => (
				<li key={category.id}>
					{/* Render category checkbox and label */}
					<div className="items-top flex space-x-2">
						<Checkbox id={category.id} />
						<div className="grid gap-1.5 leading-none">
							<label
								htmlFor={category.id}
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								{category.name}
							</label>
						</div>
					</div>

					{/* Render subcategories recursively */}
					{category.subcategories && category.subcategories.length > 0 && (
						<ul className="pl-6 mt-2 space-y-4">
							<RecursiveCategoryList categories={category?.subcategories} />
						</ul>
					)}
				</li>
			))}
		</ul>
	);
};

export type Category = (typeof categories)[number];
export const categories = [
	{
		id: 'category-1',
		name: 'Category One',
		subcategories: [
			{
				id: 'subcategory-1-1',
				name: 'Subcategory 1.1',
			},
			{
				id: 'subcategory-1-2',
				name: 'Subcategory 1.2',
			},
		],
	},
	{
		id: 'category-2',
		name: 'Category Two',
		subcategories: [
			{
				id: 'subcategory-2-1',
				name: 'Subcategory 2.1',
			},
			{
				id: 'subcategory-2-2',
				name: 'Subcategory 2.2',
				subcategories: [
					{
						id: 'subcategory-2-2-1',
						name: 'Subcategory 2.2.1',
					},
				],
			},
		],
	},
];
