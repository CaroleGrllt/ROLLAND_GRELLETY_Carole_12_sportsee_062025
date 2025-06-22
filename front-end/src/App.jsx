import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/layout.jsx'
import Home from './pages/Home';




export default function App() {
  const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
      children: [
        {path: '', element: <Home/>}
      ]
		}
	]);

	return <RouterProvider router={router} />;
}

