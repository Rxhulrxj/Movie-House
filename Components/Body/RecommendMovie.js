import Image from "next/image";
import { useRouter } from "next/router";
function RecommendMovie({ movie }) {
  const router = useRouter();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      className="flex min-w-[100px] min-h-[170px] md:min-w-[200px] md:min-h-[210px]  rounded-lg overflow-hidden shadow-xl cursor-pointer 
  border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 ml-7 
  relative  group "
      onClick={() => router.push(`/detail/${movie.id}`)}
    >
      <Image
        src={`${BASE_URL}${movie.poster_path}`}
        layout="intrinsic"
        width={300}
        height={400}
        objectFit="contain"
        className="rounded-xl shadow-lg"
        priority={true}
      />
    </div>
  );
}

export default RecommendMovie;
