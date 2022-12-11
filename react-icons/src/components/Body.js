import { FiTrash } from "react-icons/fi";
export default function Body(){
    return (
        <div className="body">
            <div className="header1">
                <div className="name">Name<span>*</span></div>
                <div className="heading1">Business Development Executive
                <hr className="line1"></hr>
                </div>
            </div>
            <p className="table-heading">Interview Process Rounds</p>

            <div className="table-box" >
                <table className="table">
                    <tbody >
                    <td className="table-data-sl"><tr >1</tr></td>
                    <td><tr>level<span>*</span></tr><tr>1</tr> <hr id="level-line1"></hr></td>
                    <td><tr>Names<span>*</span></tr><tr>Telephonic Round</tr> <hr id="level-line1"></hr></td>
                    <td><tr>Select Interviewer<span>*</span></tr><tr>GIRISHPRASAD KS</tr><hr id="level-line"></hr></td>
                    </tbody>

                    <tbody>
                    <td className="table-data-delete"><tr ><FiTrash/></tr></td>
                    <td><tr></tr><tr></tr><hr id="level-line"></hr></td>
                    <td><tr></tr><tr></tr><hr id="level-line"></hr></td>
                    <td><tr></tr><tr></tr><hr id="level-line"></hr></td>
                    </tbody>

                    <tbody>
                    <td className="table-data-sl"><tr id="sl">2</tr></td>
                    <td><tr>level<span>*</span></tr><tr>2</tr><hr id="level-line1"></hr></td>
                    <td><tr>Names<span>*</span></tr><tr>Telephonic Round</tr><hr id="level-line1"></hr></td>
                    <td><tr>Select Interviewer<span>*</span></tr><tr>RAKESH APPAJI</tr><hr id="level-line"></hr></td>
                    </tbody>

                    <tbody>
                    <td className="table-data-delete"><tr ><FiTrash/></tr></td>
                    <td><tr></tr><tr></tr></td>
                    <td><tr></tr><tr></tr></td>
                    <td><tr></tr><tr></tr></td>
                    </tbody>
                </table>
                <button className="add-button">ADD NEW +</button>
            </div>
        </div>
    )
  }