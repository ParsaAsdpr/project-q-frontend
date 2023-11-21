import React from 'react';

interface User {
    id: string;
    name: string;
    isAdmin: string;
  }
  
export const UserContext = 
  React.createContext<Partial<User>>({});
