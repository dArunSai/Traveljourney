import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style.css";
import Card from "./components/Card";
import data from "./data";

function App() {
  //console.log(data);
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
