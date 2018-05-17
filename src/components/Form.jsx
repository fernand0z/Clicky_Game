// import React from "react";

// /*
//  So this file is to show step by step how to manipulate a form using React
// */

// // Here we have an example of a basic form.
// // It's only purpose is to update our users firstname
// export class FormOne extends React.Component {
//   // initialize our state to store the user first
//   state = {
//     firstname: ""
//   };

//   // declare the render function
//   render() {
//     // return our JSX
//     return (
//       <form>
//         <h3>Form One</h3>
//         <input
//           // declare a function to update our state with the input
//           // in the function call we have access the event variable
//           // declared as e in the below function
//           // notice how we have to bind `this` to the function
//           // without doing the bind method, our function will look to itself for the value of setState.
//           // ES5
//           onChange={function(e) {
//             this.setState({ firstname: e.target.value });
//           }.bind(this)}
//           // ES6
//           // with the ES6 arrow syntax we don't need to call the bind method since it does it for us by default
//           // onChange={e => this.setState({ firstname: e.target.value })}
//           value={this.state.firstname}
//           name="firstname"
//           type="text"
//         />
//         <span>Value:{this.state.firstname}</span>
//       </form>
//     );
//   }
// }

// export class FormTwo extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstname: ""
//     };

//     // We have to now bind state to our function in the constructor
//     // This is so we have access to the method provided by react
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     // Pull the name and value property from the e.target object
//     // remember this is the same as `const name = e.target.name`
//     // Destructuring FTW!!!
//     const { name, value } = e.target;

//     // Use the setState method to update the value dynamically
//     this.setState({
//       [name]: value
//     });
//     // When we declare our inputs we need to make sure that we set the name property
//     // to that of the one stored in our state object
//   }

//   render() {
//     return (
//       <form>
//         <h3>Form Two</h3>
//         <input
//           // Pass in the function that we defined above to handle our change in state
//           onChange={this.handleChange}
//           value={this.state.firstname}
//           name="firstname"
//           type="text"
//         />
//         <span>Value:{this.state.firstname}</span>
//       </form>
//     );
//   }
// }

// export class FormThree extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstname: "",
//       lastname: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     const { name, value } = e.target;

//     this.setState({
//       [name]: value
//     });
//   }

//   // So here is where the fun begins!
//   // Since we have declared all the keys in the state we can utilize all of that work!
//   // When we use `Object.keys()` on an object it returns all of the keys on that object in an array
//   // allowing us to map over them and return any number of input components!!!
//   // WHAT!? MIND BLOWN!!!
//   render() {
//     return (
//       <form>
//         <h3>Form Three</h3>
//         {Object.keys(this.state).map(input => (
//           <NestedInput
//             handleChange={this.handleChange}
//             value={this.state[input]}
//             name={input}
//             key={input}
//           />
//         ))}
//       </form>
//     );
//   }
// }

// // Here is the Input Component
// function NestedInput(props) {
//   // Notice how we used the function being passed down from the parent component on props
//   // This will allow us to manipulate the state of our parent component from a child component!
//   // Once again... MIND BLOWN!
//   return (
//     <div>
//       <input
//         onChange={props.handleChange}
//         value={props.value}
//         name={props.name}
//         type="text"
//       />
//       <span>{props.name}:{props.value}</span>
//     </div>
//   );
// }

// // BONUS: Y'all are awesome people and super smart, I'm sad our time is almost up but keep on studying and learning.
// // You've just scratched the surface of what you can do!
