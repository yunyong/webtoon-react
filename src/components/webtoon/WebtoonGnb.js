import React from 'react';
import {Link} from "react-router-dom";

const WebtoonGnb = (props) => {
    return(
        <div id="WebtoonGnb">
            <Link to="/webtoon/list/day/mon" className={props.menu==="update" ? "link_gnb on" : "link_gnb"}>Update</Link>
            <Link to="/webtoon/list/popular" className={props.menu==="view" ? "link_gnb on" : "link_gnb"}>Popular</Link>
            <Link to="/webtoon/list/rate" className={props.menu==="score" ? "link_gnb on" : "link_gnb"}>Rate</Link>
        </div>
    )
}

export  default WebtoonGnb;