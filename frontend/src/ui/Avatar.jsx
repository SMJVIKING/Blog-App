import Image from "next/image";

function Avatar({ src, width = 24 }) {
  return (
    <Image
      src={src}
      alt="avatar image"
      with={width}
      height={width}
      className="rounded-full ring-1 ring-secondary-300 ml-2"
    />
  );
}
export default Avatar;

// || "../../public/images/1721899817313-127506334.png"
