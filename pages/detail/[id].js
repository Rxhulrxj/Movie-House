import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Castdetails from "../../Components/Body/castdetails";
import MovieCard from "../../Components/Body/MovieCard";
import FooterSection from "../../Components/Footersection/FooterSection";
import YouTube from "react-youtube";
function Detail({ result, result2, similar, recommed }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [show, setShow] = useState(false);
  const index = result.videos.results.findIndex(
    (element) => element.type == "Trailer" && element.offical == "true"
  );
  let trailerkey = [];
  for (var item in result.videos.results) {
    if (
      result.videos.results[item].type == "Trailer" ||
      result.videos.results[item].type == "trailer"
    ) {
      if (
        result.videos.results[item].official == "true" ||
        result.videos.results[item].official == true
      ) {
        var trailer = result.videos.results[item].key;
        trailerkey.push(trailer);
      }
    }
  }
  let actor = [];
  for (const element of result2.cast) {
    if (element.known_for_department === "Acting") {
      actor.push(element);
    }
  }
  let slicedactor = actor.slice(0, 20);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  const hours = Math.floor(result.runtime / 60);
  const minutes = result.runtime % 60;
  const runtime = `${hours}h ${minutes}m`;
  const genres = result.genres;
  const companies = result.production_companies;

  const checkElapsedTime = (e) => {
    console.log(e.target.playerInfo.playerState);
    if (e.target.playerInfo.playerState == 0) {
      setShow(false);
    }
  };

  const opts = {
    height: "100%",
    width: "100%",
    aspectRatio: "16:9",
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
      cc_load_policy: 1,
    },
  };
  const cusstyle = {
    height: "100%",
  };
  const onPageLoad = () => {
    if (show == false) {
      setTimeout(() => {
        setShow(true);
      }, 5000);
    }
  };
  useEffect(() => {
    if (document.readyState === "complete") {
      window.location.reload();
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>{result.title || result.original_name} || Movie House</title>
        <link rel="icon" href="/movie .png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <meta name="keyword" content={result.title || result.original_name} />
        <meta name="author" content="Rahul Raj N" />
        <meta charset="utf-8" />
        <meta name="description" content={result.tagline || result.title} />
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
      <main className="font-ABeeZee cursor-default">
        <div className="xl:min-w-full lg:min-w-[210vw] min-w-[230vw]">
          <section>
            <div className="relative min-h-[calc(97vh-100px)] xl:min-w-[99vw] xl:h-[100vh] lg:min-w-[211vw] lg:h-[190vh] sm:min-w-[200vw] md:min-w-[240vw] extrasmall:min-w-[240vw]">
              {show == false ? (
                <Image
                  src={`${BASE_URL}${
                    result.backdrop_path || result.poster_path
                  }`}
                  layout="fill"
                  objectFit="inherit"
                  alt={result?.title || result?.original_name}
                  loading="lazy"
                />
              ) : (
                <YouTube
                  videoId={trailerkey[0]}
                  containerClassName="embed embed-youtube"
                  onStateChange={(e) => checkElapsedTime(e)}
                  opts={opts}
                  style={cusstyle}
                  onEnd={() => setShow(false)}
                  onError={() => setShow(false)}
                />
              )}
            </div>
            {show == false ? (
              <div className="absolute text-center inset-y-[83%] extrasmall:inset-y-[75%] xl:inset-y-[88%] lg:inset-y-[180%] left-[40vw] xl:min-w-[70vw] lg:min-w-[180vw] sm:min-w-[180vw] md:min-w-[190vw] extrasmall:min-w-[200vw] extrasmall:left-[15vw] dark:text-white text-white">
                <h2 className="text-5xl font-bold">{result.title}</h2>
                <p className="text-3xl">{result.tagline}</p>
              </div>
            ) : null}
          </section>
          <section className="mx-16 min-w-[200vw] lg:min-w-[200vw] xl:min-w-0 mt-10">
            <div>
              <p className="text-center font-bold text-2xl">
                {result.overview}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-center font-bold text-4xl text-green-700">
                Status: {result.status}
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl underline mt-5">Trailer</p>
              <div className="flex justify-center">
                <iframe
                  width="580"
                  height="380"
                  src={`https://www.youtube.com/embed/${trailerkey[0]}?controls=1`}
                  frameBorder="0"
                  allow="autoplay;gyroscope ; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
          <section className="mx-16 min-w-[200vw] lg:min-w-[200vw] xl:min-w-0 mt-10">
            <div className="grid grid-rows-5 lg:grid-cols-5 mt-20  justify-items-center">
              <div className="border rounded-xl  bg-slate-400 dark:bg-slate-200 shadow-xl w-[150px] h-[150px] mt-16">
                <h3 className="text-3xl xl:text-5xl text-center mt-5">
                  <lord-icon
                    src="https://cdn.lordicon.com/mdgrhyca.json"
                    trigger="morph"
                    colors="primary:#121331,secondary:#08a88a"
                    style={{ width: "70px", height: "60px" }}
                  ></lord-icon>
                </h3>
                <h5 className="text-center mt-2 bg-slate-400 dark:bg-slate-200 text-black">
                  Rating
                </h5>
                <p className=" mt-2 text-center font-semibold text-black">
                  {result.vote_average}/10
                </p>
              </div>
              <div className="border rounded-xl  bg-slate-400 dark:bg-slate-200 shadow-xl w-[150px] h-[150px] mt-16">
                <h3 className="text-3xl xl:text-5xl text-center mt-5">
                  <lord-icon
                    src="https://cdn.lordicon.com/qhviklyi.json"
                    trigger="morph"
                    colors="primary:#121331,secondary:#08a88a"
                    style={{ width: "70px", height: "60px" }}
                  ></lord-icon>
                </h3>
                <h5 className="text-center mt-2 text-black">Budget</h5>
                <p className=" mt-2 text-center text-black font-semibold">
                  {result.budget && result.budget > 0
                    ? formatter.format(`${result.budget}`)
                    : "N/A"}
                </p>
              </div>
              <div className="border rounded-xl bg-slate-400 dark:bg-slate-200 shadow-xl w-[150px] h-[150px] mt-16">
                <h3 className="text-3xl xl:text-5xl text-center mt-5">
                  <lord-icon
                    src="https://cdn.lordicon.com/kbtmbyzy.json"
                    trigger="morph"
                    colors="primary:#121331,secondary:#08a88a"
                    style={{ width: "70px", height: "60px" }}
                  ></lord-icon>
                </h3>
                <h5 className="text-center mt-2 text-black">Runtime</h5>
                <p className=" mt-2 text-center font-semibold text-black">
                  {runtime}
                </p>
              </div>
              <div className="border rounded-xl bg-slate-400 dark:bg-slate-200 shadow-xl w-[150px] h-[150px] mt-16">
                <h3 className="text-3xl xl:text-5xl text-center mt-5">
                  <lord-icon
                    src="https://cdn.lordicon.com/yeallgsa.json"
                    trigger="morph"
                    colors="primary:#121331,secondary:#08a88a"
                    style={{ width: "70px", height: "60px" }}
                  ></lord-icon>
                </h3>
                <h5 className="text-center mt-2 text-black">Revenue</h5>
                <p className=" mt-2 text-center font-semibold text-black">
                  {result.revenue && result.revenue > 0
                    ? formatter.format(`${result.revenue}`)
                    : "N/A"}
                </p>
              </div>
              <div className="border rounded-xl bg-slate-400 dark:bg-slate-200 shadow-xl w-[150px] h-[150px] mt-16">
                <h3 className="text-3xl xl:text-5xl text-center mt-5">
                  <lord-icon
                    src="https://cdn.lordicon.com/gqzfzudq.json"
                    trigger="morph"
                    colors="primary:#121331,secondary:#08a88a"
                    style={{ width: "70px", height: "60px" }}
                  ></lord-icon>
                </h3>
                <h5 className="text-center mt-2 text-black">Release Date</h5>
                <p className=" mt-2 text-center font-semibold text-black">
                  {result.release_date}
                </p>
              </div>
            </div>
          </section>
          <section className="mx-16 min-w-[200vw] lg:min-w-[200vw] xl:min-w-0 mt-10 lg:-mt-[20%] xl:-mt-[25%]">
            <div className="grid grid-rows-3 lg:grid-cols-3 justify-items-center">
              <div className="text-center justify-items-center">
                {genres && genres.length > 0 ? (
                  <div>
                    <h3 className="text-3xl font-bold underline">Genres</h3>
                    {genres.map((genre) => (
                      <p
                        key={genre.name}
                        className="text-2xl mb-3 font-semibold"
                      >
                        {genre.name}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className=" text-center">
                {companies && companies.length > 0 ? (
                  <div>
                    <h3 className="text-3xl font-bold underline">
                      Production companies
                    </h3>
                    {companies.map((company) => (
                      <p
                        key={company.name}
                        className="text-2xl mb-1 font-semibold"
                      >
                        {company.name}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold underline">Website</h3>
                <a
                  href={result.homepage}
                  className="text-2xl font-semibold hover:underline hover:text-blue-500"
                >
                  {result.title}
                </a>
              </div>
            </div>
          </section>
          <section className="lg:-mt-[10%]  xl:-mt-[10%]">
            <h2 className=" underline ml-7 text-4xl mt-8 cursor-default ">
              Cast
            </h2>
            <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2  mt-7">
              {slicedactor?.map((cast) => (
                <Castdetails key={cast.id} cast={cast} />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-4xl ml-7 mt-8 underline">Recommended Movies</h2>
            <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2  mt-7">
              {recommed?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            <h2 className="text-4xl ml-7 mt-8 underline">Similar Movies</h2>
            <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 ">
              {similar?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}

export default Detail;
export async function getServerSideProps(context) {
  const { id } = context.query;
  const [request1, request2, request3, request4] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);
  const [result1, result2, result3, result4] = await Promise.all([
    request1.json(),
    request2.json(),
    request3.json(),
    request4.json(),
  ]);
  if (!result1 || !result2 || !result3 || !result4) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      result: result1,
      result2: result2,
      similar: result3.results,
      recommed: result4.results,
    },
  };
}
