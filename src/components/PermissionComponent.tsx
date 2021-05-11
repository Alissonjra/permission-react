import React, { useEffect, useState } from "react";
import api from "../services/api";

interface PermissionComponentProps {
  role: string;
  children: React.ReactNode
}

export function PermissionComponent({role,children}:PermissionComponentProps) {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    async function loadRoles() {
      const response = await api.get("/users/roles");
    
      const findRole = response.data.some((r: string) =>
        role?.split(",").includes(r)
      );
      console.log(findRole);
      setPermissions(findRole);
    }

    loadRoles();
  }, [role]);

  return <>{permissions && children}</>;
};

export default PermissionComponent;