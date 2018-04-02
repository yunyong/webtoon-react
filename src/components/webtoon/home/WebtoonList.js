import React from 'react';
import WebtoonItem from './WebtoonItem';

const WebtoonList = (props) => {
    const webtoonListItems = props.webtoonList.map((webtoon) =>
        <li key={webtoon.id}>
            <WebtoonItem webtoon={webtoon}/>
        </li>
    );
    return (
        <div id="WebtoonList">
            <ul>
                {webtoonListItems}
            </ul>
        </div>
    )
}

export default WebtoonList;