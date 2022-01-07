import Head from "next/head";
import Link from "next/link";

function Search() {
  return (
    <div>
      <Head>
        <title>Search || Movie House-Search Your Favourite Shows.</title>
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
        <section className="min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh] justify-center flex gap-3 mt-10">
          <Link href="/Search/MovieSearch">
            <a className="no-underline">
              <h2 className="text-center text-2xl ">
                <span className="underline underline-offset-8 active:no-underline">
                  <span className="bg-orange-600 rounded-xl px-4 hover:bg-orange-600/40 shadow-xl">
                    Movies
                  </span>
                </span>
              </h2>
            </a>
          </Link>
          <Link href="/Search/TvShowSearch">
            <a className="no-underline">
              <h2 className="text-center text-2xl ">
                <span className="underline underline-offset-8 active:no-underline">
                  <span className="bg-orange-600 rounded-xl px-4 hover:bg-orange-600/40 shadow-xl">
                    Tv Show
                  </span>
                </span>
              </h2>
            </a>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Search;
