import "./levelsSection.scss"
import Linings from "../../assets/images/linings.svg"
import Bell from "../../assets/images/bell.svg"
import Map from "../../assets/images/map.svg"
import Smallperson from "../../assets/images/smallperson.svg"
import Copy from "../../assets/images/copy.svg"
import Mini from "../../assets/images/mini.svg"
import Reload from "../../assets/images/reload.svg"
import Buy from "../../assets/images/buy.svg"
const LevelsSection = () => {
    return (
        <div className="container">
            {/* levels-boxes-flex */}
            <div className="levelsBoxexFlex">
                {/* left-side-box */}
                <div className="leftSide">
                    <div className="leftSideBox">
                        {/* upperBox */}
                        <div className="upperBox">
                            {/* imgTextflex */}
                            <div className="imgTextflex">
                                <div>
                                    <img src={Linings} alt="" />
                                </div>
                                <div className="idText">
                                    <h1>ID 197</h1>
                                    <p>Upline ID 122</p>
                                </div>
                            </div>
                            {/* boxButton */}
                            <div className="button-placement">
                                <div className="button-styling">
                                    <p>2099.626 BUSD</p>
                                </div>
                            </div>

                        </div>
                        {/* bottombox */}
                        <div className="bottomBox">
                            {/* imgTextflex */}
                            <div className="earningText">
                                <h1>Earnings</h1>
                                <p>$201  341</p>
                            </div>

                            {/* boxButton */}
                            <div className="button-placement-bottom">
                                <div className="button-styling">
                                    <p>878.956 BUSD </p>
                                </div>
                            </div>

                        </div>
                        {/* notifications */}
                        <div className="notificationConatiner">
                            <div className="notificationFlex">
                                <div>
                                    <img src={Bell} alt="" />
                                </div>
                                <div className="notificationText">
                                    <h1>Enable Notifications</h1>
                                </div>
                            </div>
                            {/* mapContainer */}

                            <div className="mapFlex">
                                <div>
                                    <img src={Map} alt="" />
                                </div>
                                <div className="mapText">
                                    <div className="textOne">
                                        <h1>USD</h1>
                                    </div>
                                    <div className="textTwo">
                                        <h1>EUR </h1>
                                        <h1>RUB </h1>
                                    </div>
                                </div>
                            </div>
                            {/* greenLine */}
                            <div className="greenLine">

                            </div>
                            {/* partners */}
                            <div className="partnersnFlex">
                                <div className="partnersData">
                                    <div>
                                        <img src={Smallperson} alt="" />
                                    </div>
                                    <div className="partnersText">
                                        <h1>Partners</h1>
                                    </div>
                                </div>
                                <div className="numberPartner">
                                    <h1>153</h1>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* affiliateLinkbox */}
                    <div className="affiliateLinkbox">
                        <div className="affiliateBox">
                            <div className="affiliateboxColor">
                                <div>
                                    <h1>Afifiliate Link</h1>
                                </div>
                                <div className="linkButton">
                                    <div className="linkText">
                                        <p>https://pionera.io/i/idone/</p>
                                    </div>
                                    <div className="linkImg">
                                        <img src={Copy} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightSideBox">
                    {/* levels */}
                    <div className="levels">
                        <h1>Levels</h1>
                    </div>
                    {/* levelline */}
                    <div className="levelLine">

                    </div>
                    {/* boxes */}
                    <div className="boxesContainer">
                        {/* levelboxone */}
                        <div className="levelBox">
                            <div className="levelNumber">
                                <div className="number">
                                    <p>1</p>
                                </div>
                                <div className="numberPurple">
                                    <h1>5</h1>
                                </div>
                            </div>
                            {/* diagram */}
                            <div className="diagramContainer">
                                {/* leftDiagram */}
                                <div className="leftDiagram">
                                    <div className="transform">

                                    </div>
                                    <div className="colorDot">

                                    </div>

                                </div>
                                {/* ///// */}
                                {/* rightDiagram */}
                                <div className="rightDiagram">
                                    <div className="transformright">

                                    </div>
                                    <div className="colorDotright">

                                    </div>

                                </div>
                                {/* /////// */}
                            </div>
                            {/* bottomboxdata */}
                            <div className="bottomboxdata">
                                {/* left */}
                                <div className="bottomboxleft">

                                    <div className="Minipersonimg" >
                                        <img src={Mini} alt="" />
                                    </div>
                                    <div className="miniText">
                                        <p>2759</p>
                                    </div>
                                </div>
                                {/* //// */}
                                {/* right */}
                                <div className="bottomboxright">

                                    <div className="reloadimg" >
                                        <img src={Reload} alt="" />
                                    </div>
                                    <div className="miniTextright">
                                        <p>250</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ///// */}
                        {/* levelboxtwo */}
                        <div className="levelBox">
                            <div className="levelNumber">
                                <div className="number">
                                    <p>2</p>
                                </div>
                                <div className="numberPurple">
                                    <h1>10</h1>
                                </div>
                            </div>
                            {/* diagram */}
                            <div className="box-two-diagram">
                                {/* leftside */}
                                <div className="leftSideFlex">
                                    <div className="leftSidelineDiagram">
                                        <div className="leftSideLine">

                                        </div>
                                        <div className="leftSideDotTwo">

                                        </div>
                                    </div>
                                    {/* rightside */}
                                    <div className="rightside">
                                        <div className="rightSideLine">

                                        </div>
                                        <div className="rightSideDotTwo">

                                        </div>
                                    </div>
                                </div>

                                {/* rightside */}
                                <div className="leftSideFlex">
                                    <div className="leftSidelineDiagram">
                                        <div className="leftSideLine">

                                        </div>
                                        <div className="leftSideDotTwo">

                                        </div>
                                    </div>
                                    {/* rightside */}
                                    <div className="rightside">
                                        <div className="rightSideLine">

                                        </div>
                                        <div className="rightSideDotTwo">

                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* bottomboxdata */}
                            <div className="bottomboxdata">
                                {/* left */}
                                <div className="bottomboxleft">

                                    <div className="Minipersonimg" >
                                        <img src={Mini} alt="" />
                                    </div>
                                    <div className="miniText">
                                        <p>2759</p>
                                    </div>
                                </div>
                                {/* //// */}
                                {/* right */}
                                <div className="bottomboxright">

                                    <div className="reloadimg" >
                                        <img src={Reload} alt="" />
                                    </div>
                                    <div className="miniTextright">
                                        <p>250</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ////// */}
                        {/* levelboxthree */}
                        <div className="levelBox">
                            <div className="levelNumber">
                                <div className="number">
                                    <p>3</p>
                                </div>
                                <div className="numberPurple">
                                    <h1>20</h1>
                                </div>
                            </div>
                            {/* diagram */}
                            <div className="firstLineDots">
                                <div className="colorfulldot">
                                </div>
                                <div className="colorfulldot2">
                                </div>
                                <div className="colorfulldot3">
                                </div>
                                <div className="borerdot4">
                                </div>
                            </div>
                            <div className="firstLineDotsbottom">
                                <div className="borerdotbottom1">
                                </div>
                                <div className="borerdotbottom2">
                                </div>
                                <div className="borerdotbottom3">
                                </div>
                                <div className="borerdotbottom4">
                                </div>
                            </div>
                            {/* bottomboxdata */}
                            <div className="bottomboxdata">
                                {/* left */}
                                <div className="bottomboxleft">

                                    <div className="Minipersonimg" >
                                        <img src={Mini} alt="" />
                                    </div>
                                    <div className="miniText">
                                        <p>2759</p>
                                    </div>
                                </div>
                                {/* //// */}
                                {/* right */}
                                <div className="bottomboxright">

                                    <div className="reloadimg" >
                                        <img src={Reload} alt="" />
                                    </div>
                                    <div className="miniTextright">
                                        <p>250</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ///// */}
                        {/* levelBoxFour */}
                        <div className="levelBox">
                            <div className="levelNumber">
                                <div className="number">
                                    <p>4</p>
                                </div>
                                <div className="numberPurple">
                                    <h1>40</h1>
                                </div>
                            </div>
                            {/* diagram */}
                            <div className="diagramContainer">
                                {/* leftDiagram */}
                                <div className="leftDiagram">
                                    <div className="transform">

                                    </div>
                                    <div className="colorDot">

                                    </div>

                                </div>
                                {/* ///// */}
                                {/* rightDiagram */}
                                <div className="rightDiagram">
                                    <div className="transformright">

                                    </div>
                                    <div className="colorDotright">

                                    </div>

                                </div>
                                {/* /////// */}
                            </div>
                            {/* bottomboxdata */}
                            <div className="bottomboxdata">
                                {/* left */}
                                <div className="bottomboxleft">

                                    <div className="Minipersonimg" >
                                        <img src={Mini} alt="" />
                                    </div>
                                    <div className="miniText">
                                        <p>2759</p>
                                    </div>
                                </div>
                                {/* //// */}
                                {/* right */}
                                <div className="bottomboxright">

                                    <div className="reloadimg" >
                                        <img src={Reload} alt="" />
                                    </div>
                                    <div className="miniTextright">
                                        <p>250</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ////// */}
                        {/* levelboxfive */}
                        <div className="levelBoxFive">
                            <div className="leveboxfivedata">
                                <img src={Buy} alt="" />
                                <div>
                                    <h1>Buy</h1>
                                </div>
                            </div>
                        </div>
                        {/* ////// */}
                    </div>
                    {/* bottomboxes */}
                    <div className="bottomboxContainer">
                        {/* boxbotttom1 */}
                        <div className="line2Box1">

                        </div>
                        {/* boxbotttom2 */}
                        <div className="line2Box2">

                        </div>
                        {/* boxbotttom3 */}
                        <div className="line2Box3">

                        </div>
                        {/* boxbotttom4 */}
                        <div className="line2Box4">

                        </div>
                        {/* boxbotttom5 */}
                        <div className="line2Box5">
                            <div className="boxBottombutton">
                                <div className="boxBottonGreenButton">
                                    <h1>Restart</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* boxesdownData */}
                    <div className="boxesdownData">
                        <div className="boxesDownLine">

                        </div>
                        <div className="linedowndata">
                            <h1>ATTENTION! LOST PROFITS</h1>
                            <p> If you do not buy the level that your partners buy from you, the payment goes up to the upline from which you were supposed to buy the level. Carefully monitor the growth of your structure and buy in advance the level that will be bought from you, so as not to miss your profits. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LevelsSection;