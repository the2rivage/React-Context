import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  // useContext hook → to access global data from Context
  const { setUser } = useContext(UserContext);
  // Extract setUser from Context
  // This allows us to update the global user state
  const OnClickHandler = (evt) => {
    evt.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
      />
      &nbsp; &nbsp;
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      &nbsp; &nbsp;
      <button onClick={OnClickHandler}>Submit</button>
    </div>
  );
}
