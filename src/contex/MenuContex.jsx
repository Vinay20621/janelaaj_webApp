import { createContext, useEffect, useState } from "react";

export const createMenuContex=createContext()
export default  function MenuContexProvider({children}){
    const [selectedMenu,setSelectedMenu]=useState('onBoarding')
    return <createMenuContex.Provider value={{selectedMenu,setSelectedMenu}}>
        {children}
    </createMenuContex.Provider>
}