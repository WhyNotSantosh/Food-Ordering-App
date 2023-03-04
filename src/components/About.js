import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from '../components/Profile';
import { Component, useContext } from "react";
import Profile from "./ProfileClass";
import UserContext from "../utils/UserContext";
class About extends Component {
    constructor(props) {
        super(props);
        console.log('about constructor');
        //initialise the state here - because whenever we load component, it calls the constructor first
    }
    async componentDidMount() {
        console.log('about class comp did mount');
        //best place to make an api call - equivalent to useEffect hook
        //in react we first render then make our api calls and update the component and re-render

    }

    render() {
        console.log('about class render');
        return (
            <div>
                <h1>About Us Page</h1>
                <UserContext.Consumer>
                    {({user}) => {
                      return <span className="p-10 font-bold text-blue-600">{user.user.name} - {user.user.email}</span>
                    }}
                </UserContext.Consumer>
                <p>This is a page to tell you about us. I am lazy loaded</p>
                <Outlet />
                <ProfileFunctionalComponent />
            </div>
        )
    }
}

export default About;