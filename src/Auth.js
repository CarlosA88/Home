import React, { useState, useEffect } from "react";
import { auth } from "./Firebase";

export const AuthContext = React.createContext();
//We arte using react context to share auth with our app
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  //Update the user every time it change on db(Observer pattern)
  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
