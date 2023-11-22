import { UserTypes } from "@/types/UserTypes";
import { createContext } from "react";

interface Props {
  children: React.ReactNode;
  value: UserTypes;
}

export const UserContext = createContext<Partial<UserTypes>>({});

export const UserContextProvider = ({children, value}: Props) => {
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
