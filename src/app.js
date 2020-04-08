import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Main />

      <Footer />
    </>
  );
};

ReactDOM.render(
<App />, 
document.getElementById("app")
);
