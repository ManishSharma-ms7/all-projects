import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppWrapper from "../AppWrapper";
import Home from "../pages/Home";
import Redirect from "../pages/Redirect";
import LoginPage from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import ProductDetails from "../pages/ProductDetails";
import AppContainer from "../pages/AppContainer";

const routes = createBrowserRouter([
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/",
		element: (
			<AppContainer>
				<PrivateRoutes />
				<h1>Hello world!</h1>
			</AppContainer>
		),
		children: [
			{
				path: "/products",
				element: <AppWrapper />,
				children: [
					{
						index: true,
						element: <Home />,
					},
					{
						path: ":productid",
						element: <ProductDetails />,
					},
				],
			},
			{
				path: "/wishlist",
				element: <h1>Wishlist</h1>,
			},
			{
				path: "*",
				element: <Redirect />,
			},
		],
	},
]);

export default function AppRouter() {
	return <RouterProvider router={routes} />;
}
