import { createContext, useContext, useState } from "react";

const Theme = createContext();

function ThemeContext({ children }) {
  const [dark, setDark] = useState(false);
  return <Theme.Provider value={{ dark, setDark }}>{children}</Theme.Provider>;
}

function useTheme() {
  const context = useContext(Theme);
  if (context === undefined) {
    console.log("You are using themecontext outside theme provider");
  }
  return context;
}

export {useTheme}
export default ThemeContext;
