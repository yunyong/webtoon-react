import React from 'react';

const List = (props) => {
    const WebtoonEpisodeList = props.list.map((item)=>(
        <div key={item.id}>
            <img src={item.url} alt="" />
        </div>
    ));
    return (
        <div className="viewer_images">
            {WebtoonEpisodeList}
        </div>
    );
}

const ImageViewer = (props) => {
    return (
        <div onClick={props.onClick}>
            <List list={props.list} />
        </div>
    )
}

export default ImageViewer;