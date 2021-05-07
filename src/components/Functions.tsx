import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import AutoSuggest from "react-autosuggest";

import "./Functionstyles.css";

const companies: string[] = [
  "Company1",
  "Company2",
  "Big Corp",
  "Happy Toy Company"
];
const styles = []
const lowerCasedCompanies = companies.map(language => language.toLowerCase());

export const Function: React.FC = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  function getSuggestions(value: string): string[] {
    return lowerCasedCompanies.filter(language =>
      language.startsWith(value.trim().toLowerCase())
    );
  }
  // if (onfocus) {
  //   styles.push({
  //     color: 'rgba(0,0,0,.95)',
  //     fontWeight: '700',
  //   })
  // }
 
  let testprops = {
    placeholder: "Type C",
    value: value,
    onChange: (_:any, data: { newValue : string}) => {
      setValue(data.newValue);
      console.log(" ----- onChange -----")
    },
    // onFocus : (_:any, data: { newValue : string}) =>{
    //   setValue(data.newValue);
    //   if (value === data.newValue) {
    //     testprops.value;
    //     console.log(" --- onFocus ---",testprops.value);
    //   }
    // }, 
       
    onBlur: () => console.log(" --- onBlur ---"),
  }
  console.log(" ----- testprops ----", testprops)

  return (
    <div data-testid="Test">
      <AutoSuggest
       {...(console.log(" ----- Initialcall ----"))}
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        {...(console.log(" ----- onSuggestionsFetchRequested ----"))}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }
        getSuggestionValue={suggestion => suggestion}
        renderSuggestion={suggestion => <span>{suggestion}</span>}
        inputProps = {testprops}
        {...(console.log(" ----- inputprops ----"))}
      
        // inputProps={{
        //   placeholder: "Type 'c'",
        //   value: value,
        //   onChange: (_, { newValue, method }) => {
        //     setValue(newValue);
                       
        //   }
        // }}
        
        highlightFirstSuggestion={true}
        
      />
    </div>
    
  );
};

