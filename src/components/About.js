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
            info: "I am a class component and I am lazy loaded. I am calling a functional component within me called Profile. I am also demoing how a useContext hook works by showing data is being typed in the input box beside search button from home page."
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
                    <div className="flex justify-between p-2 m-2">
                        <h1 className="text-3xl  font-bold">About Me</h1>
                        <Info openModal={() => this.setState({ openModel: true })} />
                    </div>
                    <UserContext.Consumer>
                        {({ user }) => {
                            return (
                                <div className="grid p-2 m-2">
                                    <span className="font-bold text-blue-600">Name - {user.user.name}</span>
                                    <span className="font-bold text-blue-600">Email Id: - {user.user.email}</span>
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