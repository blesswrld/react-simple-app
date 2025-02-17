// import logo from "./logo.svg";
import { Component, StrictMode } from "react";
import "./App.css";

const Header = () => {
  return <h2>Hello World!</h2>;
};

// const Field = () => {
//   const holder = "Enter here";
//   const styledField = {
//     // style
//     width: "300px",
//   };
//   return <input placeholder={holder} type="text" style={styledField} />;
// };

class Field extends Component {
  // method
  render() {
    const holder = "Enter here";
    const styledField = {
      // style
      width: "300px",
    };

    return <input placeholder={holder} type="text" style={styledField} />;
  }
}

function Btn() {
  const text = "Log in";
  const logged = false;

  // if (logged) {
  //   return "Enter";
  // }

  return <button>{logged ? "Enter" : text}</button>;
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Btn />
    </div>
  );
}

export { Header };
export default App;
