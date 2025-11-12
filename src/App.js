import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const foods = ["Pizza", "Burger", "Ice Cream", "Pasta", "Sushi"];
  const [message, setMessage] = useState("Select a food that you love!");

  const handleClick = (food) => {
    setMessage(`I love ${food}!`);
  };

  return (
    <div className="container text-center mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="mb-4 text-primary"> My Favorite Foods </h3>
        <ul className="list-group mb-3">
          {foods.map((food, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {food}
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => handleClick(food)}
              >
                Show Love ❤️
              </button>
            </li>
          ))}
        </ul>

        <div className="alert alert-info mt-3" role="alert">
          {message}
        </div>
      </div>
    </div>
  );
}

export default App;
