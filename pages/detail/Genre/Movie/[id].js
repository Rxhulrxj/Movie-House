import Head from "next/head";
import MovieGenreShow from "../../../../Components/Body/MovieGenreShow";

function MovieGenreId({ results }) {
  return (
    <div className="p-0 flex flex-col box-border m-0">
      <Head>
        <title>Movie Genre || Movie House</title>
        <link rel="icon" href="/movie .png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <meta name="description" content={results.tagline || results.title} />
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
        <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
      </Head>
      <main className="font-ABeeZee mt-10 ">
        <div className="mx-auto flex justify-center flex-wrap pb-12 ml-[50vh] md:ml-0 lg:min-w-[211vw] xl:min-w-[98vw]">
          {results?.map((result) => (
            <MovieGenreShow key={result.id} result={result} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default MovieGenreId;
export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
  );
  const data = await res.json();
  return {
    props: {
      results: data.results,
    },
  };
}
