import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './navbar/Home';
import  {About } from './navbar/About';
import  {Contact}  from './navbar/Contact';
/* This is the main App component */
/* It is the root component of our React application */
/* It is the component that gets rendered first */
/* It is exported as the default export of this module */
export default function App() {
  // This is a JSX expression that returns an HTML element
  // The root element is an h1 (heading level 1)
  // The text content of the h1 is "Hello world!"
  // The className attribute adds a CSS class to the h1 element
  // The className "text-3xl font-bold underline" applies the CSS styles text-3xl, font-bold, and underline to the h1 element
  // The h1 element is wrapped in a return statement
  // The return statement is used to tell React to render the h1 element
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
    </Router>
  )
};
