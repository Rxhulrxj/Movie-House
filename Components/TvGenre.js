import { useRouter } from "next/router";

function TvGenre({ genre }) {
  const router = useRouter();
  return (
    <div className="flex flex-row flex-wrap justify-center  py-10">
      <div
        className="h-36 w-full min-w-[200px] lg:w-11/12 mx-4 my-4 bg-[#FF5959] flex justify-center rounded-xl cursor-pointer  hover:shadow-2xl hover:scale-125 transform transition duration-300 "
        onClick={() => router.push(`/detail/Genre/Tv/${genre.id}`)}
      >
        <div className="my-auto">
          <h4 className=" text-white uppercase font-bold text-2xl link link-underline link-underline-black-genre">
            {genre.name}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default TvGenre;
