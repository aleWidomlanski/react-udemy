import { UserContext } from "./UserContext";

const user = {
    id: 123,
    name: 'Alejandro',
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}
