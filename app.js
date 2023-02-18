import React, { lazy, Suspense } from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from './src/components/Body';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import Profile from './src/components/ProfileClass';
import RestaurantMenu from './src/components/RestaurantMenu';
import Shimmer from './src/components/Shimmer';

//const h1 = (<h1>Hello from React Element</h1>); // React Element using JSX
//const H3Component = () => (<h3>Hello from H3 Functional Component</h3>); // React Functional Component

//Lazy loading instamart on demand with a different chunk
const Instamart = lazy(() => import("./src/components/Instamart"));
//REeact will suspend the loading when trying to do on demand loading - to avoid this use Suspense

const About = lazy(() => import("./src/components/About"));

//Never call lazy load your component inside othe component. It might work but not good practice.
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
                element: <Suspense fallback={<h1>About page is loading</h1>}><About /></Suspense>,
                children: [{
                    path: "profile", // slash is not included because its not that open as localhost/profile
                    element: <Profile namefromrouter={"Hello"} />
                }]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
            },
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

