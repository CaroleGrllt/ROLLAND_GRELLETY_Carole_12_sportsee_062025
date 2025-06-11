// import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";


export default function App () {
  const router = createBrowserRouter([
  {
    path: '/',
    element: <UNDEFINED_YET />,
  }
])

return <RouterProvider router={router} />;
}
