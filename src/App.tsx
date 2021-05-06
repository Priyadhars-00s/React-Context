import * as React from "react";
import "./styles.css";
import {A,B,C, D} from './components/context';
import {ThemeContextProvider} from './components/theme-context'
import Welcome from './components/Fetch'
import Body from "./components/Body";
import Fetch from "./components/Example";
import Example from './components/Autosuggest'
import Function from './components/Functions'


export default function App() {
      return (
        <div data-testid="custom-element">
      <ThemeContextProvider>
       <A/>
       <B/>
       <C/>
       <D/>
       <Welcome  /> 
      <Body title="Hello World"/> 
       <Fetch/>
        <Example  /> 
     <Function />
          </ThemeContextProvider>
        </div>
      );
    }




  

