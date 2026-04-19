import React, { useState } from "react";

import UserContext from "./UserContext";
// This object contains Provider & Consumer (we use Provider here)

// UserContextProvider = a wrapper component
// Provider makes the data available to all child components
// Any component inside this wrapper can access user & setUser using useContext
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    // UserContext.Provider = special component
    // It "provides" data to all components inside it
    // value = the data you want to share globally
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

{
  /* children = all components wrapped inside this Provider
            
            Example:
            <UserContextProvider>
                <App />
            </UserContextProvider>
            
            Here, App and all its child components can access user & setUser
            */
}

// Context → container for shared data
// Provider → makes that data available
// value → actual data being shared
// children → components that will use the data
