// import React, { useState } from "react";
// import * as PropTypes from "prop-types";
// import deburr from "lodash/deburr";
// import Autosuggest from "react-autosuggest";
// import match from "autosuggest-highlight/match";
// import parse from "autosuggest-highlight/parse";
// import TextField from "@material-ui/core/TextField";
// import Paper from "@material-ui/core/Paper";
// import MenuItem from "@material-ui/core/MenuItem";
// import styles from './styles'

// const renderSuggestion = (suggestion:any, { query, isHighlighted }:any) => {
//   const matches = match(suggestion.name, query);
//   const parts = parse(suggestion.name, matches);

//   return (
//     <MenuItem selected={isHighlighted} component="div">
//       <div>
//         {parts.map((part:any, index:any) =>
//           part.highlight ? (
//             <span key={String(index)} style={{ fontWeight: 500 }}>
//               {part.text}
//             </span>
//           ) : (
//             <strong key={String(index)} style={{ fontWeight: 300 }}>
//               {part.text}
//             </strong>
//           )
//         )}
//       </div>
//     </MenuItem>
//   );
// };

// const getSuggestions = (suggestions:any, value:any) => {
//   const inputValue = deburr(value.trim()).toLowerCase();
//   const inputLength = inputValue.length;
//   let count = 0;

//   return inputLength === 0
//     ? []
//     : suggestions.filter((suggestion:any)=> {
//         const keep =
//           count < 5 &&
//           suggestion.name.slice(0, inputLength).toLowerCase() === inputValue;

//         if (keep) {
//           count += 1;
//         }

//         return keep;
//       });
// };

// const renderInputComponent = (inputProps:any)=> {
//   const { classes, inputRef = () => {}, ref, ...other } = inputProps;

//   return (
//     <TextField
//       fullWidth
//       InputProps={{
//         inputRef: node => {
//           ref(node);
//           inputRef(node);
//         },
//         classes: {
//           input: classes.input
//         }
//       }}
//       {...other}
//     />
//   );
// };

// const getSuggestionValue = (suggestion:any) => suggestion.name;

// const ReactAutosuggest = ({
//   inputValue,
//   label,
//   margin,
//   formInput,
//   handler,
//   returnId,
//   inputSuggestions
// }:any) => {
//   const classes = styles();

//   const [suggestions, setSuggestions] = useState([]);
//   const [value, setValue] = useState(inputValue);

//   const handleSuggestionsFetchRequested = ({ value }:any) => {
//     setSuggestions(getSuggestions(inputSuggestions, value));
//   };

//   const handleSuggestionsClearRequested = () => {
//     setSuggestions([]);
//   };

//   const handleChange = () => (event:any, { newValue }:any) => {
//     const suggestion = suggestions.filter(sug => sug.name === newValue);

//     !suggestion.length && handler(formInput, "");

//     setValue(newValue);
//   };

//   const onSuggestionSelected = (event:any, { suggestion }:any) => {
//     handler(formInput, returnId ? suggestion._id : suggestion);
//   };

//   const autosuggestProps = {
//     suggestions,
//     renderInputComponent: renderInputComponent,
//     onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
//     onSuggestionsClearRequested: handleSuggestionsClearRequested,
//     getSuggestionValue: getSuggestionValue,
//     renderSuggestion: renderSuggestion,
//     onSuggestionSelected: onSuggestionSelected
//   };

//   return (
//     <div >
//       <Autosuggest
//         {...autosuggestProps}
//         inputProps={{
//         //   classes,
//           placeholder: label,
//           value,
//           onChange: handleChange(),
//           autoComplete: "no"
//        }}
//         theme={{
//           container: classes.container,
//           suggestionsContainerOpen: classes.suggestionsContainerOpen,
//           suggestionsList: classes.suggestionsList,
//           suggestion: classes.suggestion
//         }}
//         renderSuggestionsContainer={options => (
//           <Paper {...options.containerProps} square>
//             {options.children}
//           </Paper>
//         )}
//       />
//     </div>
//   );
// };

// ReactAutosuggest.propsTypes = {
//   inputValue: PropTypes.string,
//   label: PropTypes.string,
//   margin: PropTypes.string,
//   formInput: PropTypes.string.isRequired,
//   handler: PropTypes.func.isRequired,
//   inputSuggestions: PropTypes.array.isRequired,
//   returnId: PropTypes.bool
// };

// ReactAutosuggest.defaultProps = {
//   inputValue: "",
//   label: "",
//   margin: "normal",
//   returnId: false
// };

// export default ReactAutosuggest;
