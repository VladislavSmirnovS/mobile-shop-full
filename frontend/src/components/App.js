import React from "react";
import { Route } from "react-router-dom";
import Menu from "./Menu";
import Create from "../pages/Create";
import HomePage from "../pages/Home";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <div className="content">
        <Route path="/create" component={Create} exact />
        <Route exact path="/" component={HomePage} />
      </div>
      <Footer />
    </>
  );
}

export default App;
