import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  const cards = data.map((item) => {
    return <Card 
    key={item.id}
    {...item}
    />;
  });
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
