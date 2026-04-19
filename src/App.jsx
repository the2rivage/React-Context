import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    // UserContextProvider wraps the components
    // → It provides shared (global-like) data to everything inside it

    <UserContextProvider>
      <h1>React Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}
{
  /* Both Login and Profile are inside the Provider,
          so they can share data without passing props */
}

export default App;
