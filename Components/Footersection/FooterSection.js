import Image from "next/image";

function FooterSection() {
  return (
    <footer className="font-ABeeZee mt-auto">
      <div className="border-t-2 dark:border-white border-black mt-10 bg-slate-300 dark:bg-slate-700 w-[240vw] lg:w-[211vw] xl:w-[99vw] overflow-y-hidden scrollbar-hide">
        <div>
          <div className="justify-center flex">
            <Image
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
              layout="fixed"
              objectFit="contain"
              width={100}
              height={100}
              alt="TMDB"
            />
          </div>
          <div className=" flex justify-center text-center">
            <p className="text-lg font-semibold">
              This product uses the TMDb API but is not endorsed or certified by
              TMDb.
              <br /> All the information provided in this application it's
              retrieved by TMDb.
            </p>
          </div>
        </div>
        <div>
          <div className="mt-5 flex justify-between">
            <ul className="ml-10">
              <li className="text-lg font-semibold underline">My Network</li>
              <li className="mt-2 hover:underline cursor-pointer hover:text-blue-400">
                <a
                  href="https://www.linkedin.com/in/rahulraj2392"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  LinkedIn
                </a>
              </li>
              <li className="hover:underline cursor-pointer hover:text-blue-400">
                <a
                  href="https://github.com/Rxhulrxj"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Github
                </a>
              </li>
              <li className="hover:underline cursor-pointer hover:text-blue-400">
                <a
                  href="https://github.com/Rxhulrxj/Movie-House"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Project Source Code
                </a>
              </li>
            </ul>
            <ul className="mr-20">
              <li className="text-lg font-semibold underline">TMDb</li>
              <li className="mt-2 hover:underline cursor-pointer hover:text-blue-400">
                <a
                  href="https://www.themoviedb.org/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  TMDb Site
                </a>
              </li>
              <li className="hover:underline cursor-pointer hover:text-blue-400">
                <a
                  href="https://developers.themoviedb.org/3/getting-started/introduction"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  TMDb API
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className=" flex items-center justify-center">
          ⚠️
          <span className="items-center cursor-default">
            This Site is still in development.Might face some issues in bad
            internet connection
          </span>
        </p>
        <div className="flex justify-center items-center text-center">
          <div className="border-t-2 min-w-[500px] mt-6 text-lg text-blue-400 ">
            <p className="hover:underline cursor-pointer">
              2022-By Rahul Raj N
            </p>
            <p className="hover:underline cursor-pointer">
              Powered by TMDb API
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
