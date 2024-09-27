import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function NavBar() {
  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "Home",
    },
    {
      label: "👤",
      key: "picture",
    },
  ];
  return <Menu mode="horizontal" items={items} />;
}
