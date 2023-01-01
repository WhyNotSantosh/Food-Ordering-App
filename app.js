import React from 'react';
import ReactDOM from "react-dom/client";

const h1 = (<h1>Hello from React Element</h1>); // React Element using JSX
const H3Component = () => (<h3>Hello from H3 Functional Component</h3>); // React Functional Component
const HeadingComponent = () => (
    <div>
        {h1}
        <h1>
            Hello from H1 Function component
        </h1>
        {H3Component()}
        <H3Component />
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
console.error("Simulate error");
