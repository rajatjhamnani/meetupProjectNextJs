import { useRouter } from "next/router";

const DetailPage = () => {
  const Dummy_Meetups = [
    {
      id: "m1",
      title: "A first Meetup ",
      image:
        "https://en.wikipedia.org/wiki/Katni#/media/File:Kataighat-katni.jpg",
      address: "nai basti katni",
      description: "this is my first meet up",
    },
    {
      id: "m2",
      title: "A second Meetup ",
      image:
        "https://en.wikipedia.org/wiki/Jabalpur#/media/File:Marble_Rocks_-_Jabalpur.jpg",
      address: "lal mati jabalpur",
      description: "this is my second  meet up",
    },
  ];

  const router = useRouter();
  const meetupId = router.query.meetupId;
  console.log(meetupId);

  const selectedMeetup = Dummy_Meetups.find((meetup) => meetup.id === meetupId);

  if (!selectedMeetup) {
    return <h1>Meetup not found</h1>;
  }

  return (
    <>
      <img src={selectedMeetup.image} alt={selectedMeetup.title} />
      <h1>{selectedMeetup.title}</h1>
      <p>{selectedMeetup.address}</p>
      <p>{selectedMeetup.description}</p>
    </>
  );
};

export default DetailPage;
