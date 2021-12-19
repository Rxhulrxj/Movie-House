import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
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
    <div className="flex flex-1 space-x-3 space-y-5 sm:ml-2 md:ml-6 xl:ml-20 items-center ">
      <h1 className=" mt-4  text-red-600 animate-pulse cursor-default sm:text-3xl md:text-4xl xl:text-5xl mr-5">
        Movie<span className="ml-1 text-cyan-500">Data</span>base
      </h1>
      <div className="flex flex-row items-center space-x-5 ml-10 mt-8 flex-grow">
        <a href="/" className="no-underline">
          <h2 className="leading-tight">
            <span className="link link-underline link-underline-black">
              Home
            </span>
          </h2>
        </a>
        <a href="/" className="no-underline">
          <h2 className="leading-tight ml-4">
            <span className="link link-underline link-underline-black">
              Popular
            </span>
          </h2>
        </a>
        <a href="/" className="no-underline">
          <h2 className="leading-tight ml-4">
            <span className="link link-underline link-underline-black">
              Genres
            </span>
          </h2>
        </a>
      </div>
      <div className="flex flex-col-reverse ml-10 mr-10 shadow-xl invisible md:visible">
        <input
          type="text"
          className="bg-transparent  outline-double rounded-lg w-full p-0 py-2 px-3 focus:outline-double focus:rounded-lg "
          placeholder="Search here.."
        />
      </div>
      <div className="flex items-center mr-6">{ThemeChanger()}</div>
    </div>
  );
}

export default HeaderSection;
