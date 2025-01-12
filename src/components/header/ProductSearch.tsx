"use client";

import InputGroup from "@/components/ui/input-group";
import { useDebounce } from "@/hooks/useDebounch";
import { getImageLink } from "@/lib/utils";
import { useGetProductSearchQuery } from "@/store/features/api/commonApiSlice";

import { AnimatePresence, motion } from "framer-motion";
import { Loader, Search } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const ProductSearch = (props: Props) => {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");
  const locale = useLocale();

  const debounce_search = useDebounce(search, 1000);

  const { data, isLoading, isSuccess } = useGetProductSearchQuery(
    { name: debounce_search },
    { skip: !debounce_search.length }
  );

  const results = data?.data || [];

  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="hidden md:block relative mx-2"
      animate={{ width: isFocused ? "30rem" : "18rem", }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <InputGroup className="hidden lg:flex bg-[#F0F0F0] mr-3 ">
        <InputGroup.Text>
          {isLoading ? (
            <Loader className="animate-spin text-primary" />
          ) : (
            <Search className="text-gray-500" />
          )}
        </InputGroup.Text>
        <InputGroup.Input
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            if (!search) setIsFocused(false);
          }}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          name="search"
          placeholder={locale === 'en' ? "Search for products..." : "البحث عن المنتجات..."}
          className="bg-transparent placeholder:text-black/40"
        />
      </InputGroup>
      <AnimatePresence>
        {isFocused && search && isSuccess && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={container}
            className="absolute z-40 my-2 w-full p-2 bg-white rounded-md shadow-md border border-gray-100 max-h-64 overflow-y-auto
              scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
              hover:scrollbar-thumb-gray-400
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:bg-gray-300
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-track]:rounded-full
              [&:hover::-webkit-scrollbar-thumb]:bg-gray-400"
          >
            {isLoading ? (
              <div className="p-2 flex gap-2">
                <Skeleton className="w-12 h-12 rounded-md" />
                <div>
                  <Skeleton className="w-16 h-4" />
                  <Skeleton className="w-20 h-4 my-2" />
                </div>
              </div>
            ) : isSuccess && results.length > 0 ? (
              results.map((product) => (
                <motion.div
                  key={product.p_id}
                  variants={item}
                  whileHover={{ scale: 1.01 }}
                  className="group cursor-pointer rounded-md"
                  onClick={() => {
                    router.push(`/shop/product/${product.p_slug}`);
                    setIsFocused(false); // Collapse after navigation
                  }}
                >
                  <div className="flex items-center gap-2 p-1.5 rounded hover:bg-gray-50 transition-colors duration-200">
                    <Image
                      priority
                      src={getImageLink(product.image)}
                      height={40}
                      width={40}
                      alt={product.p_name_en}
                      className="rounded object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm text-gray-800 truncate group-hover:text-blue-600 transition-colors duration-200">
                        {locale === "en" ? product.p_name_en : product.p_name_ar}
                      </p>
                      <div className="flex gap-2">
                        <p className="text-xs text-gray-600 line-through">
                          {Number(product.base_price || 0)?.toLocaleString()} AED
                        </p>
                        <p className="text-xs text-gray-600">
                          {Number(product.base_special_price || 0)?.toLocaleString()} AED
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="p-2 rounded-lg">No Product Found</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductSearch;
