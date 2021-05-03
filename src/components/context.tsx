import * as React from "react";
import { ThemeContext, useThemeContext } from "./theme-context";

export const D = () => {
    const {color, setColor}=useThemeContext();
  React.useEffect(()=>
  {setColor("Glitter")},[color]
  ) 
  return (
    <div>
   <h4 >D component</h4>
   </div>
  
);
  };

export const C = () => {
  const {color, setColor}=useThemeContext();
  console.log ("Inside C",color)
  React.useEffect(()=>
  {setColor("Blue")},[]
  ) 
  // React.useEffect(()=>
  // {setColor("Brown")},[color]
  // ) 
  return (
<div>
     <h4 style={{color}}>C component</h4>
     <button onClick={() =>{setColor("Yellow")}}> Change Theme</button>   
     <section>
    <button aria-pressed="true">👍</button>
    <button aria-pressed="false">👎</button>
    </section>
      </div>
  );
};

export const B = () => {
  const {color, setColor}=useThemeContext();
   console.log ("Inside B",color)
  return (
<div>
     <h4 >B component</h4>
           
      </div>
  );
};

export const A = () => {
  const {color, setColor}=useThemeContext();
   console.log ("Inside A",color)
  return (
    <div>
     <h4  >A component</h4>
     {/* <button onClick = {value.setColor("Pink")}>Change Theme</button> */}
      
      </div>
  );
};

// import * as React from "react";
// import { ThemeContext } from "./theme-context";

// const D = () => {
//   const context = React.useContext(ThemeContext);
//   return <h4 style={{ color: context.color }}>D component</h4>;
// };

// const C = () => {
//     const context = React.useContext(ThemeContext);
//     return(
//   <>
//     <h4 style={{ color: context.color }}>C component</h4>
//     <D />
//   </>
//     );
// }

// const B = () => {
//   const context = React.useContext(ThemeContext);

//   return (
//       <>
//         <h4>B Component</h4>
//         <button onClick={() => context.setColor("red")}>Change Theme</button>
//       </>
// );
// }

// export const A = () => {
//   const [color, setColor] = React.useState("green");
//   return (
//     <ThemeContext.Provider value={{ color, setColor }}>
       
//       <h4 >A component</h4>
//       <B />
//       <C />
//     </ThemeContext.Provider>
//   );
// };