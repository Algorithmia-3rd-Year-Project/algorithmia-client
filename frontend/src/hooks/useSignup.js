import { useState } from "react";
import { useSessionContext } from "./useSessionContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useSessionContext();

  const signup = async (
    email,
    password,
    confirmPassword,
    dob,
    codeSent,
    verifyCode,
    userName
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
        dob,
        codeSent,
        verifyCode,
        userName
      }),
    });

    const json = await response.json();
    console.log(codeSent);

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

  const advertiserSignup = async (
    brand,
    email,
    password,
    confirmPassword,
    sentCode,
    verifyCode
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("api/user/advertisersignup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        brand,
        email,
        password,
        confirmPassword,
        sentCode,
        verifyCode,
      }),
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

  return { signup, isLoading, error, advertiserSignup };
};
