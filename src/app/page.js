import background from "../../public/bg.webp"
import Image from "next/image"
import CardComponent from "../components/CardComponent";
import { getAllMoviesService } from "@/services/getAllMovies.service";


export default async function Home() {
  let allMovie = await getAllMoviesService();
  let getGenre = [];
  allMovie.payload.map((e) => {
    if (!getGenre.includes(e.genre)) {
      getGenre.push(e.genre)
    }
  });
  let test = []
  for (let i = 0; i < getGenre.length; i++) {
    test.push('await getActionMovie(' + getGenre[i] + ')')
  }
  return (
    <section className="w-full h-[1000px] flex flex-col justify-between  text-white" >
      <div className=" z-10 brightness-50" >
        <Image
          className="w-full h-[750px] object-cover z-0"
          src={background}
        />
      </div>
      {/* All Movies */}
      <div className=" flex flex-col px-7 pt-7 gap-10 bg-red-950 ">
        <p className=" text-3xl ">
          All Movies {'>'}
        </p>
        <CardComponent data={allMovie.payload} />
        {getGenre.map((e) => (
          <div>
            <p className=" text-3xl pb-10 ">
              {e} Movies {'>'}
            </p>
            <CardComponent data={allMovie.payload.filter(movie => movie.genre === e)} />
          </div>
        ))}
      </div>
    </section>
  );
}
