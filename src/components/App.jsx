import React from "react";
import "./styles.css";

import LocationsTab from "./LocationsTab";
import Header from "./Header";
import Footer from "./Footer";

import Card from "./card";

export default function App() {
  return (
    <div>
      <Header />
      <LocationsTab />
      <Card />
      <Footer />
    </div>
  );
}
