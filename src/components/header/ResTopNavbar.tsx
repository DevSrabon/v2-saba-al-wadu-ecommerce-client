import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import CategoriesSectionItem from "../category/categoryItems";

import { ICategories } from "@/types/commonTypes";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { NavMenu } from "./navbar.types";

interface Props {
  categories: ICategories[] | undefined;
  data: NavMenu;
  is_login: string | undefined;
}

const ResTopNavbar = ({ data, categories, is_login }: Props) => {
  const t = useTranslations();
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Menu className="text-gray-600" />
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto">
        <SheetHeader className="mb-10">
          <SheetTitle asChild>
            <SheetClose asChild>
              <Link href="/" className={cn(["text-2xl text-primary"])}>
                {"SABA AL WADU"}
              </Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-start">
          {data?.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === "MenuItem" && (
                <SheetClose asChild>
                  <Link href={item.url ?? "/"} className="mb-4">
                    {item.label}
                  </Link>
                </SheetClose>
              )}
            </React.Fragment>
          ))}
        </div>

        <span className="text-gray-400 text-sm">
          {t("NavbarLinks.categories")}
        </span>
        <Separator className="mb-1" />

        <CategoriesSectionItem categories={categories} />
      </SheetContent>
    </Sheet>
  );
};

export default ResTopNavbar;
