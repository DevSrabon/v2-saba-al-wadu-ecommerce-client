"use client";
import { SpinnerLoader } from "@/components/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/store";
import { CircleDollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import { useGetCurrencyQuery } from "./currency-api-slice";
import { setCurrency } from "./currency-reducer-slice";

export function CurrencySwitcher() {
  const dispatch = useAppDispatch();
  const { data, isError, isLoading } = useGetCurrencyQuery(undefined);
  const selectedCurrency = useAppSelector((state) => state.currency);

  const [currency, setLocalCurrency] = useState("USD");

  useEffect(() => {
    if (isLoading || isError || !data?.data || typeof window === "undefined")
      return;

    const savedCurrency = localStorage.getItem("selectedCurrency");

    if (savedCurrency) {
      const parsedCurrency = JSON.parse(savedCurrency);
      setLocalCurrency(parsedCurrency.code);
      dispatch(setCurrency(parsedCurrency));
    } else {
      // Default to USD
      const defaultCurrency = { code: "USD", rate: parseFloat(data.data.usd) };
      setLocalCurrency(defaultCurrency.code);
      dispatch(setCurrency(defaultCurrency));
      localStorage.setItem("selectedCurrency", JSON.stringify(defaultCurrency));
    }
  }, [data, isLoading, isError, dispatch]);

  if (isError || !data?.data) return null;
  if (isLoading) return <SpinnerLoader className="h-4 w-4 border-2" />;

  const currencies = [
    { code: "AED", label: "AED", rate: parseFloat(data.data.aed) },
    { code: "USD", label: "USD", rate: parseFloat(data.data.usd) },
    { code: "GBP", label: "GBP", rate: parseFloat(data.data.gbp) },
  ];

  const handleCurrencyChange = (code: string) => {
    const selected = currencies.find((c) => c.code === code);
    if (!selected) return;

    setLocalCurrency(selected.code);
    dispatch(setCurrency({ code: selected.code, rate: selected.rate }));
    localStorage.setItem("selectedCurrency", JSON.stringify(selected));
  };

  return (
    <Select onValueChange={handleCurrencyChange} value={currency}>
      <SelectTrigger className="w-[60px] lg:w-full h-6 text-center p-0.5 ring-0 focus:ring-0">
        <CircleDollarSign className="h-4" />
        <SelectValue placeholder="USD" />
      </SelectTrigger>
      <SelectContent>
        {currencies.map(({ code }) => (
          <SelectItem key={code} value={code}>
            {code}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
