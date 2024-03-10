import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
const NewMeetUpPage = () => {
  const addMeetUpHandler = async (enteredMeetUpData) => {
    console.log(enteredMeetUpData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "content-Type": "application/json",
      },
    });

    try {
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta
          name="description"
          content="Add your own meet ups and create amazing networking opportunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
    </>
  );
};
export default NewMeetUpPage;
