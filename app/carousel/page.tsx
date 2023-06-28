/* eslint-disable @next/next/no-img-element */
import CarouselContainer from "../components/carouselContainer";
import Navbar from "../components/navbar";
export default async function Carousel() {
  let poke: string[][] = [];
  let url: string = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;
  const res = await fetch(url);
  let data = await res.json();
  data = data.results;
  async function getPoke() {
    for (let i: number = 0; i < data.length; i++) {
      let a = await fetch(data[i].url);
      let b = await a.json();
      poke.push([b.sprites.front_default, b.sprites.front_shiny]);
    }
  }
  await getPoke();
  return (
    <div className="h-screen ">
      <Navbar />
      <div className="font-thin pt-8">
        <div>
          <div className="text-5xl flex place-content-center">Carousel</div>
        </div>
        <div className="flex justify-center h-96">
          <CarouselContainer poke={poke} />
        </div>
      </div>
    </div>
  );
}
