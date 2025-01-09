'use client';
import { Dropdown, MenuProps } from 'antd';
import { DollarSign } from 'lucide-react';
import React from 'react';

export function CurrencySwitcher() {
	return (
		<Dropdown trigger={['click']} menu={{ items }}>
			<a className="flex items-center " onClick={(e) => e.preventDefault()}>
				<DollarSign className="w-5 h-5" />
				<span className="text-sm sr-only lg:not-sr-only">Dollar</span>
			</a>
		</Dropdown>
	);
}
const items: MenuProps['items'] = [
	{
		key: '1',
		label: 'Dollar',
	},
	{
		key: '2',
		label: 'Dirham(AED)',
	},
];
