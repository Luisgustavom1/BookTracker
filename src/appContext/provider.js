import React, { useState } from 'react'
import AppContext from './context'

const defaultKeyPress = {
    keyPress: ''
}

const AppProvider = ({children}) => {
    const [keyPress, setKeyPress] = useState(defaultKeyPress)

    const setToKeyPress = (key) => {
        setKeyPress(key)
    }
    return(
        <AppContext.Provider value={{keyPress, setToKeyPress}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider