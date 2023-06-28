/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Image from "next/image";
export default function CarouselContainer({ poke }: any) {
  let [isShiny, setIsShiny] = useState(false);
  let [num, setNum] = useState(0);
  return (
    <div>
      <div className="flex place-content-between ">
        <button
          onClick={() => {
            num - 1 < 0 ? setNum(19) : setNum(num - 1);
          }}
          className="text-9xl hover:text-green-300"
        >
          {"<"}
        </button>
        <div className="place-content-center m-10">
          <Image
            src={isShiny === false ? poke[num][0] : poke[num][1]}
            alt="Image of pokemon"
            width={200}
            height={200}
          />
        </div>
        <button
          onClick={() => {
            num + 1 > 19 ? setNum(0) : setNum(num + 1);
          }}
          className="text-9xl hover:text-green-300"
        >
          {">"}
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            isShiny === true ? setIsShiny(false) : setIsShiny(true);
            console.log(isShiny);
          }}
          className="border-4 rounded-3xl  hover:bg-gray-950 w-48 h-10"
        >
          {" "}
          Toggle Shiny{" "}
        </button>
      </div>
    </div>
  );
}
