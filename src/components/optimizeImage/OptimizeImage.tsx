import Image from "next/image";

interface OptimizeImageProps {
  src: string;
  alt?: string;
  aspectRatio?: string; // e.g., "16/9", "1/1"
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  imgStyles?: React.CSSProperties;
  styles?: React.CSSProperties;
  imgClass?: string;
  maxWidth?: string;
  relativeClass?: string;
  [rest: string]: any; // To allow other props like width, height, etc.
}

const OptimizeImage = ({
  src,
  alt,
  aspectRatio = "1/1",
  priority,
  fill = true,
  sizes = "(max-width: 640px) 100vw, 640px",
  imgStyles,
  styles,
  imgClass,
  maxWidth,
  relativeClass,
  ...rest
}: OptimizeImageProps) => {
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: aspectRatio,
        maxWidth: maxWidth || "700px",
        width: "100%",
        ...styles,
      }}
      className={relativeClass}
    >
      <Image
        {...rest}
        src={src}
        blurDataURL={src ? src : "/assets/blur.avif"}
        placeholder={src ? "blur" : "empty"}
        alt={alt || ""}
        priority={!!priority}
        fill={fill}
        sizes={sizes}
        className={imgClass}
        style={{ objectFit: "cover", ...imgStyles }}
      />
    </div>
  );
};

export default OptimizeImage;
