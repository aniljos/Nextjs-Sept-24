'use client'
import React from "react";

type AppThemeContextState = {
    mode: string
}

const initState: AppThemeContextState = {
    mode: 'light'
}

export const AppThemeContext = React.createContext(initState);

export function AppThemeContextProvider({children}: Readonly<{children: React.ReactNode}>){

    return (
        <AppThemeContext.Provider value={initState}>
            {children}
        </AppThemeContext.Provider>
    )

}