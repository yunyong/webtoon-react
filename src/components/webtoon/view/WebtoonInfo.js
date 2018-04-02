import React from 'react';
import {Link} from "react-router-dom";

const WebtoonInfo = (props) => {
    const webtoon = props.data.webtoon;
    const artistName = (webtoon.cartoon.artists[0].penName === webtoon.cartoon.artists[1].penName) ?
        webtoon.cartoon.artists[0].penName :
        `${webtoon.cartoon.artists[0].penName}, ${webtoon.cartoon.artists[1].penName}`;
    const genres = webtoon.cartoon.genres.map((g)=>{
        return (
            <span key={g.id}>{g.name}</span>
        );
    });
    genres.push((<span key={webtoon.cartoon.categories[0].id}>, {webtoon.cartoon.categories[0].name}</span>))

    return (
        <div id="WebtoonInfo">
            <h2 className="tit_webtoon">{webtoon.title}</h2>
            <div className="wrap_info">
                <div className="item_webtoon">
                    <div className="thumb_webtoon">
                        <img src={webtoon.thumbnailImage2.url} className="img_webtoon" alt={webtoon.title}/>
                    </div>
                    <div className="cont_webtoon">
                        <p>{artistName}</p>
                        <div>{genres}</div>
                    </div>
                </div>
                <Link className="link_first_episode" to={"/webtoon/viewer/" + props.firstEpisodeId}>첫화보기</Link>
            </div>
        </div>
    );
}

export default WebtoonInfo;