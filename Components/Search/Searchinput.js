function Searchinput(props) {
  return (
    <div>
      <div className=" border-b-2">
        <h1 className="text-5xl text-center">Search Here</h1>
        <h1 className="text-2xl text-center">
          Search Your Favorite Movies or Tv Shows Here
        </h1>
      </div>

      <div className="flex flex-row mt-20 p-6 items-center justify-center">
        <h4>Enter the name of your favorite movie/Tv Show</h4>
        <input
          type="text"
          autoComplete="off"
          className="w-[450px] ml-10 rounded h-[50px] px-4"
          placeholder="Name of the Movie/Tv Show"
          id="Name"
          value={props.value}
          onChange={(e) => props.setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Searchinput;
