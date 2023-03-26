import React, { useContext, useEffect, useState } from "react";

const ProfileFunctionalComponent = () => {


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
    return (<div className="p-2 m-2">
        <h2>Profile Links:</h2>
        <h2>Linkedin: <a href={"https://www.linkedin.com/in/whynotsantosh/"} target="_blank">Click here</a></h2>
        <h2>Github: <a href={"https://github.com/whynotsantosh"} target="_blank">Click here</a></h2>
    </div>)
}

export default ProfileFunctionalComponent