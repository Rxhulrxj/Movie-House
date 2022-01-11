import Image from "next/image";
import { useRouter } from "next/router";

function TvCard({ tv }) {
  const router = useRouter();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      className="flex min-w-[180px] min-h-[270px] md:min-w-[220px] md:min-h-[340px] rounded-lg overflow-hidden shadow-xl cursor-pointer 
      border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 ml-7 
      relative w-[300px] h-[170px] group "
      onClick={() => router.push(`/detail/tv/${tv.id}`)}
    >
      <Image
        src={`${BASE_URL}${tv.poster_path}`}
        layout="fill"
        objectFit="conatin"
        className="rounded-xl shadow-lg"
        alt={tv?.name || tv?.original_name}
      />
      <div className="hidden group-hover:block group-hover:absolute group-hover:mt-[225px] group-hover:ml-0 group-hover:bg-zinc-900 w-[100%]">
        <h2 className="text-white font-extrabold text-xl">
          {tv.name || tv.original_name}
        </h2>
        <br />
        <p className="text-white">⭐{tv.vote_average}/10</p>
      </div>
    </div>
  );
}

export default TvCard;
