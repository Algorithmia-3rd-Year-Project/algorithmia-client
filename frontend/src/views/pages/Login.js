import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log(email, password);
    await login(email, password);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <h3>Login</h3>

      <label htmlFor="">Email: </label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor="">Password: </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Login</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Login;
