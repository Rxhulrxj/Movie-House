import Image from "next/image";
import { useRouter } from "next/router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function TvGenreshow({ result }) {
  const router = useRouter();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="mx-10 my-8  justify-center items-end columns-auto">
      <div
        className="relative xl:w-[25rem] h-[23rem] extrasmall:w-[35rem] extrasmall:h-[35rem] shadow-lg hover:scale-110 transition transform duration-300 ease-in-out hover:shadow-2xl"
        onClick={() => router.push(`/detail/tv/${result.id}`)}
      >
        <LazyLoadImage
          alt={result?.name || result?.original_name}
          src={`${BASE_URL}${result.poster_path}`}
          className="rounded-xl shadow-lg"
          effect="blur"
        />
        {/* <Image
          src={`${BASE_URL}${result.poster_path}`}
          layout="fill"
          objectFit="inherit"
          className="rounded-3xl "
          alt={result?.name || result?.original_name}
        /> */}
      </div>
    </div>
  );
}

export default TvGenreshow;
