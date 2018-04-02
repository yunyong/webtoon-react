import React from 'react';
import {Link} from "react-router-dom";

const WebtoonItem = (props) => {
    const artistName = (props.webtoon.cartoon.artists[0].penName === props.webtoon.cartoon.artists[1].penName) ?
        props.webtoon.cartoon.artists[0].penName :
        `${props.webtoon.cartoon.artists[0].penName}, ${props.webtoon.cartoon.artists[1].penName}`;
    return (
        <Link to={"/webtoon/view/"+props.webtoon.nickname} className="item_webtoon">
            <div className="thumb_webtoon">
                <img src={props.webtoon.thumbnailImage2.url} className="img_webtoon" alt={props.webtoon.title} />
            </div>
            <div className="cont_webtoon">
                <p>{props.webtoon.title}</p>
                <span>{artistName}</span>
            </div>
        </Link>
    )
}

export default WebtoonItem;