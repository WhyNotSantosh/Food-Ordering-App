import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: ""
    }
})

UserContext.displayName ="UserContext";

export default UserContext;