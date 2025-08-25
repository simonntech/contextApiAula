import { createContext } from 'react';

//contexto
export const UserContext = createContext({});

//provider - segurança
export default function UserContextProvider({ children }: any) {
    const contextValue = { nome: 'Brunão' };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}