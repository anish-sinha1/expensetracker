import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
//render takes two parameters: the second is a default dom element to select by its id (from index.html)-->
//which is the only html file loaded, since we build SPAs with React
//the first parameter is <App />

//App is a custom component that we are importing. (App.tsx)
