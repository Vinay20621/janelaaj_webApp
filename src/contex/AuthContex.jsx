import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const AuthCreateContex = createContext()
export const AuthContexProvider = ({ children }) => {
    const [authorized, setAuthorized] = useState(false)
    useEffect(() => {
        const getToken = JSON.parse(localStorage.getItem('unwinnd-token'))
        if (getToken) {
            if (jwtDecode(getToken).exp >= Date.now() / 1000) {
                setAuthorized(true)
                return
            }
        }

        setAuthorized(false)
    }, [])
    return (
        <AuthCreateContex.Provider value={{ authorized, setAuthorized }}>
            {children}
        </AuthCreateContex.Provider>
    )
}
