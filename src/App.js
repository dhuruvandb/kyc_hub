import "./App.css";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import ProductDetails from "./pages/Productdetails";
import CompareProducts from "./pages/Compareproducts";
import RootComponent from "./components/RootComponent";
import LayoutWrapper from "./components/LayoutWrapper";

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
              <ProductDetails />
            </LayoutWrapper>
          ),
        },
        {
          path: "compare-products",
          element: (
            <LayoutWrapper>
              <CompareProducts />
            </LayoutWrapper>
          ),
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
