import { createContext } from "react";

interface AppContextProps {
    clicked: boolean;
    setClicked: (b) => void
}

const AppContext = createContext<AppContextProps>({clicked: false, setClicked: () => {}});

export default AppContext;