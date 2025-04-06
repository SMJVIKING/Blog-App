import Image from "next/image";

function Avatar({ src}) {
  return (
    <Image
      src={src}
      alt="avatar image"
      width={24} 
      height={24} 
      className="rounded-full ring-1 ring-secondary-300 ml-2"
    />
  );
}
export default Avatar;
