import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span className="absolute -left-6 md:left-1 top-24 lg:top-32 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-green-400 to-green-600 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>

        <div className="relative flex flex-col item-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            The Best{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 ml-2">
              Music App
            </span>{" "}
            Across The Cosmos
          </h1>
          <Paragraph className="mt-8">
            Discover, stream, and share a constantly expanding mix of music and
            podcasts from around the world. Spotify is the world’s most popular
            audio streaming platform, giving you instant access to millions of
            songs, curated playlists, exclusive podcasts, and personalized
            recommendations — all in one place.
          </Paragraph>
        </div>
      </Container>
    </section>
  );
};
