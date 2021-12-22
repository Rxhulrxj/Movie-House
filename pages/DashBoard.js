import Banner from "../Components/Body/Banner";
import NowPlaying from "../Components/Body/NowPlaying";
import PopularMovie from "../Components/Body/PopularMovie";
import TopRatedMovie from "../Components/Body/TopRatedMovie";

export default function DashBoard({
  UpcomingMovies,
  NowPlayingMovies,
  PopularMovies,
  TopRatedMovies,
}) {
  const result = UpcomingMovies;
  return (
    <div className="font-ABeeZee ">
      <Banner Upcoming={result} key={UpcomingMovies.id} />
      <h2 className="text-4xl ml-7 mt-8">Now Playing</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2  min-w-[100vh] lg:min-w-[160vh] xl:min-w-[201vh]">
        {NowPlayingMovies?.map((movie) => (
          <NowPlaying key={movie.id} movie={movie} />
        ))}
      </div>
      <h2 className="text-4xl ml-7 mt-8 ">Popular Movies</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[100vh] lg:min-w-[160vh] xl:min-w-[201vh]">
        {PopularMovies?.map((movie) => (
          <PopularMovie key={movie.id} movie={movie} />
        ))}
      </div>
      <h2 className="text-4xl ml-7 mt-8 ">Top-Rated Movies</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[100vh] lg:min-w-[160vh] xl:min-w-[201vh]">
        {TopRatedMovies?.map((movie) => (
          <TopRatedMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
