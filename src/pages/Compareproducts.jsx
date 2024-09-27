import { Button, Popover, Table } from "antd";
import { useContext, useEffect, useState } from "react";
import { Context } from "../ContextApi";
import { Link, useNavigate } from "react-router-dom";
import ProductDetails from "./Productdetails";

export default function CompareProducts() {
  const { compareItems, removeItems, openNotification } = useContext(Context);
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);
  useEffect(() => {
    if (compareItems.length < 2) {
      openNotification(
        null,
        null,
        "warning",
        `Please add at least ${2 - compareItems.length} products to compare`
      );
      navigate("/");
    }
  }, [compareItems]);
  const handleRemoveItems = (item) => {
    openNotification(item.title, "Removed", "error");
    removeItems(item);
  };

  const dataSource = [
    {
      attribute: "Image",
      ...compareItems.reduce(
        (acc, item) => ({
          ...acc,
          [item.id]: (
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ width: 100, height: 100 }}
            />
          ),
        }),
        {}
      ),
    },
    {
      attribute: "Description",
      ...compareItems.reduce(
        (acc, item) => ({ ...acc, [item.id]: item.description }),
        {}
      ),
    },
    {
      attribute: "Category",
      ...compareItems.reduce(
        (acc, item) => ({ ...acc, [item.id]: item.category }),
        {}
      ),
    },
    {
      attribute: "Price",
      ...compareItems.reduce(
        (acc, item) => ({ ...acc, [item.id]: item.price }),
        {}
      ),
    },
    {
      attribute: "Rating",
      ...compareItems.reduce(
        (acc, item) => ({ ...acc, [item.id]: item.rating }),
        {}
      ),
    },
    {
      attribute: "Brand",
      ...compareItems.reduce(
        (acc, item) => ({ ...acc, [item.id]: item.brand }),
        {}
      ),
    },
    {
      attribute: "Return Policy",
      ...compareItems.reduce(
        (acc, item) => ({ ...acc, [item.id]: item.returnPolicy }),
        {}
      ),
    },
    {
      attribute: "Warranty Information",
      ...compareItems.reduce(
        (acc, item) => ({ ...acc, [item.id]: item.warrantyInformation }),
        {}
      ),
    },
  ];

  const columns = [
    { title: "Attribute", dataIndex: "attribute", key: "attribute" },
    ...compareItems.map((item) => ({
      title: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>{item.title}</span>
          <Button type="link" onClick={() => handleRemoveItems(item)} danger>
            Remove
          </Button>
        </div>
      ),
      dataIndex: item.id,
      key: item.id,
    })),
  ];

  return (
    <>
      <Popover
        content={
          <>
            <ProductDetails />
            <Button
              onClick={() => setShowPopUp(false)}
              type="primary"
              size="large"
            >
              Close
            </Button>
          </>
        }
        title="Title"
        trigger="click"
        open={showPopUp}
        onOpenChange={() => setShowPopUp(true)}
      >
        <Button
          value={"large"}
          disabled={compareItems.length >= 4}
          type="primary"
        >
          Add Products
        </Button>
      </Popover>

      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey="attribute"
        pagination={false}
        bordered
      />
    </>
  );
}
