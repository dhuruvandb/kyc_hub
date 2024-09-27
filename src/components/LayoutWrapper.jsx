import React, { useContext } from "react";
import { Layout, Menu, Switch } from "antd";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import { Context } from "../ContextApi";

const { Header, Footer, Sider, Content } = Layout;

export default function LayoutWrapper({ children }) {
  const { card } = useContext(Context);
  const items = [
    {
      label: <Link to={"/"}>Product Details</Link>,
      key: "ProductDetails",
    },
    {
      label: <Link to={"/compare-products"}>Compare Products</Link>,
      key: "CompareProducts",
    },
  ];
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {card}
      <Header
        style={{
          background: "#001529",
          color: "#fff",
          padding: "0 20px",
          textAlign: "center",
          position: "fixed",
          width: "100%",
          zIndex: 1,
        }}
      >
        {/* <Switch unCheckedChildren="Dark" checkedChildren="Light" /> */}
        <NavBar />
      </Header>
      <Layout style={{ marginTop: "64px" }}>
        <Sider
          width="25%"
          style={{
            background: "#fff",
            position: "fixed",
            height: "100%",
            zIndex: 1,
            paddingTop: "64px",
          }}
        >
          <Menu items={items} />
        </Sider>
        <Layout style={{ marginLeft: "25%", padding: "0 20px" }}>
          <Content style={{ padding: "20px", background: "#f0f2f5" }}>
            {children}
          </Content>
          <Footer
            style={{
              textAlign: "center",
              width: "100%",
              zIndex: 1,
            }}
          >
            &copy; {new Date().getFullYear()} KYC HUB. All rights reserved.
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
