import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

import Header from '../../Header';
import WebtoonGnb from '../WebtoonGnb';
import WebtoonList from './WebtoonList';
import WebtoonWeekTab from './WebtoonWeekTab';

class WebtoonHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            webtoonList : [],
            sort : 'update',
            day : 'mon',
            isLoading : false
        };
        console.log(this)
        console.log(this.props)
    }
    componentDidMount(){
        this.getList();
    }
    componentDidUpdate(prevProps, prevState) {
        const prevParams = prevProps.match.params;
        const nowParams = this.props.match.params;

        if(prevParams.sort !== nowParams.sort || prevParams.day !== nowParams.day){
            this.getList();
        };
    }
    getList(){
        const sortObj = {
            day : 'update',
            popular : 'view',
            rate : 'score'
        };
        const sort = sortObj[this.props.match.params.sort] || 'update';
        let day = '';

        if(sort === 'update' && this.props.match.params.sort){
            day = this.props.match.params.day;
        } else if(sort === 'update'){
            day = 'mon';
        };

        this.setState({
            sort : sort,
            day : day,
            isLoading : true
        });

        const url = `http://m.webtoon.daum.net/data/mobile/webtoon?sort=${sort}&page_size=20&week=${day}&page_no=1`;
        fetchJsonp(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    webtoonList : data.data.webtoons,
                    isLoading : false
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div id="WebtoonHome">
                <Header menu="webtoon" />
                <WebtoonGnb menu={this.state.sort} />
                { (this.state.sort === 'update') &&
                    <WebtoonWeekTab day={this.state.day}/>
                }
                { (this.state.isLoading) &&
                <div className="ico_loading">Loading...</div>
                }
                <WebtoonList webtoonList={this.state.webtoonList} />
            </div>
        );
    }
}

export default WebtoonHome;
