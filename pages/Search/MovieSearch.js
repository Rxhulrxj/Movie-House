import { useEffect, useState } from "react";
import Searchinput from "../../Components/Search/Searchinput";
import SearchResult from "../../Components/Search/SearchResult";
import Search from "../Search";

function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [searchvalue, setSearchvalue] = useState("");
  const api_key = "96b33c98105a603f414d02ab0633a177";
  const getMovieReq = async (searchvalue) => {
    const res = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchvalue}&page=1&include_adult=false`;
    const response = await fetch(res);
    const data = await response.json();
    const dataresult = data.results;
    setMovies(dataresult);
  };
  useEffect(() => {
    getMovieReq(searchvalue);
  }, [searchvalue]);
  return (
    <div>
      <Search />
      <section className="min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh] justify-center ">
        <div className="lg:w-[150vh] border-4 shadow-xl mt-16 flex flex-col lg:mx-96 xl:mx-60 justify-center">
          <Searchinput
            searchValue={searchvalue}
            setSearchValue={setSearchvalue}
          />
        </div>
      </section>
      <section className="mt-20 font-ABeeZee">
        <SearchResult movies={movies} />
      </section>
    </div>
  );
}

export default MovieSearch;
