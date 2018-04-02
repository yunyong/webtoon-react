import React from 'react';
import EpisodeItem from './EpisodeItem';

const List = (props) => {
    const WebtoonEpisodeList = props.list.map((item)=>(
        <li key={item.id}>
            <EpisodeItem item={item} />
        </li>
    ));
    return (
        <ul className="list_episode">
            {WebtoonEpisodeList}
        </ul>
    );
}

const EpisodeList = (props) => {
    return (
        <div id="EpisodeList">
            <List list={props.episodeList} />
        </div>
    );
}

export default EpisodeList;