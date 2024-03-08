import NewMeetupForm from "../../components/meetups/NewMeetupForm";
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
  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
};
export default NewMeetUpPage;
