import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div id="Head">
            <h1>
                <Link to="/">WEBTOON</Link>
            </h1>
            <ul className="list_gnb">
                <li>
                    <Link to="/" className={props.menu==="webtoon" ? "link_gnb on" : "link_gnb"}>Webtoon</Link>
                </li>
                <li>
                    <Link to="/league" className={props.menu==="league" ? "link_gnb on" : "link_gnb"}>League</Link>
                </li>
                <li>
                    <Link to="/my" className={props.menu==="my" ? "link_gnb on" : "link_gnb"}>MY</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
