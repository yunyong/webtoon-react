import React from 'react';
import {Link} from "react-router-dom";

const WebtoonWeekTab = (props) => {
    return(
        <div id="WebtoonWeekTab">
            <Link to="/webtoon/list/day/mon" className={props.day==="mon" ? "link_gnb on" : "link_gnb"}>Mon</Link>
            <Link to="/webtoon/list/day/tue" className={props.day==="tue" ? "link_gnb on" : "link_gnb"}>Tue</Link>
            <Link to="/webtoon/list/day/wed" className={props.day==="wed" ? "link_gnb on" : "link_gnb"}>Wed</Link>
            <Link to="/webtoon/list/day/thu" className={props.day==="thu" ? "link_gnb on" : "link_gnb"}>Thu</Link>
            <Link to="/webtoon/list/day/fri" className={props.day==="fri" ? "link_gnb on" : "link_gnb"}>Fri</Link>
            <Link to="/webtoon/list/day/sat" className={props.day==="sat" ? "link_gnb on" : "link_gnb"}>Sat</Link>
            <Link to="/webtoon/list/day/sun" className={props.day==="sun" ? "link_gnb on" : "link_gnb"}>Sun</Link>
        </div>
    )
}

export  default WebtoonWeekTab;