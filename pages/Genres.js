import Head from "next/head";
import FooterSection from "../Components/Footersection/FooterSection";
import MovieGenre from "../Components/MovieGenre";
import TvGenre from "../Components/TvGenre";

function Genres({ genres, tvgenres }) {
  return (
    <div>
      <Head>
        <title>Movie House</title>
        <link rel="icon" href="/movie .png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&family=Tajawal&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee:ital@1&family=Righteous&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section>
        <main className="font-ABeeZee">
          <section className="">
            <div>
              <h2 className="text-5xl text-center mt-7 my-8 underline cursor-default font-bold text-black dark:text-stone-200">
                Movie Genres
              </h2>
              <div className="grid grid-cols-2 justify-center w-[90%] extrasmall:mx-[70%] lg:ml-[50%] xl:ml-[7%] mx-14 gap-x-72 ">
                {genres?.map((genre) => (
                  <MovieGenre key={genre.id} genre={genre} />
                ))}
              </div>
            </div>
          </section>
          <section className="">
            <div>
              <h2 className="text-5xl text-center mt-7 my-8 underline cursor-default font-bold text-black dark:text-stone-200">
                Tv Genres
              </h2>
              <div className="grid grid-cols-2 justify-center w-[90%] extrasmall:mx-[70%] lg:ml-[50%] xl:ml-[7%] mx-14 gap-x-72">
                {tvgenres?.map((genre) => (
                  <TvGenre key={genre.id} genre={genre} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </section>
      <FooterSection />
    </div>
  );
}

export default Genres;
export async function getServerSideProps() {
  const [request1, request2] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`
    ),
    fetch(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.API_KEY}&language=en-US`
    ),
  ]);
  const [result1, result2] = await Promise.all([
    request1.json(),
    request2.json(),
  ]);
  return {
    props: {
      genres: result1.genres,
      tvgenres: result2.genres,
    },
  };
}
