import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // initialize from localStorage
    return !!localStorage.getItem("authUser");
  });

  useEffect(() => {
    // keep localStorage in sync if user opens another tab (optional)
    const onStorage = (e) => {
      if (e.key === "authUser") {
        setIsAuthenticated(!!e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const login = (userObj) => {
    // userObj can be { name, email } or token etc.
    localStorage.setItem("authUser", JSON.stringify(userObj || { loggedIn: true }));
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authUser");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
