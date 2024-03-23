// import React from 'react'
// import { Navbar } from './components/Navbar'
// import {Details} from "./components/Details"

// function App() {
//   return (
//     <div>
//       <Navbar />
//      <Details/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Products from "./queryComp/Products";
// import Product from "./queryComp/Product";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/product' element={<Products />}/>
//         <Route path='/product/:id' element={<Product />}/>
//       </Routes>
//       </BrowserRouter>

//     </div>
//   )
// }

// export default App
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout } from './Pages/HomeLayout';

import { Login, action as loginAction } from './Pages/Login';
import { Error } from "./Pages/Error"
import { Store } from "./Store"
import { Register, action as registerAction } from './Pages/Register';

import { loader as LandingLoader, Landing } from './Pages/Landing';
import { ErrorElement } from './Component/ErrorElement';
import { Products, loader as productsLoader } from './Pages/Products.jsx';
import { SingleProduct, loader as  singleProductAction } from './Pages/SingleProducts';
import { Cart } from './Pages/Cart';
import { Checkout, loder as checkoutLoader } from './Pages/Checkout';
import {action as CheckOutFormAction} from "./Component/CheckOutForm"
import { Orders, loader as ordersLoader } from './Pages/Orders';
import { About } from './Pages/About';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    }
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader(queryClient),
      },
      {
        path: "/products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader(queryClient)
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductAction(queryClient)
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/checkout",
        element: <Checkout/>,
        loader: checkoutLoader(Store),
        action : CheckOutFormAction(Store, queryClient),
      },
      {
        path: "/orders",
        element: <Orders/>,
        loader: ordersLoader(Store, queryClient),
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(Store)
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction(Store)
  },

])
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App
