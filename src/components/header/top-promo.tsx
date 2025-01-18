"use client";
import { useToast } from "@/hooks/use-toast";
import { useAppSelector } from "@/store";
import { HTTPResponse } from "@/types/commonTypes";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
export const TopPromo = ({ data }: { data: HTTPResponse<any[]> }) => {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const selectedCurrency = useAppSelector((state) => state.currency);
  const locale = useLocale();
  const t = useTranslations();
  const { toast } = useToast();
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!data?.data?.length || !isClient) return null;

  const { coupon_code, discount, discount_type } = data.data[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon_code);
    setCopied(true);
    toast({
      description: "Coupon has been copied to clipboard",
      color: "black",
    });
    // setTimeout(() => setCopied(false), 2000);
  };

  const formattedDiscount =
    discount_type === "fixed"
      ? (parseFloat(discount) * selectedCurrency.rate).toFixed(2)
      : discount;

  return (
    <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-xs text-center flex items-center">
      <span className="font-bold">{t("Promo.title")}</span>{" "}
      {discount_type === "fixed" ? selectedCurrency.code : "%"}{" "}
      {formattedDiscount}
      <span className="hidden md:block">{t("Promo.on_all_products")} </span>
      {!copied && (
        <FaRegCopy
          onClick={handleCopy}
          className="ml-0.5 text-lg cursor-pointer"
        />
      )}
    </div>
  );
};
