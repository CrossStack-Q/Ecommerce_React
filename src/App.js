import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Cart from "./pages/Cart"
import {Provider} from "react-redux"
import {store} from './store'
import Checkout from './pages/Checkout'
import Register from './pages/Register'


import Login from "./pages/Login"


// function ProtectedRoute({ children }) {
//   const { user } = useAuth();
//   if (!user) {
//     return <Navigate to={"/login"} />;
//   }
//   return children;
// }



const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index  element={<Home/>}/>
      <Route
          path="/checkout"
          index
          element={
              <Checkout />
          }
        />
      <Route path="/cart"  element={<Cart/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/register" index element={<Register />} />
    </Route>
  )
)

function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  )
}

export default App