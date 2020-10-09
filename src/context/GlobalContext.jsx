import React,{createContext} from 'react'


export const GlobalContext=createContext("Default");


export const GlobalContextProvider=({children})=> {
    return (
        <GlobalContext.Provider value="123">
            {children}
        </GlobalContext.Provider>

        
    )
}
