import { getFetch } from '@/lib';
import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationMenuList } from '../ui/navigation-menu';
import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';
import MobileProductSearch from './MobileProductSearch';

import { NavCart, NavProfile, NavWishList } from './nav-items';
import { NavMenu } from './navbar.types';
import ProductSearch from './ProductSearch';
import ResTopNavbar from './ResTopNavbar';
import { TopHeader } from './top-header';
const data: NavMenu = [
	{
		id: 1,
		type: 'MenuItem',
		label: 'New Arrivals',
		url: '/shop?sort_by=most-popular',
	},
	{
		id: 2,
		type: 'MenuItem',
		label: 'Best Selling',
		url: '/shop?sort_by=',
	},
	{
		id: 3,
		type: 'MenuItem',
		label: 'Hot Deals',
		url: '/shop?sort_by=',
	},
];
export async function Header() {
	const response = await getFetch({ url: '/ecomm/categories' });

	const categories = response?.data;
	const profile_logo = false;
	const is_login = false;
	return (
		<nav className="top-0 bg-white z-20 sticky ">
			<TopHeader />
			<div className="flex relative max-w-frame mx-auto items-center justify-between lg:justify-start py-2 lg:py-3 px-2 lg:px-5 shadow-sm">
				<div className="flex items-center">
					<Link href="/">
						<Image
							src="/logo.png"
							priority
							alt="Saba Al Wadu logo"
							width={100}
							height={100}
							className="lg:max-w-[100px] lg:max-h-[100px]"
						/>
					</Link>
					<NavigationMenu className="hidden lg:flex mr-2 lg:mr-7">
						<NavigationMenuList>
							<>
								<MenuItem categories={categories} />
								<div></div>
								{data?.map((item) => (
									<MenuList
										label={item.label}
										key={item.id}
										href={item.url as string}
										active={item.id === 1}
									/>
								))}
							</>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="flex w-full justify-end items-center">
					<ProductSearch />
					<div className="flex items-center min-w-[16rem] justify-end">
						<MobileProductSearch />

						{/* <CartBtn /> */}
						<NavWishList />
						<NavCart />
						<Link
							href={is_login ? '/user-profile/my-account' : '/login'}
							className="p-1 flex gap-1.5 items-center group "
						>
							<NavProfile />
						</Link>
						<div className="block lg:hidden">
							<ResTopNavbar data={data} categories={categories} is_login={''} />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
