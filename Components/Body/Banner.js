import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
function Banner({ trending }) {
  const BASEURL = "https://image.tmdb.org/t/p/original/";
  const [movie, setMovie] = useState(" ");
  const router = useRouter();
  useEffect(() => {
    setMovie(trending[Math.floor(Math.random() * trending.length - 1)]);
    return trending;
  }, []);
  return (
    <div
      className="flex flex-col mt-4"
      onClick={() => router.push(`/detail/${movie.id}`)}
    >
      <div className=" relative xl:min-w-[97vw]  w-[230vw] h-[70vh] md:min-w-[210vw] md:w-[90vw] lg:w-[90vw] ml-4 ">
        <Image
          src={
            `${BASEURL}${movie?.backdrop_path || movie?.poster_path}` ||
            `${BASEURL}${movie?.poster_path}`
          }
          alt={movie?.title || movie?.original_title}
          layout="fill"
          className="rounded-xl shadow-lg"
          priority={true}
        />
      </div>
      <div className="absolute top-[60%] right-12 left-7 cursor-default hover:bg-black/70 hover:rounded-xl">
        <h1 className="text-4xl text-emerald-500 hover:animate-bounce hover:text-blue-600 transition transform duration-150">
          {movie?.title || movie?.original_title}
        </h1>
        <p className="truncate  md:text-clip text-red-600">{movie?.overview}</p>
        <p className="text-green-600" title="Imdb Rating">
          ⭐{movie?.vote_average}/10|
          <span className="text-red-600" title="Release Date">
            {movie?.release_date}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Banner;
