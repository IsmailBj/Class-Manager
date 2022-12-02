import React from "react"


const MakeTask = (data: String) => { 
 return (
    <div className="todo-container">
        <div className="options">
            <div className="cancel">Cancel</div>
            <div className="save">OK</div>
        </div>
        <div className="new-tittle">TODO</div>
        <div className="new-info">Clean Room</div>
    </div>
 ) 
}

export default MakeTask