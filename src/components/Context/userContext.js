import { createContext, useState } from 'react';

export const UserContext = createContext(false)

export const ProviderLogin = ({ children }) => {

    const [user, setUser] = useState({ name: null, id: null });
    const [token, setToken] = useState(null);

    const value = {
        user,
        token,
        connectSession: (user, token) => {
            setUser(user)
            setToken(token)
        }
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}