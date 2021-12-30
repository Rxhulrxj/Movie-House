import Image from "next/image";
import { useRouter } from "next/router";

function RecommendTv({ tv }) {
  const router = useRouter();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      className="flex min-w-[100px] min-h-[170px] md:min-w-[200px] md:min-h-[210px]  rounded-lg overflow-hidden shadow-xl cursor-pointer 
    border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 ml-7 
    relative  group "
      onClick={() => router.push(`/detail/tv/${tv.id}`)}
    >
      <Image
        src={`${BASE_URL}${tv.poster_path}`}
        layout="intrinsic"
        width={300}
        height={400}
        objectFit="contain"
        className="rounded-xl shadow-lg"
      />
      <div className="hidden group-hover:block group-hover:absolute group-hover:mt-40 group-hover:ml-0 group-hover:bg-slate-900 w-full">
        <h2 className="text-white font-extrabold text-xl">{tv.name}</h2>
        <br />
        <p className="text-white">⭐{tv.vote_average.toFixed(1)}/10</p>
      </div>
    </div>
  );
}

export default RecommendTv;
