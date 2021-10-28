import Container from "@/components/Container";
import Tweet from "@/components/Tweet";
import { getTweets } from "@/lib/twitter";
import { NAME } from "constants/app";

export default function Tweets({ tweets }) {
  return (
    <Container
      title={`Tweets – ${NAME}`}
      description="A collection of tweets that make me laugh, make me think and make me learn."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Tweets
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Collection of my personal favourite tweets. 🕊
        </p>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Also, not to forget, built using the Twitter API V2 (Super easy, super
          fun). 🕊
        </p>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const tweets = await getTweets(["1002103360646823936"]);

  return { props: { tweets } };
}
