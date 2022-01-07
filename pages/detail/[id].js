import Head from "next/head";
import Image from "next/image";
import MovieCard from "../../Components/Body/MovieCard";
import FooterSection from "../../Components/Footersection/FooterSection";
function Detail({ result, result2, similar, recommed }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const index = result.videos.results.findIndex(
    (element) => element.type === "Trailer"
  );
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
  return (
    <div>
      <Head>
        <title>{result.title || result.original_name}|| Movie House</title>
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
      <main className="font-ABeeZee">
        <section>
          <div className="relative min-h-[calc(97vh-100px)] xl:min-w-[99vw] lg:min-w-[211vw] sm:min-w-[200vw] md:min-w-[240vw] extrasmall:min-w-[240vw]">
            <Image
              src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
              layout="fill"
              objectFit="cover"
              alt={result?.title || result?.original_name}
            />
          </div>
          <div className="absolute text-center inset-y-[83%] extrasmall:inset-y-[75%] xl:inset-y-[88%] left-[40vw] xl:min-w-[70vw] lg:min-w-[180vw] sm:min-w-[180vw] md:min-w-[190vw] extrasmall:min-w-[200vw] extrasmall:left-[15vw] dark:text-white text-white">
            <h2 className="text-5xl font-bold">{result.title}</h2>
            <p className="text-3xl">{result.tagline}</p>
          </div>
        </section>
        <section className="mx-16 min-w-[200vw] lg:min-w-[200vw] xl:min-w-0 mt-10">
          <div>
            <p className="text-center font-bold text-2xl">{result.overview}</p>
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
                src={`https://www.youtube-nocookie.com/embed/${result.videos?.results[index]?.key}?controls=1`}
                title="YouTube Trailer player"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope ; picture-in-picture; fullscreen"
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
                {formatter.format(`${result.budget}`)}
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
                {formatter.format(`${result.revenue}`)}
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
        <section className="mx-16 min-w-[200vw] lg:min-w-[200vw] xl:min-w-0 mt-10 lg:-mt-[50%] xl:-mt-[25%]">
          <div className="grid grid-rows-3 lg:grid-cols-3 justify-items-center">
            <div className="text-center justify-items-center">
              {genres && genres.length > 0 ? (
                <div>
                  <h3 className="text-3xl font-bold underline">Genres</h3>
                  {genres.map((genre) => (
                    <p key={genre.name} className="text-2xl mb-3 font-semibold">
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
        <section>
          <h2 className="text-4xl ml-7 mt-8 underline">Recommended Movies</h2>
          <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
            {recommed?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <h2 className="text-4xl ml-7 mt-8 underline">Similar Movies</h2>
          <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh]">
            {similar?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
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
