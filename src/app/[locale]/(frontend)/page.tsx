import { Banner } from "@/components/banner";
import Products from "@/components/card/Products";
import { Header, TopHeader } from "@/components/header";
import { HomePageProductsLoader } from "@/components/loader";
import { getFetch } from "@/lib";
import { getLocale } from "next-intl/server";
import { Suspense } from "react";
export default async function Home() {
  const data = await getFetch({ url: "ecomm/product/banner?limit=10&skip=0" });
  const locale = await getLocale();
  return (
    <>
      <TopHeader />
      <Header />
      <Banner />

      <Suspense fallback={<HomePageProductsLoader />}>
        <Products locale={locale} />
      </Suspense>
    </>
  );
}
