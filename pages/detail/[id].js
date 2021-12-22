import Head from "next/head";
import Image from "next/image";

function DetailView({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="relative ">
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
      <section className=" relative flex flex-col x z-50 font-ABeeZee">
        <div className="relative min-h-[80vh] min-w-[110vh] md:min-h-[90vh] lg:min-w-[140vw] xl:min-w-[70vh] mt-1 ">
          <Image
            src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="md:absolute flex flex-col text-center -mr-80 md:top-[85%] md:left-1/3 md:right-1/3 lg:-mr-96  xl:-mr-0 xl:top-[85%] xl:left-1/3 xl:right-1/3  space-y-6 ">
          <h2 className="text-3xl font-bold">{result.title}</h2>
          <p>{result.tagline}</p>
        </div>
        {/* <div className="absolute  md:bottom-10 inset-x-4 md:inset-12 space-y-6 z-50 bg-slate-300/20 rounded-xl text-white shadow-lg cursor-default">
          <h2 className="text-3xl font-bold">{result.title}</h2>
          <button className="flex bg-white/70 text-black rounded-lg px-5 py-2 items-center space-x-3 hover:scale-105 transition transform duration-150">
            <img
              src="https://cdn-icons-png.flaticon.com/512/0/375.png"
              className="w-7"
            />
            <span>Play Trailer</span>
          </button>
          <p className="font-bold">{result.overview}</p>
          <p>
            Imdb Rating: <span title="Rating">⭐{result.vote_average}/10</span>
          </p>
          <p>
            Release Date:{" "}
            <span title="Release Date">{result.release_date}</span>
          </p>
        </div> */}
      </section>
      <section>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </section>
    </div>
  );
}

export default DetailView;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  ).then((res) => res.json());
  return {
    props: {
      result: request,
    },
  };
}
