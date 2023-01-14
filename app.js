import React from 'react';
import ReactDOM from "react-dom/client";
import Header from './src/components/header';
import Body from './src/components/body';
import Footer from './src/components/footer';
//const h1 = (<h1>Hello from React Element</h1>); // React Element using JSX
//const H3Component = () => (<h3>Hello from H3 Functional Component</h3>); // React Functional Component
const FoodVilla = () => (
    <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
    </React.Fragment>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FoodVilla />);

