import React, {Component} from 'react';
import fetchJsonp from 'fetch-jsonp';

import TopNav from './TopNav';
import ImageViewer from './ImageViewer';

class WebtoonViewer extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : {
                webtoon : {},
                webtoonImages : [],
                isValidUser : false
            },
            showTopNav : true
        }

        this.clickEvent = this.clickEvent.bind(this);
        this.scrollEvent = this.scrollEvent.bind(this);
    }
    componentDidMount(){
        this.getImages();
        window.addEventListener('scroll', this.scrollEvent);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollEvent);
    };
    componentDidUpdate(prevProps, prevState) {
        const prevParams = prevProps.match.params;
        const nowParams = this.props.match.params;

        if(prevParams.id !== nowParams.id){
            this.getImages();
        };
    }
    getImages(){
        const id = this.props.match.params.id;
        const url = `http://m.webtoon.daum.net/data/mobile/webtoon/viewer?id=${id}`;

        fetchJsonp(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    data : data.data
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
    clickEvent(){
        if(window.scrollY<52){
            this.setState({
                showTopNav : true
            })
        } else if(window.scrollY+window.innerHeight+100 >= document.body.scrollHeight) {
            this.setState({
                showTopNav : true
            })
        } else {
            this.setState({
                showTopNav : !this.state.showTopNav
            })
        }
    }
    scrollEvent(){
        if(window.scrollY<52){
            this.setState({
                showTopNav : true
            })
        } else if(window.scrollY+window.innerHeight+100 >= document.body.scrollHeight) {
            this.setState({
                showTopNav : true
            })
        } else {
            this.setState({
                showTopNav : false
            })
        };
    }
    render(){
        return (
            <div onScroll={this.clickEvent}>
                { (this.state.data.webtoon.id) &&
                    <div>
                        { (this.state.showTopNav) &&
                            <TopNav data={this.state.data}/>
                        }
                        { (this.state.data.isValidUser) ? (
                            <ImageViewer list={this.state.data.webtoonImages} onClick={this.clickEvent}/>
                            ) : (
                            <div className="txt_login">
                                Please Login
                            </div>
                        )}
                    </div>
                }
            </div>
        )
    }
}

export default WebtoonViewer;