"use client";
import { useState } from "react";
export default function FaqBuilder() {
  const questions: string[] = [
    "Is this a good product?",
    "How much does it cost?",
    "When can I get it?",
  ];
  const answers: string[] = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  ];
  const Toggle = (i: string, j: number) => {
    const [toggle, setToggle] = useState(false);
    return (
      <div className="flex justify-between mx-40 border-2 xl:mx-96 " key={i}>
        <div className="m-4">
          {" "}
          {!toggle ? (
            i
          ) : (
            <div>
              <div>{i}</div>
              <div className="pt-2">{answers[j]}</div>
            </div>
          )}{" "}
        </div>
        <button
          className="border-1 bg-blue-800 text-center p-2 m-1 rounded-md text-2xl"
          onClick={() => setToggle(!toggle)}
        >
          {!toggle ? "+" : "-"}
        </button>{" "}
      </div>
    );
  };
  return (
    <div>
      <div className="flex place-content-center pt-10">
        <div className="text-2xl mb-4">Frequently Asked Questions</div>
      </div>
      {questions?.map((i, j) => {
        return Toggle(i, j);
      })}
    </div>
  );
}
