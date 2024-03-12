import "./Profile.css";

const Profile = ({ name = "John Doe", age = "??", country = "Japan" }) => {
  return (
    <div className="profile">
      {/* name */}
      <h3>Name: {name}</h3>
      {/* age */}
      <p>Age: {age}</p>
      {/* from */}
      <p>From: {country}</p>
    </div>
  );
};

export default Profile;
