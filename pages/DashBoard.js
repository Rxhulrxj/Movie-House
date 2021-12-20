import Banner from "../Components/Body/Banner";
import NowPlaying from "../Components/Body/NowPlaying";

export default function DashBoard({ UpcomingMovies, NowPlayingMovies }) {
  const result = UpcomingMovies;
  return (
    <div className="font-ABeeZee">
      <Banner Upcoming={result} key={UpcomingMovies.id} />
      <h2 className="text-4xl ml-7 mt-8">Now Playing</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 ">
        {NowPlayingMovies?.map((movie) => (
          <NowPlaying key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
