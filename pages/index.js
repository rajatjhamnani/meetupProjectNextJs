import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { MongoClient } from "mongodb";

const HomePage = (meetups) => {
  console.log(meetups);

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active react meetups"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://rajatjhamnani:sharpener55@cluster0.dig259w.mongodb.net/?retryWrites=true&w=majority&appName=meetups"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
