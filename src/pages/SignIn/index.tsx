import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import "./styles.css";

export function SignIn()  {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem("@PermissionYT:token");
  }, []);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      await signIn({ username, password });
      history.push("/dashboard");
    },
    [username, password,history,signIn]
  );

  return (
    <div className="container">
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Usuário </label>
        <input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="">Senha</label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="form-group">
        <button type="submit"> Entrar </button>
      </div>
    </form>
    </div>
  );
};
