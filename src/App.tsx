import * as React from "react";
import "./styles.css";
import {A,B,C, D} from './components/context';
import {ThemeContextProvider} from './components/theme-context'
import Welcome from './components/Fetch'
import Body from './components/Body';
export default function App() {
  return (

  
   <div data-testid="custom-element" >
    <ThemeContextProvider>
      <A/>
      <B/>
      <C/>
      <D/>
      <Welcome /> 
      <Body />
      </ThemeContextProvider>
    </div>
    
  );
}

  

