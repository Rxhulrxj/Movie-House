import Head from "next/head";
import DashBoard from "./DashBoard";

export default function Home({
  UpcomingMovies,
  NowPlayingMovies,
  PopularMovies,
  TopRatedMovies,
}) {
  return (
    <div className="p-0 flex flex-col box-border m-0 ">
      <Head>
        <title>Movie House</title>
        <link rel="icon" href="/movie .png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&family=Tajawal&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee:ital@1&family=Righteous&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <DashBoard
          UpcomingMovies={UpcomingMovies}
          NowPlayingMovies={NowPlayingMovies}
          PopularMovies={PopularMovies}
          TopRatedMovies={TopRatedMovies}
        />
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  const [request1, request2, request3, request4] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);
  const [upcoming, nowplaying, popular, top_rated] = await Promise.all([
    request1.json(),
    request2.json(),
    request3.json(),
    request4.json(),
  ]);
  return {
    props: {
      UpcomingMovies: upcoming.results,
      NowPlayingMovies: nowplaying.results,
      PopularMovies: popular.results,
      TopRatedMovies: top_rated.results,
    },
  };
}
