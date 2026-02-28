import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

interface ToolbarProps {
    date: Date
}

const Toolbar = ({date}: ToolbarProps) => {
    return(
        <div className = "flex text-white text-5xl shadow-md bg-white/20">
            <BiSolidLeftArrow className = "scale-50"/>
            {date.toLocaleString("en-US", { month: "long" })}
            &nbsp;
            {date.getFullYear()}
            <BiSolidRightArrow className = "scale-50"/>
        </div>
    )
} 

export default Toolbar;