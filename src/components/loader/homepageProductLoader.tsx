import { Skeleton } from "../ui/skeleton";
import { Loader01 } from "./loader-01";

export const HomePageProductsLoader = () => {
  return (
    <div className="my-5 mx-5 rounded-md">
      <Skeleton className="h-8 w-56 mb-10" />
      <div className=" grid grid-cols-6 gap-4">
        {Array.from({ length: 18 }).map((_, i) => (
          <Loader01 key={i} />
        ))}
      </div>
    </div>
  );
};
