import React from "react";

const Schedule = () =>{
    return (
        <div className="schedule-container">
            <div className="weeks-container">
                <div className="week monday">Monday</div>
                <div className="week tuesday">Tuesday</div>
                <div className="week wednesday">Wednesday</div>
                <div className="week thursday">Thursday</div>
                <div className="week friday">Friday</div>
                <div className="week saturday">Saturday</div>
                <div className="week sunday">Sunday</div>
            </div>
            <div className="weeks-container-row">
                <div className="week-row monday"></div>
                <div className="week-row tuesday"></div>
                <div className="week-row wednesday"></div>
                <div className="week-row thursday"></div>
                <div className="week-row friday"></div>
                <div className="week-row saturday"></div>
                <div className="week-row sunday"></div>
            </div>
        </div>
    )
}


export default Schedule
