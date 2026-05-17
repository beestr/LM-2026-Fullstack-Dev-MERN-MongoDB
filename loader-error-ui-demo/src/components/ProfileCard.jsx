function ProfileCard({ data }) {
  return (
    <div className="profile-card">
      <h2>{data.name}</h2>
      <p>{data.role}</p>
      <p>{data.email}</p>
    </div>
  );
}

export default ProfileCard;