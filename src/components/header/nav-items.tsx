import {
	ChartBarStacked,
	Heart,
	Search,
	ShoppingCart,
	User,
} from 'lucide-react';
import React from 'react';

export const NavProfile = () => {
	return (
		<div className=" ">
			<div>
				<button
					type="button"
					className="flex gap-1 items-center dark:text-gray-300  hover:bg-gray-100 hover:text-gray-800 rounded-md px-2 py-2 text-sm font-medium text-gray-600"
				>
					<User />
					<span className="sr-only lg:not-sr-only">Abdur Shobur</span>
				</button>
			</div>
		</div>
	);
};
export const NavWishList = () => {
	return (
		<div className=" ">
			<div>
				<button
					type="button"
					className="flex gap-1 items-center dark:text-gray-300  hover:bg-gray-100 hover:text-gray-800 rounded-md px-2 py-2 text-sm font-medium text-gray-600"
				>
					<Heart />
					{/* <span className="sr-only lg:not-sr-only">Abdur Shobur</span> */}
				</button>
			</div>
		</div>
	);
};

export const NavCart = () => {
	return (
		<button
			type="button"
			className="flex gap-1 items-center dark:text-gray-300  hover:bg-gray-100 hover:text-gray-800 rounded-md px-2 md:px-2 py-1 md:py-2    text-sm font-medium text-gray-600"
		>
			<ShoppingCart />
			<span className="sr-only lg:not-sr-only">Cart</span>
		</button>
	);
};

{
	/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */
}
export const NavItem = ({
	name,
	active,
}: {
	name: React.ReactNode;
	active?: boolean;
}) => {
	return (
		<a
			href="#"
			className={`rounded-md px-2 md:px-3 py-1 md:py-2 text-sm font-medium text-gray-600 dark:text-gray-300  hover:bg-gray-100 hover:text-gray-800 ${
				active && 'bg-gray-100 text-gray-800'
			}`}
			aria-current="page"
		>
			{name}
		</a>
	);
};

export const SearchForm = () => {
	return (
		<form className="hidden xl:flex items-center gap-2 border border-gray-300 ps-3 pe-1 py-1 rounded-full ">
			<input
				id="search"
				name="search"
				placeholder="Search"
				className="w-full max-w-lg focus:outline-none"
			/>
			<button
				type="submit"
				className="w-6 md:w-8 h-6 md:h-8 bg-blue-500 text-white rounded-full flex items-center justify-center  flex-shrink-0"
			>
				<Search className="w-4 md:w-5 h-4 md:h-5" />
			</button>
		</form>
	);
};

export const SearchFormMobile = () => {
	return (
		<button
			type="submit"
			className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center  flex-shrink-0 xl:hidden"
		>
			<Search className="w-5 h-5" />
		</button>
	);
};

export const MobileMenu = () => {
	return (
		<button
			type="submit"
			className="w-8 h-8 bg-blue-500 text-white rounded flex items-center justify-center  flex-shrink-0 lg:hidden"
		>
			<ChartBarStacked className="w-5 h-5" />
		</button>
	);
};
