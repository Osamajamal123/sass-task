import "./header.scss"
import Logo from "../../assets/images/logo.svg"
import Facebook from "../../assets/images/facebookhead.svg"
import Telegram from "../../assets/images/telegramhead.svg"
import Country from "../../assets/images/country.svg"
import Arrow from "../../assets/images/arrow.svg"
import NotificationImage from "../../assets/images/notification.svg"
import Brightness from "../../assets/images/brightness.svg"
import Logout from "../../assets/images/logout.svg"
const Header = () => {
    return (
        <div>
            {/* haederContainer */}
            <div className="container">
                <div className="haederContainer">
                    {/* leftSideheader */}
                    <div className="leftSideFlex">
                        <div className="leftSideheader">
                            <div className="logoImg">
                                <img src={Logo} alt="" />
                            </div>


                        </div>
                        {/* navbars */}
                        <div className="navbars">
                            <ul>
                                <li>Main Panel</li>
                                <li>Partners</li>
                                <li>Statistics</li>
                            </ul>
                        </div>
                    </div>
                    {/* rightSide */}
                    <div className="rightSide">
                        <div className="borders">
                            <div className="socialMediaImges">
                                <img src={Telegram} alt="" />
                            </div>
                            <div className="socialMediaImges2">
                                <img src={Facebook} alt="" />
                            </div>
                        </div>
                        <div className="countryFlex">
                            <div className="countrydata">
                                <div className="countryImg">
                                    <img src={Country} alt="" />
                                </div>
                                <div className="ArrowImg">
                                    <img src={Arrow} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="buttonImagesFlex">
                            <div className="Brightness">
                                <img src={Brightness} alt="" />
                            </div>
                            <div className="NotificationImage">
                                <img src={NotificationImage} alt="" />
                            </div>
                            <div className="buttonFlex">
                                <div >
                                    <img src={Logout} alt="" />
                                </div>
                                <div className="logOut">
                                    <p>Log Out</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="borderLine">

            </div>

        </div>

    )
}
export default Header;