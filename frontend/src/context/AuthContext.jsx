import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [usuario] = useState({
    nombre: "Administrador"
  });

  return (
    <AuthContext.Provider value={{ usuario }}>
      {children}
    </AuthContext.Provider>
  );
}