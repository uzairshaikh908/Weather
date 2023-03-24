import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Weather from "./Weather";

function App() {
  return (
    <div className="p-0 items-center">
      <Header />
      <Weather />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
