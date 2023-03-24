import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import './App.css';
import Header from "./Header";
import Weather from "./Weather";

function App() {



  return (
    <>
      <Header />
      <Weather />
    </>
  );
}

export default App;
