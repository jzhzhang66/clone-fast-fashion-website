import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Landfill from "../images/landfill.png";
import WaterPollution from "../images/water-pollution.jpeg";
import { LocationContentContainer } from "../styles/location.style";
import { ShienLogoStyled } from "../styles/clothing.style";
import ShienLogo from "../images/shienLogo.png";

const menu = (setLocation) => (
  <Menu>
    <Menu.Item key="0">
      <a onClick={(e) => setLocation("LA")}>Los Angeles, CA</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a onClick={(e) => setLocation("NYC")}>Soho, NYC</a>
    </Menu.Item>
    <Menu.Divider />
  </Menu>
);

const LocationPage = () => {
  const [location, setLocation] = useState();
  return (
    <>
      <Nav />
      <ShienLogoStyled src={ShienLogo} />
      <LocationContentContainer>
        <Dropdown overlay={menu(setLocation)}>
          <a className="ant-dropdown-link">
            Check out our locations!
            <DownOutlined style={{fontSize: '1.5rem'}} />
          </a>
        </Dropdown>
        <div>
          {location === "LA" && <img src={Landfill} />}
          {location === "NYC" && <img src={WaterPollution} />}
        </div>
      </LocationContentContainer>
    </>
  );
};

export default LocationPage;
