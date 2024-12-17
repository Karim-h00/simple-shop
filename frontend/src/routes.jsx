import App from "./App";
import Admin from "./Admin";
import Cart from "./components/Cart";
import Home from "./components/Home";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home/:params",
    element: <Home />,
  },
  {
    path: "admin",
    element: <Admin />,
  },
];

export default routes;
