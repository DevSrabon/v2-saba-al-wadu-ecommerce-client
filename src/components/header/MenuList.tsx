"use local";
import { cn } from "@/lib/utils";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { useLocale } from "next-intl";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";

type MenuListProps = {
  label: string;
  label_ar: string;
  href: string;
  active?: boolean;
};

export function MenuList({ label, label_ar, href, active }: MenuListProps) {
  const locale = useLocale();
  return (
    <NavigationMenuItem>
      <Link href={href} passHref legacyBehavior>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "rounded-md px-2 md:px-3 py-1 md:py-2 text-sm font-medium text-gray-600 dark:text-gray-300",
            "hover:bg-gray-100 hover:text-gray-800",
            active && "bg-gray-100 text-gray-800"
          )}
        >
          {locale === "ar" ? label_ar : label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
