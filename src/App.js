import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      // className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div>
        <p
          style={{ fontSize: "50px", fontWeight: "bold", textAlign: "center" }}
        >
          Clear Our Payments
        </p>
        <p
          style={{ fontSize: "32px", fontWeight: "bold", textAlign: "center" }}
        >
          Mr Ahmed
        </p>
      </div>
    </div>
  );
}

export default App;
