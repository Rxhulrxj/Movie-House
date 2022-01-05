import Banner from "../Components/Body/Banner";
import NowPlaying from "../Components/Body/NowPlaying";
import PopularMovie from "../Components/Body/PopularMovie";
import SmallcardMovie from "../Components/Body/smallcardMovie";
import UpcomingMovie from "../Components/Body/UpcomingMovie";
import FooterSection from "../Components/Footersection/FooterSection";

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
  documentary,
}) {
  const banner = trendingdaily;
  return (
    <div className="font-ABeeZee ">
      <Banner trending={banner} key={trendingdaily.id} />
      <h2 className="text-4xl ml-7 mt-8">Now Playing</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2  min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
        {NowPlayingMovies?.map((movie) => (
          <NowPlaying key={movie.id} movie={movie} />
        ))}
      </div>
      <h2 className="text-4xl ml-7 mt-8 ">Upcoming Movies</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
        {UpcomingMovies?.map((movie) => (
          <UpcomingMovie key={movie.id} movie={movie} />
        ))}
      </div>
      <h2 className="text-4xl ml-7 mt-8 ">Popular Movies</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
        {PopularMovies?.map((movie) => (
          <PopularMovie key={movie.id} movie={movie} />
        ))}
      </div>
      <h2 className="text-4xl ml-7 mt-8 ">Top-Rated Movies</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
        {TopRatedMovies?.map((movie) => (
          <SmallcardMovie key={movie.id} movie={movie} />
        ))}
      </div>
      <h2 className="text-4xl ml-7 mt-8 ">Action Movies</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
        {action?.map((movie) => (
          <SmallcardMovie key={movie.id} movie={movie} />
        ))}
      </div>
      <h2 className="text-4xl ml-7 mt-8 ">Comedy Movies</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
        {comedy?.map((movie) => (
          <SmallcardMovie key={movie.id} movie={movie} />
        ))}
      </div>
      <h2 className="text-4xl ml-7 mt-8 ">Romantic Movies</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
        {romance?.map((movie) => (
          <SmallcardMovie key={movie.id} movie={movie} />
        ))}
      </div>
      <h2 className="text-4xl ml-7 mt-8 ">Horror Movies</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
        {horror?.map((movie) => (
          <SmallcardMovie key={movie.id} movie={movie} />
        ))}
      </div>
      <h2 className="text-4xl ml-7 mt-8 ">Documentaries</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
        {documentary?.map((movie) => (
          <SmallcardMovie key={movie.id} movie={movie} />
        ))}
      </div>
      <FooterSection />
    </div>
  );
}
