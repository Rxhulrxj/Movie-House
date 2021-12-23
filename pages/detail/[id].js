import Head from "next/head";
import Image from "next/image";

function DetailView({ result, result2 }) {
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
  const direc = result2.cast;
  return (
    <div className="relative">
      <Head>
        <title>Movie House</title>
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
      <main>
        <section className=" relative flex flex-col x z-50 font-ABeeZee">
          <div className="relative min-h-[80vh] min-w-[110vh] md:min-h-[90vh] lg:min-w-[140vw] xl:min-w-[70vh] mt-1 ">
            <Image
              src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="md:absolute flex flex-col text-center -mr-64 md:top-[85%] md:left-1/3 md:right-1/3 lg:-mr-96  xl:-mr-0 xl:top-[85%] xl:left-1/3 xl:right-1/3  space-y-6 dark:text-white text-white">
            <h2 className="text-5xl font-bold ml-16 -mr-20 xl:ml-0 xl:-mr-0 ">
              {result.title}
            </h2>
            <p className=" ml-16 -mr-20 xl:ml-0 xl:-mr-0">{result.tagline}</p>
          </div>
        </section>
        <section className="flex flex-col  ml-16 items-center">
          <div className="flex items-center text-center -mr-72  mt-9  xl:-mr-0">
            <p className="font-bold text-center ">{result.overview}</p>
          </div>
          <div className="mt-9 text-center text-3xl underline flex items-center justify-center flex-col">
            <div className="mb-3 text-center items-center ml-72 xl:ml-0">
              Trailer
            </div>
            <div className="flex items-center xl:-mr-0">
              <iframe
                width="580"
                height="380"
                src={`https://www.youtube-nocookie.com/embed/${result.videos?.results[index]?.key}?controls=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope ; picture-in-picture; fullscreen"
                allowFullScreen
                className=" ml-72 md:ml-96 xl:ml-0 xl:-mr-0"
              />
            </div>
          </div>
          <div>
            <div className="grid  mt-10 xl:gap-56 grid-row-5 lg:grid-cols-5  lg:gap-20 ml-20 -mr-60 xl:mr-48">
              <div className="flex flex-col border rounded-xl bg-slate-400 shadow-xl px-10 py-10 mb-10 md:mb-0">
                <h3 className="text-3xl xl:text-5xl text-center">⭐</h3>
                <h5 className="text-center mt-2 bg-slate-400">Rating</h5>
                <p className=" mt-2 text-center font-semibold">
                  {result.vote_average}/10
                </p>
              </div>
              <div className="flex flex-col border rounded-xl  bg-slate-400 shadow-xl px-10 py-10 mb-10 md:mb-0">
                <h3 className="text-3xl xl:text-5xl text-center">💲</h3>
                <h5 className="text-center mt-2">Budget</h5>
                <p className=" mt-2 text-center">
                  {formatter.format(`${result.budget}`)}
                </p>
              </div>
              <div className="flex flex-col border rounded-xl bg-slate-400 shadow-xl px-10 py-10 mb-10 md:mb-0">
                <h3 className="text-3xl xl:text-5xl text-center">⏰</h3>
                <h5 className="text-center mt-2">Rating</h5>
                <p className=" mt-2 text-center font-semibold">{runtime}</p>
              </div>
              <div className="flex flex-col border rounded-xl bg-slate-400 shadow-xl px-10 py-10 mb-10 md:mb-0">
                <h3 className="text-3xl xl:text-5xl text-center">💰</h3>
                <h5 className="text-center mt-2">Revenue</h5>
                <p className=" mt-2 text-center font-semibold">
                  {formatter.format(`${result.revenue}`)}
                </p>
              </div>
              <div className="flex flex-col border rounded-xl bg-slate-400 shadow-xl px-10 py-10 mb-10 md:mb-0">
                <h3 className="text-3xl xl:text-5xl text-center">📅</h3>
                <h5 className="text-center mt-2">Release Date</h5>
                <p className=" mt-2 text-center font-semibold">
                  {result.release_date}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 lg:grid-cols-3 gap-x-10 items-center">
            <div className="ml-80 md:ml-0  mt-28 text-center lg:ml-20 xl:ml-0 lg:-mr-[300px] xl:mr-64">
              <h3 className="text-3xl font-bold underline">Genres</h3>
              {genres && genres.length > 0
                ? genres.map((genre) => (
                    <p key={genre.name} className="text-2xl mb-3 font-semibold">
                      {genre.name}
                    </p>
                  ))
                : null}
            </div>
            <div className="ml-80 md:ml-20 md:mt-[90px] mt-16 text-center lg:-mr-[250px] xl:mr-56">
              <h3 className="text-3xl font-bold underline">
                Production companies
              </h3>
              {companies && companies.length > 0
                ? companies.map((company) => (
                    <p
                      key={company.name}
                      className="text-2xl mb-1 font-semibold"
                    >
                      {company.name}
                    </p>
                  ))
                : null}
            </div>
            <div className="md:ml-20 md:mt-[55px] mt-28 text-center ml-80 items-center lg:-mr-[95px] lg:ml-56 xl:mr-20">
              <h3 className="text-3xl font-bold underline">Website</h3>
              <a
                href={result.homepage}
                className="text-2xl mb-1 font-semibold hover:underline hover:text-blue-500"
              >
                {result.title}
              </a>
            </div>
          </div>
          <div className="flex lg:mt-[-400px] text-center">
            <h3 className="text-5xl underline">Cast</h3>
          </div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </section>
      </main>
    </div>
  );
}

export default DetailView;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const [request1, request2] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
    ),
  ]);
  const [result1, result2] = await Promise.all([
    request1.json(),
    request2.json(),
  ]);
  return {
    props: {
      result: result1,
      result2: result2,
    },
  };
}
