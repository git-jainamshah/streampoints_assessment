import React, { Component, useState, props, useEffect } from "react";
import { Card, Drawer, Tabs } from "antd";
import {
  DeleteTwoTone,
  EditTwoTone,
  CopyTwoTone,
  SettingOutlined,
  FormatPainterOutlined,
} from "@ant-design/icons";
import { BlockPicker } from "react-color";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class CardsView extends Component {
  constructor(props) {
    super(props);
    var id = 0;
    this.state = {
      value: "",
      myCards: [
        {
          id: parseInt(++id),
          setTitle: "Custom Title",
          setBodyText: "Custom Body Text",
          setTitleSize: "36px",
          setTitleColor: "#0E2748",
          setBodyTextSize: "16px",
          setBodyTextColor: "#4F4F4F",
          setCardBorderRadius: "16px",
          setCardBorderColor: "",
          setDeleteable: false,
        },
      ],
      currID: 0,
      titleColorToogle: true,
      bodyColorToogle: true,
      borderRadiusColorToogle: true,
    };
    this.titleOnChange = this.titleOnChange.bind(this);
    this.descOnChange = this.descOnChange.bind(this);
    this.titleSizeOnChange = this.titleSizeOnChange.bind(this);
    this.descSizeOnChange = this.descSizeOnChange.bind(this);
    this.panelRadiusSizeOnChange = this.panelRadiusSizeOnChange.bind(this);
    this.togglePicker = this.togglePicker.bind(this);
  }

  resetData() {
    this.state.myCards.length > 1
      ? this.state.myCards.map((data) => {
          data.setDeleteable = true;
        })
      : this.state.myCards.map((data) => {
          data.setDeleteable = false;
        });
    this.forceUpdate();
  }

  rerenderMyPage() {
    this.resetData();
  }

  copyButtonHanlder(index) {
    const copiedData = [];
    this.state.myCards.map((data, i) =>
      i === index
        ? copiedData.push({
            id: parseInt(data.id) + 1,
            setTitle: data.setTitle,
            setBodyText: data.setBodyText,
            setTitleSize: data.setTitleSize,
            setTitleColor: data.setTitleColor,
            setBodyTextSize: data.setBodyTextSize,
            setBodyTextColor: data.setBodyTextColor,
            setCardBorderRadius: data.setCardBorderRadius,
            setCardBorderColor: data.setCardBorderColor,
            setDeleteable: data.setDeleteable,
          })
        : console.log("Cannot find the data")
    );
    this.state.myCards.splice(index, 0, copiedData[0]);
    this.rerenderMyPage();
  }

  deleteButtonHanlder(index) {
    this.state.myCards.splice(index, 1);
    this.rerenderMyPage();
  }

  state = { visible: false };

  showDrawer(i) {
    this.setState({
      visible: true,
    });
    this.state.currID = i;

    this.state.myCards.map((d, k) => {
      k === this.state.currID
        ? (document.getElementById("txtTitle").value = d.setTitle)
        : (document.getElementById("txtTitle").value = "");
    });

    this.state.myCards.map((d, k) => {
      k === this.state.currID
        ? (document.getElementById("txtDescription").value = d.setBodyText)
        : (document.getElementById("txtDescription").value = "");
    });
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  titleOnChange(event) {
    console.log(event.target.value);
    this.state.myCards.map((d, k) => {
      k === this.state.currID
        ? (d.setTitle = event.target.value)
        : (d.setTitle = d.setTitle);

      k === this.state.currID
        ? event.target.value == ""
          ? (d.setTitle = "Custom Title")
          : (d.setTitle = d.setTitle)
        : console.log("");
    });
    this.forceUpdate();
  }

  descOnChange(event) {
    console.log(event.target.value);
    this.state.myCards.map((d, k) => {
      k === this.state.currID
        ? (d.setBodyText = event.target.value)
        : (d.setBodyText = d.setBodyText);

      k === this.state.currID
        ? event.target.value == ""
          ? (d.setBodyText = "Custom Body Text")
          : (d.setBodyText = d.setBodyText)
        : console.log("");
    });
    this.forceUpdate();
  }

  titleSizeOnChange(event) {
    this.state.myCards.map((d, k) => {
      k === this.state.currID
        ? (d.setTitleSize = event.target.value + "px")
        : (d.setTitleSize = d.setTitleSize);

      k === this.state.currID
        ? event.target.value == "" || parseInt(event.target.value) < 0
          ? (d.setTitleSize = "36px")
          : (d.setTitleSize = d.setTitleSize)
        : console.log("");
    });
    this.forceUpdate();
  }

  descSizeOnChange(event) {
    this.state.myCards.map((d, k) => {
      k === this.state.currID
        ? (d.setBodyTextSize = event.target.value + "px")
        : (d.setBodyTextSize = d.setBodyTextSize);

      k === this.state.currID
        ? event.target.value == "" || parseInt(event.target.value) < 0
          ? (d.setBodyTextSize = "16px")
          : (d.setBodyTextSize = d.setBodyTextSize)
        : console.log("");
    });
    this.forceUpdate();
  }

  panelRadiusSizeOnChange(event) {
    this.state.myCards.map((d, k) => {
      k === this.state.currID
        ? (d.setCardBorderRadius = event.target.value + "px")
        : (d.setCardBorderRadius = d.setCardBorderRadius);

      k === this.state.currID
        ? event.target.value == "" || parseInt(event.target.value) < 0
          ? (d.setCardBorderRadius = "16px")
          : (d.setCardBorderRadius = d.setCardBorderRadius)
        : console.log("");
    });
    this.forceUpdate();
  }

  togglePicker = () => {
    console.log(this.state.titleColorToogle);
    if (this.state.titleColorToogle) {
      document.getElementById("titleBlockPicker").style.visibility = "visible";
    } else {
      document.getElementById("titleBlockPicker").style.visibility = "hidden";
    }
    var flag = this.state.titleColorToogle;
    this.setState({
      titleColorToogle: !flag,
    });
  };

  bodyTextColorPickerToggle = () => {
    console.log(this.state.bodyColorToogle);
    if (this.state.bodyColorToogle) {
      document.getElementById("bodyTextBlockPicker").style.visibility =
        "visible";
    } else {
      document.getElementById("bodyTextBlockPicker").style.visibility =
        "hidden";
    }
    var flag = this.state.bodyColorToogle;
    this.setState({
      bodyColorToogle: !flag,
    });
  };

  panelColorPickerToggle = () => {
    console.log(this.state.bodyColorToogle);
    if (this.state.bodyColorToogle) {
      document.getElementById("panelBlockPicker").style.visibility = "visible";
    } else {
      document.getElementById("panelBlockPicker").style.visibility = "hidden";
    }
    var flag = this.state.borderRadiusColorToogle;
    this.setState({
      borderRadiusColorToogle: !flag,
    });
  };

  state = {
    titleBackground: "#0e2748",
    bodyBackground: "#4F4F4F",
    panelBackground: "#FFFFFF",
  };

  handleTitleColor = (color, event) => {
    this.setState({ titleBackground: color.hex });
    document.getElementById("txtTitleColor").style.background =
      this.state.titleBackground;
    this.state.myCards.map((d, k) => {
      k === this.state.currID
        ? (d.setTitleColor = this.state.titleBackground)
        : (d.setTitleColor = d.setTitleColor);
    });
    this.forceUpdate();
  };

  handleBodyColor = (color, event) => {
    this.setState({ bodyBackground: color.hex });
    document.getElementById("txtBodyColor").style.background =
      this.state.bodyBackground;
    this.state.myCards.map((d, k) => {
      k === this.state.currID
        ? (d.setBodyTextColor = this.state.bodyBackground)
        : (d.setBodyTextColor = d.setBodyTextColor);
    });
    this.forceUpdate();
  };

  handlePanelColor = (color, event) => {
    this.setState({ panelBackground: color.hex });
    document.getElementById("txtPanelColor").style.background =
      this.state.panelBackground;
    this.state.myCards.map((d, k) => {
      k === this.state.currID
        ? (d.setCardBorderColor = this.state.panelBackground)
        : (d.setCardBorderColor = d.setCardBorderColor);
    });
    this.forceUpdate();
  };
  render() {
    return (
      <>
        <div>
          <Drawer
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            getContainer={false}
            style={{
              position: "absolute",
              padding: 0,
              boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.14)",
              overflowY: "auto",
            }}
            width="350"
          >
            <div>
              <Tabs
                defaultActiveKey="1"
                onChange={callback}
                className="customTab"
                centered={true}
                size="large"
                style={{ color: "#BDBDBD" }}
              >
                <TabPane
                  tab={
                    <SettingOutlined
                      style={{ fontSize: "25px", fontWeight: 800 }}
                    />
                  }
                  key="1"
                  className="tab"
                >
                  <form>
                    <div>
                      <h3 className="headTitle">Title Text</h3>
                      <input
                        type="text"
                        id="txtTitle"
                        placeholder="Enter Custom Title"
                        className="inputElement"
                        onChangeCapture={this.titleOnChange}
                      />
                    </div>
                    <br />
                    <div>
                      <h3 className="headTitle">Body Text</h3>
                      <textarea
                        type="text"
                        id="txtDescription"
                        placeholder="Enter Custom Text"
                        className="inputElement"
                        rows="5"
                        onChangeCapture={this.descOnChange}
                      ></textarea>
                    </div>
                  </form>
                </TabPane>
                <TabPane
                  tab={
                    <FormatPainterOutlined
                      style={{ fontSize: "25px", fontWeight: 800 }}
                    />
                  }
                  key="2"
                  style={{ color: "unset", fontSize: "unset" }}
                >
                  <form>
                    <div id="titleTools" style={{ padding: "10px" }}>
                      <p
                        style={{
                          color: "#00A3FF",
                          fontWeight: 500,
                          fontSize: "18px",
                        }}
                      >
                        Title
                      </p>
                      <table
                        style={{ border: "0px solid black", width: "70%" }}
                      >
                        <tr>
                          <td>
                            <p className="greyHeading">Size</p>
                          </td>
                          <td>
                            <p className="greyHeading">Color</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="number"
                              placeholder="px"
                              className="inputElement"
                              style={{ width: "100px", padding: "5px" }}
                              id="txtTitleSize"
                              onChangeCapture={this.titleSizeOnChange}
                              min="0"
                            />
                          </td>
                          <td>
                            <div
                              id="titleBlockPicker"
                              className="titleBlockPicker"
                            >
                              <BlockPicker
                                color={this.state.background}
                                onChangeComplete={this.handleTitleColor}
                              />
                            </div>
                            <div
                              id="txtTitleColor"
                              className="blockColor-title"
                              onClick={this.togglePicker}
                            ></div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <hr size="1" style={{ background: "#e0e0e0" }}></hr>

                    <div id="bodyTools" style={{ padding: "10px" }}>
                      <p
                        style={{
                          color: "#00A3FF",
                          fontWeight: 500,
                          fontSize: "18px",
                        }}
                      >
                        Body
                      </p>
                      <table
                        style={{ border: "0px solid black", width: "70%" }}
                      >
                        <tr>
                          <td>
                            <p className="greyHeading">Size</p>
                          </td>
                          <td>
                            <p className="greyHeading">Color</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="number"
                              placeholder="px"
                              className="inputElement"
                              style={{ width: "100px", padding: "5px" }}
                              id="txtBodySize"
                              onChangeCapture={this.descSizeOnChange}
                              min="0"
                            />
                          </td>
                          <td>
                            <div
                              id="bodyTextBlockPicker"
                              className="bodyTextBlockPicker"
                            >
                              <BlockPicker
                                color={this.state.background}
                                onChangeComplete={this.handleBodyColor}
                              />
                            </div>
                            <div
                              id="txtBodyColor"
                              className="blockColor-body"
                              onClick={this.bodyTextColorPickerToggle}
                            ></div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <hr size="1" style={{ background: "#e0e0e0" }}></hr>

                    <div id="cardsTools" style={{ padding: "10px" }}>
                      <p
                        style={{
                          color: "#00A3FF",
                          fontWeight: 500,
                          fontSize: "18px",
                        }}
                      >
                        Panel
                      </p>
                      <table
                        style={{ border: "0px solid black", width: "70%" }}
                      >
                        <tr>
                          <td>
                            <p className="greyHeading">Corner Radius</p>
                          </td>
                          <td>
                            <p className="greyHeading">Color</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="number"
                              placeholder="px"
                              className="inputElement"
                              style={{ width: "100px", padding: "5px" }}
                              id="txtPanelSize"
                              min="0"
                              onChangeCapture={this.panelRadiusSizeOnChange}
                            />
                          </td>
                          <td>
                            <div
                              id="panelBlockPicker"
                              className="panelBlockPicker"
                            >
                              <BlockPicker
                                color={this.state.background}
                                onChangeComplete={this.handlePanelColor}
                              />
                            </div>
                            <div
                              id="txtPanelColor"
                              className="blockColor-borderRadius"
                              onClick={this.panelColorPickerToggle}
                            ></div>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </form>
                </TabPane>
              </Tabs>
            </div>
          </Drawer>
          {this.state.myCards.map((data, index) => (
            <div className="cardHolder" key={this.state.index}>
              <Card
                className="card"
                id="myCard"
                style={{
                  borderRadius: data.setCardBorderRadius,
                  borderColor: data.setCardBorderColor,
                }}
              >
                <p hidden id="cardId">
                  {data.id}
                </p>
                <Card.Meta
                  title={data.setTitle}
                  className="my-title"
                  style={{
                    padding: "10px 0px 10px 0px",
                    fontSize: data.setTitleSize,
                    color: data.setTitleColor,
                    fontWeight: 500,
                  }}
                  id="cardTitle"
                />
                <hr
                  size="1"
                  style={{
                    background: "#E0E0E0",
                  }}
                  noshade={true}
                />
                <Card.Meta
                  description={data.setBodyText}
                  className="my-description"
                  style={{
                    padding: "10px 0px 10px 0px",
                    fontSize: data.setBodyTextSize,
                    color: data.setBodyTextColor,
                    fontWeight: "normal",
                    textAlign: "justify",
                  }}
                  id="cardData"
                />
                <div className="toolKit">
                  <div
                    className="toolKit-icon-deleteable"
                    onClick={() => this.showDrawer(index)}
                  >
                    <EditTwoTone twoToneColor="#00A3FF" />
                  </div>
                  <div
                    className="toolKit-icon-deleteable"
                    onClick={() => this.copyButtonHanlder(index)}
                  >
                    <CopyTwoTone twoToneColor="#00A3FF" />
                  </div>

                  {data.setDeleteable === true ? (
                    <div
                      className="toolKit-icon-deleteable"
                      onClick={() => this.deleteButtonHanlder(index)}
                    >
                      <DeleteTwoTone twoToneColor="#00A3FF" />
                    </div>
                  ) : (
                    <div className="toolKit-icon-non-deleteable">
                      <DeleteTwoTone twoToneColor="#73706f" />
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
          {this.resetData}
        </div>
      </>
    );
  }
}
export default CardsView;
