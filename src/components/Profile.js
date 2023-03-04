import React, { useContext, useEffect, useState } from "react";

const ProfileFunctionalComponent = () => {

    const [count, setCount] = useState(0);
    //console.log("Func Comp")
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('function comp set interval');
        }, 1000);
        // this return is called when comp is unmounted
        return () => {
            clearInterval(timer);
            console.log('func component did unmount');
        }
    }, []);
    return (<div>
        <h2>Profile Functional Component</h2>
        <h2>count: {count}</h2>
        <button onClick={() => { setCount(count + 1) }}>Count+1 </button>
    </div>)
}

export default ProfileFunctionalComponent