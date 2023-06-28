"use client";
import { useState, useEffect } from "react";
export default function QuotePicker({ quotes }: any) {
  console.log(quotes.length);
  let [rand, setRand] = useState(0);
  let [curQuote, setQuote] = useState({ text: "", author: "" });
  let randGen = () => {
    return Math.floor(Math.random() * quotes.length);
  };
  useEffect(() => {
    setQuote(quotes[randGen()]);
  }, []);

  return (
    <>
      <div className="flex mt-24 justify-center">
        <div className="flex-row">
          <div className="flex-wrap font-semibold text-center border-4 border-white w-[40rem] h-[20rem] ">
            <div className="text-2xl my-16 px-4">{curQuote.text}</div>
            <div className="">- {curQuote.author}</div>
          </div>
          <button
            className="flex w-[40rem] justify-center border p-1 mb-10 "
            onClick={() => setQuote(quotes[randGen()])}
          >
            Generate new quote
          </button>
        </div>
      </div>
    </>
  );
}
