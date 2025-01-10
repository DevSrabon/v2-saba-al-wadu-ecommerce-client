import { Banner } from "@/components/banner";
import { Header1, TopHeader } from "@/components/header";
import { getFetch } from "@/lib";

export default async function Home() {
  const data = await getFetch({ url: "ecomm/product/banner?limit=10&skip=0" });
  return (
    <>
      <TopHeader />
      <Header1 />
      <Banner />
    </>
  );
}
