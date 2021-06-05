const Profile = ({ user }) => (
  <div className="profile">
    <img src={user.imageUrl} alt={user.name} />
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>
);

export default Profile;
