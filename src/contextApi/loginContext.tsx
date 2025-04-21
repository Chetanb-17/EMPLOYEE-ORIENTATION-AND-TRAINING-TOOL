import React, { createContext, useContext, useEffect, useState } from "react";
//  import useAuth from "../auth/token";
import { baseURL } from "../config/config";


// Types
type User = {
  name: string;
  isGuestUser: boolean;
  [key: string]: unknown;
}

type UserContextType = {
  user: User;
  logIn: (email: string, password: string, token: string) => Promise<void>;
  logOut: () => void;
  errorMsg: string | null;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

// Default user and session key
const USER: User = { name: "Guest", isGuestUser: true };
const STORAGE_KEY = "loggedInUser";

// Create context
export const userContext = createContext<UserContextType>({
  user: USER,
  logIn: async () => { },
  logOut: () => { },
  errorMsg: null,
  setUser: () => { },
});

// Provider
export function LoginContextProvider({ children }: { children: React.ReactNode }) {
  // const { getToken } = useAuth();
  console.log("LoginContextProvider");

  const [user, setUser] = useState<User>(() => {
    const storedUser = sessionStorage.getItem(STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) : USER;
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  async function logIn(email: string, password: string, token: string) {
    const payLoad = { email, password };
    console.log("email, password ", email, password);

    try {

      const response = await fetch(baseURL + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ Token is passed here now
        },
        body: JSON.stringify(payLoad),
      });
      console.log("response", response);

      const responseJson = await response.json();
      console.log("responseJson", responseJson);
      if (!response.ok) throw new Error("Network response was not ok");

      if (responseJson.status === 1) {
        if (responseJson.token) {
          sessionStorage.setItem("token", token);
        }

        setUser(responseJson.user);
        window.location.replace("/dashboard");
          sessionStorage.setItem("token", token);
          alert(token);
        
      } else {
        setErrorMsg(responseJson.data);
        throw new Error(responseJson.data || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  const logOut = async () => {
    try {
      await fetch({ baseURL } + "logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${await getToken()}`,
        },
        body: JSON.stringify({ gid: user.gid }),
      });
    } catch (error) {
      console.log("Logout error:", error);
    }

    localStorage.clear();
    sessionStorage.clear();
    window.location.replace("/");
  };

  return (
    <userContext.Provider value={{ user, logIn, logOut, errorMsg, setUser }}>
      {children}
    </userContext.Provider>
  );
}

// Hook
export function useUserContext() {
  return useContext(userContext);
}
