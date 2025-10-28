import FollowButton from "./FollowButton.jsx";
import LikeButton from "./LikeButton.jsx";

const postImage = "https://i.imgur.com/ZUZiJ4y.png";
const userImage = "https://i.imgur.com/lfoiQZs.png";

export default function Post() {
  return (
    <div className="post">
      <div className="user-info">
        <img id="profile-img" src={userImage} alt="Profile Image" />
        <p>Hipthehippocorn</p>
        <FollowButton />
      </div>
      <img id="post-img" src={postImage} alt="Post Image" />
      <LikeButton />
    </div>
  );
}
