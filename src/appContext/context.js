import { createContext } from "react";

const AppContext = createContext({
    keyPress: null,
    setToKeyPress: () => {},
})

export default AppContext