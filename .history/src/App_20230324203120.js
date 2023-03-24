import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Weather from "./Weather";

function App() {
  return (
    <div className="p-0 items-center">
      <Header />
      <Weather />
      <Main />
      <Fott />
    </div>
  );
}

export default App;
