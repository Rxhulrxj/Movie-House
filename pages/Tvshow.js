import Head from "next/head";
import BannerTv from "../Components/TvBody/BannerTv";
import OnairTvshowS from "../Components/TvBody/OnairTvshow";
import TopRatedTv from "../Components/TvBody/TopRatedTv";
import Trendingtv from "../Components/TvBody/TrendingTvshow";

function Tvshow({ PopularTvshow, Trending, toprated, Onair }) {
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
          <section>
            <div>
              <BannerTv Popular={PopularTvshow} key={PopularTvshow.id} />
              <h2 className="text-4xl ml-7 mt-8">Trending this Week</h2>
              <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2  min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
                {Trending?.map((tv) => (
                  <Trendingtv key={tv.id} tv={tv} />
                ))}
              </div>
              <h2 className="text-4xl ml-7 mt-8 ">Top Rated</h2>
              <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
                {toprated?.map((tv) => (
                  <TopRatedTv key={tv.id} tv={tv} />
                ))}
              </div>
              <h2 className="text-4xl ml-7 mt-8 ">
                More Show You Will Love To Watch
              </h2>
              <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
                {Onair?.map((tv) => (
                  <OnairTvshowS key={tv.id} tv={tv} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}

export default Tvshow;
export async function getServerSideProps() {
  const [request1, request2, request3, request4] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.API_KEY}`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);
  const [onair, Trending, popular, top_rated] = await Promise.all([
    request1.json(),
    request2.json(),
    request3.json(),
    request4.json(),
  ]);
  return {
    props: {
      PopularTvshow: popular.results,
      Trending: Trending.results,
      toprated: top_rated.results,
      Onair: onair.results,
    },
  };
}
