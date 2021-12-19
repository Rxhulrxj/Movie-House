function DashBoard({ UpcomingMovies }) {
  return <main className="font-ABeeZee">Dashboard</main>;
}

export default DashBoard;
export async function getServerSideProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=96b33c98105a603f414d02ab0633a177&language=en-US&page=1`
  );
  const data = await res.json();
  return {
    props: {
      UpcomingMovies: data,
    },
  };
}
