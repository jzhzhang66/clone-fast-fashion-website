import * as React from "react";
import { Menu } from "antd";
import { RightCircleFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { NavContainer } from "./Nav.style";
const Nav = () => {
  return (
    <NavContainer>
      <Menu mode="horizontal">
        <Menu.Item href="/">
          <a href="/">Clothing</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/location">Location</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/checkout">
            <ShoppingCartOutlined style={{ fontSize: "2rem" }} />
          </a>
        </Menu.Item>
      </Menu>
    </NavContainer>
  );
};
export default Nav;
