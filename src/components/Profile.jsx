import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext); // access user from userContext
  if (!user) return <div>please login</div>;
  return <div>Welcome {user.username}</div>;
}
