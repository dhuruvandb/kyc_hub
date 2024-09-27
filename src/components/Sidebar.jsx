import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../ContextApi";

export default function SideBar() {
  const { compareItems, openNotification } = useContext(Context);
  console.log(compareItems);

  const navigate = useNavigate();
  const items = [
    {
      label: <Link to={"/"}>Product Details</Link>,
      key: "ProductDetails",
    },
    {
      label: "Compare Products",
      key: "CompareProducts",
      onClick: () => {
        if (compareItems.length < 2) {
          openNotification(
            null,
            null,
            "warning",
            `Please add at least ${2 - compareItems.length} products to compare`
          );
        } else {
          navigate("/compare-products");
        }
      },
    },
  ];
  return (
    <Sider
      style={{
        background: "#fff",
        position: "fixed",
        height: "100%",
        zIndex: 1,
        paddingTop: "64px",
      }}
    >
      <Menu mode="inline" items={items} />
    </Sider>
  );
}
