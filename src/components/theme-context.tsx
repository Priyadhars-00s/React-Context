import * as React from 'react';

export interface ThemeInfo {
  color : string;
  setColor : (color : string) => void;
}

export const ThemeContext = React.createContext<ThemeInfo>({
color: '',
setColor: () => {}
});
export const useThemeContext = () => React.useContext(ThemeContext)

export const ThemeContextProvider : React.FC = ({children})=> {
  const [color, setColor] = React.useState("green");
  const ThemeValues = {color,setColor}
  return <ThemeContext.Provider value={ThemeValues} > {children}  </ThemeContext.Provider>
}