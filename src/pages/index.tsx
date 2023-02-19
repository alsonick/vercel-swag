import { FaTwitter, FaGithub } from "react-icons/fa";
import data from "../data/swag.json";
import Script from "next/script";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  function removeDuplicates() {
    let twitterUsernames: string[] = [];
    data.forEach((d) => twitterUsernames.push(d.twitter_handle));
    return [...new Set(twitterUsernames)];
  }

  const title = "Vercel Swag";
  const description = "A collection of vercel swag.";

  return (
    <div className="flex flex-col mx-auto max-w-8xl h-screen text-white pt-16 lg:px-20 px-10">
      <Head>
        <title>{title}</title>
        <meta name="twitter:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="description" content={description} key="desc" />
        <meta property="og:url" content="https://vercel-swag.vercel.app/" />
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
          Submit a pr with some of your vercel swag pictures!
        </h1>
        <p className="text-gray-500 text-2xl mt-2 font-medium">
          Click{" "}
          <Link
            className="font-bold text-pink-500 hover:underline"
            href="https://github.com/alsonick/vercel-swag/blob/main/CONTRIBUTING.md"
            target="_blank"
          >
            here
          </Link>{" "}
          to add your photos to the collection.
        </p>
      </header>
      <span className="mt-20 text-gray-500 ml-auto mb-5 font-medium">
        <b className="text-gray-400">{removeDuplicates().length}</b> vercel
        swaggers 😎
      </span>
      <div className="columns-1 md:columns-2 lg:columns-4 gap-10 space-y-4 ">
        {data.map((d) => (
          <div className="overflow-hidden" key={d.twitter_handle}>
            <picture className="h-min w-full">
              <img
                className="rounded opacity-50 hover:opacity-100 duration-300 hover:scale-105"
                src={`/pictures/@${d.twitter_handle}-vercel-swag-${d.pic_index}.${d.file_ext}`}
                alt="Vercel Swag"
              />
            </picture>
            <Link
              className="text-left overflow-hidden flex items-center font-bold mt-4 hover:underline hover:opacity-70 duration-300"
              href={`https://twitter.com/${d.twitter_handle}`}
              title={`Follow @${d.twitter_handle} on Twitter.`}
              target="_blank"
            >
              <FaTwitter className="mr-1 text-lg" />@{d.twitter_handle}
            </Link>
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
