import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext)
  return (
    <>
      <div className="grid bg-black text-white pt-10">
        {/* <h1>Developed by: {user.user.name}</h1> */}
        <div className="grid grid-cols-4 p-2 m-2 border-b border-gray-500">
          <div>
            <div className="text-gray-600 font-bold pb-4">COMPANY</div>
            <ul>
              <li className="pb-2">About</li>
              <li className="pb-2">Contact</li>
            </ul>
          </div>
          <div>
          <div className="text-gray-600 font-bold pb-4">CONTACT</div>
            <ul>
              <li className="pb-2">Help & Support</li>
              <li className="pb-2">Partner with us</li>
            </ul>
          </div>
          <div>
          <div className="text-gray-600 font-bold pb-4">LEGAL</div>
            <ul>
              <li className="pb-2">Terms & Conditions</li>
              <li className="pb-2">Privacy Policy</li>
              <li className="pb-2">Cookie Policy</li>
              <li className="pb-2">Phishing & Fraud</li>
            </ul>
          </div>
          <div>
          <div className="text-gray-600 font-bold pb-4"></div>
          <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage" rel="nofollow noopener" alt="" target="_blank" class="AppDownloadLinks_appLink__3lQqz" data-testid="ios-appstore">
            <img alt="" className="pb-4" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"/>
            </a>
          <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&amp;referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" rel="nofollow noopener" alt="" target="_blank" class="AppDownloadLinks_appLink__3lQqz" data-testid="android-playstore">
            <img alt="" className="pb-4" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"/>
            </a>
          </div>
        </div>
        <div className="flex grid-cols-3 p-2 m-2 justify-between">
          <div>Food Villa</div>
          <div>© 2023 Swiggy</div>
          <div>Facebook</div>
        </div>
      </div>
    </>
  )
}

export default Footer;