'use client';
import { DollarSign } from 'lucide-react';
import React from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export function CurrencySwitcher() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<DollarSign />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Select Currency</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Link href="/en">Us Dollar</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href="/ar">UAE Dirham</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
