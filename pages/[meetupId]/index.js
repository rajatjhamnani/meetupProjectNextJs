import { useRouter } from "next/router";

const DetailPage = ({ meetupData }) => {
  // const Dummy_Meetups = [
  //   {
  //     id: "m1",
  //     title: "A first Meetup ",
  //     image:
  //       "https://en.wikipedia.org/wiki/Katni#/media/File:Kataighat-katni.jpg",
  //     address: "nai basti katni",
  //     description: "this is my first meet up",
  //   },
  //   {
  //     id: "m2",
  //     title: "A second Meetup ",
  //     image:
  //       "https://en.wikipedia.org/wiki/Jabalpur#/media/File:Marble_Rocks_-_Jabalpur.jpg",
  //     address: "lal mati jabalpur",
  //     description: "this is my second  meet up",
  //   },
  // ];

  const router = useRouter();
  const meetupId = router.query.meetupId;
  console.log(meetupId);

  const selectedMeetup = meetupData.find((meetup) => meetup.id === meetupId);

  // if (!selectedMeetup) {
  //   return <h1>Meetup not found</h1>;
  // }

  return (
    <>
      <img src={selectedMeetup.image} alt={selectedMeetup.title} />
      <h1>{selectedMeetup.title}</h1>
      <p>{selectedMeetup.address}</p>
      <p>{selectedMeetup.description}</p>
    </>
  );
};
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  // can fetch data
  const Dummy_Meetups = [
    {
      id: "m1",
      title: "A first Meetup ",
      image:
        "https://th.bing.com/th/id/OIP.VJAS1OxOIcc_3AFK_mLdvQHaEb?rs=1&pid=ImgDetMain",
      address: "nai basti katni",
      description: "this is my first meet up",
    },
    {
      id: "m2",
      title: "A second Meetup ",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b4/bd/56/view-of-the-waterfall.jpg?w=1200&h=1200&s=1",
      address: "lal mati jabalpur",
      description: "this is my second  meet up",
    },
    {
      id: "m3",
      title: "A third Meetup ",
      image:
        "https://th.bing.com/th/id/R.0e6b2d34a1e66cfe4bc5487d1c31e047?rik=lftswG2fcjeILQ&riu=http%3a%2f%2furbanupdate.in%2fwp-content%2fuploads%2f2019%2f03%2fbhopal-lake.jpg&ehk=V14TnsdKfqtGXVuZtyqBdHJmvY11q2Ejl9VMzkWGRV0%3d&risl=&pid=ImgRaw&r=0",
      address: " city of LakesBhopal",
      description: "this is my third  meet up",
    },
  ];

  //const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: Dummy_Meetups,
    },
  };
}

export default DetailPage;
