import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
function Banner({ Upcoming }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [movie, setMovie] = useState([]);
  const router = useRouter();
  useEffect(() => {
    setMovie(Upcoming[Math.floor(Math.random() * Upcoming.length - 1)]);
    return Upcoming;
  }, []);
  return (
    <div
      className="flex flex-col mt-4"
      onClick={() => router.push(`/detail/${movie.id}`)}
    >
      <div className=" relative xl:min-w-[200vh]  w-[100vh] h-[70vh] md:min-w-[100vh] lg:w-[160vh] ml-4 ">
        <Image
          src={`${BASE_URL}${movie.backdrop_path}`}
          layout="fill"
          className="rounded-xl shadow-lg"
        />
      </div>
      <div className="absolute top-2/3 right-12 left-7 cursor-default">
        <h1 className="text-4xl text-emerald-500 hover:animate-bounce hover:text-blue-600 transition transform duration-150">
          {movie.original_title || movie.title}
        </h1>
        <p className="truncate md:text-clip text-red-600">{movie.overview}</p>
        <p className="text-green-600" title="Imdb Rating">
          ⭐{movie.vote_average}/10|
          <span className="text-red-600" title="Release Date">
            {movie.release_date}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Banner;
