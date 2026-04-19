# React Context API Demo

A minimal login & profile system demonstrating global state management with the React Context API — no prop drilling required.

![React](https://img.shields.io/badge/React-Context_API-61DAFB?logo=react)

---
<img width="716" height="295" alt="image" src="https://github.com/user-attachments/assets/7e165291-8883-407f-8dae-aff21f03a443" />
---
<img width="596" height="301" alt="image" src="https://github.com/user-attachments/assets/c2bb2056-9381-4c6b-a909-40cd6df7fa52" />


## Overview

This project shows how to share state across components using React's built-in Context API.

| File | Role |
|------|------|
| `UserContext.js` | Creates the global context object |
| `UserContextProvider.js` | Wraps the app and exposes shared state |
| `Login.jsx` | Writes user data to context |
| `Profile.jsx` | Reads user data from context |

---

## How It Works

### 1. Create the context

A context object is created with `createContext()`:

```jsx
const UserContext = React.createContext();
```

### 2. Provide the context

`UserContextProvider` wraps the app and passes `user` and `setUser` down to all children:

```jsx
<UserContext.Provider value={{ user, setUser }}>
  {children}
</UserContext.Provider>
```

### 3. Consume the context

Any component can access the shared state via `useContext()`:

```jsx
const { user, setUser } = useContext(UserContext);
```

---

## Data Flow

1. User enters credentials in the `Login` component
2. `setUser()` updates the global context
3. `Profile` reads and displays the updated user data
4. No props are passed between components

---

## Project Structure

```

src/
    ├── context/
    │   ├── UserContext.js          
    │   └── UserContextProvider.js  
    ├── components/
    │   ├── Login.jsx               
    │   └── Profile.jsx             
    ├── App.jsx                     
    └── main.jsx                    
```

## Features

- Global state management using the Context API
- Clean separation between provider logic and UI components
- No prop drilling
- Beginner-friendly structure

---

> **Note:** This project is for learning purposes only. Storing passwords in plain text is not secure. In production, use proper authentication and encryption.

---

## When to Use the Context API

Context is a great fit for small to medium React apps that need to share global data — like auth state, themes, or user preferences — without reaching for a heavier solution like Redux.

---

*Context API = global state sharing in React without prop drilling.*



