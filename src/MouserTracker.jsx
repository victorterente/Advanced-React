import "./App.css";
import { useState, useEffect } from "react";

const WithMousePosition = (WrappedComponent) => {
  function WithMousePositionComponent(props) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  }

  WithMousePositionComponent.displayName = `WithMousePosition(${WrappedComponent.name})`;

  return WithMousePositionComponent;
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) return null;

  return (
    <div className="BasicTracker">
      <p>Mouse Position:</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) return null;

  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = WithMousePosition(PanelMouseLogger);
const PointMouseTracker = WithMousePosition(PointMouseLogger);

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default App;
