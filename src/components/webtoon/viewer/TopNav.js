import React from 'react';
import {Link} from "react-router-dom";

const TopNav = (props) => {
    const data = props.data;
    return (
        <div id="TopNav">
            <Link to={`/webtoon/view/${data.webtoon.nickname}`} className="link_home">{data.webtoon.title}</Link>
            { (data.nextEpisodeId > 0) &&
                <Link to={`/webtoon/viewer/${data.nextEpisodeId}`} className="link_episode link_next">Next</Link>
            }
            { (data.prevEpisodeId > 0) &&
                <Link to={`/webtoon/viewer/${data.prevEpisodeId}`} className="link_episode link_prev">Prev</Link>
            }
        </div>
    )
}

export default TopNav;