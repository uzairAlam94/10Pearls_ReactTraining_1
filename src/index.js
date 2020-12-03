import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing simple css file
//import styles from './Example.module.css'; // Importing Css Module

// Basic Component 
// function DivComponent(props) {
// return (
//       <>
//             <div>{props.name} </div>
//             <div>{props.name}</div>
//       </>);
// }

// JSX ---------------------------------------------------------------------------------

// Starting -----------------------------
const element = <h1>Hello world!</h1>;


// Compairing JSX with React-Objects

// const element = <div className="textblue">Click Me</div>
// const element = React.createElement(
//   'div',
//   {className: 'textblue'},
//   'Click Me'
// );


// Embedding Expression ------------------
//const name = 'Josh Perez';
//const element = <h1>Hello, {2 + 2}</h1>;

// ---------------------------

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {false}!
//   </h1>
// );

// Embedding Expression ------------------

// Returning JSX -------------------------
// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, World!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// function Greeting(props) {
//     return <h1>Hello {props.name}</h1>
// }
// ReactDOM.render(<Greeting name="uzair" />, document.getElementById('root'));
// Returning JSX -------------------------


// JSX Attributes ------------------------
//const element = <div tabIndex={0}></div>;
//const element = <div mycustomattr={0}></div>
//const element = <div data-attr={0} aria-label="testing"></div>

// JSX Attributes ------------------------

// Dangerously_set_html-------------------------------
// const htmlString = '<h1>Hello World!<h1/>';

// const App = () => (
//   <div dangerouslySetInnerHTML={{ __html: htmlString }} />
// );
//  ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );
// Dangerously_set_html-------------------------------


// Updating Component Example -----------------------
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);
// Updating Component Example -----------------------

// JSX  ---------------------------------------------------------------------------------

// Styling ------------------------------------------------------------------------------------------------------

// Inline Styling ---------------------------------

//const element = <div className="textblue"><p>Text With Style</p></div>

// Inline Styling ---------------------------------

// Styling With Objects ---------------------------
//const element = <div style={{ color: "grey", fontSize: 25}}>Text with style object</div>
// Styling With Objects ---------------------------


// Css Module Example ------------------------------
// const helloWorldText = "Hello world!";
// const element = <h1 className={styles.textblue}>{helloWorldText}</h1>;
// Css Module Example ------------------------------

ReactDOM.render(
  element,
  document.getElementById('root')
);
