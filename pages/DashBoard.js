import dynamic from "next/dynamic";
import Banner from "../Components/Body/Banner";
import MovieCard from "../Components/Body/MovieCard";
import FooterSection from "../Components/Footersection/FooterSection";
import useInView from "react-cool-inview";
const MovieCardloaded = dynamic(() =>
  import("../Components/Body/MovieCardlazyloaded")
);

export default function DashBoard({
  UpcomingMovies,
  NowPlayingMovies,
  PopularMovies,
  TopRatedMovies,
  trendingdaily,
  action,
  comedy,
  romance,
  horror,
}) {
  const banner = trendingdaily;
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <div className="font-ABeeZee " ref={observe}>
      <Banner trending={banner} />
      <div className="xl:min-w-full lg:min-w-[210vw] min-w-[230vw]">
        <h2 className="text-4xl ml-7 mt-8">Now Playing</h2>
        <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 ">
          {NowPlayingMovies?.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
        <h2 className="text-4xl ml-7 mt-8 ">Upcoming Movies</h2>
        <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 ">
          {UpcomingMovies?.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
        <h2 className="text-4xl ml-7 mt-8 ">Popular Movies</h2>
        <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 ">
          {PopularMovies?.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
        {inView && (
          <div>
            <h2 className="text-4xl ml-7 mt-8 ">Top-Rated Movies</h2>
            <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 ">
              {TopRatedMovies?.map((movie, index) => (
                <MovieCardloaded movie={movie} key={index} />
              ))}
            </div>
          </div>
        )}

        {inView && (
          <div>
            <h2 className="text-4xl ml-7 mt-8 ">Action Movies</h2>
            <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 ">
              {action?.map((movie, index) => (
                <MovieCardloaded movie={movie} key={index} />
              ))}
            </div>
          </div>
        )}
        {inView && (
          <div>
            <h2 className="text-4xl ml-7 mt-8 ">Comedy Movies</h2>
            <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 ">
              {comedy?.map((movie, index) => (
                <MovieCardloaded movie={movie} key={index} />
              ))}
            </div>
          </div>
        )}
        {inView && (
          <div>
            <h2 className="text-4xl ml-7 mt-8 ">Romantic Movies</h2>
            <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 ">
              {romance?.map((movie, index) => (
                <MovieCardloaded movie={movie} key={index} />
              ))}
            </div>
          </div>
        )}
        {inView && (
          <div>
            <h2 className="text-4xl ml-7 mt-8 ">Horror Movies</h2>
            <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 ">
              {horror?.map((movie, index) => (
                <MovieCardloaded movie={movie} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
      <FooterSection />
    </div>
  );
}
