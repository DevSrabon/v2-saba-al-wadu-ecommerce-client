'use client';
import { Languages } from 'lucide-react';
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

export function LanguageSwitcher() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Languages />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Select Language</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Link href="/en">English</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href="/ar">Arabic</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
