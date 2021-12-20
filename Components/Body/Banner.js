import Image from "next/image";
import { useState, useEffect } from "react";
function Banner({ Upcoming }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    setMovie(Upcoming[Math.floor(Math.random() * Upcoming.length - 1)]);
    return Upcoming;
  }, []);
  return (
    <div className="flex flex-col mt-4">
      <div className=" relative xl:w-[200vh] w-96 h-[70vh] ml-4 ">
        <Image
          src={`${BASE_URL}.${movie.backdrop_path}`}
          layout="fill"
          className="rounded-xl shadow-lg"
        />
      </div>
      <div className="absolute top-2/3 right-12 left-7">
        <h1 className="text-4xl text-emerald-500">{movie.title}</h1>
        <p className="truncate md:text-clip">{movie.overview}</p>
        <p>⭐{movie.vote_average}/10</p>
      </div>
    </div>
  );
}

export default Banner;
