import { createContext, useReducer, useEffect } from "react";

export const SessionContext = createContext();

export const sessionReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const SessionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sessionReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log("Session Context State: ", state);

  return (
    <SessionContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SessionContext.Provider>
  );
};
