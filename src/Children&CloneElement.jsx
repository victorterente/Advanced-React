import "./App.css";
import { cloneElement, Children } from "react";

const Row = ({ children, colorinput }) => {
  const childStyle = {
    color: colorinput,
  };
  return (
    <div className="Row">
      {Children.map(children, (child, index) => {
        const style =
          index > 0
            ? { ...child.props.style, color: "red" } // for index > 0
            : { ...child.props.style, ...childStyle }; // for first one

        return cloneElement(child, { style });
      })}
    </div>
  );
};

function LiveOrders() {
  return (
    <div className="App">
      <Row colorinput="green">
        <p>Pizza Margarita</p>
        <p>2 </p>
        <p>30$ </p>
        <p>18:30 </p>
        <p>John </p>
      </Row>
    </div>
  );
}

export default LiveOrders;
