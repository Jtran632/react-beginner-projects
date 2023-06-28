import { cache } from "react";
import Navbar from "../components/navbar";
import QuotePicker from "../components/quotePicker";

export default async function Quote() {
  const getQuotes = async () => {
    const url = "https://type.fit/api/quotes";
    const response = await fetch(url, { cache: "no-store" });
    return await response.json();
  };
  let result = await getQuotes();
  return (
    <div>
      <Navbar />
      {/* <Loading></Loading> */}
      <QuotePicker quotes={result} />
    </div>
  );
}
