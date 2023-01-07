import React, { useState, createContext } from "react";

export const UseContext = createContext(null);

export const MainContext = ({children}) =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <UseContext.Provider 
            value = {{
                name,
                email,
                setEmail,
                setName
            }}
        >
            {children}
        </UseContext.Provider>
    )
}