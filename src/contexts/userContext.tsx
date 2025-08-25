import { createContext } from 'react';

//contexto
export const UserContext = createContext({});

//provider - segurança
export default function UserContextProvider({ children }: any) {
    const contextValue = { nome: 'Brunão' };

    return (
        <UserContextProvider value={contextValue}>
            {children}
        </UserContextProvider>
    )
}