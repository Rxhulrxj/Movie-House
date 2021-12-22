import Head from "next/head";
import Image from "next/image";

function DetailView({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="relative ">
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
      <section className="relative z-50 font-ABeeZee">
        <div className="relative min-h-[150vh] min-w-[110vh] md:min-h-[90vh] lg:min-w-[220vh] xl:min-w-[90vh]">
          <Image
            src={`${BASE_URL}${result.backdrop_path}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-y-1/2  md:inset-y-1/2 md:bottom-10 inset-x-4 md:inset-12 space-y-6 z-50 bg-slate-300/20 rounded-xl text-white shadow-lg cursor-default">
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
        </div>
      </section>
      <section>
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
