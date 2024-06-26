import { createContext } from "react";

export const Context = createContext(); // Renamed to 'Context' to follow convention

const AppContext = ({ children }) => {
    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

export default AppContext;