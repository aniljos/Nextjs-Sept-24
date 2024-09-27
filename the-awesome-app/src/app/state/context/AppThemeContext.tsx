'use client'
import React, { useState } from "react";

type AppThemeContextState = {
    mode: string,
    changeTheme?: (theme: string) => void
}

const initState: AppThemeContextState = {
    mode: 'light'
}

export const AppThemeContext = React.createContext(initState);

export function AppThemeContextProvider({children}: Readonly<{children: React.ReactNode}>){

    const [mode, setMode] = useState(initState.mode);

    return (
        <AppThemeContext.Provider value={{mode: mode, changeTheme: setMode}}>
            {children}
        </AppThemeContext.Provider>
    )

}