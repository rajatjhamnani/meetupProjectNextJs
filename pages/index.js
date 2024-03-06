import MeetupList from "../components/meetups/MeetupList";

const HomePage = () => {
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

  return <MeetupList meetups={Dummy_Meetups} />;
};
export default HomePage;
