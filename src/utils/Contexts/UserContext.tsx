import { UserTypes } from "@/types/UserTypes";
import { createContext } from "react";
import authApi from "../Services/auth.api";

interface Props {
  children: React.ReactNode;
}

const decodedToken = authApi.getCurrentUser();
const user: UserTypes = decodedToken as UserTypes;

export const UserContext = createContext<Partial<UserTypes>>({});

export const UserContextProvider = ({children}: Props) => {
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
