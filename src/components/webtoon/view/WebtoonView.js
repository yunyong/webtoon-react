import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

import Header from '../../Header';
import WebtoonInfo from './WebtoonInfo';
import EpisodeList from './EpisodeList';

class WebtoonView extends Component {
    constructor(props){
        super(props);
        this.state = {
            nickname : props.match.params.nickname,
            webtoonData : {
                webtoon : {}
            },
            webtoonEpisodeList : [],
            firstEpisodeId : 0
        }
    }
    componentDidMount(){
        this.getWebtoon();
        this.getWebtoonEpisode();
    }
    getWebtoon(){
        const nickname = this.state.nickname;
        const url = `http://m.webtoon.daum.net/data/mobile/webtoon/view?nickname=${nickname}`;

        fetchJsonp(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    webtoonData : data.data
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
    getWebtoonEpisode(){
        const nickname = this.state.nickname;
        const url = `http://m.webtoon.daum.net/data/mobile/webtoon/list_episode_by_nickname?nickname=${nickname}&page_no=1&page_size=10&sort=desc`;

        fetchJsonp(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    webtoonEpisodeList : data.data.webtoonEpisodes,
                    firstEpisodeId : data.data.webtoonEpisodes[data.data.webtoonEpisodes.length-1].id
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
    render(){
        return (
            <div id="WebtoonView">
                <Header menu="webtoon" />
                { (this.state.webtoonData.webtoon.id) &&
                    <WebtoonInfo data={this.state.webtoonData} firstEpisodeId={this.state.firstEpisodeId} />
                }
                { (this.state.webtoonEpisodeList.length>0) &&
                    <EpisodeList episodeList={this.state.webtoonEpisodeList} />
                }
            </div>
        )
    }
}

export default WebtoonView;