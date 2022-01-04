import { useEffect, useState } from "react";
import Searchinput from "../../Components/Search/Searchinput";
import Searchresulttv from "../../Components/Search/SearchResultTv";
import Tvresult from "../../Components/Search/Tvresult";
import Search from "../Search";

function TvShowSearch() {
  const [movies, setMovies] = useState([]);
  const [searchvalue, setSearchvalue] = useState("");
  const api_key = "96b33c98105a603f414d02ab0633a177";
  const getMovieReq = async (searchvalue) => {
    const res = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&query=${searchvalue}&page=1&include_adult=false`;
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
      <section className="min-w-[240vw] lg:min-w-[210vw] xl:min-w-[201vh] justify-center">
        <div className="lg:w-[150vh] border-4 shadow-xl mt-16 flex flex-col lg:mx-96 xl:mx-60 justify-center">
          <Searchinput
            searchValue={searchvalue}
            setSearchValue={setSearchvalue}
          />
          {/* <div className="flex items-center justify-center">
                <button
                  // onClick={handleClick}
                  className="bg-green-500 text-black w-[500px] h-[40px] rounded-lg active:scale-x-110 transition transform duration-300"
                >
                  Submit
                </button>
              </div> */}
        </div>
      </section>
      <section className="mt-20 font-ABeeZee">
        {/* <Searchresulttv movies={movies} /> */}
        <Tvresult movies={movies} />
      </section>
    </div>
  );
}

export default TvShowSearch;
