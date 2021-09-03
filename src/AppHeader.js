import React, { Component } from "react";
import applogo from "./applogo.svg";
import { Layout } from "antd";

const { Header } = Layout;

class AppHeader extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">
            <img src={applogo} alt="Company Logo" />
          </div>
        </Header>
      </Layout>
    );
  }
}

export default AppHeader;
