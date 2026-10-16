import Man from "../images/man.png"
import "../css/misc.css"
function Diamond(){

    return <div className="white-diamond">
        <div className="orange-diamond">
        </div>
        <img className="man-diamond" src={Man} alt=""/>
            </div>
}

function smoll(){

    return <i className="small-diamond">

    </i>
}

export {Diamond, smoll}