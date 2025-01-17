"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ICategories } from "@/types/commonTypes";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

type MenuItemProps = {
  categories: ICategories[] | undefined;
};

export function MenuItem({ categories }: MenuItemProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations();
  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Link
          href="/"
          className="font-normal px-3 cursor-pointer flex items-center border-none"
        >
          {t("NavbarLinks.categories")}
          <ChevronDown
            className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-screen max-w-2xl p-4 ml-28 mt-5 shadow-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 0.1 },
            },
          }}
        >
          <div className="flex flex-wrap relative">
            <div className="absolute inset-0 pointer-events-none">
              <div className="hidden md:block absolute top-0 bottom-0 left-[25%] w-[1px] bg-gray-300" />
              <div className="hidden md:block absolute top-0 bottom-0 left-[50%] w-[1px] bg-gray-300" />
              <div className="hidden lg:block absolute top-0 bottom-0 left-[75%] w-[1px] bg-gray-300" />
            </div>

            {categories?.map((category) => (
              <motion.div
                key={category.id}
                className="relative w-1/2 md:w-1/3 lg:w-1/4 p-4"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <CategoryMenuItem category={category} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function CategoryMenuItem({ category }: { category: ICategories }) {
  const locale = useLocale();
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="space-y-2"
    >
      <Link
        href={`/shop?category=${category.cate_slug}`}
        className="font-semibold text-sm hover:text-green-400 duration-100"
      >
        {locale === "ar" ? category.cate_name_ar : category.cate_name_en}
      </Link>
      {category.children.length > 0 && (
        <ul className="space-y-1">
          {category.children.map((child, index) => (
            <CategoryMenuItem category={child} key={index} />
          ))}
        </ul>
      )}
    </motion.div>
  );
}
