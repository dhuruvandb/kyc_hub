import { Button, Table, Tag } from "antd";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Context } from "../ContextApi";

export default function ProductDetails() {
  const { addItemsToCompare, openNotification, darkTheme, compareItems } =
    useContext(Context);
  const products = useLoaderData();
  let comparedProducts = new Set(compareItems.map((data) => data.id));

  const columns = [
    {
      title: "Image",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (thumbnail) => (
        <img
          src={thumbnail}
          alt={thumbnail.name}
          style={{
            width: "100px",
            height: "100px",
          }}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <strong
          style={{
            color: comparedProducts.has(record.id) ? "orange" : "",
          }}
        >
          {text}
        </strong>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text, record) => (
        <span
          style={{
            maxHeight: "50px",
            overflow: "hidden",
            color: comparedProducts.has(record.id) ? "orange" : "",
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      render: (price, record) => (
        <p
          style={{ color: comparedProducts.has(record.id) ? "orange" : "" }}
        >{`$${price.toFixed(2)}`}</p>
      ),
    },
    {
      title: "Discount",
      dataIndex: "discountPercentage",
      key: "discountPercentage",
      sorter: (a, b) => a.discountPercentage - b.discountPercentage,
      render: (discount, record) => (
        <Tag
          color={comparedProducts.has(record.id) ? "orange" : "green"}
        >{`${discount}% Off`}</Tag>
      ),
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      render: (text, record) => (
        <p style={{ color: comparedProducts.has(record.id) ? "orange" : "" }}>
          {text}
        </p>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text, record) => (
        <p style={{ color: comparedProducts.has(record.id) ? "orange" : "" }}>
          {text}
        </p>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => {
            if (comparedProducts.size >= 4) {
              openNotification(
                null,
                null,
                "warning",
                `Cannot Add more than 4 products`
              );
            } else {
              handleCompare(record);
            }
          }}
          disabled={comparedProducts.has(record.id)}
        >
          Compare
        </Button>
      ),
    },
  ];

  const handleCompare = (record) => {
    if (!comparedProducts.has(record.id)) {
      addItemsToCompare(record);
      openNotification(record.title, "Added", "success");
    }
  };

  return (
    <>
      {products.length > 0 ? (
        <Table
          width="100%"
          dataSource={products}
          columns={columns}
          pagination={{ pageSize: 10 }}
          rowKey={"id"}
          scroll={{ y: 500 }}
          bordered
        />
      ) : (
        <Button onClick={() => window.location.reload()}>
          Please Try Again!
        </Button>
      )}
    </>
  );
}
