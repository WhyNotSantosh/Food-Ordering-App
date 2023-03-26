import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from '../components/Profile';
import { Component, useContext } from "react";
import Profile from "./ProfileClass";
import UserContext from "../utils/UserContext";
import Modal from "./Modal";
import Info from "./Info";
class About extends Component {
    constructor(props) {
        super(props);
        console.log('about constructor');
        //initialise the state here - because whenever we load component, it calls the constructor first
        this.state = {
            openModel: false,
            info: ["I am a class component", "I am lazy loaded.", "I am calling a functional component within me called Profile."]
        }
    }
    async componentDidMount() {
        this.setState({ openModel: false });
        //best place to make an api call - equivalent to useEffect hook
        //in react we first render then make our api calls and update the component and re-render
    }

    render() {
        return (
            <>
                {this.state.openModel && <Modal closeModal={() => this.setState({ openModel: false })} info={this.state.info} />}
                <div>
                    <div className="flex justify-between px-2 m-2">
                        <h1 className="underline text-2xl  font-bold">About Me:</h1>
                        <Info openModal={() => this.setState({ openModel: true })} />
                    </div>
                    <UserContext.Consumer>
                        {({ user }) => {
                            return (
                                <div className="grid p-2 m-2">
                                    <span className="font-bold text-blue-600">App Created by: Santosh Kumar S R</span>
                                    <span className="font-bold text-blue-600">Email Id: san.santosh991@gmail.com</span>
                                    <span className="mt-2"><b>App description:</b> This is a food ordering app created as single page app using React. Below are few details and features.
                                        <ul className="list-disc mx-8 list-inside">
                                            <li>App has Info button on each page on top right corner which shows information about the page components.</li>
                                            <li>I used Parcel.js as bundler. <a className="underline" href={"https://parceljs.org/"} target={"_blank"}>Link to docs.</a></li>
                                            <li>The app was created with the idea of implementing major concepts inside React like functional and class components, inbuilt hooks and custom hooks.</li>
                                            <li>Used inbuilt hooks like <b>useState</b>, <b>useEffect</b>, <b>useContext</b>.</li>
                                            <li>Created multiple custom hooks like:
                                                <ul className="list-disc mx-8 list-inside">
                                                    <li><b>useOnline</b> (Checks if user is connected to internet or not)</li>
                                                    <li><b>useRestaurantList</b> (used to get list of restaurants)</li>
                                                    <li><b>useRestaurantMenu</b> (Used to get list of menu items of a selected restaurant)</li>
                                                </ul>
                                            </li>
                                            <li>Loading components on demand using different <b>chunks</b> to make app <b>performant</b>.</li>
                                            <li>Built own <b>Shimmer</b> component to make UI more good.</li>
                                            <li>Built own <b>Modal</b> component for showing info as well as login option to provide user name.</li>
                                            <li>Used <b>Tailwind CSS</b> for designing UI. <a className="underline" href={"https://tailwindcss.com/"} target={"_blank"}>Link to docs.</a></li>
                                            <li>Used <b>React Router</b> for routing. <a className="underline" href={"https://reactrouter.com/en/main"} target={"_blank"}>Link to docs.</a></li>
                                            <li>Used <b>Redux Toolkit</b> for state management. <a className="underline" href={"https://redux-toolkit.js.org/"} target={"_blank"}>Link to docs.</a></li>
                                        </ul>
                                    </span>
                                </div>
                            )
                        }}
                    </UserContext.Consumer>
                    <ProfileFunctionalComponent />
                </div>
            </>
        )
    }
}

export default About;