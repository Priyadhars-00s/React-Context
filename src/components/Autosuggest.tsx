// import React from 'react';
// import Autosuggest from 'react-autosuggest';

// export const languages = [
//     {
//       name: 'C',
//       year: 1972
//     },
//     {
//       name: 'C#',
//       year: 2000
//     },
//     {
//       name: 'C++',
//       year: 1983
//     },
//     {
//       name: 'Clojure',
//       year: 2007
//     },
//     {
//       name: 'Elm',
//       year: 2012
//     },
//     {
//       name: 'Go',
//       year: 2009
//     },
//     {
//       name: 'Haskell',
//       year: 1990
//     },
//     {
//       name: 'Java',
//       year: 1995
//     },
//     {
//       name: 'Javascript',
//       year: 1995
//     },
//     {
//       name: 'Perl',
//       year: 1987
//     },
//     {
//       name: 'PHP',
//       year: 1995
//     },
//     {
//       name: 'Python',
//       year: 1991
//     },
//     {
//       name: 'Ruby',
//       year: 1995
//     },
//     {
//       name: 'Scala',
//       year: 2003
//     }
//   ];
  
//   // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
//   export function escapeRegexCharacters(str:any) {
//     return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//   }
  
//   export function getSuggestions(value:any) {
//     const escapedValue = escapeRegexCharacters(value.trim());
    
//     if (escapedValue === '') {
//       return [];
//     }
  
//     const regex = new RegExp('^' + escapedValue, 'i');
  
//     return languages.filter(language => regex.test(language.name));
//   }
  
//   export function getSuggestionValue(suggestion:any) {
//     return suggestion.name;
//   }
  
//   export function renderSuggestion(suggestion:any) {
//     return (
//       <span>{suggestion.name}</span>
//     );
//   }
  
//   export default class MyAutosuggest extends React.Component {
//     constructor(props:any) {
//       super(props);
  
//       this.state = {
//         value: '',
//         suggestions: []
//       };    
//     }
  
//     onChange = (_:any, { newValue}:any) => {
//       const { id, onChange }:any = this.props;
      
//       this.setState({
//         value: newValue
//       });
      
//       onChange(id, newValue);
//     };
    
//     onSuggestionsFetchRequested = ({ value }:any) => {
//       this.setState({
//         suggestions: getSuggestions(value)
//       });
//     };
  
//     onSuggestionsClearRequested = () => {
//       this.setState({
//         suggestions: []
//       });
//     };
  
//     render() {
//       const { id, placeholder }:any = this.props;
//       const { value, suggestions }:any = this.state;
//       const inputProps = {
//         placeholder,
//         value,
//         onChange: this.onChange
//       };
      
//       return (
//         <Autosuggest 
//           id={id}
//           suggestions={suggestions}
//           onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//           onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//           getSuggestionValue={getSuggestionValue}
//           renderSuggestion={renderSuggestion}
//           inputProps={inputProps} 
//         />
//       );
//     }
//   }
  
//   class Example extends React.Component {
//     onChange(id:string, newValue:any) {
//       console.log(`${id} changed to ${newValue}`);
//     }
    
//     render() {
//       return (
//         <div>
//           <MyAutosuggest
//             id="type-c"
//             placeholder="Type 'c'"
//             onChange={this.onChange}
//           />
//           <MyAutosuggest
//             id="type-p"
//             placeholder="Type 'p'"
//             onChange={this.onChange}
//           />
//         </div>
//       );
//     }
//   }
  
//   export default Example;
  

import React from 'react';
import Autosuggest from 'react-autosuggest';
import './Test.css';
// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Java',
    year: 2012
  },
  {
    name: 'React',
    year: 2012
  },
  
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value:any) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
    
  );
  
};
console.log("getSuggestions",getSuggestions)
// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion:any) => suggestion.name;
console.log("getSuggestionValue",getSuggestionValue)
// Use your imagination to render suggestions.
const renderSuggestion = (suggestion:any) => (
  <div data-testid="Autosuggest">
    {suggestion.name}<br/>
  
    {suggestion.year}
  </div>
);
console.log("renderSuggestion",renderSuggestion)
export default class Example extends React.Component {
  constructor(props:any) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event:any, { newValue }:any) => {
    this.setState({
      value: newValue
     
    });
  };


  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }:any) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };
  
  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions }:any = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      suggestions,
      onChange: this.onChange
    };
console .log ("Value",value,suggestions)
console .log ("inputProps",inputProps)
    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}