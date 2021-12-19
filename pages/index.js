import Head from "next/head";
import DashBoard from "../Components/DashBoard";
import FooterSection from "../Components/Footersection/FooterSection";
import HeaderSection from "../Components/HeaderSection/HeaderSection";

export default function Home() {
  return (
    <div className="p-0 flex flex-col box-border m-0 ">
      <Head>
        <title>Movie Database</title>
        <link rel="icon" href="/movie .png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&family=Tajawal&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee:ital@1&family=Righteous&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className=" py-4 font-Righteous shadow-xl border-b-2  sticky min-w-full w-fit">
        <HeaderSection />
      </header>
      <main className="font-ABeeZee">
        <DashBoard />
      </main>
      <footer className="font-ABeeZee">
        <FooterSection />
      </footer>
    </div>
  );
}
