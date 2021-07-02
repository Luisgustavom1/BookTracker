import React, { useState } from 'react'
import AppContext from './context'

const defaultKeyPress = {
    keyPress: ''
}

const AppProvider = ({children}) => {
    const [keyPress, setKeyPress] = useState(defaultKeyPress)
    return(
        <AppContext.Provider value={{keyPress, setKeyPress}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider