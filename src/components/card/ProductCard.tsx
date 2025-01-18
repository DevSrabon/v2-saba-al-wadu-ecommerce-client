import { ShadCNCarousel } from "./CartSlider";

interface ProductCardProps {
  name: string;
  price: string;
  images: string[];
  rating: number;
  ratingCount: number;
}

const ProductCard = ({
  name,

  price,
  images,
  rating,
  ratingCount,
}: ProductCardProps) => {
  // Create an array of stars for the rating
  const stars = "★★★★★".slice(0, Math.floor(rating));

  return (
    <div className="relative w-56 p-4 bg-gray-100 rounded-lg font-sans">
      {/* Favorite Icon */}
      <span className="absolute top-2 right-2 text-gray-400 cursor-pointer">
        ♡
      </span>

      {/* Product Image */}
      {/* <img src={image} alt={name} className="w-full h-44 object-contain mb-3" /> */}
      <ShadCNCarousel images={images} />

      {/* Product Title */}
      <h3 className="text-sm text-gray-800 mb-2 font-medium">{name}</h3>

      {/* Product Price */}
      <p className="text-lg font-bold text-black mb-2">{price}</p>

      {/* Rating */}
      <div className="text-sm text-green-600 mb-3">
        <span className="text-green-600">{stars}</span>
        <span className="text-gray-500 text-xs">({ratingCount})</span>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full py-2 bg-white border border-green-600 text-green-600 rounded-full text-sm hover:bg-green-50 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
