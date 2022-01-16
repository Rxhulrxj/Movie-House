import Image from "next/image";
import { useRouter } from "next/router";
function Castdetails({ cast }) {
  //   const router = useRouter();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const profile_path = `${BASE_URL}${cast.profile_path}`;
  const noprofile =
    "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";
  return (
    <div
      className="flex min-w-[180px] min-h-[270px] md:min-w-[220px] md:min-h-[340px] rounded-lg overflow-hidden shadow-xl cursor-pointer 
      border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 ml-7 
      relative w-[300px] h-[170px] group "
    >
      <Image
        src={cast.profile_path ? profile_path : `${noprofile}`}
        layout="fill"
        objectFit="contain"
        className="rounded-xl shadow-lg"
        alt={cast.name}
      />
      <div className="hidden group-hover:block group-hover:absolute group-hover:ml-0 group-hover:backdrop-blur-sm w-[100%] h-[100%] justify-center text-center">
        <div className="mt-[50%]">
          <h2 className="text-white font-extrabold text-xl">{cast.name}</h2>
          <h4 className="text-white font-semibold text-sm mt-7">
            {cast.character}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Castdetails;
