// import React, { useState, useCallback } from "react";
// import "./styles.css";
// import { Grid } from "@material-ui/core";
// import ReactAutosuggest  from "./ReactAutosuggest";
// import countries from "./countries";

// export default function App() {
//   const [formData, setFormData] = useState({
//     muiId: null,
//     raId: null,
//     muiObject: null,
//     raObject: null
//   });

//   const updateValues = useCallback(
//     (name, value) =>
//       setFormData(prevData => ({
//         ...prevData,
//         [name]: value
//       })),
//     []
//   );

//   return (
//     <div className="App">
//       <h1>Autosuggest comparison</h1>
//       <h4>_id return</h4>
//       <Grid container spacing={4}>
//         <Grid item xs={6}>
//           <ReactAutosuggest
//             inputSuggestions={countries}
//             label="Country"
//             formInput="raId"
//             returnId
//             handler={updateValues}
//           />
//           <span>{formData.raId}</span>
//         </Grid>
        
         
       
//       </Grid>
//       <h4>object return</h4>
//       <Grid container spacing={4}>
//         <Grid item xs={6}>
//           <ReactAutosuggest
//             inputSuggestions={countries}
//             label="Country"
//             formInput="raObj"
//             returnId
//             handler={updateValues}
//           />
//           <span>{JSON.stringify(formData.raObject)}</span>
//         </Grid>
       
//       </Grid>
//     </div>
//   );
// }
