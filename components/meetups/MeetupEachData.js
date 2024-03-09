import classes from "./MeetupEachData.module.css";
const MeetupEachData = ({ selectedMeetup }) => {
  return (
    <div className={classes.box}>
      <img src={selectedMeetup.image} alt={selectedMeetup.title} />
      <h1>{selectedMeetup.title}</h1>
      <p>{selectedMeetup.address}</p>
      <p>{selectedMeetup.description}</p>
    </div>
  );
};
export default MeetupEachData;
