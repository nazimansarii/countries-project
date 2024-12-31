import React from "react";
import "./simmerEffect.css";

export default function SimmerEffect() {
  return (
    <div className="countries-container">
      {Array.from({ length: 12 })
        .fill()
        .map((el, i) => (
          <div key={i} className="countries-content shimmer-card">
            <div className="flag-container"></div>
            <div className="card-title">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        ))}
    </div>
  );
}
