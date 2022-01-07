import Head from "next/head";
import FooterSection from "../Components/Footersection/FooterSection";
import DashBoard from "./DashBoard";

export default function Home({
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
  return (
    <div className="p-0 flex flex-col box-border m-0 ">
      <Head>
        <title>Movie House-Search Your Favourite Shows</title>
        <link rel="icon" href="/movie .png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <meta
          name="description"
          content="Movie-House is a website which helps users to find there favourite movies without leaving the page."
        />
        <meta
          name="keyword"
          content="Movie,TvShows,GenreSearch,NextJs,Tailwind Css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Rahul Raj N" />
        <meta charset="utf-8" />
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
          trendingdaily={trendingdaily}
          UpcomingMovies={UpcomingMovies}
          NowPlayingMovies={NowPlayingMovies}
          PopularMovies={PopularMovies}
          TopRatedMovies={TopRatedMovies}
          action={action}
          comedy={comedy}
          romance={romance}
          horror={horror}
          documentary={documentary}
        />
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  const [
    request1,
    request2,
    request3,
    request4,
    request5,
    request6,
    request7,
    request8,
    request9,
    request10,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`
    ),
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
    fetch(`
        https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=35`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=10749`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=27`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=99&include_adult=false`
    ),
  ]);
  const [
    banner,
    upcoming,
    nowplaying,
    popular,
    top_rated,
    action,
    comedy,
    romance,
    horror,
    documentary,
  ] = await Promise.all([
    request1.json(),
    request2.json(),
    request3.json(),
    request4.json(),
    request5.json(),
    request6.json(),
    request7.json(),
    request8.json(),
    request9.json(),
    request10.json(),
  ]);
  return {
    props: {
      trendingdaily: banner.results,
      UpcomingMovies: upcoming.results,
      NowPlayingMovies: nowplaying.results,
      PopularMovies: popular.results,
      TopRatedMovies: top_rated.results,
      action: action.results,
      comedy: comedy.results,
      romance: romance.results,
      horror: horror.results,
      documentary: documentary.results,
    },
  };
}
