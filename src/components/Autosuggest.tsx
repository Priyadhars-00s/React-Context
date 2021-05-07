import React from 'react';
//import sinon from 'sinon';
import Autosuggest from 'react-autosuggest';
import './Test.css';
// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Go',
    year: 2009
  },
  {
    name: 'Haskell',
    year: 1990
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'Javascript',
    year: 1995
  },
  {
    name: 'Perl',
    year: 1987
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Scala',
    year: 2003
  }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
export const getSuggestions = (value:any) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().includes(inputValue)
    // lang.name.toLowerCase().slice(0, inputLength) === inputValue
    
  );
  
};
console.log("getSuggestions",getSuggestions)
let app:any = null;
// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
export const getSuggestionValue = (suggestion:any) => suggestion.name;
console.log("getSuggestionValue",getSuggestionValue)

// Use your imagination to render suggestions.
export const renderSuggestion = (suggestion:any) => (
  <div data-testid="Autosuggest">
    {suggestion.name}<br/>
  
    {suggestion.year}
  </div>
);
console.log("renderSuggestion",renderSuggestion)
export const onChange = ((event:any, { newValue, method }:any) => {
  if (method === 'type') {
    app.setState({
      value: newValue,
      suggestions: getSuggestions(newValue)
    });
  } else {
    app.setState({
      value: newValue
    });
  }
});


class Example extends React.Component {
  constructor(props:any) {
    super(props);
    app = this;
    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
     
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
  // getAutosuggestInput(value:any){
  //   // Test logging:
  //   console.log(value);
  //   this.setState({myfieldname: value})
  // }
//   onHandleChange(event:any, value:any){
//     this.setState({ value });
//     this.props.getInputData(event, value);
//   }
//   getAutosuggestInput = (event, value) => {
//     //add your logic here
// }
  render() {
    const { value, suggestions }:any = this.state;

    

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      id: 'Autosuggest',
      placeholder: 'Type a programming language',
      value,
      suggestions,
      onChange:this.onChange,
      //getAutosuggestInput:this.getAutosuggestInput
    }; 
    // const get = fetch(inputProps)
console .log ("Value",value,suggestions)
console .log ("inputProps",inputProps)

//console .log ("getAutosuggestInput",this.getAutosuggestInput)
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
export default Example;