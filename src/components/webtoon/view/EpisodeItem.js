import React from 'react';
import {Link} from "react-router-dom";

const EpisodeItem = (props) => {
    const item = props.item;
    return (
        <Link to={"/webtoon/viewer/" + item.id} className="item_webtoon">
            <div className="thumb_webtoon">
                <img src={item.thumbnailImage.url} className="img_webtoon" alt={item.title} />
            </div>
            <div className="cont_webtoon">
                <p>{item.title}</p>
            </div>
        </Link>
    );
}

export default EpisodeItem;