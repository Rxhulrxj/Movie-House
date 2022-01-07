import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
function BannerTv({ Banner }) {
  const BASEURL = "https://image.tmdb.org/t/p/original/";
  const [tvshow, setTvshow] = useState(" ");
  const router = useRouter();
  useEffect(() => {
    setTvshow(Banner[Math.floor(Math.random() * Banner.length - 1)]);
    return Banner;
  }, []);
  return (
    <div
      className="flex flex-col mt-4"
      onClick={() => router.push(`/detail/tv/${tvshow.id}`)}
    >
      <div className=" relative xl:min-w-[97vw]  w-[230vw] h-[70vh] md:min-w-[210vw] md:w-[90vw] lg:w-[90vw]  ml-4 lg:ml-7 ">
        <Image
          src={
            `${BASEURL}${tvshow?.backdrop_path || tvshow?.poster_path}` ||
            `${BASEURL}${tvshow?.poster_path}`
          }
          layout="fill"
          className="rounded-xl shadow-lg"
          priority={true}
          alt={tvshow?.name || tvshow?.original_name}
        />
      </div>
      <div className="absolute top-[60%] right-12 left-7 cursor-default hover:bg-black/70 hover:rounded-xl">
        <h1 className="text-4xl text-emerald-500 hover:animate-bounce hover:text-blue-600 transition transform duration-150">
          {tvshow?.name || tvshow?.original_name}
        </h1>
        <p className="truncate  md:text-clip text-red-600">
          {tvshow?.overview}
        </p>
        <p className="text-green-600" title="Imdb Rating">
          ⭐{tvshow.vote_average}/10|
          <span className="text-red-600" title="Release Date">
            {tvshow.first_air_date}
          </span>
        </p>
      </div>
    </div>
  );
}

export default BannerTv;
