import { useSessionContext } from "./useSessionContext";

export const useLogout = () => {
  const { dispatch } = useSessionContext();

  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
