import { FaTwitter, FaGithub } from "react-icons/fa";
import data from "../data/swag.json";
import Script from "next/script";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col mx-auto max-w-8xl text-white pt-16 px-20">
      <Head>
        <title>Vercel Swag</title>
      </Head>
      <Script async defer src="https://buttons.github.io/buttons.js" />
      <nav className="flex items-center h-12 w-full">
        <Link
          className="ml-auto"
          href="https://github.com/alsonick/vercel-swag"
          target="_blank"
        >
          <FaGithub className="text-4xl duration-300 hover:opacity-60" />
        </Link>
      </nav>
      <header className="flex flex-col justify-center items-center text-center pt-20">
        <h1 className="font-black text-6xl tracking-tighter max-w-[50rem]">
          Submit a pr with some of pics of your vercel swag! ▲
        </h1>
        <p className="text-gray-500 text-2xl mt-2 font-medium">
          Click{" "}
          <Link
            className="font-bold text-pink-500 hover:underline"
            href=""
            target="_blank"
          >
            here
          </Link>{" "}
          to add your photos.
        </p>
      </header>
      <div className="columns-1 gap-20 space-y-4 p-5 md:columns-2 lg:columns-3 mt-20">
        {data.map((d) => (
          <div className="flex flex-col" key={d.twitter_handle}>
            <picture>
              <img
                className="rounded-3xl opacity-50 h-min hover:opacity-100 duration-300"
                src={`/pictures/@${d.twitter_handle}-vercel-swag-${d.pic_index}.${d.file_ext}`}
                alt="Vercel Swag"
              />
              <Link
                className="text-left flex items-center font-bold mt-4 hover:underline hover:opacity-70 duration-300"
                href={`https://twitter.com/${d.twitter_handle}`}
                title={`Follow @${d.twitter_handle} on Twitter.`}
                target="_blank"
              >
                <FaTwitter className="mr-1 text-lg" />@{d.twitter_handle}
              </Link>
            </picture>
          </div>
        ))}
      </div>
      <footer className="mt-20 pb-5 text-center">
        <p className="text-gray-500 mb-5 font-medium">
          Made with ❤️ by{" "}
          <Link
            className="font-bold text-gray-400 hover:underline"
            href="https://github.com/alsonick"
            target="_blank"
          >
            Nicholas
          </Link>{" "}
          <br />&{" "}
          <Link
            className="font-bold text-gray-400 hover:underline"
            href="https://github.com/alsonick/vercel-swag/graphs/contributors"
            target="_blank"
          >
            Contributors
          </Link>
          .
        </p>
        <a
          className="github-button"
          href="https://github.com/alsonick"
          target="_blank"
          data-size="large"
          data-show-count="true"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          rel="noreferrer"
          aria-label="Follow @alsonick on GitHub"
        >
          Follow @alsonick
        </a>
      </footer>
    </div>
  );
};

export default Home;
