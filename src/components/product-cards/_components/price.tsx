"use client";
import { useAppSelector } from "@/store";
import { IProduct } from "@/types";

export default function ProductPrice({ product }: { product: IProduct }) {
  const { code, rate } = useAppSelector((state) => state.currency);
  const base_special_price = Number(product.base_special_price);
  const base_price = Number(product.base_price);

  return (
    <p>
      <small className="align-super">{code}</small>
      <span className="text-2xl font-bold text-slate-900">
        {(base_special_price * rate).toFixed(2)}
      </span>

      {base_special_price !== base_price && (
        <span className="text-sm text-slate-600 line-through ml-2">
          <small className="align-super">{code}</small>
          {(base_price * rate).toFixed(2)}
        </span>
      )}
    </p>
  );
}
