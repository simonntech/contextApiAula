import { createContext } from 'react';

//tipagem
interface UserContextProps {
    nome: string
}

//contexto
export const UserContext = createContext<UserContextProps | undefined>(undefined);

//provider - segurança
export default function UserContextProvider({ children }: any) {
    const contextValue = { nome: 'Brunão' };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}