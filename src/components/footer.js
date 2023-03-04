import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext)
  return (
    <h1>Footer: {user.user.name}</h1>
  )
}

export default Footer;