import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Santosh",
        email: "san@san.com"
    }
})

UserContext.displayName ="UserContext";

export default UserContext;