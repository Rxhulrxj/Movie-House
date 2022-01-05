import Image from "next/image";
import { useRouter } from "next/router";

function UpcomingMovie({ movie }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  return (
    <div
      className="flex min-w-[160px] min-h-[250px] md:min-w-[200px] md:min-h-[270px]  rounded-lg overflow-hidden shadow-xl cursor-pointer 
border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 ml-7 
relative  group "
      onClick={() => router.push(`/detail/${movie.id}`)}
    >
      <Image
        src={`${BASE_URL}${movie.poster_path}`}
        layout="fill"
        objectFit="contain"
        className="rounded-xl shadow-lg"
        priority={true}
      />
      <div className="hidden group-hover:block group-hover:absolute group-hover:mt-[130px] group-hover:ml-0 group-hover:bg-slate-900 w-[100%] transform transition duration-300">
        <h2 className="text-white font-extrabold text-xl">
          {movie.original_title || movie.title}
        </h2>
        <br />
        <p className="text-white">⭐{movie.vote_average}/10</p>
      </div>
    </div>
  );
}
export default UpcomingMovie;
