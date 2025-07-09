import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './layouts/layout.jsx'
import Home from './pages/Home';
import Activity from './pages/activity';
import Average from './pages/average';
import Performance from './pages/performance';


function NavigateTo() {
	const userId = '12';
	return (
		<Navigate
			to={`/user/${userId}`}
			replace
		/>
	);
}

export default function App() {
  const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
						{
							index: true,
							element: <NavigateTo />,
						},
						{
							path: '/user',
							element: <NavigateTo />,
						},
						{
							path: '/user/:id',
							element: <Home />,
							errorElement: <NavigateTo />
						},
						{
							path: '/user/:id/activity',
							element: <Activity />,
							errorElement: <NavigateTo />
						},
						{
							path: '/user/:id/average-sessions',
							element: <Average />,
							errorElement: <NavigateTo />
						},
						{
							path: '/user/:id/performance',
							element: <Performance />,
							errorElement: <NavigateTo />
						},
						{
							path: '*',
							element: <NavigateTo />,
						},
				]
		}
	]);

	return <RouterProvider router={router} />;
}

