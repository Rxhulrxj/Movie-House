import Image from "next/image";

function PopularMovie({ movie }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px]  rounded-lg overflow-hidden shadow-xl cursor-pointer 
border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 ml-7 
relative  group "
    >
      <Image
        src={`${BASE_URL}${movie.backdrop_path}`}
        layout="fill"
        objectFit="cover"
        className="rounded-xl shadow-lg"
      />
      <div className="hidden group-hover:block group-hover:absolute group-hover:mt-16 group-hover:ml-7 group-hover:bg-slate-500/20">
        <h2 className="text-black font-extrabold text-xl">
          {movie.original_title || movie.title}
        </h2>
        <br />
        <p className="text-black">⭐{movie.vote_average}/10</p>
      </div>
    </div>
  );
}

export default PopularMovie;
