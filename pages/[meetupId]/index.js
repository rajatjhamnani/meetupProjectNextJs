import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import MeetupEachData from "../../components/meetups/MeetupEachData";

const DetailPage = (meetups) => {
  console.log(meetups);

  const router = useRouter();
  const meetupId = router.query.meetupId;
  console.log(meetupId);

  const selectedMeetup = meetups.meetups.find(
    (meetup) => meetup.id === meetupId
  );
  console.log(meetups);
  // if (!selectedMeetup) {
  //   return <h1>Meetup not found</h1>;
  // }

  return (
    <MeetupEachData selectedMeetup={selectedMeetup} />
    /* <img src={selectedMeetup.image} alt={selectedMeetup.title} />
      <h1>{selectedMeetup.title}</h1>
      <p>{selectedMeetup.address}</p>
      <p>{selectedMeetup.description}</p> */
  );
};
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://rajatjhamnani:sharpener55@cluster0.dig259w.mongodb.net/?retryWrites=true&w=majority&appName=meetups"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  const paths = meetups.map((meetup) => ({
    params: { meetupId: meetup._id.toString() },
  }));
  return {
    fallback: true,
    paths: paths,
  };
}
export async function getStaticProps(context) {
  const client = await MongoClient.connect(
    "mongodb+srv://rajatjhamnani:sharpener55@cluster0.dig259w.mongodb.net/?retryWrites=true&w=majority&appName=meetups"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  //const meetupId = context.params.meetupId;
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}

export default DetailPage;
