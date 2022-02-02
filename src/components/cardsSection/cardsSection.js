import "./cardsSection.scss";
import Box1 from "../../assets/images/person.svg"
import Smallperson from "../../assets/images/smallperson.svg"
import Box2 from "../../assets/images/clock.svg"
import SmallClock from "../../assets/images/smallclock.svg"
import Box3 from "../../assets/images/lines.svg"
import SmallLines from "../../assets/images/smalllines.svg"
import Box4 from "../../assets/images/bigdollar.png"
import Smalldollar from "../../assets/images/smalldollar.svg"
const CardsSection = () => {
    const box_data = [
        {
            id: 1,
            boxsmallimg: Smallperson,
            boxbigimg: Box1,
            title: "All Participants",
            numbertext: "433 890"
        },
        {
            id: 2,
            boxsmallimg: SmallClock,
            boxbigimg: Box2,
            title: "Joined in 24 Hours",
            numbertext: "+149 121"
        },
        {
            id: 3,
            boxsmallimg: SmallLines,
            boxbigimg: Box3,
            title: "Participates have Earned BUSD",
            numbertext: "297 896"
        },
        {
            id: 4,
            boxsmallimg: Smalldollar,
            boxbigimg: Box4,
            title: "Participates have Earned USD",
            numbertext: "97 907 267"
        },
    ]
    return (
        <div className="container">
            {/* boxContainer */}
            <div className="boxContainer">
                {/* boxWidth */}
                <div className="boxWidth">
                    {box_data?.map((boxes) =>
                        <div className="boxSpace">
                            <div className="box">
                                {/* boxImage */}
                                <div className="boxText">
                                    <div className="boxDataFlex">
                                        {/* img */}
                                        <div className="personImg">
                                            <img src={boxes.boxsmallimg} alt="" />
                                        </div>
                                        {/* title */}
                                        <div className="titleText">
                                            <h1>{boxes.title}</h1>
                                            <div className="numberText">
                                                <h1>{boxes.numbertext}</h1>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className={boxes.id ===4 ?"boxDollar" : "boxImage" }>
                                    <img src={boxes.boxbigimg} alt="" />
                                </div>
                                {/* boxText */}

                            </div>
                        </div>

                    )}

                </div>
            </div>
        </div>
    )
}
export default CardsSection