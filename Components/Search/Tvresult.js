import TvDetail from "./TvDetail";

function Tvresult({ movies }) {
  console.log(movies);
  return (
    <div className="mx-auto flex justify-center flex-wrap pb-12 ml-[50vh] md:ml-0 lg:min-w-[211vw] xl:min-w-[98vw]">
      {movies && movies.length > 0 ? (
        <>
          {movies.map((result) => (
            <TvDetail result={result} key={result.id} />
          ))}
        </>
      ) : (
        <h3 className="min-w-[200vw] text-center font-bold ml-4 lg:min-w-[210vw] xl:min-w-[201vh]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Search for your favorite movie or tv show and we will show you the
            best
          </span>
        </h3>
      )}
    </div>
  );
}

export default Tvresult;
