import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import Link from "next/link";
function HeaderSection() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true));
  const ThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    // xl:min-w-[90vw] lg:min-w-[100vw] sm:min-w-[200vw] md:min-w-[160vw] extrasmall:min-w-[240vw]
    <header className="sticky py-4 font-Righteous shadow-xl border-b-2 h-[100px] w-[240%] lg:w-[211vw] xl:w-[99vw]">
      <div className="flex  space-x-3 space-y-5 sm:ml-2 md:ml-6 xl:ml-20 items-center ">
        <h1 className=" mt-4  text-red-600 animate-pulse cursor-default sm:text-3xl md:text-4xl xl:text-5xl mr-5">
          Movie<span className="ml-1 text-cyan-500">House</span>
        </h1>
        <div className="flex flex-row items-center space-x-5 ml-10 mt-8 flex-grow">
          <Link href="/">
            <a className="no-underline">
              <h2 className="leading-tight">
                <span className="link link-underline link-underline-black">
                  Home
                </span>
              </h2>
            </a>
          </Link>
          <Link href="/Tvshow">
            <a className="no-underline">
              <h2 className="leading-tight ml-4">
                <span className="link link-underline link-underline-black">
                  Tv Shows
                </span>
              </h2>
            </a>
          </Link>
          <Link href="/Genres">
            <a className="no-underline">
              <h2 className="leading-tight ml-4">
                <span className="link link-underline link-underline-black">
                  Genres
                </span>
              </h2>
            </a>
          </Link>
          <Link href="/Search">
            <a className="no-underline">
              <h2 className="leading-tight ml-4">
                <span className="link link-underline link-underline-black">
                  Search
                </span>
              </h2>
            </a>
          </Link>
        </div>
        <div className="flex items-center mr-6">{ThemeChanger()}</div>
      </div>
    </header>
  );
}

export default HeaderSection;
