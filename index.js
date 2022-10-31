import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";


import TodoApp from "./TodoReact/app";

// import WeatherApp from "./WeatherReact/App";

// import CalculatorApp from './CalculatorReact/calculatorApp';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
<React.StrictMode>
<TodoApp />
{/* <WeatherApp /> */}
{/* <CalculatorApp /> */}    
</React.StrictMode>
    
  </div>
);
