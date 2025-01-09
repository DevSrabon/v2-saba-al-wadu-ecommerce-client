'use client';
import { Dropdown, MenuProps } from 'antd';
import { Languages } from 'lucide-react';
import React from 'react';

export function LanguageSwitcher() {
	return (
		<Dropdown trigger={['click']} menu={{ items }}>
			<a
				className="flex items-center gap-1"
				onClick={(e) => e.preventDefault()}
			>
				<Languages className="w-5 h-5" />
				<span className="text-sm sr-only lg:not-sr-only">English</span>
			</a>
		</Dropdown>
	);
}
const items: MenuProps['items'] = [
	{
		key: '1',
		label: 'English',
	},
	{
		key: '2',
		label: 'Arabic',
	},
];
