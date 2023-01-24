import React,{useContext,useState} from "react";

const ThemeContext = React.createContext();
const ThemeUpdate = React.createContext();

export function useTheme(){
  console.log('usetheme');
  return useContext(ThemeContext);
}
export function useThemeUpdate(){
  console.log('useupdate');

  return useContext(ThemeUpdate);
}

export function ThemeProvider({children}){

  const [darkTheme,setDarkTheme]=useState(true);

 function toggleTheme(){
  console.log('toggletheme');

  setDarkTheme(prevdarkTheme=>!prevdarkTheme)
  console.log('app.js-theme',darkTheme);
}
  return(
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdate.Provider value={toggleTheme}>
      {children}        
      </ThemeUpdate.Provider>
    </ThemeContext.Provider> 
  )
}