"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export function LanguageSwitcher() {
  const router = useRouter();
  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "عربي" },
  ];
  const locale = useLocale();

  const handleLanguageChange = (lang: string) => {
    const { pathname, search } = window.location;

    const newPathname = pathname.replace(`/${locale}`, `/${lang}`);

    router.push(`${newPathname}${search}`);
  };

  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[60px] lg:w-full h-6 p-0.5 ring-0 focus:ring-0">
        <Globe className="h-4" />
        <SelectValue placeholder={locale.toUpperCase()} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages.map(({ code, name }) => (
            <SelectItem key={code} value={code}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
