import "./App.css";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import RootComponent from "./components/RootComponent";
import LayoutWrapper from "./components/LayoutWrapper";
import axios from "axios";

const ProductDetails = lazy(() => import("./pages/Productdetails"));
const CompareProducts = lazy(() => import("./pages/Compareproducts"));

async function loader() {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    const data = res.data.products.map((data) => {
      const {
        id,
        title,
        description,
        price,
        discountPercentage,
        brand,
        category,
        thumbnail,
        rating,
        returnPolicy,
        warrantyInformation,
      } = data;
      return {
        id,
        title,
        description,
        price,
        discountPercentage,
        brand,
        category,
        thumbnail,
        rating,
        returnPolicy,
        warrantyInformation,
      };
    });
    return data;
  } catch (error) {
    console.error(error);
    throw new Response("Error fetching products", { status: 500 });
  }
}

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      errorElement: (
        <div>
          <NavLink to="/">Error, please check here</NavLink>
        </div>
      ),
      children: [
        {
          path: "/",
          element: (
            <LayoutWrapper>
              <Suspense fallback={<div>Loading...</div>}>
                <ProductDetails />
              </Suspense>
            </LayoutWrapper>
          ),
          loader: loader,
        },
        {
          path: "compare-products",
          element: (
            <LayoutWrapper>
              <Suspense fallback={<div>Loading...</div>}>
                <CompareProducts />
              </Suspense>
            </LayoutWrapper>
          ),
          loader: loader,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
