import React from "react";
import UserProvider from "./Providers/UserProvider";
import Application from "./Components/Application";

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
