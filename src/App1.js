import { useState } from "react";
import "./App.js";
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
        <h2>Register Your company</h2>
        <div id="formInput">
          <div className="input">
            <input type="text" placeholder="Country*" />
            <input type="text" placeholder="Company Name*" />
          </div>
          <div className="input">
            <select required>
              <option value="" disabled selected hidden>
                Registeration Reference Type*
              </option>
              <option>B</option>
              <option>C</option>
            </select>
            <input type="text" placeholder="Registeration Number*" />
          </div>
          <div className="input">
            <input type="text" placeholder="First Name*" />
            <input type="text" placeholder="Last Name*" />
          </div>
          <div className="input">
            <input type="email" placeholder="Email Id*" />
            {/* <input type="number" id="" value="(+971)|" /> */}
            <input type="tel" placeholder="Phone Number*" />
          </div>
        </div>
        <button>Register Now</button>
        <p>
          Already Register? <span><a href="/App.js">Login</a></span>{" "}
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
        <button
          onClick={function () {
            setIsHide(!isHide);
          }}
        >
          How to Register
        </button>
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
