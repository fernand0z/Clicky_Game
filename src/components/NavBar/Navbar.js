import React from "react";
import "./navbar.css";

const Navbar = props => (
  <nav class = 'navbar'>
    <ul>
        <li className = 'brand'>
            Clicky Game!
        </li>
        <li>
            Click on an image to begin the game!
        </li>
        <li>
            Score: {score} | Top Score: {topScore}
        </li>




{/*   
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span>
  </div> */}
  </ul>
  </nav>
);

export default Navbar;
