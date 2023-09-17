import { useEffect, useState } from "react";
import { useSessionContext } from "./useSessionContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useSessionContext();

  const backendURL = process.env.REACT_APP_BACKEND_URL;

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${backendURL}/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));

      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
