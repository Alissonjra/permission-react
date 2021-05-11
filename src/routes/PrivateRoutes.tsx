import { useEffect, useState } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

interface RoutesPropsData extends RouteProps {
  role?: string;
}

export function PrivateRoutes ({role,...rest}:RoutesPropsData) {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    async function loadRoles() {
      const response = await api.get("/users/roles");
      const findRole = response.data.some((r: string) =>
        role?.split(",").includes(r)
      );
      setPermissions(findRole);
    }

    loadRoles();
  }, [role]);

  const { userLogged } = useAuth();

  if (!userLogged()) {
    return <Redirect to="/" />;
  }

  if (!role && userLogged()) {
    return <Route {...rest} />;
  }

  return permissions ? <Route {...rest} /> : <Redirect to="/" />;
};


