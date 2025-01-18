import { getFetch } from "@/lib";
import { IBanner } from "@/types";
import { BannerSlider } from "./banner-slider";

export const Banner = async () => {
  const { data }: { data: IBanner[] } = await getFetch({
    url: "ecomm/product/banner?limit=10&skip=0",
  });

  return <BannerSlider banner={data} />;
};
