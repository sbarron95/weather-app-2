import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <footer>
        {" "}
        <br>
        </br>
        Coded by Stephanie Barron using React, open-sourced on <a href="https://github.com/sbarron95/weather-app-2"> GitHub</a>, and
        hosted on Netlify
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

reportWebVitals();