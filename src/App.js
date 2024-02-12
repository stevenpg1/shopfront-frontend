import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';

import {
  RootLayout,
  ErrorPage,
  Menu,
  Basket,
  Payment
} from "./pages";


import { loader as menuLoader } from './pages/Menu';

// import { action as menuAction } from './pages/Menu';
// import { action as basketAction } from './pages/Basket';
// import { action as paymentAction } from './pages/Payment';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Menu />,
        loader: menuLoader
        // action: menuAction
      },
      {
        path: "basket",
        element: <Basket />,
        // action: basketAction
      },
      {
        path: "payment",
        element: <Payment />,
        //action: paymentAction
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
