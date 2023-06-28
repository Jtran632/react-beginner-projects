import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="text-7xl font-thin grid text-center underline-offset-8 underline  border-4 p-24 h-screen">
        <Link href="/carousel" className="hover:text-green-400">
          {" "}
          Carousel
        </Link>
        <Link href="/faq" className="hover:text-blue-400">
          {" "}
          Faq Accordion
        </Link>
        <Link href="/quote" className="hover:text-red-400">
          Quote Generator
        </Link>
      </div>
    </main>
  );
}
