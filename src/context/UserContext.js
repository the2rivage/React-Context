import React from "react";

const UserContext = React.createContext();
// UserContext is like a "global variable" container in React
// But instead of being truly global, it works through a Provider
// Any component wrapped inside UserContext.Provider
// can access the shared data without passing props manually

export default UserContext;
