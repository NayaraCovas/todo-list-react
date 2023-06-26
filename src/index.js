import React from 'react';//importing the library
import ReactDOM from 'react-dom/client';//importing ReactDom
import App from './App';//Importing main parent APP component
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
   
  </React.StrictMode>
);//ReactDom renders the App component into the element with the id of root wich is in index.html
//document.getElementById grabs <div id="root"></div> from index.html and inserts the APP component to it
//It sets up the root element for rendering the React application and renders the <App /> component wrapped in <React.StrictMode>. The actual rendering of the components and elements will be handled by React and injected into the DOM element with the id 'root'.


