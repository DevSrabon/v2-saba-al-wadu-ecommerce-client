import { getFetch } from "@/lib";
import { CurrencySwitcher } from "@/store/features/common";
import { LanguageSwitcher } from "./language-switcher";
import { TopPromo } from "./top-promo";

export async function TopHeader() {
  const data = await getFetch({ url: "/ecomm/coupon?type=overall" });
  return (
    <div className="mx-auto max-w-full px-2 py-1 lg:px-6 flex justify-between items-center sticky bg-white  text-xs border border-b">
      {/* <h1>{t("title")}</h1> */}
      <div className="flex-shrink-0 text-stone-700 ">
        <a className="hover:underline sr-only lg:not-sr-only" href="#">
          contact@gmail.com
        </a>
      </div>
      <div className="flex-shrink-0 text-stone-700 ">
        <TopPromo data={data} />
      </div>
      <div className="flex-shrink-0 text-stone-700 flex items-center gap-1">
        <LanguageSwitcher />
        <CurrencySwitcher />
      </div>
    </div>
  );
}
