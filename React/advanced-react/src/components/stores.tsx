import { createContext } from "react";

const initialState = {
    first: "Kevin",
    last: "Ghori",
  };
  
  export type UserState = typeof initialState;
  
  const context = createContext<typeof initialState>(initialState);

  export default context;

  export {}