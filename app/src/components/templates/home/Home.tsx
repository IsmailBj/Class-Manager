import React from "react";
import Schedule from '../schedule-template/Schedule'
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
const Home = (): any =>{

    return (
        <div className="home-container">
                <div className="classSpace">
                    <div className="month-change">
                        <span className="left"><FontAwesomeIcon icon={faArrowLeft} /></span>
                        <span className="day">{'12'}</span>
                        <span className="right"><FontAwesomeIcon icon={faArrowRight} /></span>
                    </div>
                    <input type={'text'} name="schedule-name" defaultValue={'Study'} id="schedule-name" className="title-classSpace"/>
                      
                    <div className="date-selected">12.33.2022</div>
                </div>
                <Schedule/>
        </div>
    )
}


export default Home