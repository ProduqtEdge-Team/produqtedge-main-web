import {smoll} from "./Diamond.tsx";
import "../css/misc.css";


function DiaHeader({content}: {content: string}){
    return <span className="dia-header">
        {smoll()} {content}
    </span>
}

export default DiaHeader;
