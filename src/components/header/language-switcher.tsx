"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import Link from "next/link";

export function LanguageSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Languages />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Language</DropdownMenuLabel>
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
