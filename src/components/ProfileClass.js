import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        //create state
        this.state = {
            userInfo: {
                name: "",
                url: ""
            }
        }
        console.log("profile class Consturctor");
    }

    async componentDidMount() {
        const gituser = await fetch("https://api.github.com/users/whynotsantosh");
        const json = await gituser.json();
        this.setState({ name: json.login, url: json.url })
        console.log('profile class componentDidMount');
    }

    componentDidUpdate() {
        //called each time when component re-renders
        console.log('profile class componentDidUpdate');
        this.timer = setInterval(() => {
          console.log('class comp set interval');
        }, 1000); // this will be called even though component is unmounted if we are not cleaning up the code
    }

    componentWillUnmount(){
        console.log('profile class componentDidUnmount');
        clearInterval(this.timer);
    }

    render() {
        console.log("profile class render");
        return (<div>
            <h2>This is class profile</h2>
            <h3>Name: {this.state.name}</h3>
            <h2>Git Url: {this.state.url}</h2>
        </div>)
    }
}

export default Profile;