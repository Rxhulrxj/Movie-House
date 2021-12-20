import Head from "next/head";
import HeaderSection from "../Components/HeaderSection/HeaderSection";

function Tvshow({ popularMovies, UpcomingMovies }) {
  // console.log(popularMovies);
  // console.log(UpcomingMovies);
  return (
    <div>
      <Head>
        <title>Movie Database</title>
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
      <section>
        <main className="font-ABeeZee">
          <h1>Tv Show</h1>
        </main>
      </section>
    </div>
  );
}

export default Tvshow;
