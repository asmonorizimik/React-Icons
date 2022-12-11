import { IoManOutline} from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import {FaBriefcase} from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { MdSettingsSuggest} from "react-icons/md";
import { FaRegNewspaper} from "react-icons/fa";
export default function Left(){
    return (
        <div className="side-bar">  
           <div className="box1"><AiOutlineHome/>      Dashboard</div>
           <div className="box"><BsPerson/>     Employee{"<"}</div>
           <div className="box"><BsPerson/>     attendence{"<"}</div>
           <div className="box"><IoManOutline/>   Site/Field Track{"<"}</div>
           <div className="box"><FaRegNewspaper/>     Payroll{"<"}</div>
           <div className="box"><FaBriefcase/>       Statuatory Complainces{"<"}</div>
           <div className="box"><BsCalendarCheck/>      Leaves{"<"}</div>
           <div className="box"><MdSettingsSuggest/>      Asset Management{"<"}</div>
           <div className="box"><FaChartLine/>      Goal & Performance{"<"}</div>
           <div className="box"><BsPerson/>       Recruitment{">"}</div>
           <div className="box2">Openings</div>
           <div className="box2">Candidates</div>
           <div className="box4">Interviews Process</div>
        </div>
      
    )
  }
