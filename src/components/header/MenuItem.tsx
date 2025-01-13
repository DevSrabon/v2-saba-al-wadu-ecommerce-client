"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ICategories } from "@/types/commonTypes";
import { motion } from "framer-motion";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

type MenuItemProps = {
  categories: ICategories[] | undefined;
};

export function MenuItem({ categories }: MenuItemProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <NavigationMenuLink
          className={cn([
            navigationMenuTriggerStyle(),
            "font-normal px-3 cursor-pointer",
          ])}
        >
          Categories
          <ChevronDown className="ml-2 h-4 w-4" />
        </NavigationMenuLink>
      </DropdownMenuTrigger>
      <DropdownMenuContent asChild className="shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-screen max-w-2xl p-4 ml-28 mt-5"
        >
          <div className="flex flex-wrap relative">
            <div className="absolute inset-0 pointer-events-none">
              <div className="hidden md:block absolute top-0 bottom-0 left-[25%] w-[1px] bg-gray-300" />
              <div className="hidden md:block absolute top-0 bottom-0 left-[50%] w-[1px] bg-gray-300" />
              <div className="hidden lg:block absolute top-0 bottom-0 left-[75%] w-[1px] bg-gray-300" />
            </div>

            {categories?.map((category) => (
              <div
                key={category.id}
                className={cn(
                  "relative w-1/2 md:w-1/3 lg:w-1/4 p-4" // Flex widths for responsive design
                )}
              >
                <CategoryMenuItem category={category} />
              </div>
            ))}
          </div>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function CategoryMenuItem({
  category,
  child,
}: {
  category: ICategories;
  child?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="space-y-2"
    >
      <Link
        href={`/shop?category=${category.cate_slug}`}
        className={cn(
          "font-semibold text-sm hover:text-green-400 duration-100",
          child && "font-normal text-muted-foreground"
        )}
      >
        {category.cate_name_en}
      </Link>
      {category.children.length > 0 && (
        <ul className="space-y-1">
          {category?.children?.map((child, index) => (
            <CategoryMenuItem category={child} child key={index} />
          ))}
        </ul>
      )}
    </motion.div>
  );
}
