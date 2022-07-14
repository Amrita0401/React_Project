
import { Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "./App1.js";
import "./App1.css";


function Register(props) {
  // export default function App() {
  let isHide = "none";
  if (props.satse) {
    isHide = "none";
  } else {
    isHide = "flex";
  }
  return (
    <>
      <form style={{ display: isHide }}>
        <h6 class="welcome">WELCOME TO</h6>
        <h2 class="title">
          Digi<span>Comp+</span>
        </h2>
        <div id="formInput">
          
          <div class="inputtext">
            <input type="text" placeholder="UserName/Email ID*" />
          </div>
          <div class="inputtext">
            <input type="email" placeholder="Password*" />     
          </div>
          <span>
            <ul class="item2">
                <li><input type="checkbox" />  Remember Me</li>
                  
                <li class="forpass" style={{ marginTop: "8px", textDecorationLine: "underline" }}>
                  Forgot Password
                </li>
            </ul>
          </span> 
        </div>
        <button class="button1">LOG IN</button>
        <p class="links">
          New User? <span class="join">Join DigiComp+</span>{" "}
        </p>
      </form>
    </>
  );
}

export default function App() {
  const [isHide, setIsHide] = useState(true);
  return (
    <div className="App">
      <div id="header">
        <h3>
          Digi<span>Comp+</span>
        </h3>

        <div>
          <h6>New User? <span class="links">Join DigiComp+</span></h6>
        </div>
      </div>
      <div id="body">
        <img
          src="https://aquio.com.au/wp-content/uploads/2021/05/food-grade-shipping-containers-aquio-1000x500.jpg"
          alt="companies"
        />
        <Register sate={isHide} />
      </div>
    </div>
  );
}
