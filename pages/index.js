import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const HomePage = (meetups) => {
  console.log(meetups);
  // const Dummy_Meetups = [
  //   {
  //     id: "m1",
  //     title: "A first Meetup ",
  //     image:
  //       "https://th.bing.com/th/id/OIP.VJAS1OxOIcc_3AFK_mLdvQHaEb?rs=1&pid=ImgDetMain",
  //     address: "nai basti katni",
  //     description: "this is my first meet up",
  //   },
  //   {
  //     id: "m2",
  //     title: "A second Meetup ",
  //     image:
  //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b4/bd/56/view-of-the-waterfall.jpg?w=1200&h=1200&s=1",
  //     address: "lal mati jabalpur",
  //     description: "this is my second  meet up",
  //   },
  //   {
  //     id: "m3",
  //     title: "A third Meetup ",
  //     image:
  //       "https://th.bing.com/th/id/R.0e6b2d34a1e66cfe4bc5487d1c31e047?rik=lftswG2fcjeILQ&riu=http%3a%2f%2furbanupdate.in%2fwp-content%2fuploads%2f2019%2f03%2fbhopal-lake.jpg&ehk=V14TnsdKfqtGXVuZtyqBdHJmvY11q2Ejl9VMzkWGRV0%3d&risl=&pid=ImgRaw&r=0",
  //     address: " city of LakesBhopal",
  //     description: "this is my third  meet up",
  //   },
  // ];

  return <MeetupList meetups={meetups} />;
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
