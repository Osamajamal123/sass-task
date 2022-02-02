import "./footer.scss"
import Logo from "../../assets/images/logo.svg"
import Telegram from "../../assets/images/telegramhead.svg"
import Facebook from "../../assets/images/facebookfooter.svg"
import Instafooter from "../../assets/images/instafooter.svg"
const Footer = () => {
    return (
        <div>
            {/* footerContainer */}
            <div className="container">
                {/* footerline */}
                <div className="footer">
                    <div className="footerLine">

                    </div>
                    <div className="footerContainer">
                        {/* leftlogodata */}
                        <div className="leftLogoFlex">
                            <div className="logoImg">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="logoData">
                                <p>The Emergence Of cryptocurrency gave us <br /> not only P2P exchanges, anonymous <br /> transactions, minimum commissions,<br /> transparency and full control over <br /> our funds but also the possibility of earning <br /> passive income with the aid of smart <br /> contract</p>
                            </div>
                        </div>
                        {/* centerContainer */}
                        <div className="centerContainer">
                            {/* upperTelegram */}
                            <div className="upperTelegramFlex">
                                <div className="telegramImg">
                                    <img src={Telegram} alt="" />
                                </div>
                                <div className="telegramtext">
                                    <p>Telegram <br /> Group</p>
                                </div>
                            </div>
                            {/* downTelegram */}
                            <div className="downTelegramFlex">
                                <div className="telegramImgdown">
                                    <img src={Telegram} alt="" />
                                </div>
                                <div className="telegramtextdown">
                                    <p>Telegram <br /> Channel</p>
                                </div>
                            </div>
                        </div>
                        {/* rightContainer */}
                        <div className="rightContainer">
                            <div>
                                <h1>SMART CONTRACT </h1>
                            </div>
                            <div className="rightDownFlex">
                                <div>
                                    <h1>0x4AA957CECDD5F6F9518...65A18740</h1>
                                </div>
                                <div className="facebookImg">
                                    <img src={Facebook} alt="" />
                                </div>
                                <div className="InstaImg">
                                    <img src={Instafooter} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footerBottomText">
                        <p>Copyright © 2021. All Rights Reserved | Disclaimer</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Footer;