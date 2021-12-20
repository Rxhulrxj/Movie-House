import Banner from "../Components/Body/Banner";

export default function DashBoard({ UpcomingMovies }) {
  const result = UpcomingMovies;
  return (
    <div className="font-ABeeZee">
      <Banner Upcoming={result} key={UpcomingMovies.id} />
    </div>
  );
}
