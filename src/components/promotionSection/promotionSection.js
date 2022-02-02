import "./promotionSection.scss"
import Copy2 from "../../assets/images/copy2.svg";
import Bitcoin from "../../assets/images/bitcoin.svg";
const PromotionSection = () => {
    return (
        <div className="container">
            <div className="promotionFlex">
                {/* sectionleft */}
                <div className="sectionLeftBoxes">
                    {/* boxupper */}
                    <div className="boxupper">
                        <div className="boxUpperBorder">
                            <div>
                                <h1> Your BUSD Wallet</h1>
                            </div>

                            <div className="textImgFlex">
                                <div>
                                    <h1>0x08C999FD983F...</h1>
                                </div>
                                <div>
                                    <img src={Copy2} alt="" />
                                </div>
                            </div>
                            <div className="greenButton">
                                <p>To BscScan</p>
                            </div>
                        </div>

                    </div>
                    {/* boxbown */}
                    <div className="boxupper">
                        <div className="boxUpperBorder">
                            <div>
                                <h1> Smart Contract Address</h1>
                            </div>

                            <div className="textImgFlex">
                                <div>
                                    <h1>0xE0E63EB1CF499...</h1>
                                </div>
                                <div>
                                    <img src={Copy2} alt="" />
                                </div>
                            </div>
                            <div className="greenButton">
                                <p>To BscScan</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* sectionCenter */}
                <div className="sectionCenterContainer">
                    <div className="backgroundCenter">
                        <div>
                            <h1>Promotions</h1>
                        </div>
                        <div className="carouselData">
                            <div className="colorh1">
                                <h1>Presentations</h1>
                            </div>
                            <div className="colorh2">
                                <h1>Text</h1>
                            </div>
                            <div className="colorh3">
                                <h1>Banners</h1>
                            </div>
                        </div>
                        <div className="bitcoinDlex">
                            <div >
                                <img src={Bitcoin} alt="" />
                            </div>
                            <div className="endLine">

                            </div>
                        </div>
                        <div className="buttonCenter">
                            <div className="blackButton">
                                <p>Download This Presentation</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="sectionRightContainer">
                    <div className="sectionRightBackground">
                        <div className="haedingOne">
                            <h1>№1</h1>
                        </div>
                        <div className="haedingTwo">
                            <h1>"Always one step ahead" </h1>
                        </div>
                        <div className="paragraph">
                            <p> Allow yourself no more than 3 days to invite 2 or more partners to the project with which you will continue to work and interact. Choose partners with whom you will be comfortable going to a common goal. Study the project and its advantages (use open sources) so that your competence does not fail you. It is important that partners also follow these recommendations</p>
                        </div>
                        <div className="bottomDotsFlex">
                            <div className="dotts">

                            </div>
                            <div className="dott2">

                            </div>
                            <div className="dott2">

                            </div>
                            <div className="dott2">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PromotionSection;