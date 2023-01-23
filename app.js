import React, { Children } from 'react';
import ReactDOM from "react-dom/client";
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import About from './src/components/About';
import Error from './src/components/Error';
import Contact from './src/components/Contact';
import RestaurantMenu from './src/components/RestaurantMenu';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//const h1 = (<h1>Hello from React Element</h1>); // React Element using JSX
//const H3Component = () => (<h3>Hello from H3 Functional Component</h3>); // React Functional Component

const FoodVilla = () => (
    <React.Fragment>
        <Header />
        <Outlet /> {/* This will be replaced by children based on path*/}
        <Footer />
    </React.Fragment>
)

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <FoodVilla />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

