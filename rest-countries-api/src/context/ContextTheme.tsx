import { createContext, useContext, useReducer } from "react";

interface State {
    theme: string
}

interface Actions {
    type: themeActions,
    payload: any
}

interface Provider {
    children: JSX.Element
}

interface ContextType {
    state: State,
    dispatch: (action: Actions) => void
}


const initialData: State = {
    theme: 'light'
} //this initially switch theme to light mode

const ContextTheme = createContext<ContextType | undefined>(undefined)

export enum themeActions {
    setTheme,
}

const reducer = (state: State, action: Actions) => {
    switch(action.type) {
        case themeActions.setTheme:
            return {...state, theme: action.payload}
        break
    }
}

export const ThemeProvider = ({children}: Provider) => {
    const [state, dispatch] = useReducer(reducer, initialData);
    const value = {state, dispatch}

    return (
        <ContextTheme.Provider value={value}>
            {children}
        </ContextTheme.Provider>
    )
}

export const useForm = () => {
    const context = useContext(ContextTheme)
    if(context === undefined) {
        throw new Error('useForm needs to be used inside the ThemeProvider')
    }
    return context
}