import Head from "next/head";
import DashBoard from "./DashBoard";

export default function Home({ UpcomingMovies }) {
  return (
    <div className="p-0 flex flex-col box-border m-0 ">
      <Head>
        <title>Movie Database</title>
        <link rel="icon" href="/movie .png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&family=Tajawal&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee:ital@1&family=Righteous&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <DashBoard UpcomingMovies={UpcomingMovies} />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=96b33c98105a603f414d02ab0633a177&language=en-US&page=1`
  );
  const upcoming = await request.json();
  return {
    props: {
      UpcomingMovies: upcoming.results,
    },
  };
}
