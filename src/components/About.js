import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from '../components/Profile';
import { Component, useContext } from "react";
import Profile from "./ProfileClass";
import UserContext from "../utils/UserContext";
import Modal from "./Modal";
class About extends Component {
    constructor(props) {
        super(props);
        console.log('about constructor');
        //initialise the state here - because whenever we load component, it calls the constructor first
        this.state = {
            openModel: false,
            info: "I am a class component and I am lazy loaded. I am calling a functional component within me called Profile."
        }
    }
    async componentDidMount() {
        this.setState({ openModel: false });
        //best place to make an api call - equivalent to useEffect hook
        //in react we first render then make our api calls and update the component and re-render
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.openModel !== nextState.openModel) {
    //         return true;
    //     }
    //     return false;
    // }

    render() {
        return (
            <>
                {this.state.openModel && <Modal closeModal={() => this.setState({ openModel: false })} info={this.state.info} />}
                <div>
                    <div className="flex justify-between">
                        <h1 className="text-3xl p-2 m-2 font-bold">About</h1>
                        <span className="relative inline-flex p-2 m-4">
                            <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 ring-1 ring-slate-900/10 dark:ring-slate-200/20"
                                onClick={() => this.setState({ openModel: true })}
                            >
                            Info
                        </button>
                        <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                    </span>
                </div>
                <UserContext.Consumer>
                    {({ user }) => {
                        return <span className="p-10 font-bold text-blue-600">{user.user.name} - {user.user.email}</span>
                    }}
                </UserContext.Consumer>
                <p>This is a page to tell you about us. I am lazy loaded</p>
                <Outlet />
                <ProfileFunctionalComponent />
            </div>
            </>
        )
    }
}

export default About;