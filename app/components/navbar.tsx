import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center gap-10 p-10 border-b text-lg">
      <Link href={"/"} className="hover:text-yellow-300 hover:animate-pulse">
        Home
      </Link>
      <Link href={"/carousel"} className="hover:text-green-300 hover:animate-pulse">
        Carousel
      </Link>
      <Link href={"/faq"} className="hover:text-blue-300 hover:animate-pulse">
        Faq Accordion
      </Link>
      <Link href={"/quote"} className="hover:text-red-300 hover:animate-pulse">
        Quote Generator
      </Link>
    </div>
  );
}
