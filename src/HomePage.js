import React, { Component } from "react";
import AppHeader from "./AppHeader";
import CardsView from "./CardsView";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <AppHeader />
        </div>
        <div style={{ padding: "10px" }}>
          <CardsView />
        </div>
      </div>
    );
  }
}

export default HomePage;
