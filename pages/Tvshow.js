import Head from "next/head";
import BannerTv from "../Components/TvBody/BannerTv";
import MediumcardTv from "../Components/TvBody/MediumcardTv";
import Nowplayingtv from "../Components/TvBody/NowplayingTvshow";
import SmallcardTvshows from "../Components/TvBody/SmallcardTvshow";

function Tvshow({
  PopularTvshow,
  Trending,
  toprated,
  Onair,
  Banner,
  action,
  Comedy,
  Documentary,
}) {
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
              <BannerTv Banner={Banner} key={Banner.id} />
              <h2 className="text-4xl ml-7 mt-8">Trending this Week</h2>
              <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2  min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
                {Trending?.map((tv) => (
                  <Nowplayingtv key={tv.id} tv={tv} />
                ))}
              </div>
              <h2 className="text-4xl ml-7 mt-8 ">Popular Tvshow</h2>
              <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
                {PopularTvshow?.map((tv) => (
                  <MediumcardTv key={tv.id} tv={tv} />
                ))}
              </div>
              <h2 className="text-4xl ml-7 mt-8 ">Top Rated</h2>
              <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
                {toprated?.map((tv) => (
                  <MediumcardTv key={tv.id} tv={tv} />
                ))}
              </div>
              <h2 className="text-4xl ml-7 mt-8 ">Action Shows</h2>
              <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
                {action?.map((tv) => (
                  <SmallcardTvshows key={tv.id} tv={tv} />
                ))}
              </div>
              <h2 className="text-4xl ml-7 mt-8 ">Comedy Shows</h2>
              <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
                {Comedy?.map((tv) => (
                  <SmallcardTvshows key={tv.id} tv={tv} />
                ))}
              </div>
              <h2 className="text-4xl ml-7 mt-8 ">Documentary Shows</h2>
              <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
                {Documentary?.map((tv) => (
                  <SmallcardTvshows key={tv.id} tv={tv} />
                ))}
              </div>
              <h2 className="text-4xl ml-7 mt-8 ">
                More Show You Will Love To Watch
              </h2>
              <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
                {Onair?.map((tv) => (
                  <SmallcardTvshows key={tv.id} tv={tv} />
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
  const [
    request1,
    request2,
    request3,
    request4,
    request5,
    request6,
    request7,
    request8,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}`
    ),
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
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&with_genres=10759&include_adult=false`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&with_genres=35&include_adult=false`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&with_genres=99&include_adult=false`
    ),
  ]);
  const [
    Banner,
    onair,
    Trending,
    popular,
    top_rated,
    action,
    Comedy,
    Documentary,
  ] = await Promise.all([
    request1.json(),
    request2.json(),
    request3.json(),
    request4.json(),
    request5.json(),
    request6.json(),
    request7.json(),
    request8.json(),
  ]);
  return {
    props: {
      Banner: Banner.results,
      PopularTvshow: popular.results,
      Trending: Trending.results,
      toprated: top_rated.results,
      Onair: onair.results,
      action: action.results,
      Comedy: Comedy.results,
      Documentary: Documentary.results,
    },
  };
}
