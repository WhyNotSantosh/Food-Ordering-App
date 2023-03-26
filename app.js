import React, { lazy, Suspense, useState } from 'react';
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
import UserContext from './src/utils/UserContext';
import { Provider } from "react-redux";
import store from './src/utils/store';
import Cart from './src/components/Cart';
//const h1 = (<h1>Hello from React Element</h1>); // React Element using JSX
//const H3Component = () => (<h3>Hello from H3 Functional Component</h3>); // React Functional Component

//Lazy loading instamart on demand with a different chunk
const Instamart = lazy(() => import("./src/components/Instamart"));
//REeact will suspend the loading when trying to do on demand loading - to avoid this use Suspense

const About = lazy(() => import("./src/components/About"));

//Never call lazy load your component inside othe component. It might work but not good practice.
const FoodVilla = () => {
    const [user, setUser] = useState({
        user: {
            name: ""
        }
    })
    return (
        <Provider store={store}>
            <React.Fragment>
                <UserContext.Provider value={{ user: user, setUser: setUser }}>   {/* This will be replace values in UserContext*/}
                    <Header />
                    <Outlet /> {/* This will be replaced by children based on path*/}
                    <Footer />
                </UserContext.Provider>
            </React.Fragment>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <FoodVilla />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <Suspense fallback={<h1>About page is loading</h1>}><About /></Suspense>,
                // children: [{
                //     path: "profile", // slash is not included because its not that open as localhost/profile
                //     element: <Profile namefromrouter={"Hello"} />
                // }]
            },
            // {
            //     path: "/contact",
            //     element: <Contact />
            // },
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
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

