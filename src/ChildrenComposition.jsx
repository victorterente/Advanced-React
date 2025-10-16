import "./App.css";

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};
const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}> {children}</button>;
};

const DeleteButton = () => {
  return (
    <div>
      <Button backgroundColor="red"> Delete</Button>
    </div>
  );
};

export default function App() {
  return (
    <>
      <div className="App">
        <header>Little Lemon Restaurant:</header>
      </div>

      <Alert>
        <h4>Delete Account</h4>
        <p>
          Are you sure you want to proceed? You will miss all your delicious
          recipes!
        </p>
        <DeleteButton />
      </Alert>
    </>
  );
}
