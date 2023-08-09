import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { App } from "./components/App/App";
import "./index.css";
import { theme } from "./constants";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// import './index.css';

// const div = document.createElement('div')
// const root = document.getElementById('root')
// root.append(div)

// const root = document.getElementById('root')
// const div = React.createElement('div')
// ReactDOM.createRoot(root).render(div)

// // const par = React.createElement('p', { className: 'test-p', children: ['i am P'] })
// const par = <p className="test-p">i am P</p>
// // const div = React.createElement('div', { name: 'main', id: 'test-id', className: 'test-class', children: par})
// const div = <div className="test-div" id="test-id" name="main">{par}</div>
// ReactDOM.createRoot(document.getElementById('root')).render(div)
// console.log(div);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   </React.StrictMode>
// );
