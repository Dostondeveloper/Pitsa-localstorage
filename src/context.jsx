import { createContext, useState, useContext } from "react";

const AppContext = createContext()



const AppProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [signUp, setSignUp] = useState(false);



    const handleLogin = (userData) => {
        setUser(userData);
      };

      const handleLogout = () => {
        setUser(null);
      };


    return <AppContext.Provider value={{
        user,
        setUser,
        signUp,
        setSignUp,
        handleLogin,
        handleLogout,
    }}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
